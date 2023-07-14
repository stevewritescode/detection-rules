/**
 * @type {import('next').NextConfig}
 */
const nextConfig   = {
  output: 'export',
  images: {
    loader: 'akamai',
    path: '',
  },
  assetPrefix: 'https://stevewritescode.github.io/detection-rules/',
};
  
export default nextConfig;
