<script setup>
import { useTheme } from "./composables/useTheme";

// The only solution I found to set the theme before the page loads
useHead({
   script: [
      {
         children: `
        (function() {
          const themeKey = 'theme';
          const storedTheme = localStorage.getItem(themeKey);
          let themeToSet;
          if (storedTheme) {
            themeToSet = storedTheme;
          } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            themeToSet = prefersDark ? 'dark' : 'light';
          }
          document.documentElement.setAttribute('data-theme', themeToSet);
        })();
      `,
      },
   ],
});

useTheme();
</script>

<template>
   <div>
      <PrimaryHeader />
      <main>
         <NuxtPage />
      </main>
      <PrimaryFooter />
   </div>
</template>
