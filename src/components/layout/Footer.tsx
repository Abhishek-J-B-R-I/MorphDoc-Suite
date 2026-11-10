import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Mail, Cpu, CheckCircle } from "lucide-react";
import { assetPath } from "@/lib/assets";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#08090C] text-neutral-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 lg:gap-10">
          {/* Brand Column */}
          <div className="sm:col-span-2 md:col-span-4 lg:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-white/5 p-0.5 border border-white/10">
                <Image
                  src={assetPath("/brand/app-icon-512.png")}
                  alt="MorphDoc Suits Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="text-base font-bold text-white tracking-tight">MorphDoc Suits</span>
            </Link>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              The high-performance, 100% on-device PDF & image studio for macOS. Engineered with
              zero cloud dependencies, instant Apple Silicon acceleration, and strict privacy
              guarantees.
            </p>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-[11px] font-medium border border-emerald-500/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                Zero Cloud Uploads
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-500/10 text-blue-400 text-[11px] font-medium border border-blue-500/20">
                <Cpu className="w-3.5 h-3.5" />
                Apple Silicon M1–M5
              </span>
            </div>
          </div>

          {/* Core Features Column */}
          <div className="sm:col-span-1 md:col-span-3 lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider">Features</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/features/compress-image-kb-mac"
                  className="hover:text-white transition-colors"
                >
                  Exact KB Compressor
                </Link>
              </li>
              <li>
                <Link
                  href="/features/compress-pdf-mac"
                  className="hover:text-white transition-colors"
                >
                  Vector PDF Compressor
                </Link>
              </li>
              <li>
                <Link
                  href="/features/merge-split-pdf-mac"
                  className="hover:text-white transition-colors"
                >
                  Merge & Split Workspace
                </Link>
              </li>
              <li>
                <Link
                  href="/features/passport-photo-maker-mac"
                  className="hover:text-white transition-colors"
                >
                  Passport & ID Studio
                </Link>
              </li>
              <li>
                <Link
                  href="/features/heic-to-jpg-converter-mac"
                  className="hover:text-white transition-colors"
                >
                  HEIC & Format Converter
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="sm:col-span-1 md:col-span-2 lg:col-span-2 space-y-3">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/how-to-use" className="hover:text-white transition-colors">
                  Visual User Guide
                </Link>
              </li>
              <li>
                <Link href="/benefits" className="hover:text-white transition-colors">
                  Native vs Cloud Tools
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About MorphDoc Suits
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-white transition-colors">
                  System Requirements
                </Link>
              </li>
            </ul>
          </div>

          {/* Mandatory Apple Compliance URLs Column */}
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider">
              Legal & Support
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="/privacy"
                  className="text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-blue-400" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                  Help & Support Desk
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service & EULA
                </Link>
              </li>
              <li className="pt-1">
                <a
                  href="mailto:support@morphdocsuits.com"
                  className="text-xs text-blue-400 hover:text-blue-300 font-mono inline-flex items-center gap-1.5 break-all transition-colors"
                >
                  <span>support@morphdocsuits.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar & Trademarks */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© {new Date().getFullYear()} MorphDoc Suits. Engineered for macOS. All rights reserved.</p>
          <p className="text-[11px] text-neutral-400 text-center sm:text-right">
            Apple, macOS, Mac, Mac App Store, and Apple Silicon are trademarks of Apple Inc., registered
            in the U.S. and other countries.
          </p>
        </div>
      </div>
    </footer>
  );
}

