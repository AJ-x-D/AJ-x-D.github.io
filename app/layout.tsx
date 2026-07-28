import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

// Deliberately not named --font-sans / --font-serif: Tailwind v4 already
// defines those tokens on :root, which would shadow these.
const bodyFont = Manrope({
  variable: "--font-body-src",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  fallback: [
    "PingFang SC",
    "Microsoft YaHei UI",
    "Microsoft YaHei",
    "Noto Sans CJK SC",
    "sans-serif",
  ],
});

// Cormorant gives headings a quieter editorial character than Newsreader.
// CJK text falls through to modern Song-style system faces.
const displayFont = Cormorant_Garamond({
  variable: "--font-display-src",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  fallback: [
    "Source Han Serif SC",
    "Noto Serif CJK SC",
    "Songti SC",
    "STSong",
    "SimSun",
    "serif",
  ],
});

// Applied before first paint so the stored theme never flashes.
const themeScript = `(function(){try{var s=localStorage.getItem('theme');var d=s?s:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=d;}catch(e){document.documentElement.dataset.theme='light';}})();`;

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f4ee" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1216" },
  ],
};

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host?.includes("localhost") ? "http" : "https");
  const origin = host ? `${protocol}://${host}` : "https://aojie-xu.sites.openai.com";
  const title = "Aojie Xu 徐鳌杰 | Historical GIS & GeoAI";
  const description =
    "Academic profile of Aojie Xu, an M.Sc. researcher at South China Normal University working on historical GIS, historical maps and interpretable GeoAI.";

  return {
    metadataBase: new URL(origin),
    title,
    description,
    keywords: [
      "Historical GIS",
      "GeoAI",
      "historical maps",
      "explainable AI",
      "Pearl River Delta",
      "历史地理",
      "历史地图",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: `${origin}/og.jpg`,
          width: 1200,
          height: 630,
          alt: "Aojie Xu - Historical GIS and GeoAI",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og.jpg`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
