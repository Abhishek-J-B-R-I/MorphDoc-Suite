"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, ShieldCheck, Zap, Scissors, Repeat, ScanFace } from "lucide-react";
import { MacAppStoreButton } from "./MacAppStoreButton";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-lg" : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Wordmark */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 rounded-xl overflow-hidden bg-white/5 p-1 border border-white/10 group-hover:border-blue-500/50 transition-colors shadow-sm">
              <Image
                src="/brand/app-icon-512.png"
                alt="MorphDoc Suits Logo"
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-white tracking-tight flex items-center gap-1.5">
                MorphDoc Suits
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  macOS
                </span>
              </span>
              <span className="text-[10px] text-neutral-400 font-medium tracking-wide">
                PDF & Image Studio
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {/* Features Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setFeaturesOpen(true)}
              onMouseLeave={() => setFeaturesOpen(false)}
            >
              <button className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 transition-colors">
                <span>Features</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    featuresOpen ? "rotate-180 text-blue-400" : "text-neutral-400"
                  }`}
                />
              </button>

              {featuresOpen && (
                <div className="absolute top-full left-0 w-80 pt-2 z-50">
                  <div className="rounded-2xl bg-[#12141C]/95 backdrop-blur-xl border border-white/10 p-3 shadow-2xl space-y-1">
                    <Link
                      href="/features/compress-image-kb-mac"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">Target KB Compressor</div>
                        <div className="text-[11px] text-neutral-400">
                          20KB, 50KB, 100KB exact byte limits
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/features/compress-pdf-mac"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">Vector PDF Compressor</div>
                        <div className="text-[11px] text-neutral-400">
                          Preserves crisp fonts & form fields
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/features/merge-split-pdf-mac"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                        <Scissors className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">Merge & Split Workspace</div>
                        <div className="text-[11px] text-neutral-400">
                          Visual thumbnail grid & page rotate
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/features/passport-photo-maker-mac"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                        <ScanFace className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">Passport & ID Studio</div>
                        <div className="text-[11px] text-neutral-400">
                          300 DPI verified + A4 print sheets
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/features/heic-to-jpg-converter-mac"
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/5 transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                        <Repeat className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white">HEIC & Format Studio</div>
                        <div className="text-[11px] text-neutral-400">
                          18 offline formats in milliseconds
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/how-to-use"
              className="px-3 py-2 rounded-lg text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              How It Works
            </Link>

            <Link
              href="/benefits"
              className="px-3 py-2 rounded-lg text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              Why Native Mac
            </Link>

            <Link
              href="/about"
              className="px-3 py-2 rounded-lg text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              About
            </Link>

            <Link
              href="/privacy"
              className="px-3 py-2 rounded-lg text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              Privacy
            </Link>

            <Link
              href="/support"
              className="px-3 py-2 rounded-lg text-sm font-medium text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              Support
            </Link>
          </nav>

          {/* Persistent CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <MacAppStoreButton size="compact" />
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-neutral-300 hover:text-white hover:bg-white/5"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-nav border-b border-white/10 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2">
          <div className="grid grid-cols-1 gap-1">
            <Link
              href="/features/compress-image-kb-mac"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-neutral-200 hover:bg-white/5 rounded-lg flex items-center gap-2"
            >
              <Zap className="w-4 h-4 text-blue-400" /> Target KB Compressor
            </Link>
            <Link
              href="/features/compress-pdf-mac"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-neutral-200 hover:bg-white/5 rounded-lg flex items-center gap-2"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Vector PDF Compressor
            </Link>
            <Link
              href="/features/merge-split-pdf-mac"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-neutral-200 hover:bg-white/5 rounded-lg flex items-center gap-2"
            >
              <Scissors className="w-4 h-4 text-purple-400" /> Merge & Split PDF
            </Link>
            <Link
              href="/features/passport-photo-maker-mac"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-neutral-200 hover:bg-white/5 rounded-lg flex items-center gap-2"
            >
              <ScanFace className="w-4 h-4 text-amber-400" /> Passport & ID Studio
            </Link>
            <Link
              href="/features/heic-to-jpg-converter-mac"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-neutral-200 hover:bg-white/5 rounded-lg flex items-center gap-2"
            >
              <Repeat className="w-4 h-4 text-cyan-400" /> Format Converter
            </Link>
            <div className="my-2 border-t border-white/10"></div>
            <Link
              href="/how-to-use"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-neutral-300 hover:text-white"
            >
              How It Works
            </Link>
            <Link
              href="/benefits"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-neutral-300 hover:text-white"
            >
              Why Native Mac
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-neutral-300 hover:text-white"
            >
              About
            </Link>
            <Link
              href="/privacy"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-neutral-300 hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/support"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm text-neutral-300 hover:text-white"
            >
              Support & FAQs
            </Link>
          </div>
          <div className="pt-2">
            <MacAppStoreButton className="w-full" />
          </div>
        </div>
      )}
    </header>
  );
}

