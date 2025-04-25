// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss"],
   devtools: {
      enabled: true,
   },
   css: ["@/assets/css/main.scss"],
   compatibilityDate: "2024-11-01",
   tailwindcss: {},
});
