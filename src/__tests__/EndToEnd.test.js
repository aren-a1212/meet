/**
 * @jest-environment node
 */

jest.setTimeout(50000);
import puppeteer from "puppeteer";


describe('show/hide event details', () => {
    let browser;
    let page;
    beforeAll(async () => {
      browser = await puppeteer.launch({
        headless: true,
        slowMo: 250, // slow down by 250ms,
        timeout: 0 // removes any puppeteer/browser timeout limitations (this isn't the same as the timeout of jest)
      });
      page = await browser.newPage();
      await page.goto('http://localhost:5173/');
      await page.waitForSelector('.event');
    });
  
  
    afterAll(async () => {
      browser.close();
    });
  
    test('An event element is collapsed by default', async () => {
      const eventDetails = await page.$('.event .details');
      expect(eventDetails).toBeNull();
    });
  
    test('User can expand an event to see details', async () => {
      await page.click('.event .details-btn');
      const eventDetails = await page.$('.event .details');
      expect(eventDetails).toBeDefined();
    });
    test('User can collapse an event to hide details', async () => {
        await page.click('.event .details-btn');
        const eventDetails = await page.$('.event .details');
        expect(eventDetails).toBeNull();
      });
  });

  describe('filter events by city', () => {
    let browser;
    let page;
  
    beforeAll(async () => {
      browser = await puppeteer.launch({
        headless: true,
        slowMo: 250,
        timeout: 0,
      });
      page = await browser.newPage();
      await page.goto('http://localhost:5173/');
      await page.waitForSelector('.city');
    });
    afterAll(() => {
        browser.close();
      });

      test('Suggestions list is displayed when user types in the city textbox', async () => {
        await page.type('.city', 'Berlin');
        await page.waitForSelector('.suggestions li');
        const suggestions = await page.$$eval('.suggestions li', items =>
          items.map(item => item.textContent)
        );
        expect(suggestions.length).toBeGreaterThan(0);
      });
      test('User can select a city from the suggestions', async () => {
        await page.click('.city', { clickCount: 3 }); 
        await page.type('.city', 'Berlin');
        await page.waitForSelector('.suggestions li');

        await page.click('.suggestions li');

        const inputValue = await page.$eval('.city', el => el.value);
        expect(inputValue).toMatch(/Berlin/);
      });
    });
    
    