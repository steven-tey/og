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
          fontWeight: 600,
          color: "white",
        }}
      >
        <img
          src={image}
          alt=""
          width={1050}
          height={549}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            height: "66%",
            width: "100%",
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)",
          }}
        />
        <h1
          style={{
            position: "absolute",
            bottom: 60,
            left: 80,
            margin: 0,
            fontSize: 50,
            fontFamily: "NYT Cheltenham",
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
          name: "NYT Cheltenham",
          data: cheltenhamData,
        },
      ],
    }
  );
}
