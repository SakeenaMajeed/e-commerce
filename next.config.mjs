/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
      images: {
        domains: ['cdn.sanity.io'], // Sanity ke image domains add karein
      },
    
  };
  
  export default nextConfig;