/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['img.freepik.com', 'i.postimg.cc'], 
   },
 };

module.exports = nextConfig;
