/* eslint-disable @typescript-eslint/no-require-imports */
const puppeteer = require('puppeteer');

async function runRegexTests() {
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

  console.log("Running Regex Tester Tests...");

  try {
    await page.goto('http://localhost:3000/tools/regex-tester');
    await delay(500);

    // Simple match
    await page.type('[data-testid="regex-pattern"]', 'test');
    await page.type('[data-testid="regex-test-string"]', 'this is a test');
    await page.click('[data-testid="run-button"]');
    await delay(100);
    let matchCount = await page.$eval('[data-testid="match-count"]', el => el.textContent).catch(() => "");
    assert(matchCount.includes("1 match"), "REGEX-P0-001: Simple match");

    // No match
    await page.click('[data-testid="clear-button"]');
    await delay(100);
    await page.type('[data-testid="regex-pattern"]', 'test');
    await page.type('[data-testid="regex-test-string"]', 'hello world');
    await page.click('[data-testid="run-button"]');
    await delay(100);
    let noMatch = await page.$('[data-testid="regex-no-match"]');
    assert(noMatch !== null, "REGEX-P0-002: No match");

    // Global matches
    await page.click('[data-testid="clear-button"]');
    await delay(100);
    await page.type('[data-testid="regex-pattern"]', '\\d');
    await page.type('[data-testid="regex-test-string"]', '1a2b3');
    await page.click('[data-testid="run-button"]');
    await delay(100);
    matchCount = await page.$eval('[data-testid="match-count"]', el => el.textContent).catch(() => "");
    assert(matchCount.includes("3 matches"), "REGEX-P0-003: Global matches");

    // Case-insensitive
    await page.click('[data-testid="clear-button"]');
    await delay(100);
    await page.type('[data-testid="regex-pattern"]', 'test');
    await page.click('[data-testid="flag-i"]'); // Toggle on
    await page.click('[data-testid="flag-g"]'); // Toggle off (it defaults to g)
    await page.type('[data-testid="regex-test-string"]', 'TEST');
    await page.click('[data-testid="run-button"]');
    await delay(100);
    matchCount = await page.$eval('[data-testid="match-count"]', el => el.textContent).catch(() => "");
    assert(matchCount.includes("1 match"), "REGEX-P0-004: Case-insensitive matching");

    // Capture groups
    await page.click('[data-testid="clear-button"]');
    await delay(100);
    await page.type('[data-testid="regex-pattern"]', '(\\w+)@(\\w+)');
    await page.type('[data-testid="regex-test-string"]', 'user@domain');
    await page.click('[data-testid="run-button"]');
    await delay(100);
    let matchContent = await page.$eval('[data-testid="match-0"]', el => el.textContent).catch(() => "");
    assert(matchContent.includes("user") && matchContent.includes("domain"), "REGEX-P0-006: Capture groups");

    // Invalid regex
    await page.click('[data-testid="clear-button"]');
    await delay(100);
    await page.type('[data-testid="regex-pattern"]', '[a-');
    await page.type('[data-testid="regex-test-string"]', 'test');
    await page.click('[data-testid="run-button"]');
    await delay(100);
    let errorEl = await page.$('[data-testid="regex-error"]');
    assert(errorEl !== null, "REGEX-P0-007: Invalid regex error");

    // Zero-length match infinite loop protection
    await page.click('[data-testid="clear-button"]');
    await delay(100);
    await page.type('[data-testid="regex-pattern"]', '^');
    await page.type('[data-testid="regex-test-string"]', 'abc');
    await page.click('[data-testid="run-button"]');
    await delay(100);
    matchCount = await page.$eval('[data-testid="match-count"]', el => el.textContent).catch(() => "");
    assert(matchCount.includes("1 match"), "REGEX-P1-005: Zero-length matches safely resolved");

  } catch (error) {
    console.error("Test execution error:", error);
    failed++;
  } finally {
    await browser.close();
    console.log(`\nTests finished. Passed: ${passed}, Failed: ${failed}`);
    if (failed > 0) process.exit(1);
  }
}

runRegexTests();
