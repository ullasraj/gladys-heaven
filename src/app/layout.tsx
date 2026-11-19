import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dayoff Journeys | Curated Travel Experiences & South India Tour Packages",
  description:
    "Explore breathtaking hill stations, serene backwaters, and sacred pilgrimage paths with Dayoff Journeys. Customized tour packages, premium fleet services, and 24/7 dedicated support across Kerala and South India.",
  keywords: [
    "Dayoff Journeys",
    "Kerala Tour Packages",
    "Munnar Tour",
    "Ooty Packages",
    "Kodaikanal Holidays",
    "Sacred Paths India",
    "South India Paradise",
    "Taxi Services Kerala",
    "Houseboat Alleppey",
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
