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
          "https://vercel.com/templates/next.js/og-cool",
        permanent: false,
      },
      {
        source: "/github",
        destination: "https://github.com/steven-tey/og",
        permanent: false,
      },
      {
        source: "/guide",
        destination: "https://vercel.com/guides/displaying-article-headlines-in-social-previews",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
