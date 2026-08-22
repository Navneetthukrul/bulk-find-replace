# Browser Test Specification: Bulk Find & Replace

This document defines the test cases for the Bulk Find & Replace application, designed to be executed via Chrome DevTools MCP.

## P0 (Critical functionality)

### ID: BFR-P0-001
**Priority:** P0  
**Purpose:** Ensure page loads successfully  
**Preconditions:** Application is deployed/running locally  
**Steps:**
1. Navigate to the application URL.
2. Wait for the page to fully load.
**Expected Result:**
- The page renders without errors.
- The H1 title "Bulk Find & Replace Multiple Files Online" is visible.
- The file upload drop zone is visible.

### ID: BFR-P0-002
**Priority:** P0  
**Purpose:** Verify multiple files can be selected and displayed  
**Preconditions:** Application is loaded  
**Steps:**
1. Click the file upload area or use DevTools to set files on the `<input type="file">`.
2. Select three supported text files (e.g., test1.txt, test2.js, test3.html).
3. Check the file list display.
**Expected Result:**
- All three files appear in the file list.
- File sizes and names are displayed correctly.
- The total size indicator updates.

### ID: BFR-P0-003
**Priority:** P0  
**Purpose:** Replace text across multiple files and verify output  
**Preconditions:** Application is loaded, three text files are added  
**Steps:**
1. Add a replacement rule using the manual editor:
   - Find: `old-domain.com`
   - Replace: `new-domain.com`
2. Click "Preview Changes".
3. Verify the summary shows the correct number of files changing.
4. Click "Replace All".
5. Click "Download Processed".
**Expected Result:**
- All selected files containing the search string are modified.
- Every occurrence of `old-domain.com` is replaced with `new-domain.com`.
- Unrelated content remains unchanged.
- A ZIP file is generated and downloaded.

### ID: BFR-P0-004
**Priority:** P0  
**Purpose:** Sequential Replacement Chain Behavior  
**Preconditions:** Application is loaded, file contains text `foo`  
**Steps:**
1. Add Rule 1: Find=`foo`, Replace=`bar`
2. Add Rule 2: Find=`bar`, Replace=`baz`
3. Preview and Apply.
**Expected Result:**
- The text `foo` becomes `bar` from Rule 1, and then `bar` is matched by Rule 2 and becomes `baz`. The final output is `baz`. (This verifies the deterministic sequential nature of the engine).

### ID: BFR-P0-005
**Priority:** P0  
**Purpose:** Total File Size Limit Enforcement  
**Preconditions:** Application is loaded  
**Steps:**
1. Add a single file that is 51 MB, or multiple files totaling 51 MB.
**Expected Result:**
- An error banner "Total file size exceeds the 50 MB limit" is displayed.
- The Preview and Replace All buttons are disabled.

## P1 (Important edge cases and UX)

### ID: BFR-P1-001
**Priority:** P1  
**Purpose:** Empty and identical find/replace values  
**Preconditions:** Application is loaded, file contains text `test`  
**Steps:**
1. Add Rule 1: Find=`test`, Replace=`test` (Identical)
2. Add Rule 2: Find=`test2`, Replace=`` (Empty replace)
3. Preview and Apply.
**Expected Result:**
- Identical rule correctly counts the occurrences of `test` but does not mutate the file.
- Empty replace rule correctly deletes occurrences of `test2`.

### ID: BFR-P1-002
**Priority:** P1  
**Purpose:** Unsupported file types are skipped  
**Preconditions:** Application is loaded  
**Steps:**
1. Attempt to add `.exe`, `.png`, and `.pdf` files along with a `.txt` file.
**Expected Result:**
- Only the `.txt` file is added to the valid files list.
- A "Skipped files" section appears detailing the unsupported files.

### ID: BFR-P1-003
**Priority:** P1  
**Purpose:** File name collisions handled in ZIP  
**Preconditions:** Application is loaded  
**Steps:**
1. Add two files from different folders but with the exact same name (e.g., `index.html` and `index.html`).
2. Apply changes and download.
**Expected Result:**
- The ZIP downloads successfully.
- Inside the ZIP, the second file is renamed safely (e.g., `index (2).html`) preventing overwrite.

### ID: BFR-P1-004
**Priority:** P1  
**Purpose:** Mobile layout responsiveness  
**Preconditions:** Application is loaded  
**Steps:**
1. Resize viewport to 375x667 (mobile size).
**Expected Result:**
- The layout stacks vertically.
- No horizontal scrolling is introduced.
- Rules input fields stack properly.
- Buttons remain tappable.

### ID: BFR-P1-005
**Priority:** P1  
**Purpose:** Error state when Find is empty  
**Preconditions:** Application is loaded, 1 valid file added  
**Steps:**
1. Leave the Find input entirely blank.
2. Click "Preview Changes".
**Expected Result:**
- Preview is blocked and an error "Find value cannot be empty in any rule" is displayed.

## P2 (SEO, content, secondary functionality)

### ID: BFR-P2-001
**Priority:** P2  
**Purpose:** SEO and structured data verification  
**Preconditions:** Application is loaded  
**Steps:**
1. Inspect the DOM for `<title>`, `<meta name="description">`, and Open Graph tags.
2. Inspect the DOM for `<script type="application/ld+json">`.
**Expected Result:**
- Exactly one `<h1>` tag exists.
- SEO metadata is present and accurate without keyword stuffing.
- JSON-LD WebApplication schema is present.

### ID: BFR-P2-002
**Priority:** P2  
**Purpose:** Trust Pages and Footer links  
**Preconditions:** Application is loaded  
**Steps:**
1. Click on "About", "Privacy Policy", "Terms of Service", and "Contact" links in the footer.
**Expected Result:**
- All pages load successfully.
- Privacy policy explicitly mentions client-side processing and lack of server uploads.

### ID: BFR-P2-003
**Priority:** P2  
**Purpose:** AdSense placeholder slots  
**Preconditions:** Application is loaded  
**Steps:**
1. Inspect the main page for `.ad-slot` elements.
**Expected Result:**
- 4 ad slot placeholders are rendered.
- They are placed outside of the core interactive tool area, preventing accidental clicks.
