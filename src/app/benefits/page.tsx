import React from "react";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo/metadata";
import { BenefitsMatrix } from "@/components/home/BenefitsMatrix";
import {
  ShieldCheck,
  Zap,
  Printer,
  WifiOff,
  CreditCard,
  Sparkles,
  ServerOff,
  CheckCircle,
} from "lucide-react";

export const metadata = constructMetadata({
  title: "Why Native Mac Beats Cloud Uploaders — MorphDoc Suits",
  description:
    "Discover why native macOS on-device processing beats slow, ad-heavy cloud upload websites for PDF and image compression.",
  path: "/benefits",
  keywords: [
    "native macOS vs online PDF compressor",
    "offline image compressor Mac",
    "private document compression Mac",
    "Apple Silicon local PDF tools",
  ],
});

export default function BenefitsPage() {
  return (
    <div className="pt-28 pb-24 sm:pt-36 sm:pb-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-300 text-xs font-semibold mb-4 border border-blue-500/20">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Architecture &amp; Security Comparison</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Why Native Mac Software Wins Every Single Time.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-300">
            Compare latency, confidentiality, print resolution, and freedom from subscriptions.
          </p>
        </div>

        {/* Benefits Matrix Component */}
        <div className="mb-20">
          <BenefitsMatrix />
        </div>

        {/* Deep Dive Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 rounded-3xl bg-[#12141F] border border-white/10 space-y-4">
            <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 w-fit">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Apple Silicon Hardware Acceleration</h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              When you use a web converter, your file takes 10 to 30 seconds simply uploading across
              the network, waiting in server job queues, and downloading. MorphDoc Suits uses your
              Mac&apos;s unified memory architecture and native hardware acceleration to
              process images and PDFs locally in 12ms to 45ms.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#12141F] border border-white/10 space-y-4">
            <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 w-fit">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Guaranteed Confidentiality</h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Web upload tools often claim to &quot;delete your files after 2 hours&quot;. But
              corporate compliance policies, GDPR, HIPAA, and common sense demand that sensitive tax
              forms, contracts, and medical scans never leave your device in the first place.
              MorphDoc Suits provides airtight on-device execution.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#12141F] border border-white/10 space-y-4">
            <div className="p-3 rounded-2xl bg-purple-500/10 text-purple-400 w-fit">
              <Printer className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">True 300 DPI Print Fidelity</h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Browsers are built for 72 to 96 DPI screen pixels. When web tools export images, they
              almost always discard physical print density headers. MorphDoc Suits strictly embeds
              and verifies 300 DPI metadata so visa and passport photo prints come out crystal clear
              at full photographic lab standards.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#12141F] border border-white/10 space-y-4">
            <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 w-fit">
              <CreditCard className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">No Monthly Cloud Subscriptions</h3>
            <p className="text-sm text-neutral-300 leading-relaxed">
              Why pay $120 to $240 every year for online tools just to merge two PDFs or convert an
              iPhone HEIC image? MorphDoc Suits gives you a permanent, standalone Mac utility
              without recurring fees or watermark gates.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Explore the step-by-step guides</h3>
          <div className="flex justify-center">
            <Link
              href="/how-to-use"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-all shadow-glow hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>View Visual Tutorials</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

