import Link from "next/link";
import { Replace } from "lucide-react";
import { Dictionary } from "@/i18n/dictionaries";

export function Footer({ dict, lang = "en" }: { dict?: Dictionary, lang?: string }) {
  const prefix = lang === "en" ? "" : "/" + lang;
  return (
    <footer className="border-t py-8 mt-auto bg-surface/30">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-8">
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2 text-foreground font-semibold">
            <Replace className="h-5 w-5 text-accent" />
            <span>Bulk Find & Replace</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-sm text-center md:text-left">
            {dict?.footerDesc || "Edit multiple files securely in your browser. No files are ever uploaded to our servers."}
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-muted-foreground">
          <Link href={prefix + "/about"} className="hover:text-foreground transition-colors">
            {dict?.about || "About"}
          </Link>
          <Link href={prefix + "/contact"} className="hover:text-foreground transition-colors">
            {dict?.contact || "Contact"}
          </Link>
          <Link href={prefix + "/privacy"} className="hover:text-foreground transition-colors">
            {dict?.privacy || "Privacy Policy"}
          </Link>
          <Link href={prefix + "/terms"} className="hover:text-foreground transition-colors">
            {dict?.terms || "Terms of Service"}
          </Link>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 text-center text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Bulk Find & Replace. {dict?.rights || "All rights reserved."}
      </div>
    </footer>
  );
}