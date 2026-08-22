const puppeteer = require('puppeteer');
const fs = require('fs');

async function verifyClientSide() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  const requests = [];
  page.on('request', request => {
    const url = request.url();
    if (!url.startsWith('http://localhost') && !url.startsWith('data:')) {
      requests.push(url);
    }
  });

  const routes = [
    '/',
    '/privacy',
    '/terms',
    '/tools/base64',
    '/tools/bulk-replace',
    '/tools/curl-builder',
    '/tools/json-diff',
    '/tools/json-formatter',
    '/tools/json-minifier',
    '/tools/json-to-csharp',
    '/tools/json-to-typescript',
    '/tools/json-validator',
    '/tools/jwt-decoder',
    '/tools/regex-tester',
    '/tools/sql-formatter'
  ];

  for (const route of routes) {
    await page.goto(`http://localhost:3000${route}`, { waitUntil: 'networkidle0' });
  }

  await browser.close();

  if (requests.length > 0) {
    console.error("Found external network requests:", requests);
    process.exit(1);
  } else {
    console.log("Success: All processing remains client-side. No external network requests found.");
  }
}

verifyClientSide().catch(console.error);
