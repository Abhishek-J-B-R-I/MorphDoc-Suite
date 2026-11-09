"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MacAppStoreButton } from "../layout/MacAppStoreButton";
import { MacWindowFrame } from "../layout/MacWindowFrame";
import { OsHardwareBadge } from "../interactive/OsHardwareBadge";
import { BeforeAfterSlider } from "./BeforeAfterSlider";
import { Zap, ShieldCheck, Check, Sparkles, Layers, Scissors, ScanFace, Repeat } from "lucide-react";

type TabId = "compress" | "slider" | "pdf" | "passport" | "convert";

export function HeroShowcase() {
  const [activeTab, setActiveTab] = useState<TabId>("slider");

  const tabs = [
    {
      id: "slider" as TabId,
      label: "Interactive Slider",
      icon: Sparkles,
      windowTitle: "MorphDoc Suite — Rate-Distortion Split Curtain Preview",
    },
    {
      id: "compress" as TabId,
      label: "Exact KB Target",
      icon: Zap,
      windowTitle: "MorphDoc Suite — Compress to KB/MB (Target Met: 49 KB)",
      image: "/screenshots/hero-compress-50kb.png",
    },
    {
      id: "pdf" as TabId,
      label: "PDF Visual Grid",
      icon: Scissors,
      windowTitle: "MorphDoc Suite — Merge & Reorder PDF Workspace",
      image: "/screenshots/pdf-merge-page-grid.png",
    },
    {
      id: "passport" as TabId,
      label: "Passport Studio",
      icon: ScanFace,
      windowTitle: "MorphDoc Suite — Passport & ID Studio (Apple Vision 300 DPI)",
      image: "/screenshots/passport-id-studio.png",
    },
    {
      id: "convert" as TabId,
      label: "Format Studio",
      icon: Repeat,
      windowTitle: "MorphDoc Suite — 18 Offline Formats Converter",
      image: "/screenshots/format-converter.png",
    },
  ];

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-32 overflow-hidden">
      {/* Background Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Floating Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6 animate-in fade-in slide-in-from-bottom-2">
          <OsHardwareBadge />
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>100% On-Device & Zero Cloud Uploads</span>
          </div>
        </div>

        {/* High-Impact Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.08]">
          Master Your PDFs & Images on Mac—
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-300 bg-clip-text text-transparent block mt-1">
            In Milliseconds.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-300 max-w-3xl mx-auto font-normal leading-relaxed">
          Compress images & PDFs to exact KB/MB limits, merge & split pages visually, convert
          HEIC/WebP/PNG/JPG, and craft 300 DPI passport photos. Zero cloud uploads. Zero
          subscriptions for basic tools.
        </p>

        {/* CTAs */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <MacAppStoreButton size="large" />
        </div>

        {/* Trust Badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-neutral-400">
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
            Apple App Store Verified
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
            Zero Data Collected
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
            Works 100% Offline
          </span>
          <span className="flex items-center gap-1.5">
            <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
            &lt; 35 ms Local Execution
          </span>
        </div>

        {/* Tabbed Interactive App Showcase */}
        <div className="mt-14 sm:mt-20">
          {/* Showcase Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 max-w-2xl mx-auto rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md mb-6">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                    isActive
                      ? "bg-blue-600 text-white shadow-glow"
                      : "text-neutral-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Window Container */}
          <div className="relative max-w-5xl mx-auto">
            {activeTab === "slider" ? (
              <MacWindowFrame title={currentTab.windowTitle} badge="Live Interactive Demo">
                <div className="p-4 sm:p-6 bg-[#0a0b10]">
                  <BeforeAfterSlider />
                </div>
              </MacWindowFrame>
            ) : (
              <MacWindowFrame title={currentTab.windowTitle} badge="Retina Screenshot 2560x1600">
                <div className="relative aspect-[16/10] w-full">
                  {currentTab.image && (
                    <Image
                      src={currentTab.image}
                      alt={currentTab.windowTitle}
                      fill
                      sizes="(max-width: 1200px) 100vw, 1200px"
                      className="object-cover"
                      priority
                    />
                  )}
                </div>
              </MacWindowFrame>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
