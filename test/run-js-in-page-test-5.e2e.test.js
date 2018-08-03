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

describe(`Test 5`, () => {
  const inputSelector = '#app form input';
  const buttonSelector = '#app form button';
  const itemSelector = '#app li';
  const removeItemSelector = '#app li button';
  const todos = [
    'Subscribe to the FETI workswhop',
    'Attend the FETI workshop',
    'Pass this test',
    'Join the FETI volunteers'
  ];

  const addTodo = async (todo) => {
    // fill the input
    await page.type(inputSelector, todo);
    // click the button
    await page.click(buttonSelector);
  };

  beforeAll(async () => {
    await page.goto(`file:${path.join(__dirname, './../dist/test-5_ooade_vuex-examples_tree_simple-todo/index.html')}`);
  });

  test(`Add a new todo`, async () => {
    await addTodo(todos[0]);

    // run a script in page to get the innerText of the new todo
    const innerText = await page.evaluate((selector) => {
      // remember that this function hasn't a scope
      return document.querySelector(selector).innerText;
    }, itemSelector);

    // and then check it with Jest
    expect(innerText.includes(todos[0])).toEqual(true);
  }, 10000);

  test(`Add all the remaining todos`, async (done) => {
    for(let i = 1, n = todos.length; i < n; i++) {
      await addTodo(todos[i]);
    }

    done();
  }, 10000);

  test(`Remove the first two todos`, async (done) => {
    // it should be very easy...
    done();
  }, 10000);

  test(`Check the remaining todos directly from the store`, async () => {
    // @see https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#pageevaluatepagefunction-args
    expect(/* ... */).toEqual(['Pass this test', 'Join the FETI volunteers']);
  }, 10000);
});
