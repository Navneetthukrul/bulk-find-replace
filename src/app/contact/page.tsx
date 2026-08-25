import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with the BulkFindReplace team for support, feedback, or inquiries.",
  alternates: {
    canonical: "/contact",
  }
};

export default function ContactPage() {
  return (
    <div className="mx-auto w-full max-w-3xl px-4 py-8 md:py-12 prose prose-slate dark:prose-invert">
      <h1 className="mb-6 text-3xl font-bold">Contact Us</h1>
      
      <p>Have a question, feedback, or a feature request? We'd love to hear from you.</p>
      
      <h2>Get in Touch</h2>
      <p>For support, inquiries, or feedback regarding the Bulk Find & Replace tool, please reach out to us via email at:</p>
      <p><strong>support@bulkfindreplace.com</strong> <em>(Note: Example email, please update for production)</em></p>
      
      <h2>Bug Reports</h2>
      <p>If you encounter any issues while using the tool, please include the following information in your email to help us resolve the problem faster:</p>
      <ul>
        <li>Your operating system (e.g., Windows 11, macOS)</li>
        <li>Your web browser (e.g., Chrome, Firefox, Safari)</li>
        <li>The types of files you were processing</li>
        <li>A brief description of the issue</li>
      </ul>
    </div>
  );
}
