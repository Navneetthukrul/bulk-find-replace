import { BulkReplaceApp } from "@/components/bulk-replace/bulk-replace-app";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Find and Replace Text in Multiple Files Online | BulkFindReplace",
  description: "Upload multiple files, add one or many find and replace rules, process everything locally in your browser, and download the updated files as a ZIP. Free to use.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Find and Replace Text in Multiple Files Online",
    description: "Upload multiple files, add multiple replacement rules, and process everything locally in your browser.",
    type: "website",
  }
};

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center pb-24">
      {/* Intro section */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8 text-center md:py-12">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Find and Replace Text in Multiple Files Online</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Upload multiple files, add one or many find &rarr; replace rules, process everything in your browser, and download the updated files as a ZIP.
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
        <h2>Bulk Find and Replace Multiple Files</h2>
        <p>
          Need to <strong>find and replace in multiple files</strong> without downloading complicated software? Our bulk find and replace tool lets you make the exact same text changes across dozens, hundreds, or even thousands of files instantly.
        </p>
        <p>
          <strong>Your files are processed locally in your browser and are not uploaded to our server.</strong> You can read our <Link href="/privacy">Privacy Policy</Link> to learn more about how we keep your data secure. For more information about the tool's origins, check out our <Link href="/about">About page</Link>.
        </p>
        
        <h2>How to Replace Text Across Multiple Files</h2>
        <p>Using our bulk file editor is straightforward:</p>
        <ol>
          <li><strong>Select or drop multiple files</strong> into the upload area above. Maximum total selected file size: 50 MB.</li>
          <li><strong>Add your replacement rules.</strong> You can apply multiple find and replace rules at once.</li>
          <li>Click <strong>Preview Changes</strong> to see how many files will be modified.</li>
          <li>Click <strong>Apply Changes</strong> to execute the text replacements.</li>
          <li>Click <strong>Download All Files</strong> to get a ZIP archive of your newly modified files.</li>
        </ol>

        <h2>Apply Multiple Find and Replace Rules at Once</h2>
        <p>
          Unlike basic text editors, BulkFindReplace allows you to define multiple replacement rules in a single workflow. 
        </p>
        <p>
          <strong>Sequential replacement behavior:</strong><br />
          Rules are applied from top to bottom. For example, if your first rule is <code>foo &rarr; bar</code> and your second rule is <code>bar &rarr; baz</code>, any instance of <code>foo</code> will ultimately become <code>baz</code>.
        </p>

        <h2>Common Use Cases</h2>
        <p>Here are some common scenarios where batch text replacement is useful:</p>
        <ul>
          <li><strong>Update domains across HTML files:</strong> Change an old URL to a new one across a static website.</li>
          <li><strong>Update API URLs across config files:</strong> Swap out an old endpoint URL for a new one in <code>.json</code> or <code>.yaml</code> files.</li>
          <li><strong>Rename values across JSON files:</strong> Standardize property names or values in large data exports.</li>
          <li><strong>Update Markdown links:</strong> Fix broken internal links across documentation in <code>.md</code> files.</li>
          <li><strong>Update repeated strings across source files:</strong> Change variable names or class names across <code>.js</code>, <code>.ts</code>, or <code>.css</code> files.</li>
          <li><strong>Migrate environment/config values:</strong> Quickly update <code>.env</code> examples or property files.</li>
        </ul>

        {/* Ad Slot 3 */}
        <div className="not-prose my-12">
          <div className="ad-slot min-h-[90px] bg-surface border border-border border-dashed flex items-center justify-center text-muted-foreground/50 text-sm rounded" data-ad-slot="PLACEHOLDER_3">
            Advertisement
          </div>
        </div>

        <h2>Why Use BulkFindReplace</h2>
        <p>
          We built this tool to solve a specific problem: quickly replacing text in multiple files online without installing a desktop application or writing a custom script. 
          By processing everything directly in your browser, it's fast, free, and secure. If you encounter any issues, please <Link href="/contact">contact us</Link>. By using the tool, you agree to our <Link href="/terms">Terms of Service</Link>.
        </p>

        <h2 id="faq">Frequently Asked Questions</h2>
        
        <div className="space-y-6 mt-6">
          <div>
            <h3 className="text-xl font-semibold mt-0 mb-2">Can I find and replace text in multiple files at once?</h3>
            <p className="mt-0">Yes, the primary purpose of this tool is to process multiple files at the same time. Simply select or drag your files into the upload area.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mt-0 mb-2">Can I use multiple find and replace rules?</h3>
            <p className="mt-0">Yes, you can add multiple find and replace rules. They are applied sequentially from top to bottom on each file.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mt-0 mb-2">Are my files uploaded to a server?</h3>
            <p className="mt-0">No. Your files are processed locally in your browser and are not uploaded to our server.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mt-0 mb-2">What file types are supported?</h3>
            <p className="mt-0">We support most text-based files, including code (<code>.js</code>, <code>.ts</code>, <code>.py</code>), data (<code>.json</code>, <code>.csv</code>, <code>.xml</code>), and web files (<code>.html</code>, <code>.css</code>, <code>.md</code>).</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mt-0 mb-2">What is the maximum file size?</h3>
            <p className="mt-0">Maximum total selected file size: 50 MB.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mt-0 mb-2">Can I replace text with an empty value?</h3>
            <p className="mt-0">Yes, you can leave the "Replace" field blank to completely remove the matched text from your files.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mt-0 mb-2">Are replacement rules case sensitive?</h3>
            <p className="mt-0">Yes, our basic literal string replacement is case-sensitive by default to ensure precise matches.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mt-0 mb-2">In what order are replacement rules applied?</h3>
            <p className="mt-0">Rules are applied sequentially from top to bottom. The output of the first rule becomes the input for the second rule, and so on.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mt-0 mb-2">Do I need to install software?</h3>
            <p className="mt-0">No, the entire tool runs in your web browser. There is nothing to install.</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mt-0 mb-2">Do I need an account?</h3>
            <p className="mt-0">No, the tool is completely free to use and requires no account or registration.</p>
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
            "name": "BulkFindReplace",
            "url": "https://bulkfindreplace.com",
            "description": "Find and replace text in multiple files online. Upload multiple files, add one or many find and replace rules, process everything in your browser, and download the updated files as a ZIP.",
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
