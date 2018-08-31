/**
 * Test 1
 */

const path = require('path');
let page;

beforeAll(async () => {
  page = await browser.newPage();
});
afterAll(async () => {
  await page.close()
});

describe(`That's our first E2E test`, () => {
  test(`The button brings the user to google.com`, async (done) => {
    await page.goto(`file:${path.join(__dirname, './../dist/test-1.html')}`);

    // always add a 'data-test' attribute to the elements that will parteccipate to your tests
    await page.click('*[data-test="button"]');

    // waiting for en element is a good way to be 100% sure that the page is been loaded
    // again: use a data-test attribute in your sites
    await page.waitForSelector('#hplogo');

    done();
  }, 10000);
});
