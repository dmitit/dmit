// filepath: composables/useTheme.ts
import { ref } from "vue";

export type Theme = "light" | "dark";
const THEME_STORAGE_KEY = "theme";

// Singleton reactive state for the theme, initialized to null
const currentTheme = ref<Theme | null>(null);

// This initialization logic runs once on the client-side when the module is imported
if (import.meta.client) {
   const initializeClientTheme = () => {
      const domElement = document.documentElement;

      const updateDOMAndRef = (themeToSet: Theme) => {
         currentTheme.value = themeToSet;
         domElement.setAttribute("data-theme", themeToSet);
      };

      const storedTheme = localStorage.getItem(
         THEME_STORAGE_KEY,
      ) as Theme | null;
      // The inline script in app.vue's useHead should have already set data-theme
      const initialDOMTheme = domElement.getAttribute(
         "data-theme",
      ) as Theme | null;

      let themeToInitialize: Theme;

      if (storedTheme) {
         themeToInitialize = storedTheme;
      } else if (initialDOMTheme) {
         // Trust the theme set by the inline script if no localStorage preference
         themeToInitialize = initialDOMTheme;
      } else {
         // Fallback if inline script somehow didn't set it and no localStorage
         const systemPrefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)",
         ).matches;
         themeToInitialize = systemPrefersDark ? "dark" : "light";
      }

      updateDOMAndRef(themeToInitialize);

      // Listen for system theme changes
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      mediaQuery.addEventListener("change", (e) => {
         // Only update if no user preference is stored in localStorage
         if (!localStorage.getItem(THEME_STORAGE_KEY)) {
            updateDOMAndRef(e.matches ? "dark" : "light");
         }
      });
   };

   // Ensure this runs only after the DOM is available and if not already initialized
   if (
      document.readyState === "complete" ||
      document.readyState === "interactive"
   ) {
      if (currentTheme.value === null) {
         initializeClientTheme();
      }
   } else {
      document.addEventListener(
         "DOMContentLoaded",
         () => {
            if (currentTheme.value === null) {
               initializeClientTheme();
            }
         },
         { once: true },
      );
   }
}

export function useTheme() {
   const setTheme = (newTheme: Theme) => {
      if (!import.meta.client) return;

      currentTheme.value = newTheme;
      localStorage.setItem(THEME_STORAGE_KEY, newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
   };

   const toggleTheme = () => {
      if (!import.meta.client || currentTheme.value === null) return; // Ensure initialized
      setTheme(currentTheme.value === "dark" ? "light" : "dark");
   };

   // Expose a writable ref for direct v-model usage if needed,
   // but prefer setTheme for explicit changes with localStorage update.
   // For read-only purposes, `currentTheme` (as theme.value) is fine.
   return {
      theme: currentTheme, // This is a ref, access its value with .value
      setTheme,
      toggleTheme,
   };
}
