## feti-workshop-e2e-testing-with-puppeteer
The reference repo of a workshop for FETI about browser automation (both for E2E testing and for web scraping) with Puppeteer. Workshop level: basic.

**Important**: if you are just looking for the code of the working tests, you'll find it on the  ```develop``` branch

# E2E testing and browser scraping with Puppeteer
## A 2018 workshop for FETI hosted in Appway (Chiasso)

## Contents

- [Links](#links)
- [Installation instructions](#installation-instructions)
- [Branch naming](#branch-naming)
- [A special thank to](#a-special-thank-to)

---

### Links

- [Slides](https://slides.com/noriste/e2e-testing-workshop-feti)
- [FETI (FrontEnders Ticino)](http://www.frontenders.ch/)
- [Meetup (TBD)](http://www.frontenders.ch/eventi-passati.html)
- [Puppeteer API](https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md)

### Installation instructions

```bash
$ npm install
$ npm test
```

If you see something like this
```bash
PASS  test/min.e2e.test.js
  Generic check
    ✓ You're ready for the workshop :) (818ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.121s
```
it means that you're ready for the attending the workshop or to train by yourself with the tests I prepared.
<br />
<br />
<br />

### Branch naming

- master: just the README and the isntallation instructions
- test-1 ([code](https://github.com/NoriSte/feti-workshop-e2e-testing-with-puppeteer/blob/test-1/test/test-1.e2e.test.js#L22)): write a test that passes if the main button takes the user to the linked page
- test-2: it's the same of test-1... but with a damper cookie footer to be accepted
- test-3: the cookie footer now disappear with a CSS animation
- test-4: the cookie footer trigger an event when it's hidden
- test-5-step1 ([code](https://github.com/NoriSte/feti-workshop-e2e-testing-with-puppeteer/blob/test-5-step1/test/test-5.e2e.test.js#L35)): add a Todo in the Vue app and check that it's showed in page
- test-5-step2 ([code](https://github.com/NoriSte/feti-workshop-e2e-testing-with-puppeteer/blob/test-5-step2/test/test-5.e2e.test.js#L62)): ad and remove some Todos and then check the state of the store of the Vue app
- test-6 ([code](https://github.com/NoriSte/feti-workshop-e2e-testing-with-puppeteer/blob/test-6/scrape-google-test-6.js#L28)): scrape the first 30 results of a given query directly by Google

Every test has a working solution in another branch
- test-1-solution ([code](https://github.com/NoriSte/feti-workshop-e2e-testing-with-puppeteer/blob/test-1-solution/test/test-1.e2e.test.js#L22))
- test-2-solution ([code](https://github.com/NoriSte/feti-workshop-e2e-testing-with-puppeteer/blob/test-2-solution/test/test-2.e2e.test.js#L24))
- test-3-solution ([code](https://github.com/NoriSte/feti-workshop-e2e-testing-with-puppeteer/blob/test-3-solution/test/test-3.e2e.test.js#L30))
- test-4-solution ([code](https://github.com/NoriSte/feti-workshop-e2e-testing-with-puppeteer/blob/test-4-solution/test/test-4.e2e.test.js#L31))
- test-5-step1-solution ([code](https://github.com/NoriSte/feti-workshop-e2e-testing-with-puppeteer/blob/test-5-step1-solution/test/test-5.e2e.test.js#L39))
- test-5-step2-solution ([code](https://github.com/NoriSte/feti-workshop-e2e-testing-with-puppeteer/blob/test-5-step2-solution/test/test-5.e2e.test.js#L62))
- test-6-solution ([code](https://github.com/NoriSte/feti-workshop-e2e-testing-with-puppeteer/blob/test-6-solution/scrape-google-test-6.js#L24))
- develop: here you can find all the tests and the solutions

### A special thank to

- [FETI](http://www.frontenders.ch/) for all the work they do
- [Appway](https://www.appway.com) for the amazing location
- Massimo Foti for inspiring me with his [Unit Testing Workshop](https://www.meetup.com/it-IT/FrontEnders-Ticino/events/245384423/)
- Kent C. Dodds for the amazing “[Solidifying what you learn](https://blog.kentcdodds.com/solidifying-what-you-learn-6650258c84be)” post
