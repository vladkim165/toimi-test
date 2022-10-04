import { nextI18NextConfig } from './next-i18next.config.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: nextI18NextConfig.i18n,
}

export default nextConfig;
