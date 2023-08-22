import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

const cheltenham = fetch(
  new URL("@/styles/cheltenham-italic-700.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const cheltenhamData = await cheltenham;

  const { searchParams } = new URL(req.url);

  const url =
    searchParams.get("url") ||
    "https://www.nytimes.com/2023/08/22/climate/tropical-storm-california-maui-fire-extreme-august.html";

  const { title, image } = await fetch(
    `https://api.dub.co/metatags?url=${url}`
  ).then((res) => res.json());

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          fontWeight: 600,
          color: "white",
        }}
      >
        <h1
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            margin: 0,
            fontSize: 50,
            fontFamily: "NYC Cheltenham",
            maxWidth: 900,
            whiteSpace: "pre-wrap",
            letterSpacing: -1,
          }}
        >
          {title}
        </h1>
      </div>
    ),
    {
      width: 1050,
      height: 549,
      fonts: [
        {
          name: "NYC Cheltenham",
          data: cheltenhamData,
        },
      ],
    }
  );
}
