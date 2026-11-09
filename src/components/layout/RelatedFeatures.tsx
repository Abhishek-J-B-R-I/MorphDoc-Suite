import React from "react";
import Link from "next/link";
import {
  IntentCategory,
  ALL_PAGE_TARGETS,
} from "@/content/featuresData";
import { getRecommendedInternalLinks } from "@/lib/seo/internalLinkScorer";
import { ArrowRight, Sparkles } from "lucide-react";

interface RelatedFeaturesProps {
  currentSlug: string;
  currentTags: IntentCategory[];
}

export function RelatedFeatures({ currentSlug, currentTags }: RelatedFeaturesProps) {
  const recommended = getRecommendedInternalLinks(
    currentSlug,
    currentTags,
    ALL_PAGE_TARGETS,
    4
  );

  return (
    <div className="border-t border-white/10 pt-16 mt-20">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-4 h-4 text-blue-400" />
        <h3 className="text-lg font-bold text-white tracking-tight">
          Explore Related macOS Utility Workflows
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {recommended.map((page) => (
          <Link
            key={page.slug}
            href={page.href}
            className="group rounded-2xl bg-white/5 border border-white/5 hover:border-blue-500/40 p-4 transition-all duration-200 hover:-translate-y-1"
          >
            <div className="text-xs font-semibold text-white group-hover:text-blue-400 flex items-center justify-between mb-1">
              <span>{page.title}</span>
              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-[11px] text-neutral-400 line-clamp-2">{page.shortDescription}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

