import React from "react";
import { constructMetadata } from "@/lib/seo/metadata";
import { FileText, ShieldCheck } from "lucide-react";

export const metadata = constructMetadata({
  title: "Terms of Service & EULA — MorphDoc Suits",
  description:
    "Standard end-user license terms, intellectual property notice, and disclaimer for official ID/passport photo acceptance rules.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <div className="pt-28 pb-24 sm:pt-36 sm:pb-32 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-300 text-xs font-semibold border border-blue-500/20">
            <FileText className="w-4 h-4 text-blue-400" />
            <span>End-User License Agreement &amp; Terms</span>
          </div>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Terms of Use &amp; EULA
        </h1>

        <div className="mt-3 flex items-center gap-4 text-xs text-neutral-400 font-mono border-b border-white/10 pb-6">
          <span>Effective Date: November 2026</span>
          <span>•</span>
          <span>Governed by Apple Standard EULA &amp; Custom Terms</span>
        </div>

        <div className="prose prose-invert max-w-none text-neutral-300 text-sm sm:text-base space-y-8 leading-relaxed mt-8">
          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              1. Acceptance of Terms
            </h2>
            <p>
              By downloading, installing, or using MorphDoc Suits (&quot;the Application&quot;) from
              the Mac App Store or visiting our website, you agree to be bound by these Terms of Use
              and the standard Apple Licensed Application End User License Agreement (EULA). If you
              do not agree with any provision of these terms, do not install or use the Application.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              2. License Grant &amp; Permitted Use
            </h2>
            <p>
              MorphDoc Suits grants you a revocable, non-exclusive, non-transferable, limited license
              to download, install, and execute the Application on Apple-branded macOS devices that
              you own or control, in accordance with the Apple Media Services Terms and Conditions.
              You may use MorphDoc Suits for personal, educational, and commercial document and
              image processing.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              3. User Content &amp; Local Processing
            </h2>
            <p>
              You retain all ownership, intellectual property rights, and responsibility for the
              documents, images, and photos you process with MorphDoc Suits. Because all file
              operations run locally on your device within the macOS App Sandbox, you acknowledge
              that the developer has no access to, custody of, or liability for your content.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              4. Disclaimer for Passport &amp; Official ID Photo Acceptance
            </h2>
            <p>
              While MorphDoc Suits provides calibrated dimension presets (such as US 2×2&quot;,
              UK/EU 35×45mm, Canada 50×70mm) and facial alignment guidelines based on official
              embassy and passport agency specifications, the final acceptance of any visa or
              passport photo is subject solely to the discretion of the issuing government
              authority. You are responsible for ensuring that lighting, neutral facial expression,
              clothing contrast, and paper finish satisfy your jurisdiction&apos;s rules.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              5. Intellectual Property
            </h2>
            <p>
              The Application, its original interface, design, typography, icons, and software
              algorithms are the proprietary intellectual property of MorphDoc Suits. Apple, macOS,
              Mac, Mac App Store, and Apple Silicon are trademarks of Apple Inc., registered in the
              U.S. and other countries.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              6. Limitation of Liability &amp; Warranty Disclaimer
            </h2>
            <p>
              MorphDoc Suits is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis
              without warranties of any kind. To the maximum extent permitted by applicable law, the
              developer disclaims all liability for any indirect, incidental, or consequential
              damages resulting from the use or inability to use the Application.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              7. Contact Information
            </h2>
            <p>
              If you have any questions or require support regarding these Terms, please reach us at:{" "}
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

