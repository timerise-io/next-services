/** @type {import('next').NextConfig} */

const nextConfig = {
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'de', 'pl', 'it'],
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
}

export default nextConfig;
