/**
 * Test 2
 */

const puppeteer = require('puppeteer');
const path = require('path');
let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({});
  page = await browser.newPage();
});
afterAll(async () => {
  await browser.close();
});

describe(`That's our second E2E test`, () => {
  test(`The button brings the user to google.com`, async (done) => {
    await page.goto(`file:${path.join(__dirname, './../dist/test-2.html')}`);

    // and then, like the first test:
    // - you should click the button
    // - you should check if the page is been loaded
    // - call done()

  }, 10000);
});
