/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.google.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination:
          "https://vercel.com/guides/displaying-article-headlines-in-social-previews",
        permanent: false,
      },
      {
        source: "/github",
        destination: "https://github.com/steven-tey/og",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
