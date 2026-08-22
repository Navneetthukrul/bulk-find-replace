export default function TermsPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8 md:py-12 prose prose-slate dark:prose-invert">
      <h1 className="mb-6 text-3xl font-bold">Terms of Service</h1>
      
      <p>Last updated: {new Date().toLocaleDateString()}</p>
      
      <h2>1. Acceptance of Terms</h2>
      <p>By accessing and using Bulk Find & Replace (the "Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use the Service.</p>
      
      <h2>2. Description of Service</h2>
      <p>Bulk Find & Replace provides a web-based utility for applying text replacement rules across multiple files locally within the user's browser.</p>
      
      <h2>3. Disclaimer of Warranties</h2>
      <p>The Service is provided on an "AS IS" and "AS AVAILABLE" basis. While we strive to ensure the tool operates correctly, we make no guarantees regarding its reliability, accuracy, or suitability for any particular purpose. You agree that your use of the Service is at your sole risk.</p>
      
      <h2>4. Limitation of Liability</h2>
      <p>In no event shall Bulk Find & Replace or its creators be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or the inability to use the Service. This includes, but is not limited to, data loss, corruption of files, or any other loss resulting from your use of the tool. <strong>We strongly recommend backing up your files or using version control before applying bulk modifications.</strong></p>
      
      <h2>5. User Responsibilities</h2>
      <p>You are solely responsible for the files you process using the Service. Since the tool operates entirely locally in your browser, you are responsible for ensuring that the modified files are saved or downloaded securely.</p>
      
      <h2>6. Modifications to Service</h2>
      <p>We reserve the right to modify or discontinue, temporarily or permanently, the Service with or without notice to you.</p>
    </div>
  );
}
