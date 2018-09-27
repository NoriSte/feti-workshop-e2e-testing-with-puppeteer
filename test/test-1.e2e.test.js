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
  test(`The button brings the user to the next page`, async () => {
    await page.goto(`file:${path.join(__dirname, './../dist/test-1.html')}`);

    // - run $npm test
    // - the test will fail
    // - use puppeteer to click the button
    // - and then re-run $npm test

    await expect(page).toMatch('Hello from FETI');
  }, 5000);
});
