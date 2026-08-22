const puppeteer = require('puppeteer');

async function runUITests() {
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

  console.log("Running UI/UX Tests...");

  try {
    await page.goto('http://localhost:3000/');
    await delay(1000);

    // Desktop Viewport
    await page.setViewport({ width: 1440, height: 900 });
    assert(await page.evaluate(() => !document.body.style.overflow), "UI-025 (Setup): Body scroll is normal initially");

    // Command Palette - Open with Ctrl+K
    await page.keyboard.down('Control');
    await page.keyboard.press('k');
    await page.keyboard.up('Control');
    await delay(300);
    
    let paletteVisible = await page.$('[data-testid="command-palette-input"]') !== null;
    assert(paletteVisible, "UI-015: Command palette opens with Ctrl+K");

    if (paletteVisible) {
      assert(await page.evaluate(() => document.body.style.overflow === 'hidden'), "UI-025: Background scroll prevented");

      // Search filtering
      await page.type('[data-testid="command-palette-input"]', 'diff');
      await delay(200);
      let items = await page.$$eval('[role="option"]', els => els.map(e => e.textContent));
      assert(items.length === 1 && items[0].includes('JSON Diff'), "UI-022: Search filtering works");

      // Arrow navigation
      // Clear input first so we have multiple items
      await page.evaluate(() => {
        const input = document.querySelector('[data-testid="command-palette-input"]');
        const nativeSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, "value").set;
        nativeSetter.call(input, '');
        input.dispatchEvent(new Event('input', { bubbles: true }));
      });
      await delay(200);
      // React 18+ might need a space and backspace
      await page.focus('[data-testid="command-palette-input"]');
      await page.keyboard.press('Backspace');
      await delay(200);
      
      await page.keyboard.press('ArrowDown');
      await delay(100);
      let selectedId = await page.evaluate(() => {
        const el = document.querySelector('[aria-selected="true"]');
        return el ? el.id : null;
      });
      if (selectedId !== 'command-item-1') console.log('Actual selectedId:', selectedId);
      assert(selectedId === 'command-item-1', "UI-016: Arrow navigation works");

      // Empty results
      await page.evaluate(() => document.querySelector('[data-testid="command-palette-input"]').value = '');
      await page.type('[data-testid="command-palette-input"]', 'asdfghjkl');
      await delay(200);
      let emptyVisible = await page.$('[data-testid="command-palette-empty"]') !== null;
      assert(emptyVisible, "UI-024: Empty results state visible");

      // Close with Escape
      await page.keyboard.press('Escape');
      await delay(300);
      paletteVisible = await page.$('[data-testid="command-palette-input"]') !== null;
      assert(!paletteVisible, "UI-018: Escape closes command palette");
    }

    // Mobile Viewport
    await page.setViewport({ width: 390, height: 844 });
    await delay(500);

    // Horizontal overflow check
    let overflow = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
    assert(!overflow, "UI-014/030: No horizontal overflow on mobile");

    // Mobile Sidebar
    let menuBtn = await page.$('[data-testid="mobile-menu-btn"]');
    if (menuBtn) {
      await menuBtn.click();
      await delay(300);
      let sidebarVisible = await page.$('[data-testid="sidebar"]') !== null;
      let backdropVisible = await page.$('[data-testid="mobile-sidebar-backdrop"]') !== null;
      assert(sidebarVisible && backdropVisible, "UI-026: Mobile menu opens and backdrop visible");

      // Close by clicking backdrop
      await page.evaluate(() => document.querySelector('[data-testid="mobile-sidebar-backdrop"]').click());
      await delay(300);
      backdropVisible = await page.$('[data-testid="mobile-sidebar-backdrop"]') !== null;
      assert(!backdropVisible, "UI-028: Menu closes on outside click");
      
      // Open again and close with Esc
      await menuBtn.click();
      await delay(300);
      await page.keyboard.press('Escape');
      await delay(300);
      backdropVisible = await page.$('[data-testid="mobile-sidebar-backdrop"]') !== null;
      assert(!backdropVisible, "UI-029: Menu closes with Escape");
    } else {
      console.log("❌ FAIL: UI-026 Mobile menu button not found");
      failed++;
    }

  } catch (err) {
    console.error("Test execution error:", err);
  } finally {
    await browser.close();
  }

  console.log(`\nTests finished. Passed: ${passed}, Failed: ${failed}`);
  process.exit(failed > 0 ? 1 : 0);
}

runUITests();
