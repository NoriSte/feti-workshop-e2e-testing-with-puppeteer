/**
 * Test 3
 */

const puppeteer = require('puppeteer');
const path = require('path');
let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch();
  page = await browser.newPage();
});
afterAll(async () => {
  await browser.close();
});

describe(`That's our third E2E test`, () => {
  beforeAll(async () => {
    await page.goto(`file:${path.join(__dirname, './../dist/test-3.html')}`);

    // don't let the test fail for a silly element like a cookie footer
    // It could be already accepted when you navigate to another page
    if(await page.$('[data-test="cookie-footer-acceptance"]')) {
      try {
        // what happens if it exists but it isn't clickable (eg. it's hidden)? A try/catch will manage the case
        await page.click('[data-test="cookie-footer-acceptance"]');
      } catch(e) {
        // the element exists but it isn't clickable
      }
    }
  });

  test(`The button brings the user to google.com`, async (done) => {

    // always add a 'data-test' attribute to the elements that will parteccipate to your tests
    await page.click('[data-test="button"]');

    // waiting for en element is a good way to be 100% sure that the page is been loaded
    // again: use a data-test attribute in your sites
    await page.waitForSelector('#hplogo');

    done();
  }, 10000);
});
