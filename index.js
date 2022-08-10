const puppeteer = require('puppeteer');
const queryTimes = 30;
const waitTime = 3000;
const url = 'https://redf.in/H6G7iV';
(async () => {
  for (var i = 0; i < queryTimes; i++) {
    try {
      const browser = await puppeteer.launch({
        headless: false
      });
      const page = await browser.newPage();
      await page.goto(url);
      await browser.close();
      await new Promise(r => setTimeout(r, waitTime));
    } catch (e) {
      console.log('ignore issue and retry: ' + e);
    }
  }
})();