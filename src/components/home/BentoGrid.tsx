import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Zap, Scissors, ScanFace, Sliders, ChevronRight, CheckCircle2 } from "lucide-react";

export function BentoGrid() {
  return (
    <section className="py-20 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold mb-3 border border-blue-500/20">
            <span>The 4 Core Native macOS Suites</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Everything Your Workflow Needs. <br />
            <span className="text-neutral-400">Zero Clutter. Pure Performance.</span>
          </h2>
          <p className="mt-4 text-neutral-400 text-base sm:text-lg">
            Replaces bloated web tools, subscription services, and terminal scripts with one
            native, beautifully crafted Mac utility.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Suite 1: Target KB Compressor (Large 7 columns) */}
          <div className="md:col-span-7 rounded-3xl bg-[#11131C] border border-white/10 p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative group hover:border-blue-500/40 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Zap className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-neutral-300 border border-white/10">
                  Suite 01 • Rate-Distortion
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Pinpoint KB/MB Target Compressor
              </h3>
              <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                Need a photo under exactly 50 KB for a government portal or passport form? MorphDoc
                mathematically hits your exact byte target while preserving SSIM &gt; 0.97 perceptual
                sharpness.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["20 KB Presets", "50 KB Strict", "100 KB Limits", "Dimension Lock", "EXIF Strip"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-neutral-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Embedded Screenshot */}
            <div className="mt-6 -mb-4 -mr-4 sm:-mb-6 sm:-mr-6 relative rounded-tl-2xl overflow-hidden border-t border-l border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <Image
                src="/screenshots/hero-compress-50kb.png"
                alt="Target KB Compressor in MorphDoc Suits"
                width={1200}
                height={750}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-4">
              <Link
                href="/features/compress-image-kb-mac"
                className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1.5"
              >
                <span>Explore Exact-KB Compression</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Suite 2: Visual PDF Workspace (5 columns) */}
          <div className="md:col-span-5 rounded-3xl bg-[#11131C] border border-white/10 p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative group hover:border-emerald-500/40 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Scissors className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-neutral-300 border border-white/10">
                  Suite 02 • PDF Grid
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Visual PDF Workspace
              </h3>
              <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                Combine PDF documents, drag-and-drop pages to reorder, rotate individual sheets, and
                split complex ranges (1-3, 5-8) with lossless AcroForm namespacing.
              </p>
              <div className="space-y-2 mt-4 text-xs text-neutral-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Content-aware PDF size downsampling</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Offline OCR searchable text extraction</span>
                </div>
              </div>
            </div>

            {/* Embedded Screenshot */}
            <div className="mt-6 -mb-4 -mr-4 relative rounded-tl-2xl overflow-hidden border-t border-l border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <Image
                src="/screenshots/pdf-merge-page-grid.png"
                alt="Visual PDF Page Grid in MorphDoc Suits"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-4">
              <Link
                href="/features/merge-split-pdf-mac"
                className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5"
              >
                <span>Explore PDF Workspace</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Suite 3: Format & DPI Studio (5 columns) */}
          <div className="md:col-span-5 rounded-3xl bg-[#11131C] border border-white/10 p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative group hover:border-cyan-500/40 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Sliders className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-neutral-300 border border-white/10">
                  Suite 03 • 300 DPI & Resize
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Universal Format & DPI Studio
              </h3>
              <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                Resize in physical print units (mm, cm, inches, px) and embed verified 300 DPI
                metadata. Batch convert between 18 formats including Apple HEIC, AVIF, and WebP.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {["HEIC", "AVIF", "WebP", "PNG", "JPEG", "TIFF", "300 DPI"].map((fmt) => (
                  <span
                    key={fmt}
                    className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-neutral-300 border border-white/5"
                  >
                    {fmt}
                  </span>
                ))}
              </div>
            </div>

            {/* Embedded Screenshot */}
            <div className="mt-6 -mb-4 -mr-4 relative rounded-tl-2xl overflow-hidden border-t border-l border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <Image
                src="/screenshots/resize-dpi-inspector.png"
                alt="Resize and DPI Studio in MorphDoc Suits"
                width={800}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-4">
              <Link
                href="/features/heic-to-jpg-converter-mac"
                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5"
              >
                <span>Explore Format Studio</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Suite 4: Passport & ID Studio (Large 7 columns) */}
          <div className="md:col-span-7 rounded-3xl bg-[#11131C] border border-white/10 p-6 sm:p-8 flex flex-col justify-between overflow-hidden relative group hover:border-amber-500/40 transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <ScanFace className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 text-neutral-300 border border-white/10">
                  Suite 04 • Apple Vision
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Passport & Official ID Studio
              </h3>
              <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                Apple Vision framework precisely aligns eye levels and crown-to-chin guidelines.
                Generate verified 300 DPI photos for US DS-160 (2×2&quot;), UK/EU (35×45mm), Canada,
                and Australia with multi-photo A4/4×6 printable cutting sheets.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4 text-center">
                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[11px] font-bold text-white">US 2×2&quot;</div>
                  <div className="text-[10px] text-neutral-400">DS-160 Visa</div>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[11px] font-bold text-white">35×45 mm</div>
                  <div className="text-[10px] text-neutral-400">UK / EU / Schengen</div>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[11px] font-bold text-white">50×70 mm</div>
                  <div className="text-[10px] text-neutral-400">Canada PR / Passport</div>
                </div>
                <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                  <div className="text-[11px] font-bold text-white">26 Photos</div>
                  <div className="text-[10px] text-neutral-400">A4 Printable Sheet</div>
                </div>
              </div>
            </div>

            {/* Embedded Screenshot */}
            <div className="mt-6 -mb-4 -mr-4 sm:-mb-6 sm:-mr-6 relative rounded-tl-2xl overflow-hidden border-t border-l border-white/10 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <Image
                src="/screenshots/passport-printable-sheet.png"
                alt="Passport Printable Sheet in MorphDoc Suits"
                width={1200}
                height={750}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between mt-4">
              <Link
                href="/features/passport-photo-maker-mac"
                className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1.5"
              >
                <span>Explore Passport & ID Studio</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
