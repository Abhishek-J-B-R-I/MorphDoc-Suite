"use client";

import React, { useState, useEffect } from "react";
import { detectMacHardware, MacHardwareInfo } from "@/lib/detectMacHardware";
import { Cpu, CheckCircle, Share2, Laptop } from "lucide-react";

export function OsHardwareBadge() {
  const [hardware, setHardware] = useState<MacHardwareInfo | null>(null);

  useEffect(() => {
    setHardware(detectMacHardware());
  }, []);

  if (!hardware) {
    return (
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300">
        <Cpu className="w-3.5 h-3.5 text-blue-400 animate-spin" />
        <span>Optimizing for macOS...</span>
      </div>
    );
  }

  if (hardware.isIOS) {
    return (
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300">
        <Share2 className="w-3.5 h-3.5 text-amber-400" />
        <span>Viewing on iPhone/iPad? Send this link to your Mac</span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-xs text-blue-300 backdrop-blur-sm">
      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
      <span className="font-medium">{hardware.badgeText}</span>
    </div>
  );
}
