import React from "react";
import Image from "next/image";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo/metadata";
import {
  ShieldCheck,
  Cpu,
  Zap,
  Target,
  Sparkles,
  Lock,
  ArrowRight,
  Terminal,
} from "lucide-react";

export const metadata = constructMetadata({
  title: "About MorphDoc Suits — Native macOS PDF & Image Studio",
  description:
    "Learn about the engineering philosophy, architecture, and privacy mission behind MorphDoc Suits for macOS.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24 sm:pt-36 sm:pb-32 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-300 text-xs font-semibold mb-4 border border-blue-500/20">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Our Engineering Mission</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Built for Mac Users Who Refuse to Upload Private Files to the Cloud.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-300">
            MorphDoc Suits was created with a single uncompromising philosophy: image and PDF
            utilities belong on your local hardware, not behind monthly cloud subscriptions.
          </p>
        </div>

        {/* Brand Icon Showcase */}
        <div className="flex justify-center mb-16">
          <div className="relative w-28 h-28 rounded-3xl overflow-hidden p-2 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 shadow-glow">
            <Image
              src="/brand/app-icon-512.png"
              alt="MorphDoc Suits Icon"
              width={112}
              height={112}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* 3 Core Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="p-6 rounded-3xl bg-[#12141F] border border-white/10 space-y-4">
            <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 w-fit">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Apple Silicon Native</h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              We leverage Apple Accelerate, CoreGraphics, and the Apple Neural Engine to deliver
              near-instant execution. Operations that take 30 seconds on web servers finish in 18 ms
              locally.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#12141F] border border-white/10 space-y-4">
            <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 w-fit">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Absolute Privacy</h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Strictly sandboxed within the official macOS App Sandbox. 0 bytes leave your machine.
              Zero analytics, zero telemetry, zero accounts, and zero biometric storage.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-[#12141F] border border-white/10 space-y-4">
            <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 w-fit">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Exact-Target Precision</h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              No more guessing with arbitrary &quot;low / medium / high&quot; sliders. MorphDoc
              converges mathematically on your exact byte ceiling (e.g. 50 KB max) with SSIM
              guarantee.
            </p>
          </div>
        </div>

        {/* Narrative Section */}
        <div className="rounded-3xl bg-[#0f1118] border border-white/10 p-8 sm:p-12 space-y-6 text-neutral-300 text-sm sm:text-base leading-relaxed mb-16">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            The Problem with Modern Web Converters
          </h2>
          <p>
            Every day, millions of people search for &quot;compress PDF to 100KB&quot; or
            &quot;convert HEIC to JPG&quot;. The top search results are bloated web tools that
            require you to upload confidential tax forms, passport scans, and family photos to
            unidentified servers across the world.
          </p>
          <p>
            Once uploaded, these services enforce artificial daily limits, impose 15 MB file size
            caps, stamp watermarks on your documents, or charge $15/month for basic algorithms that
            your MacBook can compute in under 20 milliseconds.
          </p>
          <p>
            We built MorphDoc Suits as the antidote: a clean, beautiful, native macOS utility
            designed to live comfortably alongside your favorite Mac software.
          </p>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Want to see how native Mac compares to web uploaders?
          </h3>
          <div className="flex justify-center">
            <Link
              href="/benefits"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-glow hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>See Architectural Comparison</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

