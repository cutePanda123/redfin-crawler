const puppeteer = require('puppeteer');
const queryTimes = 30;
const waitTime = 10000;   // wait for 30 seconds between two requests
const url = 'https://www.redfin.com/VA/Vienna/2710-Earls-Ct-22181/home/9527207';
(async () => {
  for (var i = 0; i < queryTimes; i++) {
    try {
      const browser = await puppeteer.launch({
        headless: false
      });
      const page = await browser.newPage();
      await page.goto(url, { timeout: 60000 });
      console.log("open a new page")
      await new Promise(r => setTimeout(r, waitTime));

      console.log("close brower")
      await browser.close();

      await new Promise(r => setTimeout(r, waitTime));
    } catch (e) {
      console.log('ignore issue and retry: ' + e);
    }
  }
})();