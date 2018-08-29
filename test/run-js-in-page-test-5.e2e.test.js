/**
 * Test 5, step 1
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

describe(`Test 5`, () => {
  const todos = [
    'Subscribe to the FETI workswhop',
    'Attend the FETI workshop',
    'Pass this test',
    'Join the FETI volunteers'
  ];
  const done = [
    'Subscribe to the FETI workswhop',
    'Attend the FETI workshop'
  ];

  beforeAll(async () => {
    await page.goto(`file:${path.join(__dirname, './../dist/test-5_ooade_vuex-examples_tree_simple-todo/index.html')}`);
  });

  // STEP 1: add a single todo
  test(`Add a new todo`, async () => {

    // @see https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pageclickselector-options
    // @see https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pagetypeselector-text-options

    // you'll probably need
    // @see https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pageevaluatepagefunction-args

    // and then find your mot suitable ssertion
    // @see https://jestjs.io/docs/en/expect.html

  }, 10000);
});
