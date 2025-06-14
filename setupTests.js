import '@testing-library/jest-dom';



// Here, add portions of the warning messages you want to intentionally prevent from appearing

const MESSAGES_TO_IGNORE = [
  "When testing, code that causes React state updates should be wrapped into act(...):",
  "Error:",
  "The above error occurred"
];


const originalError = console.error.bind(console.error);
console.error = (...args) => {
  const ignoreMessage = MESSAGES_TO_IGNORE.find(message => args.toString().includes(message));
  if (!ignoreMessage) originalError(...args);
}

const NoopRO = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};
const OriginalResizeObserver =
  typeof window !== 'undefined' && window.ResizeObserver
    ? window.ResizeObserver
    : NoopRO;

// —————————————————————————————————————————————————————————————
// 3) Before each test, replace ResizeObserver with a jest mock
// —————————————————————————————————————————————————————————————
beforeEach(() => {
  const MockRO = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));

  // In Node, define global.window if missing:
  if (typeof window === 'undefined') {
    global.window = {};
  }
  // Override both global and window ResizeObserver:
  global.ResizeObserver = MockRO;
  window.ResizeObserver = MockRO;
});

// —————————————————————————————————————————————————————————————
// 4) After each test, restore the original ResizeObserver & mocks
// —————————————————————————————————————————————————————————————
afterEach(() => {
  window.ResizeObserver = OriginalResizeObserver;
  global.ResizeObserver = OriginalResizeObserver;
  jest.restoreAllMocks();
});


