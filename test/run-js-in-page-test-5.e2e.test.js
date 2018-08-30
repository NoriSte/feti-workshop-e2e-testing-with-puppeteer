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
  const inputSelector = '#app form input';
  const buttonSelector = '#app form button';
  const itemSelector = '#app li';

  beforeAll(async () => {
    await page.goto(`file:${path.join(__dirname, './../dist/test-5_ooade_vuex-examples_tree_simple-todo/index.html')}`);
  });

  test(`Add a new todo`, async () => {
    // fill the input
    await page.type(inputSelector, todos[0]);
    // click the button
    await page.click(buttonSelector);

    // run a script in page to get the innerText of the new todo
    const innerText = await page.evaluate((selector) => {
      // remember that this function hasn't a scope
      return document.querySelector(selector).innerText;
    }, itemSelector);

    // and then check it with Jest
    expect(innerText.includes(todos[0])).toEqual(true);
  }, 10000);
});
