import { constructMetadata } from "@/lib/utils";
import Image from "next/image";

export const runtime = "edge";

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}) {
  const slug = params.slug.join("/");

  const { title, description } = await fetch(
    `https://api.dub.co/metatags?url=https://nytimes.com/${slug}`
  ).then((res) => res.json());
  return constructMetadata({
    title,
    description,
    image: `/api/og?url=https://nytimes.com/${slug}`,
  });
}

export default async function ProxyPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const slug = params.slug.join("/");

  const { title, description } = await fetch(
    `https://api.dub.co/metatags?url=https://nytimes.com/${slug}`
  ).then((res) => res.json());

  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <div className="mx-5 w-full max-w-lg overflow-hidden rounded-lg border border-gray-200 sm:mx-0">
        <Image
          src={`/api/og?url=https://nytimes.com/${slug}`}
          alt={title}
          width={1050}
          height={549}
        />
        <div className="flex space-x-3 bg-gray-100 p-5">
          <Image
            src="/favicon.ico"
            alt="NYT logo"
            width={40}
            height={40}
            className="mt-1 h-6 w-6"
          />
          <div className="flex flex-col space-y-3">
            <h1 className="font-bold text-gray-700">{title}</h1>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
