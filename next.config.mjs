/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/',
          destination: '/home', // or '/work' depending on your preference
          permanent: true, // Indicates this is a permanent redirect (HTTP 308)
        },
      ];
    },
  };
  
  export default nextConfig;
  