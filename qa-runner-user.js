/* eslint-disable @typescript-eslint/no-require-imports */
const puppeteer = require('puppeteer');

async function runUserTests() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Users\\Navneet\\.cache\\puppeteer\\chrome\\win64-131.0.6778.204\\chrome-win64\\chrome.exe',
    headless: true
  });
  
  const page = await browser.newPage();
  page.on('response', response => {
    if (response.status() === 404) console.log('404 RESPONSE:', response.url());
  });
  let passed = 0;
  let failed = 0;

  const assert = (condition, name) => {
    if (condition) {
      console.log(`✅ PASS: ${name}`);
      passed++;
    } else {
      console.log(`❌ FAIL: ${name}`);
      failed++;
    }
  };

  const delay = (ms) => new Promise(r => setTimeout(r, ms));

  console.log("Running User / Pro / Persistence MVP Tests...");

  try {
    // 1. Pro CTA tests
    await page.goto('http://localhost:3000/');
    await delay(300);

    const proBtn = await page.$('aside button:disabled');
    const proBtnText = await page.evaluate(el => el.textContent, proBtn);
    assert(proBtnText.includes('Coming Soon'), "USER-008: Pro CTA displays Coming Soon state");

    // Click it to ensure no 404
    await proBtn.click().catch(() => {}); // It's disabled, so it might throw an error on click, which is correct
    await delay(200);
    assert(page.url() === 'http://localhost:3000/', "USER-007: Pro CTA does not navigate to a broken/404 route");

    // 2. Profile Menu tests
    const userMenuBtn = await page.$('[data-testid="user-menu-btn"]');
    await userMenuBtn.click();
    await delay(200);

    const menuVisible = await page.$('[data-testid="user-menu-dropdown"]') !== null;
    assert(menuVisible, "USER-001: Guest profile menu opens");

    // Handle alert for Sign in
    let alertShown = false;
    page.on('dialog', async dialog => {
      alertShown = dialog.message().includes('Accounts are coming soon');
      await dialog.accept();
    });

    const signInBtn = await page.$('[data-testid="sign-in-btn"]');
    await signInBtn.click();
    await delay(300);

    assert(alertShown, "USER-002: Sign-in shows Coming Soon state");

    // 3. Persistence tests (Favorites & Recent)
    await page.goto('http://localhost:3000/');
    await delay(300);

    // Clear local storage first
    await page.evaluate(() => {
      localStorage.clear();
    });
    await page.reload();
    await delay(300);

    // Click recent tool (JSON Formatter)
    await page.click('a[href="/tools/json-formatter"]');
    await delay(300);

    // Click favorite tool (JSON Validator) on home page
    await page.goto('http://localhost:3000/');
    await delay(300);
    const favBtn = await page.$('[data-testid="tool-card"][href="/tools/json-validator"] button[aria-label="Toggle favorite"]');
    await favBtn.click();
    await delay(200);

    // Check Favorites page
    await page.goto('http://localhost:3000/?view=favorites');
    await delay(300);
    let mainText = await page.$eval('main', el => el.textContent);
    assert(mainText.includes('JSON Validator'), "USER-003: Favorites still work without authentication");

    // Check Recent page
    await page.goto('http://localhost:3000/?view=recent');
    await delay(300);
    mainText = await page.$eval('main', el => el.textContent);
    assert(mainText.includes('JSON Formatter'), "USER-004: Recent still works without authentication");

    // Refresh and check persistence
    await page.reload();
    await delay(300);
    mainText = await page.$eval('main', el => el.textContent);
    assert(mainText.includes('JSON Formatter'), "USER-006: Recent persists after refresh");

    await page.goto('http://localhost:3000/?view=favorites');
    await delay(300);
    mainText = await page.$eval('main', el => el.textContent);
    assert(mainText.includes('JSON Validator'), "USER-005: Favorites persist after refresh");

    // 9. No new 404 routes are introduced
    // (We've checked the main interactions which should not trigger any 404s)
    const res = await page.goto('http://localhost:3000/?view=favorites', { waitUntil: 'networkidle0' });
    console.log('STATUS:', res.status());
    assert(res.status() === 200 || res.status() === 304, "USER-009: No new 404 routes are introduced");

  } catch (error) {
    console.error("Test execution error:", error);
    failed++;
  } finally {
    await browser.close();
    console.log(`\nTests finished. Passed: ${passed}, Failed: ${failed}`);
    if (failed > 0) process.exit(1);
  }
}

runUserTests();
