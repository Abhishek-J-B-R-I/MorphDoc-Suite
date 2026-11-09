import React from "react";
import { Check, X, Shield, Zap, Printer, WifiOff, CreditCard, Sparkles } from "lucide-react";

export function BenefitsMatrix() {
  const comparisons = [
    {
      feature: "Data Privacy & Security",
      icon: Shield,
      morphDoc: "100% On-Device Sandbox. Zero bytes uploaded to any cloud server.",
      morphDocGood: true,
      cloudTools: "Files uploaded to third-party servers. Data retained for hours or days.",
      cloudGood: false,
    },
    {
      feature: "Processing Speed",
      icon: Zap,
      morphDoc: "12ms – 45ms instant local execution via Apple Silicon Metal & ANE.",
      morphDocGood: true,
      cloudTools: "30s – 90s delays waiting for uploads, server queues, and downloads.",
      cloudGood: false,
    },
    {
      feature: "Print DPI & Color Quality",
      icon: Printer,
      morphDoc: "Embedded 300 DPI print metadata with Display P3 color gamut support.",
      morphDocGood: true,
      cloudTools: "Stripped to 72 or 96 DPI web standards, causing blurry passport prints.",
      cloudGood: false,
    },
    {
      feature: "Internet Requirement",
      icon: WifiOff,
      morphDoc: "Works 100% offline. Zero internet bandwidth required on planes or trains.",
      morphDocGood: true,
      cloudTools: "Fails completely without a high-speed, reliable active internet connection.",
      cloudGood: false,
    },
    {
      feature: "Pricing & File Limits",
      icon: CreditCard,
      morphDoc: "Zero subscription. No file size gates, no daily conversion limits.",
      morphDocGood: true,
      cloudTools: "$12–$24/mo subscriptions, watermarks on free tiers, 15MB file caps.",
      cloudGood: false,
    },
    {
      feature: "Target-KB Precision",
      icon: Sparkles,
      morphDoc: "Mathematically hits exact byte boundaries (e.g. 50 KB max for visas).",
      morphDocGood: true,
      cloudTools: "Generic 'Compress' sliders with trial-and-error re-uploads.",
      cloudGood: false,
    },
  ];

  return (
    <section className="py-20 sm:py-32 relative bg-[#0b0c12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold mb-3 border border-blue-500/20">
            <span>The Architectural Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Why Native Mac Beats Online Cloud Tools
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg">
            Stop uploading sensitive contracts, tax records, and personal passport photos to
            untrusted cloud websites.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="rounded-3xl border border-white/10 bg-[#12141F]/80 backdrop-blur-xl overflow-hidden shadow-2xl">
          {/* Table Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-white/10 p-4 sm:p-6 bg-white/[0.02]">
            <div className="md:col-span-4 text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Capability & Standard
            </div>
            <div className="md:col-span-4 text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2 mt-2 md:mt-0">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              MorphDoc Suits (Native macOS)
            </div>
            <div className="md:col-span-4 text-xs font-semibold uppercase tracking-wider text-neutral-400 mt-2 md:mt-0">
              Online Cloud Uploaders (Web)
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="divide-y divide-white/5">
            {comparisons.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-6 gap-4 items-center hover:bg-white/[0.015] transition-colors"
                >
                  {/* Feature Name */}
                  <div className="md:col-span-4 flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white/5 text-neutral-300">
                      <Icon className="w-4 h-4 text-blue-400" />
                    </div>
                    <span className="text-sm font-semibold text-white">{item.feature}</span>
                  </div>

                  {/* MorphDoc Advantage */}
                  <div className="md:col-span-4 flex items-start gap-2.5 bg-blue-500/[0.04] p-3 rounded-xl border border-blue-500/10">
                    <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5 shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs text-neutral-200 leading-relaxed font-medium">
                      {item.morphDoc}
                    </span>
                  </div>

                  {/* Cloud Tools Disadvantage */}
                  <div className="md:col-span-4 flex items-start gap-2.5 p-3 rounded-xl bg-red-500/[0.02] border border-red-500/10">
                    <div className="p-1 rounded-full bg-red-500/20 text-red-400 mt-0.5 shrink-0">
                      <X className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs text-neutral-400 leading-relaxed">
                      {item.cloudTools}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
