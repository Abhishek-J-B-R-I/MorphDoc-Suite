export interface MacHardwareInfo {
  isMac: boolean;
  isAppleSilicon: boolean;
  isIOS: boolean;
  chipLabel: string;
  architecture: "arm64" | "x86_64" | "unknown";
  osVersionNotice: string;
  badgeText: string;
}

export function detectMacHardware(): MacHardwareInfo {
  if (typeof window === "undefined" || typeof navigator === "undefined") {
    return {
      isMac: true,
      isAppleSilicon: true,
      isIOS: false,
      chipLabel: "Apple Silicon (M1–M5)",
      architecture: "arm64",
      osVersionNotice: "macOS 13.0 Ventura or later",
      badgeText: "Native Apple Silicon (M1–M5) & Intel Universal Binary",
    };
  }

  const ua = navigator.userAgent || "";
  const platform = (navigator as unknown as { platform?: string }).platform || "";
  const isIOS = /iPad|iPhone|iPod/.test(ua) || (platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isMac = (/Macintosh|MacIntel|MacPPC|Mac68K/.test(ua) || platform.startsWith("Mac")) && !isIOS;

  let isAppleSilicon = false;
  let renderer = "";

  // Step 2: WebGL Unmasked Renderer Probe (Standard & reliable across Safari/Chrome on Mac)
  try {
    const canvas = document.createElement("canvas");
    const gl = (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")) as WebGLRenderingContext | null;
    if (gl) {
      const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
      if (debugInfo) {
        renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || "";
      }
    }
  } catch {
    // WebGL disabled or sandboxed
  }

  if (isMac) {
    if (renderer.includes("Apple M") || renderer.includes("Apple GPU") || renderer.includes("Apple")) {
      isAppleSilicon = true;
    } else if (renderer.includes("Intel") || renderer.includes("AMD")) {
      isAppleSilicon = false;
    } else {
      // Default modern heuristic: majority of Macs accessing new web are Apple Silicon
      isAppleSilicon = true;
    }
  }

  let chipLabel = "Apple Silicon & Intel Universal";
  let badgeText = "Native macOS Universal App — Ready for Your Mac";

  if (isMac) {
    if (isAppleSilicon) {
      chipLabel = "Apple Silicon (M1–M5)";
      badgeText = "✓ Native Apple Silicon (M1–M5) Detected — Optimized for Your Mac";
    } else {
      chipLabel = "Intel Mac (x86_64)";
      badgeText = "✓ Intel 64-bit Mac Detected — Universal Binary Ready";
    }
  } else if (isIOS) {
    badgeText = "Viewing on iPhone / iPad — Send App Store link to your Mac";
  }

  return {
    isMac,
    isAppleSilicon,
    isIOS,
    chipLabel,
    architecture: isAppleSilicon ? "arm64" : "x86_64",
    osVersionNotice: "macOS 13.0 (Ventura) or later",
    badgeText,
  };
}

