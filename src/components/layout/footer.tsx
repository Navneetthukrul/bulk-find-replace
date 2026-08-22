import Link from "next/link";
import { Replace } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t py-8 mt-auto bg-surface/30">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2 text-foreground font-semibold">
            <Replace className="h-5 w-5 text-accent" />
            <span>Bulk Find & Replace</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm text-center md:text-left">
            Edit multiple files securely in your browser. No files are ever uploaded to our servers.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-muted-foreground">
          <Link href="/about" className="hover:text-foreground transition-colors">
            About
          </Link>
          <Link href="/contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
          <Link href="/privacy" className="hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-foreground transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Bulk Find & Replace. All rights reserved.
      </div>
    </footer>
  );
}
