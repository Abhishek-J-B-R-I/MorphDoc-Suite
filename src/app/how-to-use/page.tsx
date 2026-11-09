import React from "react";
import Image from "next/image";
import { constructMetadata } from "@/lib/seo/metadata";
import { MacAppStoreButton } from "@/components/layout/MacAppStoreButton";
import { MacWindowFrame } from "@/components/layout/MacWindowFrame";
import {
  Command,
  Zap,
  Scissors,
  ScanFace,
  Sliders,
  CheckCircle,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export const metadata = constructMetadata({
  title: "Visual User Guides & Keyboard Shortcuts — MorphDoc Suits",
  description:
    "Master MorphDoc Suits on macOS with step-by-step visual tutorials, keyboard shortcut cheat sheet, and exact-KB compression workflows.",
  path: "/how-to-use",
  keywords: [
    "how to use MorphDoc Suits",
    "resize image to 300 DPI on Mac",
    "OCR PDF offline Mac",
    "macOS keyboard shortcuts PDF compression",
  ],
});

export default function HowToUsePage() {
  const tutorials = [
    {
      title: "How to Compress an Image or PDF to an Exact Target (e.g., 50 KB)",
      icon: Zap,
      screenshot: "/screenshots/hero-compress-50kb.png",
      steps: [
        "Drag your image (PNG/JPEG/HEIC) or PDF into the 'Compress to KB/MB' workspace or press ⌘V.",
        "In the Target Size panel, click '50 KB' or type your custom required byte ceiling.",
        "Verify that 'Lock Dimensions' is enabled. If the original image is ultra-high-res and mathematically cannot fit into 50 KB, enable 'Auto-Downscale Fallback'.",
        "Click 'Optimize & Compress'. The interactive split curtain immediately lets you compare perceptual quality (SSIM > 0.97).",
        "Click 'Export Verified File' or press ⌘C to copy directly back to your clipboard.",
      ],
    },
    {
      title: "How to Visually Merge, Reorder, and Rotate PDF Pages",
      icon: Scissors,
      screenshot: "/screenshots/pdf-merge-page-grid.png",
      steps: [
        "Select 'Merge & Reorder PDF' from the left sidebar.",
        "Drag two or more PDF documents into the window. You will see full-fidelity thumbnail cards for every page.",
        "Drag any page to reorder its sequence. Click the rotate icon on any page card to correct upside-down scans.",
        "Click 'Merge PDF Documents' to instantly generate a unified, lossless PDF.",
      ],
    },
    {
      title: "How to Create 300 DPI Passport & Visa Photos with Cutting Sheets",
      icon: ScanFace,
      screenshot: "/screenshots/passport-printable-sheet.png",
      steps: [
        "Open 'Passport & ID Studio' and drop a front-facing portrait or selfie.",
        "Select your government preset: US 2×2\" (DS-160), UK/EU 35×45mm, Canada 50×70mm, or India Passport.",
        "Apple Vision will automatically overlay crown-to-chin alignment margins and eye-level lines.",
        "Switch to the 'Print Sheet' tab, choose A4 or 4×6\" paper, and select from 2 to 26 tiled copies.",
        "Export your 300 DPI high-print sheet with precision hairline cutting guides ready for your printer.",
      ],
    },
  ];

  const shortcuts = [
    { key: "⌘ O", action: "Open File Picker (NSOpenPanel)" },
    { key: "⌘ V", action: "Paste Image / Screenshot from Clipboard" },
    { key: "⌘ C", action: "Copy Processed Image / OCR Text" },
    { key: "⌘ S", action: "Save Output Directly to Disk" },
    { key: "⌘ R", action: "Run Compression / Conversion on Active Batch" },
    { key: "⌘ 1 – 6", action: "Switch between Image Suites" },
    { key: "⌘ 7 – 9", action: "Switch between PDF Suites" },
    { key: "Space", action: "Toggle Before/After Split Curtain" },
  ];

  return (
    <div className="pt-28 pb-24 sm:pt-36 sm:pb-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-300 text-xs font-semibold mb-4 border border-blue-500/20">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Official Visual Tutorials</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            How to Use MorphDoc Suits
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-300">
            Step-by-step walkthroughs to get the most out of your native macOS studio.
          </p>
        </div>

        {/* Keyboard Shortcuts Cheat Sheet */}
        <div className="rounded-3xl bg-[#11131E] border border-white/10 p-6 sm:p-8 mb-20 shadow-2xl">
          <div className="flex items-center gap-2.5 text-white font-bold text-lg mb-6 pb-4 border-b border-white/10">
            <Command className="w-5 h-5 text-blue-400" />
            <span>macOS Keyboard Shortcut Cheat Sheet</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {shortcuts.map((sc, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between"
              >
                <span className="text-xs text-neutral-300">{sc.action}</span>
                <kbd className="px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-700 text-xs font-mono font-bold text-blue-400 shadow-sm">
                  {sc.key}
                </kbd>
              </div>
            ))}
          </div>
        </div>

        {/* Tutorials List */}
        <div className="space-y-20">
          {tutorials.map((tut, idx) => {
            const Icon = tut.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-[#11131E] border border-white/10 p-6 sm:p-10 space-y-8 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {tut.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Steps */}
                  <div className="lg:col-span-5 space-y-4">
                    {tut.steps.map((step, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {sIdx + 1}
                        </span>
                        <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>

                  {/* Annotated Screenshot */}
                  <div className="lg:col-span-7">
                    <MacWindowFrame title={tut.title}>
                      <div className="relative aspect-[16/10] w-full">
                        <Image
                          src={tut.screenshot}
                          alt={tut.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 600px"
                          className="object-cover"
                        />
                      </div>
                    </MacWindowFrame>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <h3 className="text-2xl font-bold text-white mb-4">Start mastering your documents now</h3>
          <div className="flex justify-center">
            <MacAppStoreButton size="large" />
          </div>
        </div>
      </div>
    </div>
  );
}

