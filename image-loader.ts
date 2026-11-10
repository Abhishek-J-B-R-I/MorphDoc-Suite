export default function customImageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width?: number;
  quality?: number;
}): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  // Return absolute or external URLs as-is
  if (src.startsWith("http://") || src.startsWith("https://") || src.startsWith("data:")) {
    return src;
  }

  // Prepend basePath for GitHub Pages static hosting
  if (basePath && !src.startsWith(basePath)) {
    const cleanSrc = src.startsWith("/") ? src : `/${src}`;
    return `${basePath}${cleanSrc}`;
  }

  return src;
}
