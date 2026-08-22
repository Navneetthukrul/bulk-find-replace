# ReplaceKit Project Context

## 1. Product Vision

ReplaceKit is a developer-focused web utility platform, similar in concept to an "I Love PDF" style website, but focused on developer files and data formats.

The long-term goal is to provide useful tools for JSON, CSV, YAML, text/config files and bulk file processing.

The product should prioritize:
- Developer-friendly UX
- Fast browser-based processing
- Privacy
- Client-side processing whenever practical
- SEO-friendly individual tool pages
- Simple, professional UI
- Reusable architecture
- Strong automated browser testing

## 2. Current Architecture

- **Framework**: Next.js 16.3.1 (App Router architecture).
- **Language**: TypeScript.
- **Styling**: Tailwind CSS v4 (using CSS variables for theming).
- **Icons**: `lucide-react`.
- **Theming**: `next-themes` for Dark/Light mode toggles.
- **Shared Components**: Reusable components such as `JsonEditor`, `JsonFileDrop`, `ToolCard`, and a command palette system.
- **Utility Libraries**: Standard native browser APIs (FileReader, Clipboard API) are heavily leveraged to keep dependencies light.
- **Directory Structure**: 
  - `/src/app`: Page components and routing.
  - `/src/components`: UI components (`/json` for tool-specific ones, generic ones at root).
  - `/src/lib`: Core utility functions and engines (like `json-diff.ts`).
  - `/tests`: Markdown test specifications and Puppeteer runners.
- **Client-Side Processing**: All currently implemented tools handle processing completely on the client side (in-browser) using React state.
- **Design System Decisions**: Emphasis on minimal, high-contrast UI, relying on utility classes for precise responsiveness.

## 3. Implemented Tools

### JSON Formatter
- **Route**: `/tools/json-formatter`
- **Purpose**: Format, indent, and prettify JSON strings.
- **Important Components**: `JsonEditor`, `JsonFileDrop`.
- **Utility Functions**: Built-in `JSON.stringify` and `JSON.parse`.
- **Important Behavior**: Handles indentation sizes (2, 4, tab), gracefully traps errors, does not format aggressively on every keystroke, supports file drop/upload.
- **Known Limitations**: Extremely large payloads (e.g., 50MB+) may experience native browser stringify slowdowns.
- **Test Specification**: `/tests/json-formatter.md`

### JSON Validator
- **Route**: `/tools/json-validator`
- **Purpose**: Lint and validate JSON syntax, catching errors.
- **Important Components**: `JsonEditor`, `JsonFileDrop`.
- **Utility Functions**: Built-in `JSON.parse` with custom error catch blocks to provide details.
- **Important Behavior**: Pinpoints errors visually in the UI without modifying user inputs.
- **Known Limitations**: Standard `JSON.parse` errors may lack exact line number precision across all browser engines.
- **Test Specification**: `/tests/json-validator.md`

### JSON Minifier
- **Route**: `/tools/json-minifier`
- **Purpose**: Compress JSON by removing all unnecessary whitespace and newlines.
- **Important Components**: `JsonEditor`, `JsonFileDrop`.
- **Utility Functions**: `JSON.stringify(..., null, 0)`.
- **Important Behavior**: Shows compression statistics (bytes saved, percentage), preserves exact structural strings.
- **Known Limitations**: N/A
- **Test Specification**: `/tests/json-minifier.md`

### JSON Diff
- **Route**: `/tools/json-diff`
- **Purpose**: Compare two JSON payloads conceptually and structurally (ignoring key order).
- **Important Components**: `JsonEditor`, `JsonFileDrop`.
- **Utility Functions**: `compareJsonStrings`, `compareValues` (in `/src/lib/json/json-diff.ts`).
- **Important Behavior**: Categorizes as ADDED, REMOVED, CHANGED. Highlights paths (including array indexes).
- **Known Limitations**: Arrays are diffed index-by-index strictly (doesn't search for moved items).
- **Test Specification**: `/tests/json-diff.md`

## 4. QA Status

**Current Scope**: Functional assertions and boundary validations for JSON tools.

- **P0**: 58/58 passed
- **P1**: 72/72 passed after fixes
- **P2**: 35/35 passed
- **Total**: 165/165 final assertions passed

**Important Testing Details**:
- Puppeteer is configured through Gemini CLI for browser automated testing.
- Browser tests are stored in `/tests` and run via custom Node scripts (e.g., `qa-runner-p2.js`).
- P0/P1/P2 testing has been performed completely for the JSON suite.
- The P1 mobile overflow issue (on small viewports) was fixed via robust CSS constraints.
- Previous indentation failures were caused by the test selecting the wrong native select value, which was fixed.
- The QA runner was cleaned and updated in ESLint `globalIgnores` so lint reports zero errors/warnings.
*(Note: While the tested P0/P1/P2 scope has passed, the product is an evolving codebase and is not claimed to be completely defect-free overall.)*

## 5. UI/UX Principles

- **Focus**: Developer-focused, IDE/tool-oriented rather than marketing-heavy.
- **Aesthetic**: Clean, minimal, attractive, professional.
- **Typography**: `Inter` for general UI text; `JetBrains Mono` for code, data, and editors.
- **Colors**: Indigo/blue accents with standard Tailwind grays/zinc surfaces.
- **Theme**: Seamless Light/dark mode support.
- **Responsiveness**: Broad support for Desktop, tablet, and mobile (preventing horizontal overflows).
- **Accessibility**: Keyboard-friendly interactions.
- **Navigation**: Command palette implemented with `Ctrl/Cmd + K` for quick actions and routing.

## 6. Testing Rule

**IMPORTANT DEVELOPMENT RULE:**
Whenever a new function, component, feature, or tool is created:

1. Implement it.
2. Create/update the relevant Markdown test specification.
3. Define P0/P1/P2 test cases where appropriate.
4. Run `lint`.
5. Run `build`.
6. Run browser tests through Puppeteer.
7. Fix failures.
8. Run regression tests.

**Never create functionality without corresponding test coverage.**

## 7. Current Homepage Roadmap

Currently implemented:
- **JSON**: JSON Formatter, JSON Validator, JSON Minifier, JSON Diff.

Planned/not yet implemented:
- **Converters**: JSON → CSV, CSV → JSON, JSON → YAML, YAML → JSON.
- **Bulk**: Bulk Find & Replace, Project Transformer.

**IMPORTANT**: 
Do not make unfinished tools appear as fully functional production tools. Planned tools must be marked "Coming soon" or explicitly disabled until implemented.

## 8. Immediate Development Priority

The next major feature is: **Bulk Find & Replace**

This is currently considered the core differentiating product feature.

**Intended Concept**: Users can upload multiple developer files, define multiple Find → Replace rules, preview the changes, apply them across files, and download the processed files.

**Likely Supported Formats**:
- JSON
- TXT
- XML
- CSV
- ENV/config-like text files

**Potential Functionality**:
- Multiple files and multiple replacement rules
- Find & Replace (with Case-sensitive and Regex options)
- Preview changes
- Process all files
- Download individual results or ZIP all results
- Client-side processing

**IMPORTANT**: Do not implement the entire Bulk Find & Replace feature blindly. First define its architecture, UX, data model, and test plan. Project Transformer is NOT currently a development priority.

## 9. Security / Privacy Principle

Where practical, file processing should happen entirely in the browser. Do not send user files to a backend unless explicitly required and approved. 

The product should clearly communicate to users that files remain on their local device when processing is client-side.

## 10. Current Development Status

- Four JSON tools implemented.
- P0/P1/P2 QA completed for current JSON functionality.
- 165/165 final assertions passing.
- Homepage and shared UI architecture established.
- Bulk Find & Replace not yet implemented.
- Converter tools not yet implemented.
- Project Transformer not yet implemented.
- Production deployment has NOT yet happened.
- SEO/production audit has NOT yet been completed.

## 11. Development Rules

Before changing existing functionality:
- Inspect existing implementation.
- Reuse shared components.
- Avoid unnecessary dependencies.
- Avoid duplicating logic.
- Preserve existing functionality.
- Run regression tests after shared-component changes.

Do not claim something works without actually testing it.
Do not create fake implementations or placeholder functionality that appears production-ready.
Do not build future roadmap features unless explicitly requested.

## 12. Session Continuity

At the end of every significant development session:

Update this file with:
- Completed work
- Files created/modified
- Architectural decisions
- Test results
- Known issues
- Current next priority

Keep this document concise and factual. After creating or modifying this document, inspect it and confirm that it accurately represents the current codebase.
