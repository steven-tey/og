import { NextRequest, NextResponse } from "next/server";
import { SUPPORTED_PUBLICATIONS, detectBot } from "@/lib/utils";

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

  if (
    SUPPORTED_PUBLICATIONS.every(
      (publication) => !path.startsWith(`/${publication}`)
    )
  ) {
    return NextResponse.redirect("https://github.com/steven-tey/og");
  }

  const isBot = detectBot(req);
  if (isBot) {
    return NextResponse.rewrite(new URL(req.nextUrl.pathname, req.url));
  }
  return NextResponse.redirect(`https://${path}`);
}
