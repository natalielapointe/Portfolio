/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV = 'production';

const nextConfig = {
  basePath: isProd ? '/Portfolio' : '',
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true
  },
  sassOptions: {
    silenceDeprecations: ['legacy-js-api'],
  }
};

export default nextConfig;
