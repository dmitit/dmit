<script setup lang="ts">
import { computed } from "vue"; // Added ref
const img = useImage();

const ParallaxImgStyles = computed(() => {
   const ParallaxImgUrl = img("/images/main-flight.jpg");

   return { backgroundImage: `url('${ParallaxImgUrl}')` };
});
</script>

<template>
   <div>
      <!-- Intro Section -->
      <section class="py-16 text-primary md:py-24">
         <div class="mx-auto max-w-[1200px] px-4">
            <div
               class="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-6"
            >
               <!-- Левая колонка: список -->
               <div
                  class="flex h-full flex-col justify-center text-center md:text-left"
               >
                  <h1 class="mb-4 text-4xl font-semibold md:text-5xl">
                     STRICT IT STYLE
                  </h1>
                  <p class="text-md mb-8 text-primary-700 md:text-lg">
                     Contact us and get a solution that will work for you.
                  </p>
                  <ul
                     class="mb-10 grid max-w-full grid-cols-1 gap-x-4 gap-y-3 self-center sm:grid-cols-2 md:max-w-[70%] md:self-start lg:grid-rows-2"
                  >
                     <li class="flex items-center">
                        <Icon
                           name="ph:globe-hemisphere-west-duotone"
                           class="mr-2 h-5 w-5 flex-shrink-0 text-accent"
                        />
                        <span>Web & Mobile</span>
                     </li>
                     <li class="flex items-center">
                        <Icon
                           name="ph:users-three-duotone"
                           class="mr-2 h-5 w-5 flex-shrink-0 text-accent"
                        />
                        <span>Consulting</span>
                     </li>
                     <li class="flex items-center">
                        <Icon
                           name="ph:gear-fine-duotone"
                           class="mr-2 h-5 w-5 flex-shrink-0 text-accent"
                        />
                        <span>Automation</span>
                     </li>
                     <li class="flex items-center">
                        <Icon
                           name="ph:rocket-launch-duotone"
                           class="mr-2 h-5 w-5 flex-shrink-0 text-accent"
                        />
                        <span>Startup Acceleration</span>
                     </li>
                  </ul>
                  <NuxtLink to="#about" class="self-center md:self-start">
                     <PrimaryButton> Contact </PrimaryButton>
                  </NuxtLink>
               </div>
               <!-- Правая колонка: картинка -->
               <div class="flex items-center justify-center">
                  <NuxtImg
                     src="https://picsum.photos/1000/500"
                     alt="Preview"
                     class="h-auto w-full max-w-md rounded-xl object-cover shadow-lg md:max-w-[1000px]"
                  />
               </div>
            </div>
         </div>
      </section>

      <!-- How We Combine Section -->
      <section class="bg-background-100 py-16 text-primary">
         <PrimaryContainer>
            <div class="mb-12 text-center md:mb-16">
               <h2 class="mb-4 text-3xl font-bold md:text-4xl">
                  How We Combine
               </h2>
               <div class="mx-auto h-1 w-24 bg-accent" />
            </div>
            <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
               <div class="rounded-xl bg-background p-6 shadow-lg md:p-8">
                  <p
                     class="text-sm leading-relaxed text-primary-700 md:text-base"
                  >
                     <b class="text-lg font-bold md:text-xl">STRICT</b> defines
                     the unseen perfection within. Like the Golden Ratio, our
                     products are built with an internal integrity that ensures
                     unparalleled performance, scalability, and security. Every
                     line of code is meticulously engineered for ultimate
                     efficiency, guaranteeing flawless operation beneath the
                     surface.
                  </p>
               </div>
               <div class="rounded-xl bg-background p-6 shadow-lg md:p-8">
                  <p
                     class="text-sm leading-relaxed text-primary-700 md:text-base"
                  >
                     <b class="text-lg font-bold md:text-xl">STYLE</b> is the
                     captivating face of our work – the outward masterpiece
                     designed to mesmerize and connect. It's where art meets
                     human intuition, crafting elegant, intuitive, and visually
                     compelling interfaces. We believe a truly great digital
                     solution seamlessly blends aesthetics with function.
                  </p>
               </div>
            </div>
         </PrimaryContainer>
      </section>

      <div
         class="min-h-[600px] bg-cover bg-fixed bg-center"
         :style="ParallaxImgStyles"
         role="img"
         aria-label="Time to take off!"
      >
         <!-- This div creates the parallax effect with a background image -->
         <!-- It's intentionally empty to just display the background -->
      </div>

      <!-- About Us Section -->
      <section id="about" class="mb-16 py-16 text-primary">
         <PrimaryContainer>
            <AboutUsSection />
         </PrimaryContainer>
      </section>

      <section>
         <PrimaryContainer>
            <ContactUsSection />
         </PrimaryContainer>
      </section>
   </div>
</template>
