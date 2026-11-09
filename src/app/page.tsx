import React from "react";
import { HeroShowcase } from "@/components/home/HeroShowcase";
import { KbSimulatorWidget } from "@/components/interactive/KbSimulatorWidget";
import { BentoGrid } from "@/components/home/BentoGrid";
import { BenefitsMatrix } from "@/components/home/BenefitsMatrix";
import { HowItWorksSteps } from "@/components/home/HowItWorksSteps";
import { PrivacyNutritionSection } from "@/components/home/PrivacyNutritionSection";
import { FaqAccordion } from "@/components/support/FaqAccordion";
import { MacAppStoreButton } from "@/components/layout/MacAppStoreButton";
import { FAQ_ITEMS } from "@/content/faqData";
import { generateFaqSchema } from "@/lib/seo/schema";
import { Sparkles, Download, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const faqSchema = generateFaqSchema(FAQ_ITEMS.slice(0, 6));

  return (
    <>
      {/* Dynamic FAQPage JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      {/* 1. Hero Showcase with Tabbed App Window & Interactive Curtain */}
      <HeroShowcase />

      {/* 2. Interactive Rate-Distortion KB & DPI Simulator */}
      <section className="py-16 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <KbSimulatorWidget />
        </div>
      </section>

      {/* 3. Bento Grid: The 4 Core Suites */}
      <BentoGrid />

      {/* 4. Why Native Mac Beats Online Cloud Tools */}
      <BenefitsMatrix />

      {/* 5. How to Use in 3 Simple Steps */}
      <HowItWorksSteps />

      {/* 6. Apple Privacy Nutrition Label & Sandboxing Guarantee */}
      <PrivacyNutritionSection />

      {/* 7. Interactive FAQ Accordion */}
      <section className="py-20 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold mb-3 border border-blue-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Got Questions? We Have Answers.
            </h2>
            <p className="mt-4 text-neutral-400 text-base">
              Everything you need to know about MorphDoc Suits performance, privacy, and Apple
              Silicon support.
            </p>
          </div>

          <FaqAccordion />

          <div className="text-center mt-10">
            <p className="text-xs text-neutral-400">
              Have a specific question not covered here?{" "}
              <Link href="/support" className="text-blue-400 hover:text-blue-300 underline">
                Visit our Support Desk
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* 8. Bottom High-Converting App Store Banner */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#08090C] via-[#0E121E] to-[#08090C] border-t border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-600/15 via-transparent to-transparent pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-300 text-xs font-semibold mb-6 border border-blue-500/20">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Apple Silicon M1–M5 & Intel Universal Binary</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            Stop Uploading Your Files to Cloud Servers. <br />
            <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Download MorphDoc Suits Today.
            </span>
          </h2>

          <p className="mt-6 text-base sm:text-lg text-neutral-300 max-w-2xl mx-auto">
            Compress to exact KB limits, visually arrange PDF pages, batch convert 18 image formats,
            and create verified 300 DPI passport photos 100% locally on your Mac.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <MacAppStoreButton size="large" />
          </div>

          <div className="mt-6 text-xs text-neutral-400 flex items-center justify-center gap-4">
            <span>Free Download</span>
            <span>•</span>
            <span>Zero Data Collection</span>
            <span>•</span>
            <span>macOS 13.0+</span>
          </div>
        </div>
      </section>
    </>
  );
}

