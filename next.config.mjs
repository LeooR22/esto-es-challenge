/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/backoffice/my-projects",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
