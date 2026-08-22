"use client";

import { Replace } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import * as React from "react";
import Link from "next/link";

export function Header() {
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
        <nav className="hidden md:flex gap-4 text-sm font-medium text-muted-foreground mr-4">
          <Link href="/#tool" className="hover:text-foreground transition-colors">Tool</Link>
          <Link href="/#faq" className="hover:text-foreground transition-colors">FAQ</Link>
          <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}
