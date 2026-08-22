import { BulkReplaceApp } from "@/components/bulk-replace/bulk-replace-app";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bulk Find & Replace Multiple Files Online | Free Tool",
  description: "Bulk find and replace text across multiple files locally in your browser. Edit multiple files at once. Free, fast, and secure tool for Windows, Mac, and Linux.",
  openGraph: {
    title: "Bulk Find & Replace Multiple Files Online",
    description: "Bulk find and replace text across multiple files locally in your browser.",
    type: "website",
  }
};

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center pb-24">
      {/* Intro section */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8 text-center md:py-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Bulk Find & Replace Multiple Files Online</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Make the same text changes across many files at once. Drop your files, set your rules, and process everything locally in your browser.
        </p>
      </section>

      {/* Ad Slot 1 */}
      <div className="w-full max-w-4xl mx-auto px-4 mb-8 text-center">
        <div className="ad-slot min-h-[90px] bg-surface border border-border border-dashed flex items-center justify-center text-muted-foreground/50 text-sm rounded" data-ad-slot="PLACEHOLDER_1">
          Advertisement
        </div>
      </div>

      {/* The Tool */}
      <div id="tool" className="w-full mb-16">
        <BulkReplaceApp />
      </div>

      {/* Ad Slot 2 */}
      <div className="w-full max-w-4xl mx-auto px-4 mb-16 text-center">
        <div className="ad-slot min-h-[90px] bg-surface border border-border border-dashed flex items-center justify-center text-muted-foreground/50 text-sm rounded" data-ad-slot="PLACEHOLDER_2">
          Advertisement
        </div>
      </div>

      {/* SEO Content Section */}
      <article className="w-full max-w-3xl mx-auto px-4 prose prose-slate dark:prose-invert">
        <h2>Bulk Find & Replace Tool</h2>
        <p>
          Need to replace text in multiple files online? You've come to the right place. Our <strong>bulk find and replace tool</strong> makes it easy to make the same exact text changes across dozens, hundreds, or even thousands of files instantly.
        </p>

        <h3>What is bulk find and replace?</h3>
        <p>
          Bulk find and replace (also known as batch text replacement) is a technique for updating strings of text across multiple documents at the same time. Instead of opening each file, searching for a word, typing the replacement, saving the file, and moving to the next one, you apply a set of rules to a large batch of files automatically.
        </p>

        <h3>Why use bulk find and replace?</h3>
        <p>
          If you need to update a company name, change an API URL, or migrate domains across a large project, doing it manually is tedious and error-prone. By using a multi-file tool, you save hours of work. Plus, our tool runs entirely in your web browser—your files are never uploaded to a server, ensuring complete privacy and maximum speed.
        </p>

        <h2>How to Find and Replace Text in Multiple Files</h2>
        <p>Using our bulk file editor is simple:</p>
        <ol>
          <li><strong>Select or drop multiple files</strong> into the upload area above.</li>
          <li><strong>Define your find & replace rules.</strong> You can add multiple rules to process different text pairs simultaneously.</li>
          <li>Click <strong>Preview Changes</strong> to see how many files will be modified.</li>
          <li>Click <strong>Apply Changes</strong> to execute the replacements.</li>
          <li>Click <strong>Download All Files</strong> to get a ZIP archive of your modified files.</li>
        </ol>

        <h2>Supported File Types</h2>
        <p>Our tool supports a wide variety of text-based formats:</p>
        <ul>
          <li><strong>Code files:</strong> .js, .jsx, .ts, .tsx, .py, .java, .cs, .cpp, .c, .h, .go, .rs, .php, .rb, .swift, .kt</li>
          <li><strong>Data & Configuration:</strong> .json, .xml, .yaml, .yml, .csv, .toml, .ini, .env, .properties, .config</li>
          <li><strong>Web & Text:</strong> .html, .css, .scss, .sql, .md, .mdx, .txt</li>
        </ul>

        <h2>Common Use Cases</h2>
        <p>Here are some scenarios where a batch find and replace is incredibly useful:</p>
        <ul>
          <li><strong>Updating domains:</strong> Changing <code>old-domain.com</code> to <code>new-domain.com</code> across website files.</li>
          <li><strong>Renaming variables:</strong> Updating variable names across exported codebase files.</li>
          <li><strong>Updating API URLs:</strong> Swapping out an old endpoint URL for a new one in multiple configuration files.</li>
          <li><strong>Replacing company/product names:</strong> Quickly rebranding across documentation and HTML files.</li>
          <li><strong>Cleaning exported datasets:</strong> Normalizing specific values in CSV or JSON exports.</li>
        </ul>

        {/* Ad Slot 3 */}
        <div className="not-prose my-12">
          <div className="ad-slot min-h-[90px] bg-surface border border-border border-dashed flex items-center justify-center text-muted-foreground/50 text-sm rounded" data-ad-slot="PLACEHOLDER_3">
            Advertisement
          </div>
        </div>

        <h2 id="faq">Frequently Asked Questions</h2>
        
        <div className="space-y-6 mt-6">
          <div>
            <h3 className="text-xl font-semibold mt-0 mb-2">Can I replace text in multiple files at once?</h3>
            <p className="mt-0">Yes, the primary purpose of this tool is to process multiple files at the same time. Simply select or drag multiple files into the upload area.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mt-0 mb-2">Can I add multiple find-and-replace rules?</h3>
            <p className="mt-0">Yes, you can define as many rules as you need. They will be executed in sequence on each of the selected files.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mt-0 mb-2">Are my files uploaded to a server?</h3>
            <p className="mt-0">No. Your files stay in your browser. All file reading, text replacement, and ZIP generation happens locally on your device for complete privacy and security.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mt-0 mb-2">Can I download all modified files?</h3>
            <p className="mt-0">Yes. If you process multiple files, the tool will automatically bundle them into a single ZIP archive for easy downloading.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mt-0 mb-2">Does this tool work on Windows, Mac and Linux?</h3>
            <p className="mt-0">Yes, because it is a web-based utility, it works on any modern operating system and browser without installing any software.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mt-0 mb-2">Is this tool free?</h3>
            <p className="mt-0">Yes, this bulk text replacement tool is completely free to use.</p>
          </div>
        </div>

      </article>

      {/* Ad Slot 4 */}
      <div className="w-full max-w-4xl mx-auto px-4 mt-16 text-center">
        <div className="ad-slot min-h-[90px] bg-surface border border-border border-dashed flex items-center justify-center text-muted-foreground/50 text-sm rounded" data-ad-slot="PLACEHOLDER_4">
          Advertisement
        </div>
      </div>
      
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Bulk Find & Replace",
            "url": "https://bulkfindreplace.com",
            "description": "Bulk find and replace text across multiple files locally in your browser. Edit multiple files at once.",
            "applicationCategory": "DeveloperApplication",
            "operatingSystem": "Any",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          })
        }}
      />
    </div>
  );
}
