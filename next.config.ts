/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Agar aap images.unsplash.com use kar rahe ho toh yeh rakho
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Yeh important hai IP access ke liye
  allowedDevOrigins: ['192.168.1.119'],
}

export default nextConfig