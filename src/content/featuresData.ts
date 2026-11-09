import { IntentCategory } from "@/lib/seo/internalLinkScorer";

export type { IntentCategory };

export interface FeaturePageData {
  slug: string;
  title: string;
  badge: string;
  h1: string;
  description: string;
  keywords: string[];
  tags: IntentCategory[];
  heroScreenshot: string;
  secondaryScreenshot?: string;
  highlights: {
    title: string;
    description: string;
    icon: string;
  }[];
  specifications: {
    label: string;
    value: string;
  }[];
  howToSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  comparisonTable: {
    feature: string;
    morphDoc: string;
    cloudWebTools: string;
  }[];
}

export const FEATURES_DATA: Record<string, FeaturePageData> = {
  "compress-pdf-mac": {
    slug: "compress-pdf-mac",
    title: "Compress PDF on Mac — Shrink PDF Size Offline to Exact Target",
    badge: "Vector Preservation Engine",
    h1: "Compress PDF Files on Mac to Exact Target Size — Without Blurry Text.",
    description:
      "Reduce PDF file size by up to 90% while keeping typography, vector graphics, and forms razor sharp. Runs 100% locally on Apple Silicon & Intel Macs with zero cloud uploads.",
    keywords: [
      "compress PDF on Mac",
      "shrink PDF size Mac offline",
      "reduce PDF to 100KB Mac",
      "macOS PDF optimizer",
      "lossless PDF compressor Apple Silicon",
    ],
    tags: ["compression", "pdf", "security"],
    heroScreenshot: "/screenshots/pdf-compress.png",
    secondaryScreenshot: "/screenshots/pdf-merge-page-grid.png",
    highlights: [
      {
        title: "Selective Stream Compression",
        description:
          "Optimizes embedded photographic streams to standard 150/300 DPI while leaving vector fonts and lines 100% untouched.",
        icon: "Minimize2",
      },
      {
        title: "Zero Quality Degradation",
        description:
          "Preserves interactive form fields, outlines, metadata, and searchable text layers without flattening into low-res bitmaps.",
        icon: "ShieldCheck",
      },
      {
        title: "Sub-Second Performance",
        description:
          "Optimizes a 50-page PDF document in less than 200 milliseconds via native Apple Silicon processing.",
        icon: "Zap",
      },
    ],
    specifications: [
      { label: "Target macOS", value: "macOS 13.0+ (Ventura, Sonoma, Sequoia)" },
      { label: "Processing Mode", value: "100% On-Device / Sandboxed" },
      { label: "Vector Retention", value: "100% (No rasterization)" },
      { label: "Supported PDF Specs", value: "PDF 1.3 through PDF 2.0 & PDF/A" },
    ],
    howToSteps: [
      {
        step: "01",
        title: "Drop or Pick Your PDF",
        description: "Drag any PDF file into the Compress PDF Size tool or press ⌘O to select from Finder.",
      },
      {
        step: "02",
        title: "Select Compression Profile",
        description: "Choose Balanced (150 DPI) or Maximum Quality (300 DPI) based on your target file size.",
      },
      {
        step: "03",
        title: "Save Compressed File",
        description: "Click 'Compress PDF' and save instantly to disk or copy directly back to your clipboard.",
      },
    ],
    comparisonTable: [
      { feature: "File Privacy", morphDoc: "100% Local on your Mac", cloudWebTools: "Uploaded to remote servers" },
      { feature: "Text Quality", morphDoc: "Crisp vector typography", cloudWebTools: "Often blurred or rasterized" },
      { feature: "Execution Speed", morphDoc: "< 40ms local execution", cloudWebTools: "20–60s upload & queue wait" },
      { feature: "File Size Limits", morphDoc: "Unlimited (GBs supported)", cloudWebTools: "Limited to 15–25MB free" },
    ],
  },

  "merge-split-pdf-mac": {
    slug: "merge-split-pdf-mac",
    title: "Merge & Split PDF Pages on Mac — Visual Page Grid Reorder",
    badge: "Visual PDF Workspace",
    h1: "Merge, Reorder, and Split PDF Pages Visually on macOS.",
    description:
      "Combine multiple PDFs into a single document, drag-and-drop pages to reorder, extract custom ranges (e.g. 1-3), and rotate individual pages with zero quality loss.",
    keywords: [
      "combine PDF files Mac",
      "merge and reorder PDF pages macOS",
      "split PDF Mac",
      "extract PDF pages Mac",
      "reorder PDF pages offline",
    ],
    tags: ["pdf", "security"],
    heroScreenshot: "/screenshots/pdf-merge-page-grid.png",
    secondaryScreenshot: "/screenshots/pdf-split-extract.png",
    highlights: [
      {
        title: "Visual Thumbnail Grid",
        description:
          "See full-fidelity thumbnail cards for every single page across all loaded documents simultaneously.",
        icon: "Grid",
      },
      {
        title: "Fluid Drag-to-Reorder",
        description:
          "Reorganize pages intuitively. Rotate upside-down scans by 90° or 180° with a single click before export.",
        icon: "Move",
      },
      {
        title: "Syntax-Based Range Splitting",
        description:
          "Extract specific chapters or sheet spans using standard ranges like '1-3, 5, 8-12' directly to new PDFs.",
        icon: "Scissors",
      },
    ],
    specifications: [
      { label: "Batch Capacity", value: "Dozens of multi-page PDFs simultaneously" },
      { label: "Structural Fidelity", value: "Lossless vector typography & form retention" },
      { label: "Memory Footprint", value: "Zero memory leak via native macOS streams" },
      { label: "Shortcuts", value: "Full keyboard navigation & drag gesture support" },
    ],
    howToSteps: [
      {
        step: "01",
        title: "Add Multiple PDFs",
        description: "Drop your PDF files into the visual workspace to inspect total page counts and sizes.",
      },
      {
        step: "02",
        title: "Arrange & Reorder",
        description: "Drag pages into your desired sequence, sort A-Z, or extract custom page intervals.",
      },
      {
        step: "03",
        title: "Export Unified PDF",
        description: "Click 'Merge PDF Documents' to instantly generate a unified, clean document.",
      },
    ],
    comparisonTable: [
      { feature: "Privacy Assurance", morphDoc: "100% Sandboxed on-device", cloudWebTools: "Uploaded to third-party cloud" },
      { feature: "Visual Reordering", morphDoc: "Instant 60fps thumbnail grid", cloudWebTools: "Clunky web preview delays" },
      { feature: "Document Security", morphDoc: "Zero cloud exposure", cloudWebTools: "Risk of retention on server disks" },
      { feature: "Interactive Form Safety", morphDoc: "Keeps form fields and links intact", cloudWebTools: "Breaks fillable inputs" },
    ],
  },

  "compress-image-kb-mac": {
    slug: "compress-image-kb-mac",
    title: "Compress Image to Exact KB on Mac — 20KB, 50KB, 100KB Targets",
    badge: "Target-KB Precision",
    h1: "Compress Images to Exact KB Limits on Mac. Guaranteed.",
    description:
      "Hit strict upload portals (government forms, visa portals, job applications) that demand files under 20 KB, 50 KB, or 100 KB. Interactive split slider with verified visual quality score.",
    keywords: [
      "compress image to 50KB Mac",
      "reduce photo size in KB Mac",
      "shrink JPEG without losing quality",
      "compress photo to 20KB Mac",
      "photo KB compressor offline macOS",
    ],
    tags: ["compression", "image", "dpi"],
    heroScreenshot: "/screenshots/hero-compress-50kb.png",
    secondaryScreenshot: "/screenshots/compress-before.png",
    highlights: [
      {
        title: "Exact Byte Convergence",
        description:
          "Mathematically solves the compression curve to stay strictly under your target byte boundary without trial-and-error.",
        icon: "Target",
      },
      {
        title: "Verified Visual Quality",
        description:
          "Maintains crystal-clear visual clarity in real time so your images never look pixelated or artifact-ridden.",
        icon: "Sparkles",
      },
      {
        title: "Strict Dimension Lock",
        description:
          "Locks physical pixel resolution unless you explicitly enable Auto-Downscale Fallback for extreme targets.",
        icon: "Lock",
      },
    ],
    specifications: [
      { label: "Target Presets", value: "20 KB, 50 KB, 100 KB, 500 KB + Custom Input" },
      { label: "Units Supported", value: "Exact Kilobytes (KB) & Megabytes (MB)" },
      { label: "Color Profiles", value: "sRGB, Display P3, Grayscale" },
      { label: "Metadata Handling", value: "1-Click GPS & Camera EXIF stripping" },
    ],
    howToSteps: [
      {
        step: "01",
        title: "Select Photo or Screenshot",
        description: "Drop your JPEG, PNG, or HEIC image or press ⌘V to paste straight from clipboard.",
      },
      {
        step: "02",
        title: "Set Your Target KB",
        description: "Click a preset like '50 KB' or enter any exact number your portal requires.",
      },
      {
        step: "03",
        title: "Verify & Export",
        description: "Inspect the side-by-side comparison slider and click 'Export Verified File'.",
      },
    ],
    comparisonTable: [
      { feature: "Target Accuracy", morphDoc: "Exact byte compliance (≤ 50.0 KB)", cloudWebTools: "Vague 'Low/Med/High' guesswork" },
      { feature: "EXIF Scrubbing", morphDoc: "Instant GPS & camera removal", cloudWebTools: "Often leaves sensitive metadata" },
      { feature: "Verification", morphDoc: "Real-time visual quality readout", cloudWebTools: "No quality verification" },
      { feature: "Confidentiality", morphDoc: "Photos never leave your device", cloudWebTools: "Uploaded to unknown servers" },
    ],
  },

  "heic-to-jpg-converter-mac": {
    slug: "heic-to-jpg-converter-mac",
    title: "Convert HEIC to JPG & WebP on Mac — 18 Formats 100% Offline",
    badge: "Universal Format Engine",
    h1: "Convert iPhone HEIC Photos to JPG, PNG & WebP on Mac in Milliseconds.",
    description:
      "Batch convert hundreds of iPhone camera HEIC files, modern AVIF, and WebP graphics to high-compatibility JPEG and PNG. Zero cloud uploads, zero quality degradation.",
    keywords: [
      "convert HEIC to JPG on Mac",
      "batch WebP to PNG converter macOS",
      "AVIF to JPG Mac",
      "iPhone HEIC converter Mac offline",
      "batch photo format converter Mac",
    ],
    tags: ["conversion", "image"],
    heroScreenshot: "/screenshots/format-converter.png",
    secondaryScreenshot: "/screenshots/crop-rotate-flip.png",
    highlights: [
      {
        title: "18 Formats Supported",
        description:
          "Convert between HEIC, AVIF, WebP, PNG, JPEG, TIFF, BMP, SVG, and ICO with complete color fidelity.",
        icon: "Repeat",
      },
      {
        title: "Blazing Batch Speed",
        description:
          "Converts 100+ high-resolution iPhone photos in under 1.5 seconds utilizing Apple Silicon hardware decoders.",
        icon: "Cpu",
      },
      {
        title: "Alpha Channel Preservation",
        description:
          "Preserves transparent backgrounds automatically when converting between PNG, WebP, and SVG formats.",
        icon: "Layers",
      },
    ],
    specifications: [
      { label: "Hardware Acceleration", value: "Native Apple Silicon & Intel Media Engine" },
      { label: "Max Batch Queue", value: "Unlimited files per batch" },
      { label: "Color Depth", value: "8-bit, 10-bit, 12-bit & 16-bit wide color gamut" },
      { label: "Menu Bar Quick-Drop", value: "Convert files without opening the main window" },
    ],
    howToSteps: [
      {
        step: "01",
        title: "Drop HEIC Files",
        description: "Select one or dozens of iPhone camera photos or AirDrop files directly into the window.",
      },
      {
        step: "02",
        title: "Pick Output Format",
        description: "Select JPEG, PNG, WebP, or any of the 18 supported formats from the inspector.",
      },
      {
        step: "03",
        title: "Batch Export",
        description: "Click 'Convert' to write all files instantly with original creation dates preserved.",
      },
    ],
    comparisonTable: [
      { feature: "Batch Capability", morphDoc: "100+ photos in parallel", cloudWebTools: "Limited to 5–10 files unless paid" },
      { feature: "Privacy & Sensitive Photos", morphDoc: "100% on your Mac", cloudWebTools: "Personal photos sent to cloud" },
      { feature: "Conversion Latency", morphDoc: "< 15 ms per photo", cloudWebTools: "Multiple seconds per upload" },
      { feature: "Lossless Transparency", morphDoc: "Fully preserved", cloudWebTools: "Often replaces alpha with black" },
    ],
  },

  "passport-photo-maker-mac": {
    slug: "passport-photo-maker-mac",
    title: "Mac Passport & ID Photo Maker — 300 DPI Smart Studio",
    badge: "Smart ID Studio",
    h1: "Create Verified 300 DPI Passport & Visa Photos on Your Mac.",
    description:
      "Craft government-compliant passport photos for the US, UK, Canada, Australia, Schengen, and India. Features smart face framing, solid background replacement, and A4/4×6 printable sheets.",
    keywords: [
      "passport photo maker Mac",
      "2x2 inch photo resizer Mac",
      "35x45mm ID photo 300 DPI",
      "US passport photo DS-160 Mac",
      "printable passport photo sheet Mac",
    ],
    tags: ["passport", "image", "dpi"],
    heroScreenshot: "/screenshots/passport-id-studio.png",
    secondaryScreenshot: "/screenshots/passport-printable-sheet.png",
    highlights: [
      {
        title: "Smart Face-Framing Guides",
        description:
          "Automatically detects eye-level coordinates and crown-to-chin margins for strict government compliance.",
        icon: "ScanFace",
      },
      {
        title: "Worldwide Preset Library",
        description:
          "Includes US 2×2\" (DS-160), UK/EU 35×45mm, Canada 50×70mm, India PAN/Passport, and custom mm dimensions.",
        icon: "Globe",
      },
      {
        title: "Multi-Copy Printable Sheets",
        description:
          "Tiles 2 to 26 photos with hairline cutting marks onto standard A4, 4×6\", or 5×7\" photo paper for instant home printing.",
        icon: "Printer",
      },
    ],
    specifications: [
      { label: "Resolution Verification", value: "Guaranteed 300 DPI physical print metadata" },
      { label: "Biometric Storage", value: "Zero storage — processed entirely in volatile RAM" },
      { label: "Cut Guidelines", value: "Precision 0.5pt hairline cut borders" },
      { label: "Paper Presets", value: "A4 (210×297mm), 4×6\" (100×150mm), 5×7\"" },
    ],
    howToSteps: [
      {
        step: "01",
        title: "Load Portrait",
        description: "Drop a front-facing selfie or portrait from your Photos library or Finder.",
      },
      {
        step: "02",
        title: "Select Country Preset",
        description: "Pick US 2×2\", UK 35×45mm, or your target visa authority to activate the guide overlay.",
      },
      {
        step: "03",
        title: "Export Print Sheet",
        description: "Generate a 26-copy A4 sheet or single photo at verified 300 DPI ready for submission.",
      },
    ],
    comparisonTable: [
      { feature: "Biometric Privacy", morphDoc: "100% on-device local processing", cloudWebTools: "Faces stored on cloud databases" },
      { feature: "Print Resolution", morphDoc: "Verified 300 DPI embedded", cloudWebTools: "Often 72 or 96 DPI web exports" },
      { feature: "Cost per Passport", morphDoc: "Free / 0$ per export", cloudWebTools: "$15–$25 per submission" },
      { feature: "Tiled Print Sheets", morphDoc: "Included with cut guides", cloudWebTools: "Requires extra paid upsells" },
    ],
  },
};

export const ALL_PAGE_TARGETS = [
  {
    slug: "compress-pdf-mac",
    title: "Compress PDF on Mac",
    shortDescription: "Shrink PDF file size offline with vector text preservation.",
    tags: ["compression" as const, "pdf" as const],
    href: "/features/compress-pdf-mac",
  },
  {
    slug: "merge-split-pdf-mac",
    title: "Merge & Split PDF Pages",
    shortDescription: "Visual drag-and-drop page grid, rotate, and custom range split.",
    tags: ["pdf" as const],
    href: "/features/merge-split-pdf-mac",
  },
  {
    slug: "compress-image-kb-mac",
    title: "Compress Image to Exact KB",
    shortDescription: "Hit 20KB, 50KB, or 100KB limits with crystal-clear visual quality.",
    tags: ["compression" as const, "image" as const, "dpi" as const],
    href: "/features/compress-image-kb-mac",
  },
  {
    slug: "heic-to-jpg-converter-mac",
    title: "Convert HEIC to JPG & WebP",
    shortDescription: "Batch convert 18 image formats in milliseconds.",
    tags: ["conversion" as const, "image" as const],
    href: "/features/heic-to-jpg-converter-mac",
  },
  {
    slug: "passport-photo-maker-mac",
    title: "Passport & ID Photo Maker",
    shortDescription: "Verified 300 DPI photos with smart framing & printable sheets.",
    tags: ["passport" as const, "image" as const, "dpi" as const],
    href: "/features/passport-photo-maker-mac",
  },
];
