// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   modules: ['@nuxt/eslint'],
   devtools: { enabled: true },
   compatibilityDate: '2024-11-01',
   eslint: {
      config: {
         stylistic: {
            indent: 3,
            quotes: 'single',
            semi: true,
         },
      },
   },
})
