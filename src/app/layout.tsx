import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { constructMetadata } from "@/lib/seo/metadata";
import { morphDocSoftwareSchema } from "@/lib/seo/schema";

export const metadata: Metadata = constructMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        {/* Apple Smart App Banner Meta Tag */}
        <meta name="apple-itunes-app" content="app-id=YOUR_APP_ID" />
        <meta name="theme-color" content="#08090C" />
        {/* SoftwareApplication Rich Snippet JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(morphDocSoftwareSchema),
          }}
        />
      </head>
      <body className="min-h-screen bg-[#08090C] text-[#F5F5F7] antialiased selection:bg-blue-600/30 selection:text-white flex flex-col justify-between">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
