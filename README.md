# Bulk Find & Replace

A standalone, fast, and completely private multi-file search and replace tool built with Next.js and React.

## Purpose
This tool allows users to apply bulk text replacements across multiple files simultaneously. It operates entirely locally in the browser, ensuring user privacy and data security. 

## Key Features
- **Multi-File Processing:** Select and process multiple files at once.
- **Client-Side Processing:** All parsing, replacement, and ZIP generation happens locally. No files are uploaded to any server.
- **Bulk Pair Lists:** Easily import large lists of find/replace rules.
- **Safe Previews:** See how many replacements will occur before applying changes.
- **ZIP Download:** Automatically packages processed files into a neat ZIP archive.
- **SEO Optimized:** Built with a semantic structure designed to rank for multi-file editing keywords.

## Supported File Types
The tool parses text securely. It natively accepts standard code files (`.js`, `.py`, `.java`, `.ts`), data formats (`.json`, `.xml`, `.yaml`, `.csv`), web documents (`.html`, `.css`, `.md`), and more. 

## Architecture
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **ZIP Generation:** JSZip
- **Deployment:** Vercel, Cloudflare Pages, or Netlify (Static/Serverless)

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Production Build & Deployment

To build the application for production:
```bash
npm run build
npm run start
```

### Deployment Configuration
The project is configured as a standard Next.js application. It can be easily deployed to Vercel with zero configuration. For Cloudflare Pages, you can use the `@cloudflare/next-on-pages` adapter if utilizing edge runtime, or export as a static site.

**To configure your production domain:**
1. Deploy to your hosting provider (e.g., Vercel).
2. Add your custom domain (e.g., `bulkfindreplace.com`) in the project settings.
3. Update the canonical URLs in `src/app/page.tsx` and `public/sitemap.xml` with your production domain.

## SEO & AdSense Configuration

### AdSense
AdSense placeholder slots (`.ad-slot`) are strategically positioned in `src/app/page.tsx`. 
To configure AdSense:
1. Obtain your AdSense verification script and place it in the `<head>` of `src/app/layout.tsx`.
2. Replace the `.ad-slot` divs with actual `<ins class="adsbygoogle">` tags provided by Google AdSense.
3. Ensure auto-ads do not obscure the main application UI.

### Analytics
To add Google Analytics:
1. Include the GTAG script in `src/app/layout.tsx`.
2. The privacy policy already discloses standard analytics usage. 

## Testing
Test specifications are located in `/tests/bulk-find-replace.md`. These outline P0, P1, and P2 browser tests designed to be executed manually or via Chrome DevTools MCP.
