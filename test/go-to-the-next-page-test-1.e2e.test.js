/**
 * Test 1
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

describe(`That's our first E2E test`, () => {
  test(`The button brings the user to the next page`, async (done) => {
    await page.goto(`file:${path.join(__dirname, './../dist/test-1.html')}`);

    // and then:
    // - you should click the button
    // - you should check if the page is been loaded
    // - call done()

  }, 10000);
});
