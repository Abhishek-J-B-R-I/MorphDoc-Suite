import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { SupportContactForm } from "@/components/support/SupportContactForm";
import { FaqAccordion } from "@/components/support/FaqAccordion";
import { FAQ_ITEMS } from "@/content/faqData";
import {
  HelpCircle,
  Mail,
  Clock,
  Laptop,
  CheckCircle,
  ShieldCheck,
  Cpu,
  WifiOff,
} from "lucide-react";

export const metadata = constructMetadata({
  title: "Support Desk & System Requirements — Apple App Store Verified",
  description:
    "Official Apple App Store Connect Support URL for MorphDoc Suits. Direct developer contact, system requirements, and troubleshooting guides.",
  path: "/support",
});

export default function SupportPage() {
  return (
    <div className="pt-28 pb-24 sm:pt-36 sm:pb-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-300 text-xs font-semibold mb-4 border border-blue-500/20">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Apple App Store Review Guideline 1.5 Compliant</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            MorphDoc Suits Support &amp; Help Desk
          </h1>
          <p className="mt-3 text-base text-neutral-300">
            We are dedicated to providing fast, direct assistance to every Mac user and Apple App
            Store reviewer. All inquiries are answered within 24 hours.
          </p>
        </div>

        {/* Top Grid: System Requirements Card + Interactive Support Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Left: System Requirements & Official Specs Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-[#12141F] border border-white/10 p-6 sm:p-8 space-y-6 shadow-xl">
              <div className="flex items-center gap-2.5 text-white font-bold text-base border-b border-white/10 pb-4">
                <Laptop className="w-5 h-5 text-blue-400" />
                <span>macOS System Requirements</span>
              </div>

              <div className="space-y-4 text-xs">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-3">
                  <div className="p-1 rounded bg-blue-500/20 text-blue-400 shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">macOS 13.0 (Ventura) or Later</div>
                    <div className="text-neutral-400 mt-0.5">
                      Fully compatible with macOS Sonoma (14.x) and macOS Sequoia (15.x).
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-3">
                  <div className="p-1 rounded bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">Apple Silicon &amp; Intel Universal Binary</div>
                    <div className="text-neutral-400 mt-0.5">
                      Native ARM64 for M1, M2, M3, M4, and M5 chips, plus x86_64 for Intel.
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 flex items-start gap-3">
                  <div className="p-1 rounded bg-purple-500/20 text-purple-400 shrink-0 mt-0.5">
                    <WifiOff className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-white">0 MB Internet Bandwidth Required</div>
                    <div className="text-neutral-400 mt-0.5">
                      100% offline capability. Operates within macOS App Sandbox.
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Support Info Box */}
              <div className="pt-2 border-t border-white/10 space-y-2 text-xs">
                <div className="flex items-center justify-between text-neutral-300">
                  <span className="flex items-center gap-1.5 text-neutral-400">
                    <Mail className="w-3.5 h-3.5 text-blue-400" /> Direct Support Email:
                  </span>
                  <a
                    href="mailto:support@morphdocsuits.com"
                    className="font-mono text-blue-400 hover:underline"
                  >
                    support@morphdocsuits.com
                  </a>
                </div>

                <div className="flex items-center justify-between text-neutral-300">
                  <span className="flex items-center gap-1.5 text-neutral-400">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" /> Response Window:
                  </span>
                  <span className="font-medium text-white">Within 24 Hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Support Form (Algorithm 3) */}
          <div className="lg:col-span-7">
            <SupportContactForm />
          </div>
        </div>

        {/* Quick Troubleshooting & Guides Section */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Quick Troubleshooting &amp; How-To Guides
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2">
              Instant solutions for common macOS questions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#12141F] border border-white/10 space-y-3">
              <span className="text-xs font-mono text-blue-400 font-bold">01 / Compression</span>
              <h3 className="text-sm font-bold text-white">
                How do I compress to an exact KB size (like 50 KB)?
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Open &quot;Compress to KB/MB&quot;, enter 50 KB in the target box, and click Compress.
                If an ultra-high-resolution raw PNG cannot reach 50 KB without dimension change,
                toggle &quot;Auto-Downscale Fallback&quot;.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#12141F] border border-white/10 space-y-3">
              <span className="text-xs font-mono text-emerald-400 font-bold">02 / Privacy</span>
              <h3 className="text-sm font-bold text-white">How do I strip GPS &amp; Camera EXIF data?</h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Check the &quot;Strip GPS &amp; Camera EXIF&quot; box in the right-hand Inspector panel
                before clicking Compress or Convert. MorphDoc cleans all geolocation coordinates.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#12141F] border border-white/10 space-y-3">
              <span className="text-xs font-mono text-purple-400 font-bold">03 / Security</span>
              <h3 className="text-sm font-bold text-white">
                Why does MorphDoc ask for folder permission?
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed">
                Because MorphDoc Suits uses the strict macOS App Sandbox for your protection. macOS
                prompts for folder access via standard system dialogs so you retain full control.
              </p>
            </div>
          </div>
        </div>

        {/* Full FAQ Accordion */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </div>
    </div>
  );
}
