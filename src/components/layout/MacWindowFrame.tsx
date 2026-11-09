import React from "react";

interface MacWindowFrameProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  badge?: string;
}

export function MacWindowFrame({
  title = "MorphDoc Suits — Native macOS Studio",
  children,
  className = "",
  badge,
}: MacWindowFrameProps) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden border border-white/10 bg-[#16181F] shadow-macWindow transition-all duration-300 ${className}`}
    >
      {/* macOS Window Title Bar */}
      <div className="relative flex items-center justify-between px-4 py-3 bg-[#1E2029]/90 backdrop-blur-md border-b border-white/5 select-none">
        {/* macOS Traffic Light Buttons */}
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/50 shadow-sm inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/50 shadow-sm inline-block"></span>
          <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/50 shadow-sm inline-block"></span>
        </div>

        {/* Window Title */}
        <div className="flex items-center gap-2 text-xs font-medium text-neutral-300 tracking-tight">
          <svg className="w-3.5 h-3.5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z" />
          </svg>
          <span className="truncate max-w-[280px] sm:max-w-none">{title}</span>
        </div>

        {/* Right side status / badge */}
        <div className="flex items-center gap-2">
          {badge ? (
            <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
              {badge}
            </span>
          ) : (
            <span className="text-[11px] font-mono text-neutral-500">M1–M5 Native</span>
          )}
        </div>
      </div>

      {/* Window Body */}
      <div className="relative bg-[#0d0e12] overflow-hidden">{children}</div>
    </div>
  );
}

