/* eslint-disable @typescript-eslint/no-require-imports */
const puppeteer = require('puppeteer');

async function runSqlTests() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Users\\Navneet\\.cache\\puppeteer\\chrome\\win64-131.0.6778.204\\chrome-win64\\chrome.exe',
    headless: true
  });
  
  const page = await browser.newPage();
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

  console.log("Running SQL Formatter Tests...");

  try {
    await page.goto('http://localhost:3000/tools/sql-formatter');
    await delay(1000);

    // Format basic query
    await page.type('[data-testid="sql-input"]', 'select id,name from users;');
    await page.click('[data-testid="format-button"]');
    await delay(200);
    let output = await page.$eval('[data-testid="sql-output"]', el => el.value).catch(() => "");
    assert(output.includes("SELECT\n") && output.includes("id,\n") && output.includes("users;"), "SQL-P0-001: Basic format");

    // Minify
    await page.click('[data-testid="minify-button"]');
    await delay(200);
    output = await page.$eval('[data-testid="sql-output"]', el => el.value).catch(() => "");
    assert(output === "SELECT id, name FROM users;", "SQL-P0-002: Minify");

    // Keyword Case - Lowercase
    await page.select('select#case-select', 'lower');
    await page.click('[data-testid="format-button"]');
    await delay(200);
    output = await page.$eval('[data-testid="sql-output"]', el => el.value).catch(() => "");
    assert(output.includes("select\n") && output.includes("from\n"), "SQL-P0-003: Lowercase keywords");

    // Indentation - 4 spaces
    await page.select('select#indent-select', '4');
    await page.click('[data-testid="format-button"]');
    await delay(200);
    output = await page.$eval('[data-testid="sql-output"]', el => el.value).catch(() => "");
    assert(output.includes("    id,"), "SQL-P0-004: 4 Spaces indentation");

    // Invalid SQL
    await page.click('[data-testid="clear-button"]');
    await delay(200);
    await page.type('[data-testid="sql-input"]', 'SELECT * FFROM users;');
    await page.click('[data-testid="format-button"]');
    await delay(200);
    output = await page.$eval('[data-testid="sql-output"]', el => el.value).catch(() => "");
    assert(output.includes("FFROM"), "SQL-P0-005: Invalid SQL does not crash");

    // Clear
    await page.click('[data-testid="clear-button"]');
    await delay(200);
    const input = await page.$eval('[data-testid="sql-input"]', el => el.value).catch(() => "");
    output = await page.$eval('[data-testid="sql-output"]', el => el.value).catch(() => "");
    assert(input === "" && output === "", "SQL-P0-006: Clear button");

  } catch (error) {
    console.error("Test execution error:", error);
    failed++;
  } finally {
    await browser.close();
    console.log(`\nTests finished. Passed: ${passed}, Failed: ${failed}`);
    if (failed > 0) process.exit(1);
  }
}

runSqlTests();
