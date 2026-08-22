const puppeteer = require('puppeteer');

async function runBulkTests() {
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

  console.log("Running Bulk Find & Replace Tests...");

  try {
    await page.goto('http://localhost:3000/tools/bulk-replace');
    await delay(1000);

    // BFR-001 Page loads
    let h1 = await page.$eval('h1', el => el.textContent);
    assert(h1.includes('Bulk Find & Replace'), "BFR-001: Page loads");

    // Helper to upload files via input
    const uploadFiles = async (filesData) => {
      // Mock File objects using DataTransfer trick since input[type=file] with Puppeteer accepts paths, 
      // but we want to simulate in-memory without creating temp files.
      // Easiest is to use page.evaluate to dispatch a drop event with synthetic files.
      await page.evaluate((files) => {
        const dt = new DataTransfer();
        for (const fd of files) {
          const f = new File([fd.content], fd.name, { type: 'text/plain' });
          dt.items.add(f);
        }
        const dropZone = document.querySelector('[data-testid="drop-zone"]');
        const ev = new DragEvent('drop', {
          bubbles: true, cancelable: true, dataTransfer: dt
        });
        dropZone.dispatchEvent(ev);
      }, filesData);
      await delay(300);
    };

    // BFR-FILE-009, BFR-FILE-010: Initial upload area text
    let uploadZoneText = await page.$eval('[data-testid="drop-zone"]', el => el.textContent);
    assert(uploadZoneText.includes('Text & code files · 50 MB total'), "BFR-FILE-009: Upload area communicates text/code files and 50MB limit");
    assert(uploadZoneText.includes('Files are processed locally in your browser.'), "BFR-FILE-010: Upload area communicates local processing");

    // BFR-FILE-011, BFR-FILE-012: Supported file types
    let summaryText = await page.$eval('details summary', el => el.textContent).catch(() => '');
    assert(summaryText.includes('Supported file types'), "BFR-FILE-011: Supported file types is discoverable");
    let detailsText = await page.$eval('details', el => el.textContent).catch(() => '');
    assert(detailsText.includes('Code') && detailsText.includes('Data & Config') && detailsText.includes('Web & Text'), "BFR-FILE-012: Supported extensions are categorized correctly");

    // BFR-FILE-017: No horizontal overflow at multiple viewports
    for (const width of [1440, 768, 390]) {
      await page.setViewport({ width, height: 800 });
      await delay(200);
      let overflow = await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
      assert(!overflow, `BFR-FILE-017: No horizontal overflow at ${width}px`);
    }

    // Verify dark/light theme
    const isDark = await page.evaluate(() => document.documentElement.classList.contains('dark'));
    await page.click('button[aria-label="Toggle theme"]');
    await delay(200);
    let isDarkAfter = await page.evaluate(() => document.documentElement.classList.contains('dark'));
    if (isDark === isDarkAfter) {
      await page.click('button[aria-label="Toggle theme"]');
      await delay(200);
      isDarkAfter = await page.evaluate(() => document.documentElement.classList.contains('dark'));
    }
    assert(isDark !== isDarkAfter, "BFR-THEME: Theme toggle successfully switches light/dark mode");
    
    // Restore viewport for remaining tests
    await page.setViewport({ width: 1200, height: 800 });

    // BFR-FILE-001, BFR-FILE-002, BFR-FILE-003: Uploading files (mixed - BFR-FILE-014)
    await uploadFiles([
      { name: 'test1.ts', content: 'Hello localhost:3000. This is localhost:3000.' },
      { name: 'test2.ts', content: 'Not affected.' },
      { name: 'app.png', content: 'binary' } // Unsupported (BFR-FILE-013)
    ]);
    
    let fileItems = await page.$$eval('[data-testid^="file-item-"]', els => els.length);
    assert(fileItems === 2, "BFR-FILE-001: Accept a valid text/code file");

    let skippedText = await page.$eval('[data-testid="skipped-files"]', el => el.textContent).catch(() => '');
    assert(skippedText.includes('app.png'), "BFR-FILE-003/013: Show skipped unsupported files clearly");
    assert(fileItems === 2, "BFR-FILE-002/014: Reject unsupported binary extension");

    let sizeText = await page.$eval('[data-testid="size-indicator"]', el => el.textContent).catch(() => '');
    assert(sizeText.includes('58 Bytes / 50 MB'), "BFR-FILE-006: Correctly calculate and display total size");

    // BFR-FILE-004: Accept multiple supported files under 50 MB total (already done via test1 and test2)

    // BFR-FILE-005: Reject/prevent processing when total size exceeds 50 MB
    await uploadFiles([{ name: 'large.txt', content: 'a'.repeat(51 * 1024 * 1024) }]);
    let limitErr = await page.$eval('[data-testid="size-limit-error"]', el => el.textContent).catch(() => '');
    assert(limitErr.includes('exceeds the 50 MB limit'), "BFR-FILE-005: Reject/prevent processing when total size exceeds 50 MB");

    let previewBtnDisabled = await page.$eval('[data-testid="preview-btn"]', el => el.disabled);
    assert(previewBtnDisabled === true, "BFR-FILE-005: Processing buttons are disabled");

    // BFR-FILE-007: Removing a file recalculates total size
    await page.click('[data-testid="file-item-large.txt"] button');
    await delay(300);
    sizeText = await page.$eval('[data-testid="size-indicator"]', el => el.textContent).catch(() => '');
    assert(sizeText.includes('58 Bytes / 50 MB'), "BFR-FILE-007: Removing a file recalculates total size");
    limitErr = await page.$('[data-testid="size-limit-error"]');
    assert(limitErr === null, "BFR-FILE-007: Error disappears when below limit");
    
    // Set first rule
    await page.type('[data-testid="rule-find-0"]', 'localhost:3000');
    await page.type('[data-testid="rule-replace-0"]', 'api.prod.com');
    await delay(200); 

    await page.click('[data-testid="preview-btn"]');
    await delay(300);

    // BFR-009, BFR-011: Stats
    let totalReps = await page.$eval('[data-testid="stat-replacements"]', el => el.textContent);
    let totalChanged = await page.$eval('[data-testid="stat-files-changed"]', el => el.textContent);
    assert(totalReps === '2', "BFR-009/011: Total replacements correct");
    assert(totalChanged === '1', "BFR-011: Total files changed correct");

    // BFR-012: Preview
    let pItem1 = await page.$eval('[data-testid="preview-item-test1.ts"]', el => el.textContent);
    let pItem2 = await page.$eval('[data-testid="preview-item-test2.ts"]', el => el.textContent);
    assert(pItem1.includes('2 replacements'), "BFR-012: Preview shows replacements");
    assert(pItem2.includes('No changes'), "BFR-012: Preview shows no changes");

    // Special literal characters P1
    await page.click('[data-testid="add-rule-btn"]');
    await page.type('[data-testid="rule-find-1"]', 'a.b');
    await page.type('[data-testid="rule-replace-1"]', 'x');
    await uploadFiles([ { name: 'literal.txt', content: 'a.b acb' } ]);
    await page.click('[data-testid="preview-btn"]');
    await delay(300);
    totalReps = await page.$eval('[data-testid="stat-replacements"]', el => el.textContent);
    assert(totalReps === '3', "BFR-008: Literal string replacement works correctly");

    // --- Bulk Pair Lists Feature (BFR-020, BFR-021, BFR-022, BFR-023) ---
    // Switch to Bulk tab
    await page.click('[data-testid="tab-bulk"]');
    await delay(200);

    // Mismatched lists
    await page.type('[data-testid="bulk-find-textarea"]', 'John\nRahul');
    await page.type('[data-testid="bulk-replace-textarea"]', 'Smith');
    await page.click('[data-testid="bulk-generate-btn"]');
    await delay(200);
    errText = await page.$eval('[data-testid="bulk-error"]', el => el.textContent).catch(() => '');
    assert(errText.includes('same number of items'), "BFR-021: Mismatched list validation works");

    // Blank line in Find list
    await page.evaluate(() => {
        const input1 = document.querySelector('[data-testid="bulk-find-textarea"]');
        const input2 = document.querySelector('[data-testid="bulk-replace-textarea"]');
        if (input1) {
            const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
            nativeInputValueSetter.call(input1, '');
            input1.dispatchEvent(new Event('input', { bubbles: true }));
        }
        if (input2) {
            const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
            nativeInputValueSetter.call(input2, '');
            input2.dispatchEvent(new Event('input', { bubbles: true }));
        }
    });
    await delay(100);
    await page.type('[data-testid="bulk-find-textarea"]', 'John\n\nRahul');
    await page.type('[data-testid="bulk-replace-textarea"]', 'Smith\nMiddle\nSharma');
    await page.click('[data-testid="bulk-generate-btn"]');
    await delay(200);
    errText = await page.$eval('[data-testid="bulk-error"]', el => el.textContent).catch(() => '');
    assert(errText.includes('Blank lines are not allowed'), "BFR-022: Blank line validation works");

    // Blank Replace Value (BFR-024)
    await page.evaluate(() => {
        const input1 = document.querySelector('[data-testid="bulk-find-textarea"]');
        const input2 = document.querySelector('[data-testid="bulk-replace-textarea"]');
        if (input1) {
            const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
            nativeInputValueSetter.call(input1, '');
            input1.dispatchEvent(new Event('input', { bubbles: true }));
        }
        if (input2) {
            const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
            nativeInputValueSetter.call(input2, '');
            input2.dispatchEvent(new Event('input', { bubbles: true }));
        }
    });
    await delay(100);
    await page.type('[data-testid="bulk-find-textarea"]', 'old-api');
    await page.click('[data-testid="bulk-generate-btn"]');
    await delay(200);
    // Should NOT have an error
    let hasError = await page.$('[data-testid="bulk-error"]');
    assert(hasError === null, "BFR-024: Blank replacement value is allowed (no error)");
    
    // Empty Find List (BFR-025)
    await page.evaluate(() => {
        const input1 = document.querySelector('[data-testid="bulk-find-textarea"]');
        const input2 = document.querySelector('[data-testid="bulk-replace-textarea"]');
        if (input1) {
            const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
            nativeInputValueSetter.call(input1, '');
            input1.dispatchEvent(new Event('input', { bubbles: true }));
        }
        if (input2) {
            const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
            nativeInputValueSetter.call(input2, '');
            input2.dispatchEvent(new Event('input', { bubbles: true }));
        }
    });
    await delay(100);
    await page.type('[data-testid="bulk-replace-textarea"]', 'new-api');
    await page.click('[data-testid="bulk-generate-btn"]');
    await delay(200);
    errText = await page.$eval('[data-testid="bulk-error"]', el => el.textContent).catch(() => '');
    assert(errText.includes('Find list cannot be empty') || errText.includes('same number'), "BFR-025: Empty find list fails validation");

    // Valid lists
    await page.evaluate(() => {
        const input1 = document.querySelector('[data-testid="bulk-find-textarea"]');
        const input2 = document.querySelector('[data-testid="bulk-replace-textarea"]');
        if (input1) {
            const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
            nativeInputValueSetter.call(input1, '');
            input1.dispatchEvent(new Event('input', { bubbles: true }));
        }
        if (input2) {
            const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, "value").set;
            nativeInputValueSetter.call(input2, '');
            input2.dispatchEvent(new Event('input', { bubbles: true }));
        }
    });
    await delay(100);
    await page.type('[data-testid="bulk-find-textarea"]', 'John\nRahul');
    await page.type('[data-testid="bulk-replace-textarea"]', 'Smith\nSharma');
    await page.click('[data-testid="bulk-generate-btn"]');
    await delay(200);
    
    let useRulesBtn = await page.$('[data-testid="bulk-use-rules-btn"]');
    assert(useRulesBtn !== null, "BFR-020: Valid lists show preview button");

    // Apply rules
    await useRulesBtn.click();
    await delay(200);
    
    rules = await page.$$eval('[data-testid="rule-row"]', els => els.length);
    assert(rules >= 2, "BFR-023: Rules appended to manual editor");

    // BFR-013: Replace All
    await page.click('[data-testid="replace-all-btn"]');
    await delay(200);
    
    // BFR-014: Download button appears
    let downloadBtn = await page.$('[data-testid="download-btn"]');
    assert(downloadBtn !== null, "BFR-013/014: Replace All shows download button");

    // BFR-015: Clear All
    await page.click('[data-testid="clear-all-btn"]');
    await delay(200);
    fileItems = await page.$$eval('[data-testid^="file-item-"]', els => els.length);
    assert(fileItems === 0, "BFR-015: Clear all works");

    // BFR-016: Empty Find validation
    await uploadFiles([{ name: 'empty.txt', content: 'test' }]);
    let replaceBtn = await page.$('[data-testid="replace-all-btn"]');
    await replaceBtn.click();
    await delay(200);
    errText = await page.$eval('[data-testid="error-message"]', el => el.textContent).catch(() => '');
    assert(errText.includes('cannot be empty'), "BFR-016: Empty Find validation");

  } catch (err) {
    console.error("Test execution error:", err);
  } finally {
    await browser.close();
  }

  console.log(`\nTests finished. Passed: ${passed}, Failed: ${failed}`);
  process.exit(failed > 0 ? 1 : 0);
}

runBulkTests();
