import React from "react";
import Link from "next/link";
import { ShieldCheck, Lock, EyeOff, ServerOff, Cpu, ChevronRight } from "lucide-react";

export function PrivacyNutritionSection() {
  return (
    <section className="py-20 sm:py-32 relative bg-gradient-to-b from-[#08090C] via-[#0E1018] to-[#08090C]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-[#12141F]/90 p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-semibold border border-emerald-500/20">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Apple App Store Privacy Nutrition Guarantee</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
                Your Documents and Photos <br />
                <span className="text-emerald-400">Never Leave Your Mac.</span>
              </h2>

              <p className="text-base text-neutral-300 leading-relaxed">
                When you process tax returns, confidential legal agreements, medical PDFs, or
                family passport photos, sending them across the public web is an unnecessary risk.
                MorphDoc Suits is engineered with a strict on-device architectural boundary.
              </p>

              {/* 4 Pillars of Zero-Data Architecture */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2.5 text-white text-sm font-bold mb-1">
                    <ServerOff className="w-4 h-4 text-emerald-400" />
                    <span>0 Cloud Servers</span>
                  </div>
                  <p className="text-xs text-neutral-400">
                    No upload endpoints, no remote processing queues, no server disks.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2.5 text-white text-sm font-bold mb-1">
                    <EyeOff className="w-4 h-4 text-emerald-400" />
                    <span>Zero Biometric Storage</span>
                  </div>
                  <p className="text-xs text-neutral-400">
                    Apple Vision framework aligns facial guides in RAM. No face data is saved.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2.5 text-white text-sm font-bold mb-1">
                    <Lock className="w-4 h-4 text-emerald-400" />
                    <span>macOS App Sandbox</span>
                  </div>
                  <p className="text-xs text-neutral-400">
                    Enforces strict Apple sandbox isolation. Only files you pick are accessed.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                  <div className="flex items-center gap-2.5 text-white text-sm font-bold mb-1">
                    <Cpu className="w-4 h-4 text-emerald-400" />
                    <span>0 MB Network Needed</span>
                  </div>
                  <p className="text-xs text-neutral-400">
                    Works offline on flights, remote sites, or secure air-gapped workstations.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300"
                >
                  <span>Read our complete Apple App Store Privacy Policy</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Apple App Store Privacy Nutrition Label Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-[#090A0E] border border-white/10 p-6 sm:p-8 space-y-6 shadow-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-400"></div>
                    <span className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                      App Store Nutrition Label
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    100% Compliant
                  </span>
                </div>

                <div className="text-center py-4 space-y-2">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 mx-auto flex items-center justify-center text-emerald-400">
                    <ShieldCheck className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Data Not Collected
                  </h3>
                  <p className="text-xs text-neutral-400 max-w-xs mx-auto">
                    The developer does not collect any data from this app, including identity,
                    photos, usage analytics, or contact info.
                  </p>
                </div>

                <div className="space-y-3 pt-2 text-xs border-t border-white/5">
                  <div className="flex items-center justify-between text-neutral-300">
                    <span>Contact Info:</span>
                    <span className="font-semibold text-emerald-400">Not Collected</span>
                  </div>
                  <div className="flex items-center justify-between text-neutral-300">
                    <span>User Content (Files/Photos):</span>
                    <span className="font-semibold text-emerald-400">Not Collected</span>
                  </div>
                  <div className="flex items-center justify-between text-neutral-300">
                    <span>Browsing & Search History:</span>
                    <span className="font-semibold text-emerald-400">Not Collected</span>
                  </div>
                  <div className="flex items-center justify-between text-neutral-300">
                    <span>Identifiers / Advertising ID:</span>
                    <span className="font-semibold text-emerald-400">Not Collected</span>
                  </div>
                  <div className="flex items-center justify-between text-neutral-300">
                    <span>Diagnostic Telemetry:</span>
                    <span className="font-semibold text-emerald-400">Not Collected</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

