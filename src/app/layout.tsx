import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "POPM × Rentprompts — Elite Ad Creative Agency",
  description:
    "High-volume, AI-powered ad creative production for 8-figure e-commerce brands. We eliminate creative fatigue and revive your CTR.",
  keywords: [
    "ad creative agency",
    "e-commerce ads",
    "UGC ads",
    "creative fatigue",
    "performance marketing",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
