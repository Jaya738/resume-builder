import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'icons/*.png', 'splash/*.png'],
      manifest: {
        name: 'Blink',
        short_name: 'Blink',
        description: 'Your resume is your first impression—make it count. Blink is a modern, lightning-fast resume builder designed to help you craft an eye-catching, professional CV.',
        start_url: '/',
        display: 'standalone',
        background_color: '#7b7272',
        theme_color: '#fafafa',
        orientation: 'portrait',
        scope: '/',
        lang: 'en',
        icons: [
          { src: 'icons/icon-48x48.png', sizes: '48x48', type: 'image/png' },
          { src: 'icons/icon-72x72.png', sizes: '72x72', type: 'image/png' },
          { src: 'icons/icon-96x96.png', sizes: '96x96', type: 'image/png' },
          { src: 'icons/icon-120x120.png', sizes: '120x120', type: 'image/png' },
          { src: 'icons/icon-144x144.png', sizes: '144x144', type: 'image/png' },
          { src: 'icons/icon-150x150.png', sizes: '150x150', type: 'image/png' },
          { src: 'icons/icon-152x152.png', sizes: '152x152', type: 'image/png' },
          { src: 'icons/icon-167x167.png', sizes: '167x167', type: 'image/png' },
          { src: 'icons/icon-180x180.png', sizes: '180x180', type: 'image/png' },
          { src: 'icons/icon-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-310x310.png', sizes: '310x310', type: 'image/png' },
          { src: 'icons/icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: 'icons/icon-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
        globPatterns: ['**/*.{js,css,html,ico,png,jpg,jpeg,svg,webp,woff,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: { maxEntries: 10, maxAgeSeconds: 60 * 60 * 24 * 365 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
    }),
  ],
})
