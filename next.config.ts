import { i18n } from './next-i18next.config';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  i18n,
  experimental: {},
};

module.exports = nextConfig;
