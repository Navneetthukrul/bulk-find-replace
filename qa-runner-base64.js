/* eslint-disable @typescript-eslint/no-require-imports */
const puppeteer = require('puppeteer');

async function runBase64Tests() {
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

  console.log("Running Base64 Tests...");

  try {
    await page.goto('http://localhost:3000/tools/base64');
    await delay(500);

    // Encode ASCII
    await page.type('[data-testid="base64-input"]', 'Hello World');
    await delay(100);
    let output = await page.$eval('[data-testid="base64-output"]', el => el.value);
    assert(output === "SGVsbG8gV29ybGQ=", "B64-P0-001: Encode normal ASCII text");

    // Output is readonly
    const isReadOnly = await page.$eval('[data-testid="base64-output"]', el => el.readOnly);
    assert(isReadOnly, "B64-P0-009: Output is read-only");

    // Swap mode
    await page.click('[data-testid="swap-button"]');
    await delay(100);
    const inputVal = await page.$eval('[data-testid="base64-input"]', el => el.value);
    output = await page.$eval('[data-testid="base64-output"]', el => el.value);
    assert(inputVal === "SGVsbG8gV29ybGQ=", "Swap moves output to input");
    assert(output === "Hello World", "B64-P0-007: Encode -> Decode round trip via swap works");

    // Decode invalid Base64
    await page.click('[data-testid="clear-button"]');
    await delay(100);
    await page.type('[data-testid="base64-input"]', 'invalid!!');
    await delay(100);
    let errorText = await page.$eval('[data-testid="base64-error"]', el => el.textContent).catch(() => "");
    assert(errorText.includes("Invalid Base64 input"), "B64-P0-008: Invalid Base64 error");

    // Switch back to encode
    await page.click('[data-testid="mode-encode"]');
    await delay(100);
    
    // Encode Unicode
    await page.click('[data-testid="clear-button"]');
    await delay(100);
    // Setting value using evaluate with React native setter hack
    await page.evaluate(() => {
      const el = document.querySelector('[data-testid="base64-input"]');
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
      nativeInputValueSetter.call(el, "🚀 Developer Tools");
      el.dispatchEvent(new Event('input', { bubbles: true }));
    });
    await delay(200);
    output = await page.$eval('[data-testid="base64-output"]', el => el.value);
    assert(output === "8J+agCBEZXZlbG9wZXIgVG9vbHM=", "B64-P1-001: Unicode encode");

    // Decode Unicode
    await page.click('[data-testid="swap-button"]');
    await delay(200);
    output = await page.$eval('[data-testid="base64-output"]', el => el.value);
    assert(output === "🚀 Developer Tools", "B64-P1-001: Unicode decode");

    // Encode Non-Latin
    await page.click('[data-testid="mode-encode"]');
    await delay(200);
    await page.evaluate(() => {
      const el = document.querySelector('[data-testid="base64-input"]');
      const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
      nativeInputValueSetter.call(el, "こんにちは");
      el.dispatchEvent(new Event('input', { bubbles: true }));
    });
    await delay(100);
    output = await page.$eval('[data-testid="base64-output"]', el => el.value);
    assert(output === "44GT44KT44Gr44Gh44Gv", "B64-P1-002: Non-Latin encode (Japanese)");

  } catch (error) {
    console.error("Test execution error:", error);
    failed++;
  } finally {
    await browser.close();
    console.log(`\nTests finished. Passed: ${passed}, Failed: ${failed}`);
    if (failed > 0) process.exit(1);
  }
}

runBase64Tests();
