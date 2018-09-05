
/*
Scrape the latest 30 URLs from Google searching for the "bitcoin" query
*/

const puppeteer = require('puppeteer');

const scrapeGoogle = async (options) => {
  const defaultOptions = {
    domain: 'https://www.google.it',
    limit: 30,
    query: 'bitcoin'
  };
  options = {...defaultOptions, ...options};
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();

  // they could be useful :)
  const resultSelector = 'div.g h3.r a';
  const nextButtonSelector = '#pnnext';

  await page.goto(`${options.domain}/?gfe_rd=cr&ei=J4KAWL2qBovCXpDYgRg#q=${options.query}`);


  const scraping = async () => {

    ////////////////////////////////////////////////////////////////////////////////////
    // write here your code...
    // test it running $ yarn test
    // if you'd like to run when you save the file you can even run $ npx nodemon --exec "yarn test"
    ////////////////////////////////////////////////////////////////////////////////////

    return /*...*/;
  }

  const result = await scraping();
  browser.close();
  return result;
}

module.exports = scrapeGoogle;
