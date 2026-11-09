import React from "react";
import Image from "next/image";
import { MousePointerClick, SlidersHorizontal, DownloadCloud, Command } from "lucide-react";

export function HowItWorksSteps() {
  const steps = [
    {
      step: "01",
      title: "Drop, Paste or Pick",
      subtitle: "Instant Input",
      description:
        "Drag single files or entire batch folders into the window, drop onto the macOS Menu Bar icon, or press ⌘V to paste any copied screenshot or file directly.",
      icon: MousePointerClick,
      shortcut: "⌘O or ⌘V",
      screenshot: "/screenshots/compress-empty.png",
    },
    {
      step: "02",
      title: "Choose Preset or Exact KB",
      subtitle: "Smart Inspector",
      description:
        "Select a 1-click target (e.g. 50 KB Max, Merge PDF, or US 2×2\" Passport). Adjust DPI, strip sensitive EXIF GPS tags, or rotate pages in real time.",
      icon: SlidersHorizontal,
      shortcut: "1-Click Presets",
      screenshot: "/screenshots/hero-compress-50kb.png",
    },
    {
      step: "03",
      title: "Instant Verified Export",
      subtitle: "Sub-Second Delivery",
      description:
        "Preview output size and SSIM quality with the interactive split curtain. Save directly to disk, export a batch ZIP, or press ⌘C to copy back to clipboard.",
      icon: DownloadCloud,
      shortcut: "⌘C to Copy",
      screenshot: "/screenshots/compress-before.png",
    },
  ];

  return (
    <section className="py-20 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold mb-3 border border-blue-500/20">
            <span>Streamlined macOS Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            How It Works in 3 Simple Steps
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg">
            Designed to feel like an extension of macOS Finder. Fast, intuitive, and frictionless.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-[#11131E] border border-white/10 p-6 sm:p-8 flex flex-col justify-between relative group hover:border-blue-500/40 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-white/20 font-mono group-hover:text-blue-500/40 transition-colors">
                      {item.step}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] font-mono text-neutral-300">
                      <Command className="w-3 h-3 text-blue-400" />
                      {item.shortcut}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                      {item.subtitle}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Screenshot preview */}
                <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden border border-white/10 shadow-lg mt-auto">
                  <Image
                    src={item.screenshot}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
