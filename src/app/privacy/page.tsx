export default function PrivacyPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8 md:py-12 prose prose-slate dark:prose-invert">
      <h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>
      
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      
      <p>At Bulk Find & Replace, your privacy and data security are our primary concerns. This Privacy Policy outlines how we handle information when you use our website.</p>
      
      <h2>1. Client-Side Processing</h2>
      <p>Our tool is designed with a strict "client-side only" architecture. When you use the Bulk Find & Replace tool:</p>
      <ul>
        <li><strong>No File Uploads:</strong> Your files are never uploaded, transmitted, or stored on our servers.</li>
        <li><strong>Local Processing:</strong> All file reading, text replacement, and ZIP generation happens entirely within your web browser on your own device.</li>
        <li><strong>File Contents:</strong> We do not have access to the contents of your files, your replacement rules, or any sensitive data you process using the tool.</li>
      </ul>
      
      <h2>2. Analytics</h2>
      <p>We may use basic web analytics (such as Google Analytics) to understand how our tool is being used, which helps us improve the user experience. These analytics services may collect aggregated, non-personally identifiable information such as browser type, device type, and pages visited. We do <strong>not</strong> track or log any information about the files you process.</p>
      
      <h2>3. Advertising</h2>
      <p>We may use third-party advertising companies (such as Google AdSense) to serve ads when you visit our website. These companies may use information about your visits to this and other websites in order to provide advertisements about goods and services of interest to you. This process may involve the use of cookies.</p>
      
      <h2>4. Cookies</h2>
      <p>Our website, analytics providers, and advertising partners may use "cookies" to function effectively and personalize your experience. You can choose to disable cookies through your individual browser options, though this may affect your ability to interact with some features on our site.</p>
      
      <h2>5. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
      
      <h2>6. Contact Us</h2>
      <p>If you have any questions about this Privacy Policy, please contact us via our Contact page.</p>
    </div>
  );
}
