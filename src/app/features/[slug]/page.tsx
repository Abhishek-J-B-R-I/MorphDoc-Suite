import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { constructMetadata } from "@/lib/seo/metadata";
import { FEATURES_DATA, FeaturePageData } from "@/content/featuresData";
import { MacWindowFrame } from "@/components/layout/MacWindowFrame";
import { RelatedFeatures } from "@/components/layout/RelatedFeatures";
import { assetPath } from "@/lib/assets";
import {
  ShieldCheck,
  Check,
  X,
  Zap,
  Sparkles,
  ChevronRight,
  Minimize2,
  Lock,
  Grid,
  Move,
  Scissors,
  Target,
  Repeat,
  Cpu,
  Layers,
  ScanFace,
  Globe,
  Printer,
} from "lucide-react";

interface FeaturePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(FEATURES_DATA).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: FeaturePageProps) {
  const { slug } = await params;
  const feature = FEATURES_DATA[slug];
  if (!feature) return {};

  return constructMetadata({
    title: feature.title,
    description: feature.description,
    path: `/features/${slug}`,
    keywords: feature.keywords,
    image: feature.heroScreenshot,
  });
}

// Icon mapping helper
function renderHighlightIcon(name: string) {
  switch (name) {
    case "Minimize2":
      return <Minimize2 className="w-5 h-5 text-blue-400" />;
    case "ShieldCheck":
      return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
    case "Zap":
      return <Zap className="w-5 h-5 text-amber-400" />;
    case "Grid":
      return <Grid className="w-5 h-5 text-purple-400" />;
    case "Move":
      return <Move className="w-5 h-5 text-blue-400" />;
    case "Scissors":
      return <Scissors className="w-5 h-5 text-emerald-400" />;
    case "Target":
      return <Target className="w-5 h-5 text-blue-400" />;
    case "Sparkles":
      return <Sparkles className="w-5 h-5 text-cyan-400" />;
    case "Lock":
      return <Lock className="w-5 h-5 text-emerald-400" />;
    case "Repeat":
      return <Repeat className="w-5 h-5 text-blue-400" />;
    case "Cpu":
      return <Cpu className="w-5 h-5 text-purple-400" />;
    case "Layers":
      return <Layers className="w-5 h-5 text-cyan-400" />;
    case "ScanFace":
      return <ScanFace className="w-5 h-5 text-amber-400" />;
    case "Globe":
      return <Globe className="w-5 h-5 text-blue-400" />;
    case "Printer":
      return <Printer className="w-5 h-5 text-emerald-400" />;
    default:
      return <Sparkles className="w-5 h-5 text-blue-400" />;
  }
}

export default async function FeaturePage({ params }: FeaturePageProps) {
  const { slug } = await params;
  const feature: FeaturePageData | undefined = FEATURES_DATA[slug];

  if (!feature) {
    notFound();
  }

  return (
    <div className="pt-28 pb-24 sm:pt-36 sm:pb-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Breadcrumb & Badge */}
        <div className="flex flex-wrap items-center gap-2 mb-6 text-xs text-neutral-400">
          <span>MorphDoc Suits</span>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
          <span>Features</span>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
          <span className="text-white font-medium">{feature.badge}</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-300 text-xs font-semibold border border-blue-500/20">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>{feature.badge}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.12]">
              {feature.h1}
            </h1>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              {feature.description}
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/how-to-use"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold transition-all shadow-glow hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Visual How-To Guide</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-neutral-400 pt-2">
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
                100% Offline
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
                Zero Cloud Uploads
              </span>
              <span className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400 stroke-[3]" />
                Apple Silicon M1–M5
              </span>
            </div>
          </div>

          {/* Hero Screenshot in Mac Window Frame */}
          <div className="lg:col-span-6">
            <MacWindowFrame title={`MorphDoc Suits — ${feature.badge}`}>
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={assetPath(feature.heroScreenshot)}
                  alt={feature.h1}
                  fill
                  sizes="(max-width: 1024px) 100vw, 600px"
                  className="object-cover"
                  priority
                />
              </div>
            </MacWindowFrame>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {feature.highlights.map((h, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#12141F] border border-white/10 space-y-3"
            >
              <div className="p-2.5 rounded-2xl bg-white/5 w-fit border border-white/5">
                {renderHighlightIcon(h.icon)}
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">{h.title}</h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">{h.description}</p>
            </div>
          ))}
        </div>

        {/* Technical Specifications & Secondary Screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          {feature.secondaryScreenshot && (
            <div className="lg:col-span-6 order-2 lg:order-1">
              <MacWindowFrame title={`MorphDoc Suits — Secondary Inspector`}>
                <div className="relative aspect-[16/10] w-full">
                  <Image
                    src={assetPath(feature.secondaryScreenshot)}
                    alt={feature.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover"
                  />
                </div>
              </MacWindowFrame>
            </div>
          )}

          <div
            className={`${
              feature.secondaryScreenshot ? "lg:col-span-6 order-1 lg:order-2" : "lg:col-span-12"
            } space-y-6`}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Engineered Specifically for macOS
            </h2>
            <div className="divide-y divide-white/5 rounded-2xl bg-[#11131E] border border-white/10 p-5 space-y-3">
              {feature.specifications.map((spec, sIdx) => (
                <div key={sIdx} className="flex items-center justify-between pt-3 first:pt-0 text-xs">
                  <span className="text-neutral-400">{spec.label}</span>
                  <span className="font-semibold text-white font-mono">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* How-To Step-by-Step Guide */}
        <div className="mb-20 rounded-3xl bg-[#11131E] border border-white/10 p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">How It Works</h2>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              Three fast steps straight from macOS Finder.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {feature.howToSteps.map((step, idx) => (
              <div key={idx} className="space-y-3">
                <span className="text-2xl font-mono font-bold text-blue-400">{step.step}</span>
                <h3 className="text-base font-bold text-white">{step.title}</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Table vs Cloud Web Tools */}
        <div className="mb-20 rounded-3xl bg-[#12141F] border border-white/10 overflow-hidden">
          <div className="p-6 border-b border-white/10">
            <h2 className="text-xl font-bold text-white">
              MorphDoc Suits vs. Cloud Web Converters
            </h2>
          </div>

          <div className="divide-y divide-white/5">
            {feature.comparisonTable.map((row, rIdx) => (
              <div
                key={rIdx}
                className="grid grid-cols-1 md:grid-cols-12 p-4 sm:p-6 gap-3 items-center text-xs"
              >
                <div className="md:col-span-4 font-semibold text-white">{row.feature}</div>
                <div className="md:col-span-4 flex items-center gap-2 text-emerald-400 bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/20">
                  <Check className="w-4 h-4 shrink-0 stroke-[3]" />
                  <span>{row.morphDoc}</span>
                </div>
                <div className="md:col-span-4 flex items-center gap-2 text-neutral-400 p-2.5 rounded-xl bg-red-500/[0.03] border border-red-500/10">
                  <X className="w-4 h-4 shrink-0 text-red-400 stroke-[3]" />
                  <span>{row.cloudWebTools}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Algorithm 4: Semantic Internal Links Recommender */}
        <RelatedFeatures currentSlug={slug} currentTags={feature.tags} />
      </div>
    </div>
  );
}

