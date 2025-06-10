<template>
   <header class="relative py-2.5">
      <PrimaryContainer>
         <div class="flex items-center justify-between">
            <!-- Logo -->
            <div class="flex items-center">
               <NuxtLink to="/" @click="closeMobileMenu">
                  <PrimaryLogo />
               </NuxtLink>
            </div>

            <!-- Desktop Navigation -->
            <nav class="hidden flex-1 justify-center md:flex">
               <ul class="flex items-center gap-14">
                  <li>
                     <NuxtLink
                        :to="$localePath('/')"
                        class="relative text-sm font-medium text-primary transition-all duration-200 before:absolute before:bottom-[-2px] before:h-[2px] before:w-full before:origin-center before:scale-x-0 before:bg-accent before:transition-transform before:duration-200 before:ease-in-out hover:text-[0.92rem] hover:before:origin-center hover:before:scale-x-100"
                     >
                        {{ $t("links.home") }}
                     </NuxtLink>
                  </li>
                  <li>
                     <NuxtLink
                        :to="$localePath('/articles')"
                        class="relative text-sm font-medium text-primary transition-all duration-200 before:absolute before:bottom-[-2px] before:h-[2px] before:w-full before:origin-center before:scale-x-0 before:bg-accent before:transition-transform before:duration-200 before:ease-in-out hover:text-[0.92rem] hover:before:origin-center hover:before:scale-x-100"
                     >
                        {{ $t("links.articles") }}
                     </NuxtLink>
                  </li>
                  <li>
                     <NuxtLink
                        :to="$localePath('/stars')"
                        class="relative text-sm font-medium text-primary transition-all duration-200 before:absolute before:bottom-[-2px] before:h-[2px] before:w-full before:origin-center before:scale-x-0 before:bg-accent before:transition-transform before:duration-200 before:ease-in-out hover:text-[0.92rem] hover:before:origin-center hover:before:scale-x-100"
                     >
                        {{ $t("links.stars") }}
                     </NuxtLink>
                  </li>
                  <li>
                     <NuxtLink
                        :to="$localePath('/about-us')"
                        class="relative text-sm font-medium text-primary transition-all duration-200 before:absolute before:bottom-[-2px] before:h-[2px] before:w-full before:origin-center before:scale-x-0 before:bg-accent before:transition-transform before:duration-200 before:ease-in-out hover:text-[0.92rem] hover:before:origin-center hover:before:scale-x-100"
                     >
                        {{ $t("links.about_us") }}
                     </NuxtLink>
                  </li>
               </ul>
            </nav>

            <!-- Desktop Actions (Theme/Locale) -->
            <div class="hidden items-center gap-6 md:flex">
               <PrimaryLocaleSwitcher />
               <PrimaryThemeSwitcher />
            </div>

            <!-- Mobile Menu Button -->
            <div class="flex items-center md:hidden">
               <button
                  :aria-expanded="isMobileMenuOpen"
                  class="inline-flex items-center justify-center rounded-md p-2 text-primary hover:bg-background-100 hover:text-accent focus:outline-none focus:ring-1 focus:ring-inset focus:ring-accent"
                  aria-controls="mobile-menu"
                  @click="toggleMobileMenu"
               >
                  <span class="sr-only">Open main menu</span>
                  <Icon
                     v-if="!isMobileMenuOpen"
                     name="heroicons:bars-3-20-solid"
                     class="block h-5 w-5"
                     aria-hidden="true"
                  />
                  <Icon
                     v-else
                     name="heroicons:x-mark-20-solid"
                     class="block h-5 w-5"
                     aria-hidden="true"
                  />
               </button>
            </div>
         </div>
      </PrimaryContainer>

      <!-- Mobile Menu -->
      <Transition name="slide-fade">
         <div
            v-if="isMobileMenuOpen"
            id="mobile-menu"
            class="absolute left-0 right-0 top-full z-40 bg-background shadow-xl md:hidden"
         >
            <nav class="space-y-1 px-2 pb-3 pt-2 sm:px-3">
               <NuxtLink
                  :to="$localePath('/')"
                  class="block rounded-md px-3 py-2 text-base font-medium text-primary transition-colors duration-150 ease-in-out hover:bg-background-100 hover:text-accent"
                  @click="closeMobileMenu"
                  >{{ $t("links.home") }}</NuxtLink
               >
               <NuxtLink
                  :to="$localePath('/articles')"
                  class="block rounded-md px-3 py-2 text-base font-medium text-primary transition-colors duration-150 ease-in-out hover:bg-background-100 hover:text-accent"
                  @click="closeMobileMenu"
                  >{{ $t("links.articles") }}</NuxtLink
               >
               <NuxtLink
                  :to="$localePath('/stars')"
                  class="block rounded-md px-3 py-2 text-base font-medium text-primary transition-colors duration-150 ease-in-out hover:bg-background-100 hover:text-accent"
                  @click="closeMobileMenu"
                  >{{ $t("links.stars") }}</NuxtLink
               >
               <NuxtLink
                  :to="$localePath('/about-us')"
                  class="block rounded-md px-3 py-2 text-base font-medium text-primary transition-colors duration-150 ease-in-out hover:bg-background-100 hover:text-accent"
                  @click="closeMobileMenu"
                  >{{ $t("links.about_us") }}</NuxtLink
               >
            </nav>
            <div class="border-primary/10 border-t px-2 py-3 sm:px-3">
               <div class="flex items-center justify-end">
                  <div class="flex items-center gap-3">
                     <PrimaryLocaleSwitcher />
                     <PrimaryThemeSwitcher />
                  </div>
               </div>
            </div>
         </div>
      </Transition>

      <div
         class="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-transparent via-accent to-transparent"
      />
   </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
   isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
   isMobileMenuOpen.value = false;
};
</script>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
   transition: all 0.25s ease-out;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
   transform: translateY(-15px);
   opacity: 0;
}
</style>
