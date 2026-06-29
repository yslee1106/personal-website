/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '/personal-website',
  images: { loaderFile: './lib/imageLoader.ts' },
};

export default nextConfig;
