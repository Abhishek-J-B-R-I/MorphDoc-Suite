import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { ShieldCheck, Lock, CheckCircle, ServerOff, EyeOff } from "lucide-react";

export const metadata = constructMetadata({
  title: "Privacy Policy — 100% On-Device & Zero Data Collection",
  description:
    "Official Apple App Store Connect Privacy Policy for MorphDoc Suits macOS Application and Website. All files process 100% locally with zero cloud collection.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-24 sm:pt-36 sm:pb-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Badge */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-300 text-xs font-semibold border border-emerald-500/20">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Apple App Store Review Guideline 5.1.1 Compliant</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Privacy Policy for MorphDoc Suits
        </h1>

        <div className="mt-3 flex items-center gap-4 text-xs text-neutral-400 font-mono border-b border-white/10 pb-6">
          <span>Effective Date: November 2026</span>
          <span>•</span>
          <span>Last Updated: November 2026</span>
        </div>

        {/* Quick Highlights Summary Box */}
        <div className="my-8 p-6 rounded-2xl bg-[#121422] border border-white/10 space-y-3">
          <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Lock className="w-4 h-4 text-emerald-400" />
            Summary for App Store Customers
          </h2>
          <ul className="text-xs text-neutral-300 space-y-2">
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>Zero File Uploads:</strong> Your documents, photos, and PDFs never leave
                your Mac.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>Zero Biometric Storage:</strong> Facial landmark alignment runs strictly in
                volatile memory via Apple Vision framework.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span>
                <strong>macOS App Sandbox:</strong> Enforced by macOS system architecture so only files
                you explicitly pick are accessed.
              </span>
            </li>
          </ul>
        </div>

        {/* Full Official Privacy Policy Content */}
        <div className="prose prose-invert max-w-none text-neutral-300 text-sm sm:text-base space-y-8 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              1. Our Core Privacy Promise (100% On-Device Processing)
            </h2>
            <p>
              MorphDoc Suits (&quot;the App&quot;) is engineered from the ground up as a
              privacy-first, local macOS utility. All image and PDF operations—including compression,
              resizing, cropping, format conversion, PDF merging, splitting, OCR text recognition,
              and passport/ID photo preparation—execute 100% locally on your Mac. Your files,
              photos, and documents are never uploaded to our servers or any third-party cloud
              service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              2. Personal Data &amp; Document Content Collection
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Zero File Collection:</strong> We do not collect, transmit, store, view, or
                have access to any images, PDFs, text, EXIF metadata, or documents you process inside
                MorphDoc Suits.
              </li>
              <li>
                <strong>Zero Biometric Storage:</strong> When using the Passport &amp; ID Studio,
                facial landmark alignment and background segmentation run entirely on your device
                using Apple&apos;s built-in Vision framework. No facial geometry or biometric
                identifiers are ever stored, shared, or transmitted externally.
              </li>
              <li>
                <strong>Zero Account Requirement:</strong> You do not need to create an account, log
                in, or provide personal information to use the App.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              3. macOS App Sandbox &amp; File Permissions
            </h2>
            <p>
              MorphDoc Suits operates strictly within the official macOS App Sandbox. The App can
              only read or write files that you explicitly select via the macOS system file picker
              (NSOpenPanel / NSSavePanel), drag-and-drop into the App window or Menu Bar icon, or
              paste from your clipboard. Temporary working buffers created during processing are
              stored inside your Mac&apos;s local sandboxed temporary directory and are automatically
              purged upon task completion or app closure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              4. Website &amp; Support Communications
            </h2>
            <p>
              When you visit our official website or submit a support inquiry via our Support page,
              we only receive the information you voluntarily provide (such as your name, email
              address, and message) solely for the purpose of resolving your support request. We
              never sell, rent, or trade your email address or personal contact details to third
              parties.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              5. Apple App Store Compliance &amp; Contact Us
            </h2>
            <p>
              This privacy policy meets 100% of Apple App Store Review Guideline 5.1.1 (Data
              Collection and Storage). If you have any questions about this Privacy Policy or our
              privacy practices, please contact us through our official Support page at{" "}
              <a href="/support" className="text-blue-400 hover:text-blue-300 underline">
                /support
              </a>{" "}
              or email us directly at:{" "}
              <a
                href="mailto:support@morphdocsuits.com"
                className="text-blue-400 hover:text-blue-300 underline font-mono"
              >
                support@morphdocsuits.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

