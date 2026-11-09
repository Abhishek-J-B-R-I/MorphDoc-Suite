export interface FaqItem {
  question: string;
  answer: string;
  category: "General" | "Compression" | "PDF" | "Privacy" | "Passport";
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: "Compression",
    question: "How do I compress an image or PDF to an exact KB size (like 50 KB)?",
    answer:
      "Open the 'Compress to KB/MB' tool, enter 50 in the Target Size box with KB selected, and click 'Optimize & Compress'. MorphDoc Suits uses proprietary rate-distortion mathematical convergence to reach your target byte boundary without blurring text. If an ultra-high-resolution image cannot mathematically hit the threshold without downscaling, enable 'Auto-Downscale Fallback'.",
  },
  {
    category: "Privacy",
    question: "Does MorphDoc Suits upload my files or photos to any cloud server?",
    answer:
      "Never. MorphDoc Suits is engineered as a 100% on-device, offline utility. Every single operation—compression, PDF reordering, OCR recognition, format conversion, and facial alignment—runs locally inside Apple's sandboxed environment on your Mac hardware. Zero bytes leave your machine.",
  },
  {
    category: "Privacy",
    question: "Why does MorphDoc Suits ask for permission when saving to a folder?",
    answer:
      "MorphDoc Suits operates strictly within the official macOS App Sandbox mandated by Apple for your security. macOS prompts for folder access via standard system dialogs (NSOpenPanel / NSSavePanel) so you maintain total control over exactly which disk locations the app can touch.",
  },
  {
    category: "Privacy",
    question: "How do I strip GPS location and camera EXIF metadata?",
    answer:
      "Before clicking Compress or Convert, check the 'Strip GPS & Camera EXIF' toggle in the right-hand Inspector panel. MorphDoc Suits strips all geographic coordinates, camera serial numbers, lens info, and device timestamps before writing the final file.",
  },
  {
    category: "General",
    question: "Is MorphDoc Suits compatible with Apple Silicon M1, M2, M3, M4, M5, and Intel Macs?",
    answer:
      "Yes. MorphDoc Suits is compiled as a Universal macOS Binary containing native ARM64 instructions optimized for Apple Silicon Neural Engines and GPUs, alongside optimized x86_64 code for Intel Macs. It requires macOS 13.0 (Ventura) or later.",
  },
  {
    category: "General",
    question: "Can I use MorphDoc Suits completely offline on an airplane or without internet?",
    answer:
      "Yes, 100%. MorphDoc Suits requires 0 MB of internet bandwidth. There are no server dependencies, no remote API calls, no cloud telemetry, and no online sign-in gates.",
  },
  {
    category: "Passport",
    question: "Does the Passport & ID Studio create official visa and passport compliant photos?",
    answer:
      "Yes. The Passport Studio includes official government presets for US 2×2 inch (DS-160, US Passport), UK/EU/Schengen/Australia 35×45mm, Canada 50×70mm, and India PAN/Passport. It uses on-device Apple Vision framework for crown-to-chin ratio alignment, eye-level guides, solid background fills, and multi-photo A4/4×6 printable sheets with hairline cutting guides.",
  },
  {
    category: "PDF",
    question: "How does MorphDoc Suits compress PDFs without making text blurry?",
    answer:
      "Unlike standard web compressors that flatten entire PDF pages into low-resolution lossy images, MorphDoc Suits uses content-aware PDF stream optimization. It preserves 100% vector typography, TrueType fonts, form fields, and line art while selectively downsampling high-DPI embedded photographic streams to standard 150 or 300 DPI.",
  },
  {
    category: "PDF",
    question: "Can I merge and reorder pages from multiple PDFs at once?",
    answer:
      "Yes. The 'Merge & Reorder PDF' workspace lets you drag and drop multiple documents into an intuitive visual thumbnail page grid. You can rotate individual pages, reorder via drag-and-drop, delete unwanted sheets, or reverse sequence with a single click before lossless export.",
  },
  {
    category: "General",
    question: "What image formats are supported for conversion?",
    answer:
      "MorphDoc Suits supports 18 formats including Apple HEIC, modern AVIF, WebP, PNG (with alpha transparency), JPEG, TIFF, BMP, ICO, and SVG vector rendering. Batch conversion processes dozens of files in parallel in under 50 milliseconds.",
  },
];

