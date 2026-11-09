"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Sparkles, ArrowLeftRight } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage?: string;
  afterImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeSize?: string;
  afterSize?: string;
}

export function BeforeAfterSlider({
  beforeImage = "/screenshots/compress-before.png",
  afterImage = "/screenshots/hero-compress-50kb.png",
  beforeLabel = "Original Source",
  afterLabel = "MorphDoc Suits Output",
  beforeSize = "2.4 MB PNG",
  afterSize = "48.9 KB (98% Visual Quality)",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto select-none">
      {/* Visual Quality Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 px-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold border border-blue-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Split Curtain
          </span>
          <span className="text-xs text-neutral-400 hidden sm:inline">
            Drag the handle to compare perceptual fidelity
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono">
          <span className="text-neutral-400">
            Before: <strong className="text-neutral-200">{beforeSize}</strong>
          </span>
          <span className="text-emerald-400">
            After: <strong className="text-emerald-300 font-bold">{afterSize}</strong>
          </span>
        </div>
      </div>

      {/* Comparison Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden cursor-ew-resize border border-white/10 bg-neutral-950 shadow-2xl"
      >
        {/* Background Layer: After (MorphDoc Output) */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={afterImage}
            alt="MorphDoc Suits Compressed Output"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 right-4 z-10 px-3 py-1.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 text-xs font-semibold text-emerald-400 shadow-lg">
            {afterLabel} • {afterSize}
          </div>
        </div>

        {/* Foreground Layer: Before (Original) clipped to sliderPosition */}
        <div
          className="absolute inset-0 w-full h-full overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <Image
            src={beforeImage}
            alt="Original High-Res File"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 left-4 z-10 px-3 py-1.5 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 text-xs font-semibold text-neutral-300 shadow-lg">
            {beforeLabel} • {beforeSize}
          </div>
        </div>

        {/* Divider Line & Drag Handle */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_12px_rgba(255,255,255,0.8)] z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white text-black shadow-2xl flex items-center justify-center border-2 border-neutral-900 pointer-events-auto hover:scale-110 active:scale-95 transition-transform">
            <ArrowLeftRight className="w-4 h-4 stroke-[2.5]" />
          </div>
        </div>
      </div>
    </div>
  );
}

