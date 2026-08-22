/* eslint-disable @typescript-eslint/no-require-imports */
const puppeteer = require('puppeteer');

async function runJsonToCsharpTests() {
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

  console.log("Running JSON to C# Tests...");

  try {
    await page.goto('http://localhost:3000/tools/json-to-csharp');
    await delay(1000);

    // Basic conversion
    const basicJson = `{"name": "test", "age": 25, "active": true}`;
    await page.type('[data-testid="json-input"]', basicJson);
    await page.click('[data-testid="generate-button"]');
    await delay(200);
    let output = await page.$eval('[data-testid="csharp-output"]', el => el.value).catch(() => "");
    assert(output.includes("public class Root") && output.includes("public string Name { get; set; }") && output.includes("public int Age"), "J2CS-P0-001: Basic object conversion");

    // Custom root class
    await page.evaluate(() => { document.querySelector('[data-testid="class-name-input"]').value = ''; });
    await page.type('[data-testid="class-name-input"]', 'Person');
    await page.click('[data-testid="generate-button"]');
    await delay(200);
    output = await page.$eval('[data-testid="csharp-output"]', el => el.value).catch(() => "");
    assert(output.includes("public class Person"), "J2CS-P0-002: Custom root class name");

    // Nested object & snake case
    await page.click('[data-testid="clear-button"]');
    await delay(200);
    const nestedJson = `{"first_name": "test", "address": {"city": "nyc"}}`;
    await page.type('[data-testid="json-input"]', nestedJson);
    await page.click('[data-testid="generate-button"]');
    await delay(200);
    output = await page.$eval('[data-testid="csharp-output"]', el => el.value).catch(() => "");
    assert(output.includes('[JsonPropertyName("first_name")]') && output.includes("public string FirstName") && output.includes("public Address Address") && output.includes("public class Address"), "J2CS-P1-001: Snake case and Nested object");

    // Arrays
    await page.click('[data-testid="clear-button"]');
    await delay(200);
    const arrayJson = `{"tags": ["a", "b"], "users": [{"id": 1}]}`;
    await page.type('[data-testid="json-input"]', arrayJson);
    await page.click('[data-testid="generate-button"]');
    await delay(200);
    output = await page.$eval('[data-testid="csharp-output"]', el => el.value).catch(() => "");
    assert(output.includes("public List<string> Tags") && output.includes("public List<User> Users"), "J2CS-P0-003: Arrays of primitives and objects");

    // Reserved keyword handling
    await page.click('[data-testid="clear-button"]');
    await delay(200);
    const keywordJson = `{"class": "a", "public": true}`;
    await page.type('[data-testid="json-input"]', keywordJson);
    await page.click('[data-testid="generate-button"]');
    await delay(200);
    output = await page.$eval('[data-testid="csharp-output"]', el => el.value).catch(() => "");
    assert(output.includes("public string @Class") && output.includes("public bool @Public"), "J2CS-P1-002: Reserved keyword prefixing");

    // Invalid JSON
    await page.click('[data-testid="clear-button"]');
    await delay(200);
    await page.type('[data-testid="json-input"]', '{"bad":');
    await page.click('[data-testid="generate-button"]');
    await delay(200);
    output = await page.$eval('[data-testid="csharp-output"]', el => el.value).catch(() => "");
    assert(output === "", "J2CS-P0-004: Invalid JSON handling (no output generation)");

  } catch (error) {
    console.error("Test execution error:", error);
    failed++;
  } finally {
    await browser.close();
    console.log(`\nTests finished. Passed: ${passed}, Failed: ${failed}`);
    if (failed > 0) process.exit(1);
  }
}

runJsonToCsharpTests();
