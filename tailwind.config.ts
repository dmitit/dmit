import type { Config } from "tailwindcss";

export default <Partial<Config>>{
   darkMode: ["class", '[data-theme="dark"]'],
   theme: {
      extend: {
         colors: {
            background: "var(--color-bg)",
            primary: "var(--color-primary)",
            accent: "var(--color-accent)",
         },
         fontSize: {
            xs: "0.9rem",
         },
      },
   },
   content: {
      files: [
         "./components/**/*.{vue,js,jsx,mjs,ts,tsx}",
         "./layouts/**/*.{vue,js,jsx,mjs,ts,tsx}",
         "./pages/**/*.{vue,js,jsx,mjs,ts,tsx}",
         "./plugins/**/*.{js,ts,mjs}",
         "./composables/**/*.{js,ts,mjs}",
         "./utils/**/*.{js,ts,mjs}",
         "./{A,a}pp.{vue,js,jsx,mjs,ts,tsx}",
         "./{E,e}rror.{vue,js,jsx,mjs,ts,tsx}",
         "./app.config.{js,ts,mjs}",
         "./app/spa-loading-template.html",
      ],
   },
   plugins: [],
};
