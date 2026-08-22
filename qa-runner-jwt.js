/* eslint-disable @typescript-eslint/no-require-imports */
const puppeteer = require('puppeteer');

async function runJwtTests() {
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

  console.log("Running JWT Decoder Tests...");

  try {
    await page.goto('http://localhost:3000/tools/jwt-decoder');
    await delay(500);

    // JWT-P0-006: Empty input -> Decode button disabled
    const decodeBtnDisabled = await page.$eval('[data-testid="decode-button"]', el => el.disabled);
    assert(decodeBtnDisabled, "JWT-P0-006: Decode button is disabled when input is empty");

    // JWT-P0-002: Malformed JWT (missing segments)
    await page.type('[data-testid="jwt-input"]', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.payloadonly');
    await delay(100);
    const decodeBtnDisabled2 = await page.$eval('[data-testid="decode-button"]', el => el.disabled);
    assert(!decodeBtnDisabled2, "Decode button is enabled when input has text");
    await page.click('[data-testid="decode-button"]');
    await delay(200);
    
    let errorText = await page.$eval('[data-testid="jwt-error"]', el => el.textContent).catch(() => "");
    assert(errorText.includes("JWT must contain three segments separated by dots"), "JWT-P0-002: Malformed JWT error shown");

    // JWT-P0-004: Invalid Header JSON
    await page.evaluate(() => document.querySelector('[data-testid="jwt-input"]').value = "");
    await page.type('[data-testid="jwt-input"]', 'invalidBase64!!!.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c');
    await page.click('[data-testid="decode-button"]');
    await delay(200);
    errorText = await page.$eval('[data-testid="jwt-error"]', el => el.textContent).catch(() => "");
    assert(errorText.includes("JWT header could not be decoded"), "JWT-P0-004: Invalid Header JSON error shown");

    // JWT-P0-001: Valid JWT
    await page.evaluate(() => document.querySelector('[data-testid="jwt-input"]').value = "");
    // header: {"alg":"HS256","typ":"JWT"}, payload: {"sub":"1234567890","name":"John Doe","iat":1516239022}
    const validJwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    await page.type('[data-testid="jwt-input"]', validJwt);
    await page.click('[data-testid="decode-button"]');
    await delay(300);

    const headerOutput = await page.$eval('[data-testid="jwt-header-output"]', el => el.textContent).catch(() => "");
    const payloadOutput = await page.$eval('[data-testid="jwt-payload-output"]', el => el.textContent).catch(() => "");
    
    assert(headerOutput.includes('"alg": "HS256"'), "JWT-P0-001: Valid JWT header decoded");
    assert(payloadOutput.includes('"name": "John Doe"'), "JWT-P0-001: Valid JWT payload decoded");

    // JWT-P1-002 & JWT-P1-003: Standard claims & Timestamp
    const pageText = await page.$eval('main', el => el.textContent);
    assert(pageText.includes('Algorithm:HS256'), "JWT-P1-002: Algorithm displayed");
    assert(pageText.includes('Subject (sub):1234567890'), "JWT-P1-002: Subject displayed");
    assert(pageText.includes('Issued At (iat):'), "JWT-P1-003: Issued At displayed");
    assert(pageText.includes('(1516239022)'), "JWT-P1-003: Numeric timestamp preserved");

    // JWT-P0-007: Clear button
    await page.click('[data-testid="clear-button"]');
    await delay(100);
    const inputValue = await page.$eval('[data-testid="jwt-input"]', el => el.value);
    assert(inputValue === "", "JWT-P0-007: Clear button empties input");
    
    const headerOutputAfterClear = await page.$('[data-testid="jwt-header-output"]');
    assert(headerOutputAfterClear === null, "JWT-P0-007: Clear button removes result");

  } catch (error) {
    console.error("Test execution error:", error);
    failed++;
  } finally {
    await browser.close();
    console.log(`\nTests finished. Passed: ${passed}, Failed: ${failed}`);
    if (failed > 0) process.exit(1);
  }
}

runJwtTests();
