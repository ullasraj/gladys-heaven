import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Glady's Heaven | Travel Beyond Dreams - Curated Holidays & Tour Packages",
  description:
    "Explore breathtaking hill stations, serene backwaters, and sacred pilgrimage paths with Glady's Heaven. Customized tour packages, premium fleet services, and 24/7 dedicated support.",
  keywords: [
    "Glady's Heaven",
    "Gladys Heaven",
    "Travel Beyond Dreams",
    "Kerala Tour Packages",
    "Munnar Tour",
    "Ooty Packages",
    "Kodaikanal Holidays",
    "Sacred Paths India",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-emerald-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
