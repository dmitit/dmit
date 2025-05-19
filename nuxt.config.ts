// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
   devtools: {
      enabled: true,
   },
   i18n: {
      defaultLocale: "en",
      locales: [
         { code: "en", name: "English", file: "locales/en.json" },
         { code: "ru", name: "Русский", file: "locales/ru.json" },
      ],
      bundle: {
         optimizeTranslationDirective: false,
      },
      langDir: "./",
      restructureDir: "./",
      strategy: "prefix",
   },
   css: ["@/assets/css/main.scss"],
   compatibilityDate: "2024-11-01",
});
