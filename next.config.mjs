/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "",
        //   pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;

// module.exports = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "http",
//         hostname: "m.media-amazon.com",
//         port: "",
//         //   pathname: '/account123/**',
//       },
//     ],
//   },
// };
