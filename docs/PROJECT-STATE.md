# Project State

## Product
A developer-focused web toolkit where useful developer utilities are available under one umbrella. All processing remains client-side wherever the current architecture supports it, prioritizing privacy, performance, and developer experience.

## Current Architecture
- **Next.js App Router**: Powers the routing, SSR (where applicable), and structure.
- **TypeScript**: Used universally for robust type checking and developer experience.
- **Tailwind/CSS design system**: Consistent token-based design system managing responsive spacing, colors, themes, and layouts.
- **Centralized tool registry**: Drives the `/tools` grid, category links, and the Command Palette dynamically based on a unified configuration.
- **DevHub layout**: Shared layout wrapper providing consistent header, sidebar, mobile navigation, and command palette.
- **Sidebar**: Desktop-sticky, mobile-drawer navigation showing Workspaces and Categories.
- **Command Palette**: Global search triggered by `Ctrl+K` (`Cmd+K`) or clicking the search bar. Filters active tools by name, description, and keywords.
- **Shared components**: Reusable UI elements (cards, buttons, alerts, textareas, drop-zones).
- **Client-side processing philosophy**: All core data manipulation algorithms execute locally in the browser.

## Active Tools

### 1. JSON Formatter
- **Route**: `/tools/json-formatter`
- **Purpose**: Prettify and format JSON strings with indentation control.
- **Shared Components**: JSONEditor, copy/paste utilities.
- **Engine**: Client-side JSON parsing (`JSON.parse` and `JSON.stringify`).
- **Client-side behavior**: 100% local.
- **Test Specification**: `tests/json-tools.md`
- **QA Status**: Passing.

### 2. JSON Validator
- **Route**: `/tools/json-validator`
- **Purpose**: Lint and validate JSON, displaying exact syntax error messages and locations.
- **Shared Components**: JSONEditor, Error display components.
- **Engine**: Custom parser logic wrapping standard JSON methods to extract validation traces.
- **Client-side behavior**: 100% local.
- **Test Specification**: `tests/json-tools.md`
- **QA Status**: Passing.

### 3. JSON Minifier
- **Route**: `/tools/json-minifier`
- **Purpose**: Compress JSON by stripping whitespace.
- **Shared Components**: JSONEditor.
- **Engine**: Client-side JSON parsing.
- **Client-side behavior**: 100% local.
- **Test Specification**: `tests/json-tools.md`
- **QA Status**: Passing.

### 4. JSON Diff
- **Route**: `/tools/json-diff`
- **Purpose**: Compare two JSON objects side-by-side to highlight additions, deletions, and modifications.
- **Shared Components**: Dual editors, custom diff-viewer.
- **Engine**: Client-side recursive object comparison utility.
- **Client-side behavior**: 100% local.
- **Test Specification**: `tests/json-tools.md`
- **QA Status**: Passing.

### 5. Bulk Find & Replace
- **Route**: `/tools/bulk-replace`
- **Purpose**: Apply sequential literal text replacement rules across multiple files simultaneously.
- **Shared Components**: Drag-and-drop zone, file list manager, summary displays.
- **Engine**: `src/lib/bulk-replace-engine.ts`
- **Client-side behavior**: 100% local processing; no server uploads.
- **Test Specification**: `tests/bulk-find-replace.md`
- **QA Status**: Passing.

## Bulk Find & Replace

### File processing
- **100% browser-side processing**: Files are read into memory, modified, and zipped entirely client-side.
- **50 MB TOTAL file limit**: Hard size limit across all selected files.
- **Supported extensions**: Explicitly allows Code, Data/Config, and Web/Text files.
- **Unsupported file behavior**: Binary files (like .png or .exe) are immediately rejected but not silently discarded.
- **Skipped files UI**: Unrecognized files are listed under "Skipped files" with an "Unsupported file type" label.
- **Size indicator**: Real-time progress metric showing bytes consumed against the 50 MB limit.

### Replacement modes
- **Manual Editor**: Add rules one by one using separate Find and Replace inputs.
- **Bulk Pair Lists**: Add multiple rules at once by matching two plain-text lists line by line.

### Bulk Pair Lists
- **List A → List B**: Transforms "Find" list into rules mapped against a "Replace" list.
- **Equal list count requirement**: Both lists must have the exact same number of lines.
- **Index-to-index pairing**: Line 1 maps to Line 1, Line 2 to Line 2, etc.
- **Blank Find values rejected**: Cannot replace an empty string.
- **Blank Replace values allowed**: Results in intentional deletion of the Find string.
- **Trailing newline handling**: Automatically stripped to prevent phantom blank rules.
- **Existing manual rule behavior**: Generated rules gracefully append to any existing valid manual rules.

### Preview
- Shows the list of pending files, calculating and displaying the exact number of replacements scheduled for each file. Files with zero changes are clearly flagged as "No changes".

### Download
- **Single file behavior**: Triggers standard browser download for the modified file, preserving the original extension.
- **Multiple file ZIP behavior**: Generates a local ZIP archive containing all processed files.
- **Filename collision handling**: Appends `(1)`, `(2)` before the extension for files bearing identical names.

### Known limitations
- Processing extremely massive text files (approaching the 50MB limit in a single file) may momentarily lag the main thread due to synchronous string replacements, but is prevented from crashing the server since execution is local.

## UI/UX
- **DevHub visual system**: Aesthetic grounded in functionality, relying on robust typography, standardized spacing, predictable borders, Lucide icons, and a premium dark/light token system.
- **Responsive breakpoints**: Tailored for desktop (1440px), tablet (768px), and mobile (390px) without horizontal overflow.
- **Desktop sidebar**: Sticky navigation detailing categories and utilities.
- **Mobile drawer**: Swipeable backdrop-powered navigation.
- **Command Palette**: Rapid global search and navigation overlay accessible via shortcut.
- **Keyboard navigation**: Standard focus states, Escape to close, Ctrl+K/Cmd+K to open palette.
- **Dark/light mode**: Fully supported via `next-themes` and Tailwind CSS variables.
- **Developer-focused design principles**: No fluff. Dense, utilitarian UI emphasizing hierarchy and data visibility over trendy gimmicks.

## Testing
- **Markdown test specifications**: Every tool and feature is documented in `tests/` with exact Step/Expected requirements.
- **Puppeteer browser automation**: Robust end-to-end headless browser assertions checking real DOM nodes, states, and file uploads.
- **P0/P1/P2 testing**: Organized suite tracking core layout, basic tools, and complex tools separately.
- **Regression testing**: Automated test runner looping through all legacy test suites to prevent breakages.
- **Linting & Build**: Enforced strictly before registering any new tool.

**Latest Known Results:**
- **JSON tools**: 165/165 tests passing.
- **Bulk/UI final QA**: 42/42 passing.
- *Note:* The latest QA infrastructure issue was related to the `next-themes` system default setting requiring a double click to initially register the 'dark' class, and was fixed in the test runner script; the application code was functionally correct.

## Important Product Rules
1. Do not add placeholder tools to the active registry.
2. Only register a tool after implementation and QA.
3. Reuse existing architecture and components wherever possible.
4. Do not rewrite stable tools unnecessarily.
5. Every new function must have test cases.
6. Every new tool must have a Markdown test specification.
7. Every new tool must have automated browser QA.
8. Run lint and build after implementation.
9. Run regression tests after adding a tool.
10. Keep processing client-side unless there is a strong product reason not to.
11. Do not add functionality merely because it exists in the original UI mockup.
12. Add tools based on actual developer utility and demand.
13. Keep the UI consistent with the existing DevHub design.
14. Do not change working functionality without evidence of a problem.

## Development Workflow
INSPECT → PLAN → IMPLEMENT → ADD TEST SPEC → AUTOMATED QA → FIX CONFIRMED DEFECTS → REGRESSION → LINT → BUILD → REGISTER TOOL

A tool should only become active in the tool registry after passing QA.

## Next Development Decision
Do NOT select or implement the next tool automatically.

The next tool must first be evaluated based on:
- developer demand
- search demand
- frequency of use
- competition
- implementation complexity
- client-side feasibility
- SEO opportunity
- usefulness alongside the existing tools
