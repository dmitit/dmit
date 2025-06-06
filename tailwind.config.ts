import type { Config } from "tailwindcss";

export default <Partial<Config>>{
   darkMode: ["class", '[data-theme="dark"]'],
   theme: {
      extend: {
         colors: {
            background: "var(--color-bg)",
            "background-100": "var(--color-bg-100)",
            "background-300": "var(--color-bg-300)",
            "background-500": "var(--color-bg-500)",
            "background-700": "var(--color-bg-700)",
            "background-900": "var(--color-bg-900)",

            primary: "var(--color-primary)",
            "primary-100": "var(--color-primary-100)",
            "primary-300": "var(--color-primary-300)",
            "primary-500": "var(--color-primary-500)",
            "primary-700": "var(--color-primary-700)",
            "primary-900": "var(--color-primary-900)",

            accent: "var(--color-accent)",
            "accent-100": "var(--color-accent-100)",
            "accent-300": "var(--color-accent-300)",
            "accent-500": "var(--color-accent-500)",
            "accent-700": "var(--color-accent-700)",
            "accent-900": "var(--color-accent-900)",
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
