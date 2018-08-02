/**
 * The simplest test just to check that all the necessary dependancies are ready for the workshop
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

describe(`Test 4`, () => {
  beforeAll(async () => {
    await page.goto(`file:${path.join(__dirname, './../dist/test-4.html')}`);

    // don't let the test fail for a silly element like a cookie footer
    // It could be already accepted when you navigate to another page
    if(await page.$('[data-test="cookie-footer-acceptance"]')) {
      await page.click('[data-test="cookie-footer-acceptance"]');

      // @see https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pageevaluatepagefunction-args
      await page.evaluate((resolve) => {
        // the following code will run into the browser page
        window.addEventListener('cookieFooterDidHide', () => resolve());
      });
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
