/**
 * Test 2
 */

const puppeteer = require('puppeteer');
const path = require('path');
let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: true,
    slowMo: 0
  });
  page = await browser.newPage();
});
afterAll(async () => {
  await browser.close();
});

describe(`That's our second E2E test`, () => {
  test(`The button brings the user to the next page`, async () => {
    await page.goto(`file:${path.join(__dirname, './../dist/test-2.html')}`);

    // always add a 'data-test' attribute to the elements that will participate to your tests
    await page.click('[data-test="button"]');

    // check for a specific content is a good way to be 100% sure that the page is been loaded
    await expect(page).toMatch('Hello from FETI');
  }, 5000);
});
