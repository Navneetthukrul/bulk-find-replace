/* eslint-disable @typescript-eslint/no-require-imports */
const puppeteer = require('puppeteer');

async function runCurlBuilderTests() {
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

  console.log("Running cURL Builder Tests...");

  try {
    await page.goto('http://localhost:3000/tools/curl-builder');
    await delay(1000);

    // Initial state
    let output = await page.$eval('[data-testid="curl-output"]', el => el.textContent || "").catch(() => "");
    assert(output.includes("curl -X GET 'https://api.example.com/'"), "CB-P0-001: Default GET request");

    // Change Method to POST and add body
    await page.select('[data-testid="method-select"]', 'POST');
    await delay(200);
    const bodyStr = `{"name": "test"}`;
    await page.type('[data-testid="body-input"]', bodyStr);
    await delay(200);
    output = await page.$eval('[data-testid="curl-output"]', el => el.textContent || "").catch(() => "");
    assert(output.includes("curl -X POST") && output.includes("-d '{\"name\": \"test\"}'"), "CB-P0-002: POST request with JSON body");

    // Add query parameter
    await page.click('[data-testid="add-query-param"]');
    await delay(200);
    await page.type('[data-testid="query-key-0"]', 'page');
    await page.type('[data-testid="query-value-0"]', '2');
    await delay(200);
    output = await page.$eval('[data-testid="curl-output"]', el => el.textContent || "").catch(() => "");
    assert(output.includes("https://api.example.com/?page=2"), "CB-P0-003: Query parameter appending");

    // Add header
    await page.click('[data-testid="add-header"]');
    await delay(200);
    await page.type('[data-testid="header-key-0"]', 'Authorization');
    await page.type('[data-testid="header-value-0"]', 'Bearer token');
    await delay(200);
    output = await page.$eval('[data-testid="curl-output"]', el => el.textContent || "").catch(() => "");
    assert(output.includes("-H 'Authorization: Bearer token'"), "CB-P0-004: Header appending");

    // Escaping special characters
    await page.click('[data-testid="add-header"]');
    await delay(200);
    await page.type('[data-testid="header-key-1"]', 'Custom');
    await page.type('[data-testid="header-value-1"]', "Bob's Data");
    await delay(200);
    output = await page.$eval('[data-testid="curl-output"]', el => el.textContent || "").catch(() => "");
    assert(output.includes("Bob'\\''s Data"), "CB-P1-001: Shell escaping single quotes");

    // Clear form
    await page.click('[data-testid="clear-button"]');
    await delay(200);
    output = await page.$eval('[data-testid="curl-output"]', el => el.textContent || "").catch(() => "");
    assert(output.includes("curl -X GET 'https://api.example.com/'"), "CB-P0-005: Clear resets cleanly");

    // Invalid URL handling
    await page.evaluate(() => { document.querySelector('[data-testid="url-input"]').value = ''; });
    await page.type('[data-testid="url-input"]', ' ');
    await delay(200);
    const errorTxt = await page.$eval('[data-testid="url-error"]', el => el.textContent || "").catch(() => "");
    assert(errorTxt === "URL is required", "CB-P0-006: Empty URL validation");

  } catch (error) {
    console.error("Test execution error:", error);
    failed++;
  } finally {
    await browser.close();
    console.log(`\nTests finished. Passed: ${passed}, Failed: ${failed}`);
    if (failed > 0) process.exit(1);
  }
}

runCurlBuilderTests();
