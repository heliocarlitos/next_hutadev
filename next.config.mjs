import withPWA from "next-pwa";
import runtimeCaching from "next-pwa/cache";

export default withPWA({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  runtimeCaching: [
    ...runtimeCaching,
    {
      urlPattern: /^https:\/\/nexthutadev\.vercel\.app\/.*\.(png|jpg|jpeg|svg|webp|ico)$/,
      handler: "CacheFirst",
      options: {
        cacheName: "images-cache",
        expiration: {
          maxEntries: 100,
          maxAgeSeconds: 7 * 24 * 60 * 60,
        },
        cacheableResponse: {
          statuses: [0, 200],
        },
      },
    },
    {
      urlPattern: /^https:\/\/nexthutadev\.vercel\.app\/.*\.css|.*\.js$/,
      handler: "StaleWhileRevalidate",
      options: {
        cacheName: "static-resources",
        expiration: {
          maxEntries: 50,
          maxAgeSeconds: 7 * 24 * 60 * 60, 
        },
      },
    },
    {
      urlPattern: /^https:\/\/nexthutadev\.vercel\.app\/.*$/,
      handler: "NetworkFirst",
      options: {
        cacheName: "pages-cache",
        networkTimeoutSeconds: 5,
      },
    },
  ],
})({
  reactStrictMode: true,
});
