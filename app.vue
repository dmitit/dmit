<script setup>
// The only solution I found to set the theme before the page loads
useHead({
   script: [
      {
         children: `
        (function() {
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
        })();
      `,
      },
   ],
});

if (import.meta.client) {
   const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

   const updateTheme = () => {
      console.log("Updating theme...");
      setTheme(mediaQuery.matches ? "dark" : "light");
   };

   mediaQuery.addEventListener("change", updateTheme);
}
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
