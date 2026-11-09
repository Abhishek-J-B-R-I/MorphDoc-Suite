import type { Metadata } from "next";

export const SITE_URL = "https://morphdocsuits.com";
export const DEFAULT_TITLE = "MorphDoc Suits — Native macOS PDF & Image Compression Studio";
export const DEFAULT_DESCRIPTION =
  "Compress images & PDFs to exact KB/MB targets, merge and split pages, convert HEIC/WebP/PNG/JPG, and generate 300 DPI passport photos 100% offline on macOS.";

export function constructMetadata({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = "",
  keywords = [],
  image = "/brand/og-image.png",
}: {
  title?: string;
  description?: string;
  path?: string;
  keywords?: string[];
  image?: string;
} = {}): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title: {
      default: title,
      template: "%s | MorphDoc Suits",
    },
    description,
    keywords: [
      "MorphDoc Suits",
      "macOS PDF compressor",
      "compress image to 50KB Mac",
      "shrink PDF size Mac offline",
      "combine PDF files Mac",
      "convert HEIC to JPG Mac",
      "passport photo maker Mac 300 DPI",
      "Apple Silicon native utility",
      ...keywords,
    ],
    authors: [{ name: "MorphDoc Suits Team", url: SITE_URL }],
    creator: "MorphDoc Suits",
    publisher: "MorphDoc Suits",
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title,
      description,
      siteName: "MorphDoc Suits",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "MorphDoc Suits — Native macOS Studio",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@MorphDocSuits",
    },
    other: {
      "apple-itunes-app": "app-id=YOUR_APP_ID",
      "theme-color": "#08090C",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

