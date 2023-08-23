import { Metadata } from "next";
import { NextRequest } from "next/server";

export function detectBot(req: NextRequest) {
  const url = req.nextUrl;
  if (url.searchParams.get("bot")) return true;
  const ua = req.headers.get("User-Agent");
  if (ua) {
    /*
     * Code adapted from Dub: https://github.com/steven-tey/dub/blob/55023183068e58a7e4ee88f2f1f837dbf75d5fc7/lib/middleware/utils.ts
     * Note:
     * - bot is for most bots & crawlers
     * - ChatGPT is for ChatGPT
     * - facebookexternalhit is for Facebook crawler
     * - WhatsApp is for WhatsApp crawler
     * - MetaInspector is for https://metatags.io/
     */
    return /bot|chatgpt|facebookexternalhit|WhatsApp|google|baidu|bing|msn|duckduckbot|teoma|slurp|yandex|MetaInspector/i.test(
      ua
    );
  }
  return false;
}

export function constructMetadata({
  title = "OG Cool – Add headlines to OG Images for News Articles",
  description = "OG Cool is a tool that adds headlines to Open Graph images for News articles.",
  image = "/api/og?url=https://www.nytimes.com/2023/08/22/world/europe/greece-wildfires-dead-bodies.html",
  icons = "/favicon.ico",
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@steventey",
    },
    icons,
    metadataBase: new URL("https://og.cool/"),
    themeColor: "#FFF",
  };
}

export function getEndpointFromDomain(domain: string) {
  if (domain.includes("nytimes.com")) {
    return "nyt";
  } else if (domain.includes("wired.com")) {
    return "wired";
  } else if (domain.includes("techcrunch.com")) {
    return "tc";
  } else {
    return "nyt";
  }
}

export const SUPPORTED_PUBLICATIONS = [
  "nytimes.com",
  "wired.com",
  "techcrunch.com",
];
