/**
 * The simplest test just to check that all the necessary dependancies are ready for the workshop
 */

const puppeteer = require('puppeteer');
let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({headless: false});
  page = await browser.newPage();
});
afterAll(async () => {
  await browser.close();
});

describe('Generic check', () => {
  test(`You're ready for the workshop :)`, async () => {
    await page.goto('http://www.frontenders.ch/');
    await expect(page).toMatch('FrontEnders Ticino');
  }, 10000);
});
