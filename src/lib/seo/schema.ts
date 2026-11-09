export const SITE_URL = "https://morphdocsuits.com";

export const morphDocSoftwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MorphDoc Suits",
  operatingSystem: "macOS 13.0 or later (Apple Silicon & Intel)",
  applicationCategory: "UtilitiesApplication",
  applicationSubCategory: "PDF & Image Compression, Conversion & Editing Suite",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  description:
    "Native macOS studio to compress images and PDFs to exact KB/MB targets, merge and split PDFs, convert HEIC/WebP/PNG/JPG, and create verified 300 DPI passport photos 100% offline.",
  featureList: [
    "Exact KB/MB Image & PDF Compression",
    "Visual PDF Page Merge, Split & Reorder Grid",
    "Precision Pixel, mm, cm & Inch Resizer with 300 DPI Metadata",
    "Batch HEIC, WebP, AVIF, PNG & JPG Format Converter",
    "Offline Passport & Official ID Photo Studio with Print Sheets",
    "On-Device Searchable PDF OCR",
  ],
  screenshot: [
    `${SITE_URL}/screenshots/hero-compress-50kb.png`,
    `${SITE_URL}/screenshots/pdf-merge-page-grid.png`,
    `${SITE_URL}/screenshots/resize-dpi-inspector.png`,
    `${SITE_URL}/screenshots/passport-id-studio.png`,
  ],
  downloadUrl: "https://apps.apple.com/app/morphdoc-suits/idYOUR_APP_ID",
};

export function generateFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

