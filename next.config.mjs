import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer({
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://hackathon.grainrigi.net/:path*',
      }
    ];
  }
});
