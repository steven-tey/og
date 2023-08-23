import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

const aktivGrotesk = fetch(
  new URL("@/styles/AktivGrotesk-XBold.ttf", import.meta.url)
).then((res) => res.arrayBuffer());

export default async function handler(req: NextRequest) {
  const aktivGroteskData = await aktivGrotesk;

  const { searchParams } = new URL(req.url);

  const url =
    searchParams.get("url") ||
    "https://techcrunch.com/2022/12/08/sharegpt-lets-you-easily-share-your-chatgpt-conversations/";

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
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            padding: "20px 80px",
            backgroundColor: "white",
          }}
        >
          <h1
            style={{
              fontSize: 50,
              fontFamily: "Aktiv Grotesk",
              color: "black",
              maxWidth: 900,
              whiteSpace: "pre-wrap",
              lineHeight: 1.4,
            }}
          >
            {title.replace(" | TechCrunch", "")}
          </h1>
        </div>
      </div>
    ),
    {
      width: 1050,
      height: 549,
      fonts: [
        {
          name: "Aktiv Grotesk",
          data: aktivGroteskData,
        },
      ],
    }
  );
}
