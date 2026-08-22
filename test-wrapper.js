const { spawn, execSync } = require('child_process');
const http = require('http');

const server = spawn('cmd.exe', ['/c', 'npm run start'], { stdio: 'inherit' });

function checkServer() {
  return new Promise((resolve) => {
    const req = http.get('http://localhost:3000/', (res) => {
      if (res.statusCode === 200) {
        resolve(true);
      } else {
        resolve(false);
      }
    }).on('error', () => resolve(false));
    req.end();
  });
}

async function run() {
  console.log("Waiting for server to start...");
  let ready = false;
  for (let i = 0; i < 30; i++) {
    ready = await checkServer();
    if (ready) break;
    await new Promise(r => setTimeout(r, 1000));
  }

  if (!ready) {
    console.error("Server failed to start.");
    server.kill();
    process.exit(1);
  }

  console.log("Server ready. Running tests...");
  let failed = false;

  const tests = [
    'node qa-runner-ui.js',
    'node qa-runner-nav.js',
    'node qa-runner-user.js',
    'node qa-runner.js',
    'node tests/qa-runner-p1.js',
    'node tests/qa-runner-p2.js',
    'node qa-runner-bulk.js',
    'node qa-runner-jwt.js',
    'node qa-runner-regex.js',
    'node qa-runner-sql.js',
    'node qa-runner-json-to-csharp.js',
    'node qa-runner-json-to-typescript.js',
    'node qa-runner-curl.js',
    'node verify-client-side.js'
  ];

  for (const test of tests) {
    console.log(`\n--- Running ${test} ---`);
    try {
      execSync(`cmd.exe /c ${test}`, { stdio: 'inherit' });
    } catch (e) {
      console.error(`\nTest failed: ${test}`);
      failed = true;
    }
  }

  console.log("Killing server...");
  server.kill();
  if (failed) {
    console.error("Some tests failed.");
    process.exit(1);
  } else {
    console.log("All tests passed!");
    process.exit(0);
  }
}

run();
