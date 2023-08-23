import { NextRequest, NextResponse } from "next/server";
import { detectBot } from "@/lib/utils";

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. all root files inside /public (e.g. /favicon.ico)
     */
    "/((?!api/|_next/|_vercel|[\\w-]+\\.\\w+).*)",
  ],
};

export default async function middleware(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams.toString();
  const path = `${req.nextUrl.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ""
  }`;

  const isBot = detectBot(req);
  if (isBot) {
    return NextResponse.rewrite(new URL(req.nextUrl.pathname, req.url));
  }
  return NextResponse.redirect(`https://nytimes.com${path}`);
}
