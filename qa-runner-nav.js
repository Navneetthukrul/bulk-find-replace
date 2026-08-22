/* eslint-disable @typescript-eslint/no-require-imports */
const puppeteer = require('puppeteer');

async function runNavTests() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Users\\Navneet\\.cache\\puppeteer\\chrome\\win64-131.0.6778.204\\chrome-win64\\chrome.exe',
    headless: true
  });
  
  const page = await browser.newPage();
  page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
  page.on('pageerror', err => console.error('BROWSER ERROR:', err));
  page.on('requestfailed', request => console.log('REQUEST FAILED:', request.url(), request.failure()?.errorText));
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
  const checkUrlOk = async (url) => {
    const res = await page.goto(url, { waitUntil: 'networkidle0' });
    return res.status() === 200;
  };

  console.log("Running Navigation UI Tests...");

  try {
    // UI-NAV-001: All Tools
    assert(await checkUrlOk('http://localhost:3000/'), "UI-NAV-001: All Tools navigation does not produce 404");

    // UI-NAV-002: Favorites
    assert(await checkUrlOk('http://localhost:3000/?view=favorites'), "UI-NAV-002: Favorites navigation does not produce 404");
    
    // UI-NAV-012: Empty Favorites
    let text = await page.$eval('main', el => el.textContent);
    assert(text.includes('No favorite tools yet'), "UI-NAV-012: Empty Favorites view");

    // UI-NAV-003: Recent
    assert(await checkUrlOk('http://localhost:3000/?view=recent'), "UI-NAV-003: Recent navigation does not produce 404");
    
    // UI-NAV-013: Empty Recent
    text = await page.$eval('main', el => el.textContent);
    assert(text.includes('No recently used tools'), "UI-NAV-013: Empty Recent view");

    const categories = [
      { id: "004", name: "JSON & Data", param: "JSON+%26+Data" },
      { id: "005", name: "API & HTTP", param: "API+%26+HTTP" },
      { id: "006", name: "Security", param: "Security" },
      { id: "007", name: "Encoding", param: "Encoding" },
      { id: "008", name: "SQL & Database", param: "SQL+%26+Database" },
      { id: "009", name: "Text & Regex", param: "Text+%26+Regex" },
      { id: "010", name: "Git & DevOps", param: "Git+%26+DevOps" },
      { id: "011", name: "Date & Time", param: "Date+%26+Time" }
    ];

    for (const cat of categories) {
      assert(await checkUrlOk(`http://localhost:3000/?category=${cat.param}`), `UI-NAV-${cat.id}: ${cat.name} category navigation does not produce 404`);
      
      // UI-NAV-014: Category view
      const mainText = await page.$eval('main', el => el.textContent);
      const isOk = mainText.includes(`${cat.name} tools`);
      assert(isOk, `UI-NAV-014: ${cat.name} category view displays correctly`);
    }

    // UI-NAV-012/013 Add Favorite and Recent
    await page.goto('http://localhost:3000/');
    await delay(300);
    // Click JSON Formatter to add to recent
    await page.click('a[href="/tools/json-formatter"]');
    await delay(300);

    // Go back to Recent
    await checkUrlOk('http://localhost:3000/?view=recent');
    text = await page.$eval('main', el => el.textContent);
    assert(text.includes('JSON Formatter'), "UI-NAV-013: Recent correctly reflects recently opened tools");

    // Add to Favorite
    await page.goto('http://localhost:3000/');
    await delay(300);
    // Click favorite star on JSON Validator
    const favBtn = await page.$('[data-testid="tool-card"][href="/tools/json-validator"] button[aria-label="Toggle favorite"]');
    await favBtn.click();
    await delay(200);

    // Check Favorites
    await checkUrlOk('http://localhost:3000/?view=favorites');
    text = await page.$eval('main', el => el.textContent);
    assert(text.includes('JSON Validator'), "UI-NAV-012: Favorites correctly reflects favorited tools");

    // UI-NAV-015: Mobile 390px
    await page.setViewport({ width: 390, height: 800 });
    await page.goto('http://localhost:3000/');
    await delay(300);
    
    await page.click('[data-testid="mobile-menu-btn"]');
    await delay(300);
    
    const sidebarVisible = await page.$('[data-testid="sidebar"]') !== null;
    assert(sidebarVisible, "UI-NAV-015: Mobile navigation drawer opens");
    
    // Click Recent in mobile sidebar
    await page.click('a[href="/?view=recent"]');
    await delay(500);
    
    // Check if drawer closed and url changed
    const url = page.url();
    assert(url.includes('view=recent'), "UI-NAV-015: Clicking Recent works on mobile");
    const backdrop = await page.$('[data-testid="mobile-sidebar-backdrop"]');
    assert(backdrop === null, "UI-NAV-015: Navigation closes the mobile drawer");

  } catch (error) {
    console.error("Test execution error:", error);
    failed++;
  } finally {
    await browser.close();
    console.log(`\nTests finished. Passed: ${passed}, Failed: ${failed}`);
    if (failed > 0) process.exit(1);
  }
}

runNavTests();
