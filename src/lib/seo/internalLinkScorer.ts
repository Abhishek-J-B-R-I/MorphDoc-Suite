export type IntentCategory = "compression" | "pdf" | "image" | "conversion" | "dpi" | "passport" | "security";

export interface PageLinkTarget {
  slug: string;
  title: string;
  shortDescription: string;
  tags: IntentCategory[];
  href: string;
}

export function computeTagSimilarity(tagsA: IntentCategory[], tagsB: IntentCategory[]): number {
  if (tagsA.length === 0 || tagsB.length === 0) return 0;
  const setA = new Set(tagsA);
  const intersection = tagsB.filter((tag) => setA.has(tag)).length;
  // Jaccard / Cosine approximation over discrete categorical intents
  return intersection / Math.sqrt(tagsA.length * tagsB.length);
}

export function getRecommendedInternalLinks(
  currentSlug: string,
  currentTags: IntentCategory[],
  allPages: PageLinkTarget[],
  limit = 4
): PageLinkTarget[] {
  return allPages
    .filter((p) => p.slug !== currentSlug)
    .map((p) => ({
      page: p,
      score: computeTagSimilarity(currentTags, p.tags),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.page);
}

