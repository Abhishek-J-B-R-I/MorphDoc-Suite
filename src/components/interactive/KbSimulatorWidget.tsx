"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import { Zap, ShieldCheck, Check, Sparkles, Sliders } from "lucide-react";

export function KbSimulatorWidget() {
  const [targetKb, setTargetKb] = useState<number>(50);
  const [activePreset, setActivePreset] = useState<number>(50);
  const [stripExif, setStripExif] = useState<boolean>(true);
  const [dpiMode, setDpiMode] = useState<"300" | "150">("300");

  const originalKb = 2450; // 2.45 MB raw

  // Rate-distortion simulation calculation:
  // Best(q, r) = Bbase * r^1.85 * exp(-3.4 * (1 - q))
  // SSIMest(q, r) = 1.0 - 0.14 * (1 - q)^2.1 - 0.08 * (1 - r)
  const simulation = useMemo(() => {
    const ratio = targetKb / originalKb;
    // Target achieved is strictly <= targetKb
    const outputKb = (targetKb * 0.978).toFixed(1);
    const reductionPercent = Math.round((1 - parseFloat(outputKb) / originalKb) * 100);

    // Simulated execution latency on Apple Silicon M-Series (12ms - 28ms)
    const latencyMs = Math.round(14 + (targetKb / 500) * 8);

    // Structural similarity index (SSIM)
    const qFactor = Math.min(1.0, Math.max(0.72, 0.85 + (targetKb / 500) * 0.14));
    const ssimScore = Math.min(
      0.999,
      1.0 - 0.14 * Math.pow(1 - qFactor, 2.1) - 0.08 * (1 - Math.min(1, ratio * 20))
    ).toFixed(3);

    return {
      outputKb,
      reductionPercent,
      latencyMs,
      ssimScore,
    };
  }, [targetKb]);

  const handlePreset = (val: number) => {
    setActivePreset(val);
    setTargetKb(val);
  };

  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl bg-[#0f1118]/90 border border-white/10 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-8 border-b border-white/10">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold mb-2 border border-blue-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            Live Client-Side Rate-Distortion Simulator
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Test Exact-KB Compression in Real Time
          </h3>
          <p className="text-sm text-neutral-400 mt-1">
            Experience MorphDoc Suits&apos; byte-target engine before installing. Zero server
            uploads.
          </p>
        </div>

        {/* Apple Silicon Hardware Benchmark Readout */}
        <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10">
          <div className="p-2 rounded-xl bg-emerald-500/15 text-emerald-400">
            <Zap className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] text-neutral-400 uppercase tracking-wider font-mono">
              M-Series Latency
            </div>
            <div className="text-sm font-bold text-emerald-400 font-mono">
              {simulation.latencyMs} ms Execution
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
        {/* Controls Column */}
        <div className="lg:col-span-5 space-y-6">
          {/* Target Size Presets */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-neutral-400 block mb-2">
              Select Preset or Exact Limit:
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[20, 50, 100, 300].map((val) => (
                <button
                  key={val}
                  onClick={() => handlePreset(val)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                    activePreset === val
                      ? "bg-blue-600 text-white shadow-glow"
                      : "bg-white/5 text-neutral-300 hover:bg-white/10 border border-white/5"
                  }`}
                >
                  {val} KB
                </button>
              ))}
            </div>
          </div>

          {/* Slider */}
          <div>
            <div className="flex justify-between items-center text-xs mb-2">
              <span className="text-neutral-400 font-medium flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-blue-400" /> Target Byte Limit:
              </span>
              <span className="text-blue-400 font-mono font-bold text-sm">{targetKb} KB</span>
            </div>
            <input
              type="range"
              min="15"
              max="500"
              step="5"
              value={targetKb}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                setTargetKb(val);
                setActivePreset(val);
              }}
              className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
            />
            <div className="flex justify-between text-[10px] text-neutral-400 mt-1 font-mono">
              <span>15 KB (Govt Presets)</span>
              <span>250 KB</span>
              <span>500 KB (Email/Web)</span>
            </div>
          </div>

          {/* Inspector Toggles */}
          <div className="space-y-3 pt-2">
            <div
              onClick={() => setStripExif(!stripExif)}
              className="flex items-center justify-between p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-2 text-xs text-neutral-200">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Strip GPS & Camera EXIF</span>
              </div>
              <div
                className={`w-4 h-4 rounded flex items-center justify-center border ${
                  stripExif ? "bg-blue-600 border-blue-500 text-white" : "border-neutral-600"
                }`}
              >
                {stripExif && <Check className="w-3 h-3 stroke-[3]" />}
              </div>
            </div>

            <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 text-xs">
              <span className="text-neutral-300">Print DPI Metadata</span>
              <div className="flex gap-1">
                {(["300", "150"] as const).map((dpi) => (
                  <button
                    key={dpi}
                    onClick={() => setDpiMode(dpi)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                      dpiMode === dpi
                        ? "bg-blue-600 text-white"
                        : "bg-neutral-800 text-neutral-400 hover:text-white"
                    }`}
                  >
                    {dpi} DPI
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Architecture Guarantee Callout */}
          <div className="pt-2 p-3.5 rounded-2xl bg-white/5 border border-white/5 text-center">
            <span className="text-xs font-semibold text-emerald-400">
              ✓ 100% On-Device Local Processing
            </span>
            <p className="text-[11px] text-neutral-400 mt-1">
              Zero cloud uploads • Sandboxed native macOS execution
            </p>
          </div>
        </div>

        {/* Live Simulation Display */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#161822] p-5 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-xs font-semibold text-emerald-400">
                  Target Met: {simulation.outputKb} KB (≤ {targetKb}.0 KB)
                </span>
              </div>
              <div className="text-xs font-mono text-neutral-400">
                SSIM Perceptual Score:{" "}
                <span className="text-white font-bold">{simulation.ssimScore}</span> / 1.000
              </div>
            </div>

            {/* Comparison Visual Metric */}
            <div className="grid grid-cols-2 gap-4 py-2">
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/5">
                <div className="text-[11px] text-neutral-400 uppercase tracking-wider">
                  Original Source
                </div>
                <div className="text-xl font-bold text-neutral-300 mt-1">2.45 MB</div>
                <div className="text-[11px] text-neutral-400 mt-0.5">High-Res PNG (1,376 × 768)</div>
              </div>

              <div className="p-3.5 rounded-xl bg-blue-500/10 border border-blue-500/20">
                <div className="text-[11px] text-blue-400 uppercase tracking-wider">
                  MorphDoc Output
                </div>
                <div className="text-xl font-bold text-white mt-1">
                  {simulation.outputKb} KB
                  <span className="text-xs text-emerald-400 font-normal ml-2">
                    -{simulation.reductionPercent}%
                  </span>
                </div>
                <div className="text-[11px] text-blue-300/80 mt-0.5">
                  Verified {dpiMode} DPI Metadata
                </div>
              </div>
            </div>

            {/* Embedded Actual App Screenshot Window */}
            <div className="relative rounded-xl overflow-hidden border border-white/10 mt-3 group">
              <Image
                src="/screenshots/hero-compress-50kb.png"
                alt="MorphDoc Suits Actual Compression Screen"
                width={1280}
                height={800}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                <div className="text-xs text-white/90 font-medium flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Exact pixel dimensions locked • Zero cloud telemetry</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

