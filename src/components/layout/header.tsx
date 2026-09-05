"use client";

import { Replace, Globe } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import * as React from "react";
import Link from "next/link";

import { Dictionary } from "@/i18n/dictionaries";

export function LanguageSelector() {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current && 
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <button 
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-label="Select language"
        className="flex h-9 w-9 items-center justify-center rounded-md border border-input bg-transparent text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
      >
        <Globe className="h-4 w-4" />
      </button>
      
      {isOpen && (
        <div 
          ref={dropdownRef}
          role="menu"
          className="absolute right-0 top-full mt-2 w-40 rounded-md border bg-background p-2 shadow-md z-50"
        >
          <Link href="/" role="menuitem" onClick={() => setIsOpen(false)} className="block rounded px-2 py-1.5 text-sm hover:bg-surface-hover">English</Link>
          <Link href="/fr/" role="menuitem" onClick={() => setIsOpen(false)} className="block rounded px-2 py-1.5 text-sm hover:bg-surface-hover">Français</Link>
          <Link href="/de/" role="menuitem" onClick={() => setIsOpen(false)} className="block rounded px-2 py-1.5 text-sm hover:bg-surface-hover">Deutsch</Link>
          <Link href="/pt-br/" role="menuitem" onClick={() => setIsOpen(false)} className="block rounded px-2 py-1.5 text-sm hover:bg-surface-hover">Português (Brasil)</Link>
        </div>
      )}
    </div>
  );
}

export function Header({ dict }: { dict?: Dictionary }) {
  // If dict is not provided (e.g. from RootLayout where we can't easily pass it without context), 
  // we can default to English labels for About/FAQ. But we should try to pass it if possible.
  // Actually, since header is in layout.tsx, and layout doesn't know the language unless it's in a route group.
  return (
    <header className="sticky top-0 z-40 flex h-[68px] items-center gap-4 border-b bg-background/78 px-4 backdrop-blur-md md:px-[30px] justify-between">
      <Link href="/" className="flex items-center gap-2 group">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-sm transition-transform group-hover:scale-105">
          <Replace className="h-5 w-5" />
        </div>
        <span className="text-[17px] font-bold tracking-tight text-foreground hidden sm:inline-block">
          Bulk Replace
        </span>
      </Link>

      <div className="ml-auto flex items-center gap-4">
        <nav className="hidden md:flex gap-4 text-sm font-medium text-muted-foreground mr-2">
          <Link href="/#tool" className="hover:text-foreground transition-colors">{dict?.tool || "Tool"}</Link>
          <Link href="/#faq" className="hover:text-foreground transition-colors">{dict?.faq || "FAQ"}</Link>
          <Link href="/about" className="hover:text-foreground transition-colors">{dict?.about || "About"}</Link>
        </nav>
        <LanguageSelector />
        <ThemeToggle />
      </div>
    </header>
  );
}
