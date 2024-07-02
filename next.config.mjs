/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
    unoptimized: true,
  },
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/backoffice/my-projects",
        permanent: true,
      },
      {
        source: "/backoffice",
        destination: "/backoffice/my-projects",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
