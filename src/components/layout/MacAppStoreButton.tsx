import React from "react";
import Link from "next/link";

interface MacAppStoreButtonProps {
  size?: "default" | "large" | "compact";
  subtext?: boolean;
  className?: string;
}

export function MacAppStoreButton({
  size = "default",
  subtext = true,
  className = "",
}: MacAppStoreButtonProps) {
  // Can be configured with your actual App Store link or anchor
  const appStoreUrl = "https://apps.apple.com/app/morphdoc-suits/idYOUR_APP_ID";

  if (size === "compact") {
    return (
      <Link
        href={appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-all shadow-md hover:scale-[1.02] active:scale-[0.98] ${className}`}
      >
        <AppleIcon className="w-3.5 h-3.5 fill-current" />
        <span>Download on the Mac App Store</span>
      </Link>
    );
  }

  return (
    <div className={`inline-flex flex-col items-start ${className}`}>
      <Link
        href={appStoreUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative inline-flex items-center gap-3.5 px-6 py-3.5 rounded-2xl bg-gradient-to-b from-white to-neutral-100 text-black shadow-lg hover:shadow-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] border border-white/20"
      >
        <AppleIcon className="w-6 h-6 fill-black transition-transform duration-300 group-hover:scale-110" />
        <div className="flex flex-col text-left">
          <span className="text-[10px] tracking-wider uppercase font-medium text-neutral-600 leading-tight">
            Download on the
          </span>
          <span className="text-base font-bold tracking-tight text-neutral-900 leading-tight">
            Mac App Store
          </span>
        </div>
      </Link>
      {subtext && (
        <span className="text-[11px] text-neutral-400 mt-2 px-1 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          Requires macOS 13.0+ • Universal M1–M5 & Intel
        </span>
      )}
    </div>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 170 170" className={className} fill="currentColor">
      <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.08-7.73-7.94-12.13-14.59-6.3-9.52-11.45-20.9-15.46-34.14-4-13.25-6.01-25.75-6.01-37.51 0-15.68 3.99-28.79 11.96-39.34 7.98-10.55 17.9-15.89 29.77-16.02 5.25 0 10.88 1.34 16.89 4.02 6.01 2.68 9.94 4.08 11.78 4.2 2.05-.12 6.13-1.58 12.24-4.38 6.11-2.8 11.33-4.08 15.66-3.85 11.66.56 21.05 4.67 28.16 12.33-10.15 6.18-15.11 14.86-14.88 26.04.23 8.79 3.59 16.14 10.08 22.05 6.49 5.91 14.18 9.29 23.07 10.14-2.23 6.94-5.06 14.01-8.48 21.21zM119.22 31.05c0-7.39 2.66-14.28 7.97-20.67 5.31-6.39 11.83-10.18 19.57-11.38.23 1.03.34 2 .34 2.92 0 7.28-2.78 14.29-8.33 21.04-5.55 6.74-12.29 10.63-20.21 11.66-.46-1.15-.69-2.28-.69-3.57z" />
    </svg>
  );
}

