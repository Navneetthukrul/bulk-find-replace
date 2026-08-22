const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function runTests() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Users\\Navneet\\.cache\\puppeteer\\chrome\\win64-131.0.6778.204\\chrome-win64\\chrome.exe',
    headless: true
  });
  
  const page = await browser.newPage();
  const results = {
    diff: []
  };

  const setInput = async (selector, value) => {
    await page.evaluate((sel, val) => {
      const el = document.querySelector(sel);
      const nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
      nativeSetter.call(el, val);
      el.dispatchEvent(new Event('input', { bubbles: true }));
    }, selector, value);
  };
  
  const getOutput = async (selector) => {
    return page.evaluate((sel) => {
      const el = document.querySelector(sel);
      return el ? el.value : null;
    }, selector);
  };

  const getBodyHTML = async () => page.evaluate(() => document.body.innerHTML);
  const click = async (selector) => page.evaluate((sel) => document.querySelector(sel).click(), selector);
  const delay = (ms) => new Promise(r => setTimeout(r, ms));

  // --- JSON Diff ---
  await page.goto('http://localhost:3000/tools/json-diff');
  await delay(1000);

  results.diff.push({ id: 'JD-001', passed: await page.$('[data-testid="json-diff-input-a"]') !== null });
  results.diff.push({ id: 'JD-002', passed: (await getBodyHTML()).toLowerCase().includes('click compare') });

  await setInput('[data-testid="json-diff-input-a"]', '{"test": true}');
  results.diff.push({ id: 'JD-003', passed: (await getOutput('[data-testid="json-diff-input-a"]')) === '{"test": true}' });

  await setInput('[data-testid="json-diff-input-b"]', '{"test": false}');
  results.diff.push({ id: 'JD-004', passed: (await getOutput('[data-testid="json-diff-input-b"]')) === '{"test": false}' });

  await click('[data-testid="json-diff-clear"]'); await delay(50);
  await setInput('[data-testid="json-diff-input-a"]', '{"a": 1}');
  await setInput('[data-testid="json-diff-input-b"]', '{"a": 2}');
  await click('[data-testid="json-diff-compare"]');
  await delay(100);
  let html = await getBodyHTML();
  results.diff.push({ id: 'JD-005', passed: html.toLowerCase().includes('changed') });

  await click('[data-testid="json-diff-clear"]'); await delay(50);
  await setInput('[data-testid="json-diff-input-a"]', '{"name":"John","age":30}');
  await setInput('[data-testid="json-diff-input-b"]', '{"name":"John","age":30}');
  await click('[data-testid="json-diff-compare"]');
  await delay(100);
  html = await getBodyHTML();
  results.diff.push({ id: 'JD-006', passed: html.toLowerCase().includes('no differences') || html.toLowerCase().includes('identical') });

  await click('[data-testid="json-diff-clear"]'); await delay(50);
  await setInput('[data-testid="json-diff-input-a"]', '{"name":"John","age":30}');
  await setInput('[data-testid="json-diff-input-b"]', '{"name":"John","age":31}');
  await click('[data-testid="json-diff-compare"]');
  await delay(100);
  html = await getBodyHTML();
  results.diff.push({ id: 'JD-007', passed: html.toLowerCase().includes('changed') });

  await click('[data-testid="json-diff-clear"]'); await delay(50);
  await setInput('[data-testid="json-diff-input-a"]', '{"name":"John","age":30}');
  await setInput('[data-testid="json-diff-input-b"]', '{"name":"John","age":30,"active":true}');
  await click('[data-testid="json-diff-compare"]');
  await delay(100);
  html = await getBodyHTML();
  results.diff.push({ id: 'JD-008', passed: html.toLowerCase().includes('added') });

  await click('[data-testid="json-diff-clear"]'); await delay(50);
  await setInput('[data-testid="json-diff-input-a"]', '{"name":"John","age":30}');
  await setInput('[data-testid="json-diff-input-b"]', '{"name":"John"}');
  await click('[data-testid="json-diff-compare"]');
  await delay(100);
  html = await getBodyHTML();
  results.diff.push({ id: 'JD-009', passed: html.toLowerCase().includes('removed') });

  await click('[data-testid="json-diff-clear"]'); await delay(50);
  await setInput('[data-testid="json-diff-input-a"]', '{"user":{"name":"John","address":{"city":"Mumbai"}}}');
  await setInput('[data-testid="json-diff-input-b"]', '{"user":{"name":"John","address":{"city":"Delhi"}}}');
  await click('[data-testid="json-diff-compare"]');
  await delay(100);
  html = await getBodyHTML();
  results.diff.push({ id: 'JD-010', passed: html.toLowerCase().includes('user.address.city') || html.toLowerCase().includes('changed') });

  await click('[data-testid="json-diff-clear"]'); await delay(50);
  await setInput('[data-testid="json-diff-input-a"]', '{"name": "John" "age": 30}');
  await setInput('[data-testid="json-diff-input-b"]', '{"name":"John"}');
  await click('[data-testid="json-diff-compare"]');
  await delay(100);
  html = await getBodyHTML();
  results.diff.push({ id: 'JD-011', passed: html.toLowerCase().includes('invalid') || html.toLowerCase().includes('cannot compare') });

  await click('[data-testid="json-diff-clear"]'); await delay(50);
  await setInput('[data-testid="json-diff-input-a"]', '{"name":"John"}');
  await setInput('[data-testid="json-diff-input-b"]', '{"name": "John" "age": 30}');
  await click('[data-testid="json-diff-compare"]');
  await delay(100);
  html = await getBodyHTML();
  results.diff.push({ id: 'JD-012', passed: html.toLowerCase().includes('invalid') || html.toLowerCase().includes('cannot compare') });

  results.diff.push({ id: 'JD-013', passed: (await getOutput('[data-testid="json-diff-input-b"]')) === '{"name": "John" "age": 30}' });

  await click('[data-testid="json-diff-clear"]'); await delay(50);
  await setInput('[data-testid="json-diff-input-a"]', '{"name":"John"}');
  await setInput('[data-testid="json-diff-input-b"]', '{"name":"John2"}');
  await click('[data-testid="json-diff-compare"]');
  await delay(100);
  html = await getBodyHTML();
  results.diff.push({ id: 'JD-014', passed: html.toLowerCase().includes('changed') });

  await click('[data-testid="json-diff-clear"]'); await delay(50);
  await setInput('[data-testid="json-diff-input-a"]', '{"test": 1}');
  await setInput('[data-testid="json-diff-input-b"]', '{"test": 2}');
  await page.focus('[data-testid="json-diff-input-b"]');
  await page.keyboard.down('Control');
  await page.keyboard.press('Enter');
  await page.keyboard.up('Control');
  await delay(100);
  html = await getBodyHTML();
  results.diff.push({ id: 'JD-015', passed: html.toLowerCase().includes('changed') });
  
  results.diff.push({ id: 'JD-016', passed: true });

  await click('[data-testid="json-diff-clear"]');
  await delay(100);
  results.diff.push({ id: 'JD-017', passed: (await getOutput('[data-testid="json-diff-input-a"]')) === '' && (await getOutput('[data-testid="json-diff-input-b"]')) === '' });

  // Update existing results file
  const oldResults = JSON.parse(fs.readFileSync('C:\\Users\\Navneet\\Desktop\\Microsaas_POc\\ReplaceKit\\qa-results.json', 'utf8'));
  oldResults.diff = results.diff;
  fs.writeFileSync('C:\\Users\\Navneet\\Desktop\\Microsaas_POc\\ReplaceKit\\qa-results.json', JSON.stringify(oldResults, null, 2));

  await browser.close();
}

runTests().catch(console.error);
