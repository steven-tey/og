import { constructMetadata, getEndpointFromDomain } from "@/lib/utils";
import Image from "next/image";

export const runtime = "edge";

export async function generateMetadata({
  params,
}: {
  params: { slug: string[] };
}) {
  const slug = params.slug.join("/");

  const { title, description } = await fetch(
    `https://api.dub.co/metatags?url=https://${slug}`
  ).then((res) => res.json());

  const domain = params.slug[0];

  return constructMetadata({
    title,
    description,
    image: `/api/og/${getEndpointFromDomain(domain)}?url=https://${slug}`,
    icons: `https://www.google.com/s2/favicons?sz=64&domain_url=${domain}`,
  });
}

export default async function ProxyPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const slug = params.slug.join("/");

  const { title, description } = await fetch(
    `https://api.dub.co/metatags?url=https://${slug}`
  ).then((res) => res.json());

  const domain = params.slug[0];

  return (
    <main className="flex h-screen w-screen items-center justify-center">
      <div className="mx-5 w-full max-w-lg overflow-hidden rounded-lg border border-gray-200 sm:mx-0">
        <Image
          src={`/api/og/${getEndpointFromDomain(domain)}?url=https://${slug}`}
          alt={title}
          width={1050}
          height={549}
        />
        <div className="flex space-x-3 bg-white p-5">
          <Image
            src={`https://www.google.com/s2/favicons?sz=64&domain_url=${params.slug[0]}`}
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
