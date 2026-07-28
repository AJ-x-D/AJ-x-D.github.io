import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

// Deliberately not named --font-sans / --font-serif: Tailwind v4 already
// defines those tokens on :root, which would shadow these.
// The Latin webfonts carry no CJK glyphs, so the CJK fallbacks have to sit
// directly behind them — next/font otherwise injects a bare generic family.
const sans = Inter({
  variable: "--font-body-src",
  subsets: ["latin"],
  display: "swap",
  fallback: ["PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", "sans-serif"],
});

const serif = Newsreader({
  variable: "--font-display-src",
  subsets: ["latin"],
  display: "swap",
  // Latin serifs first — SimSun's half-width Latin glyphs look like a
  // typewriter face. CJK falls through to the Han serifs behind them.
  fallback: [
    "Georgia",
    "Times New Roman",
    "Source Han Serif SC",
    "Noto Serif CJK SC",
    "Songti SC",
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
      <body className={`${sans.variable} ${serif.variable}`}>{children}</body>
    </html>
  );
}
