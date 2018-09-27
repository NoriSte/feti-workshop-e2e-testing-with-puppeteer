/**
 * Test 1
 */

const path = require('path');
let page;

beforeAll(async () => {
  page = await browser.newPage();
});
afterAll(async () => {
  await page.close();
});

describe(`That's our first E2E test`, () => {
  test(`The button brings the user to the next page`, async () => {
    await page.goto(`file:${path.join(__dirname, './../dist/test-1.html')}`);

    // always add a 'data-test' attribute to the elements that will participate to your tests
    await page.click('[data-test="button"]');

    // check for a specific content is a good way to be 100% sure that the page is been loaded
    await expect(page).toMatch('Hello from FETI');
  }, 5000);
});
