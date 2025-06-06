<template>
   <header class="relative mb-32 py-2.5">
      <PrimaryContainer>
         <div class="flex items-center">
            <div class="flex-[0.5] items-center">
               <div class="flex self-start">
                  <NuxtLink to="/">
                     <PrimaryLogo />
                  </NuxtLink>
               </div>
            </div>
            <nav class="flex flex-1 justify-center">
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
                        to="#about"
                        class="relative text-sm font-medium text-primary transition-all duration-200 before:absolute before:bottom-[-2px] before:h-[2px] before:w-full before:origin-center before:scale-x-0 before:bg-accent before:transition-transform before:duration-200 before:ease-in-out hover:text-[0.92rem] hover:before:origin-center hover:before:scale-x-100"
                     >
                        {{ $t("links.about_us") }}
                     </NuxtLink>
                  </li>
               </ul>
            </nav>
            <div class="flex flex-[0.5] items-center justify-end">
               <div class="flex items-center gap-6">
                  <PrimaryLocaleSwitcher />
                  <PrimaryThemeSwitcher />
               </div>
            </div>
         </div>
      </PrimaryContainer>
      <div
         class="absolute inset-x-0 bottom-0 h-[3px] bg-gradient-to-r from-transparent via-accent to-transparent"
      />
   </header>
</template>
