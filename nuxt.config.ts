import tailwindcss from '@tailwindcss/vite'
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@pinia/nuxt', '@vueuse/nuxt'],
  css: ['~/assets/app.css'],
  vite: { plugins: [tailwindcss()] },
  nitro: {
    experimental: {
      websocket: true,
    },
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
})
