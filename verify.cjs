const puppeteer = require('puppeteer-core');
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const OUT = 'C:\\Users\\Nikhil\\Desktop\\surfsync\\DR-APPOINMENT\\verify_shots\\';

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: ['--no-sandbox', '--disable-gpu', '--window-size=1440,1000'],
    defaultViewport: { width: 1440, height: 1000 },
  });
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push('PAGEERROR: ' + e.message));

  await page.goto('http://localhost:5183/', { waitUntil: 'networkidle0' });
  await page.evaluate(() => {
    const els = Array.from(document.querySelectorAll('button, a'));
    const el = els.find((e) => e.textContent.trim().toUpperCase() === 'SPECIALITIES');
    if (el) el.click();
  });
  await new Promise((r) => setTimeout(r, 1500));
  await page.screenshot({ path: OUT + 'specialties_cards_full.png', fullPage: true });
  console.log('ERRORS:', JSON.stringify(errors));
  await browser.close();
})();
