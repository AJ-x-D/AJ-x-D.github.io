import type { Metadata } from "next";
import { Noto_Sans, Noto_Serif } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const sans = Noto_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const serif = Noto_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host");
  const protocol =
    requestHeaders.get("x-forwarded-proto") ??
    (host?.includes("localhost") ? "http" : "https");
  const origin = host ? `${protocol}://${host}` : "https://aojie-xu.sites.openai.com";
  const title = "Aojie Xu | Historical GIS & GeoAI";
  const description =
    "Academic profile of Aojie Xu, an M.Sc. researcher working on historical GIS, historical maps and interpretable GeoAI.";

  return {
    metadataBase: new URL(origin),
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: `${origin}/og.png`,
          width: 1536,
          height: 864,
          alt: "Aojie Xu - Historical GIS and GeoAI",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${serif.variable}`}>{children}</body>
    </html>
  );
}
