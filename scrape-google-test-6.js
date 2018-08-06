
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
    const els = await page.$$(resultSelector);

    // URLs reading
    for(let i = result.length, j = 0, m = els.length; i < limit && j < m; i++, j++) {
      // you have two ways of retrieve en element attribute, one is through JSHandle functions...
      // @see https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#class-jshandle
      const jsHandle = await els[j].getProperty('href');
      const url = await jsHandle.jsonValue();

      result.push(url);
    }

    // next page clicking
    if(result.length < limit && await page.$(nextButtonSelector)) {
      // ... and one with the already seen <code>page.evaluate</code>
      const url = await page.evaluate((selector) => document.querySelector(selector).getAttribute('href'), nextButtonSelector);

      await page.goto(domain + url);
      result = scraping(result);
    }

    return result;
  }

  const result = await scraping();
  console.log(result);
  browser.close();
  process.exit();
})();
