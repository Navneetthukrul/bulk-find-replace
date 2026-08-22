/* eslint-disable @typescript-eslint/no-require-imports */
const puppeteer = require('puppeteer');

async function runJsonToTypescriptTests() {
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

  console.log("Running JSON to TypeScript Tests...");

  try {
    await page.goto('http://localhost:3000/tools/json-to-typescript');
    await delay(1000);

    // Basic conversion
    const basicJson = `{"name": "test", "age": 25, "active": true, "data": null}`;
    await page.type('[data-testid="json-input"]', basicJson);
    await page.click('[data-testid="generate-button"]');
    await delay(200);
    let output = await page.$eval('[data-testid="ts-output"]', el => el.value).catch(() => "");
    assert(output.includes("export interface Root") && output.includes("name: string;") && output.includes("age: number;") && output.includes("data: any;"), "J2TS-P0-001: Basic object conversion");

    // Custom root class
    await page.evaluate(() => { document.querySelector('[data-testid="class-name-input"]').value = ''; });
    await page.type('[data-testid="class-name-input"]', 'Person');
    await page.click('[data-testid="generate-button"]');
    await delay(200);
    output = await page.$eval('[data-testid="ts-output"]', el => el.value).catch(() => "");
    assert(output.includes("export interface Person {"), "J2TS-P0-002: Custom root interface name");

    // Nested object & quoting
    await page.click('[data-testid="clear-button"]');
    await delay(200);
    const nestedJson = `{"first_name": "test", "my-prop": 1, "address": {"city": "nyc"}}`;
    await page.type('[data-testid="json-input"]', nestedJson);
    await page.click('[data-testid="generate-button"]');
    await delay(200);
    output = await page.$eval('[data-testid="ts-output"]', el => el.value).catch(() => "");
    assert(output.includes("first_name: string;") && output.includes('"my-prop": number;') && output.includes("address: Address;") && output.includes("export interface Address {"), "J2TS-P1-001: Quoted keys and Nested object");

    // Arrays
    await page.click('[data-testid="clear-button"]');
    await delay(200);
    const arrayJson = `{"tags": ["a", "b"], "users": [{"id": 1}]}`;
    await page.type('[data-testid="json-input"]', arrayJson);
    await page.click('[data-testid="generate-button"]');
    await delay(200);
    output = await page.$eval('[data-testid="ts-output"]', el => el.value).catch(() => "");
    assert(output.includes("tags: string[];") && output.includes("users: User[];"), "J2TS-P0-003: Arrays of primitives and objects");

    // Invalid JSON
    await page.click('[data-testid="clear-button"]');
    await delay(200);
    await page.type('[data-testid="json-input"]', '{"bad":');
    await page.click('[data-testid="generate-button"]');
    await delay(200);
    output = await page.$eval('[data-testid="ts-output"]', el => el.value).catch(() => "");
    assert(output === "", "J2TS-P0-004: Invalid JSON handling (no output generation)");

  } catch (error) {
    console.error("Test execution error:", error);
    failed++;
  } finally {
    await browser.close();
    console.log(`\nTests finished. Passed: ${passed}, Failed: ${failed}`);
    if (failed > 0) process.exit(1);
  }
}

runJsonToTypescriptTests();
