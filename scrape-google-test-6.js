
/*
Scrape the latest 40 URLs from Google searching for the "bitcoin" query
*/

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();

  const limit = 30;
  const domain = 'https://www.google.it';
  const query = 'bitcoin';
  const resultSelector = 'div.g h3.r a';
  const nextButtonSelector = '#pnnext';

  await page.goto(`${domain}/?gfe_rd=cr&ei=J4KAWL2qBovCXpDYgRg#q=${query}`);


  const scraping = async (result = []) => {

    // you have to read the first 30 results from Google for the given query, have fun :)

    return result;
  }

  const result = await scraping();
  console.log(result);
  browser.close();
  process.exit();
})();
