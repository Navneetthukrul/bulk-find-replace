import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // QA tools:
    "qa-runner.js",
    "qa-runner-ui.js",
    "qa-runner-bulk.js",
    "test-wrapper.js",
    "tests/**/*.js"
  ]),
]);

export default eslintConfig;
