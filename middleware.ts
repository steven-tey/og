import { NextRequest, NextResponse } from "next/server";
import { detectBot } from "@/lib/utils";

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_vercel (Vercel internals)
     */
    "/((?!api/|_next/|_vercel).*)",
  ],
};

export default async function middleware(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams.toString();
  const path = `${req.nextUrl.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ""
  }`;

  const isBot = detectBot(req);
  if (true) {
    return NextResponse.rewrite(
      new URL(decodeURIComponent(req.nextUrl.pathname), req.url)
    );
  }
  return NextResponse.redirect(`https://${path}`);
}
