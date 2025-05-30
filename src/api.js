import mockData from './mock-data';

/**
 * Takes an events array and returns a deduplicated list of locations.
 */
export const extractLocations = (events) => {
  const extractedLocations = events.map((event) => event.location);
  const locations = [...new Set(extractedLocations)];
  return locations;
};

/**
 * Checks whether an access token is still valid.
 */
const checkToken = async (accessToken) => {
  const response = await fetch(
    `https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=${accessToken}`
  );
  const result = await response.json();
  return result;
};

/**
 * Fetches the list of all events.
 * - On localhost: returns mockData[0].items (an array of event objects).
 * - Otherwise: runs the full OAuth → API flow.
 */
export const getEvents = async () => {
  console.log('📅 getEvents()', { href: window.location.href });

  // Local/demo branch: return mock data array of event objects
  if (window.location.href.startsWith('http://localhost')) {
    return mockData[0].items;
  }

  // Real OAuth/API branch
  const token = await getAccessToken();
  console.log('  ↳ getEvents received token:', token);

  if (token) {
    removeQuery();
    const url =
      'https://306ud8php6.execute-api.us-east-1.amazonaws.com/dev/api/get-events/' +
      token;
    const response = await fetch(url);
    const result = await response.json();
    return result?.events || [];
  }

  return [];
};

/**
 * Gets or obtains a Google OAuth access token.
 */
export const getAccessToken = async () => {
  console.log('🔑 getAccessToken()', {
    href: window.location.href,
    token: localStorage.getItem('access_token'),
    search: window.location.search,
  });

  let accessToken = localStorage.getItem('access_token');
  const tokenCheck = accessToken && (await checkToken(accessToken));

  // If no valid token, start OAuth flow or exchange code for token
  if (!accessToken || tokenCheck?.error) {
    localStorage.removeItem('access_token');
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get('code');

    if (!code) {
      // No code yet: fetch auth URL and redirect
      const response = await fetch(
        'https://90h4c2r97c.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url'
      );
      const { authUrl } = await response.json();
      window.location.href = authUrl;
      return;
    }

    // We have a code: exchange it for an access token
    accessToken = await getToken(code);
  }

  return accessToken;
};

/**
 * Removes OAuth query params from the URL for cleanliness.
 */
const removeQuery = () => {
  let newurl;
  if (window.history.pushState && window.location.pathname) {
    newurl =
      window.location.protocol +
      '//' +
      window.location.host +
      window.location.pathname;
    window.history.pushState('', '', newurl);
  } else {
    newurl = window.location.protocol + '//' + window.location.host;
    window.history.pushState('', '', newurl);
  }
};

/**
 * Exchanges an OAuth code for a Google access token and stores it.
 */
const getToken = async (code) => {
  const encodeCode = encodeURIComponent(code);
  const response = await fetch(
    'https://90h4c2r97c.execute-api.us-east-2.amazonaws.com/dev/api/token/' +
      encodeCode
  );
  const { access_token } = await response.json();

  if (access_token) {
    localStorage.setItem('access_token', access_token);
  }
  return access_token;
};
