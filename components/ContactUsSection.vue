<template>
   <div class="text-center">
      <h2 class="mb-4 text-3xl font-bold md:text-4xl">Contact Us</h2>
      <div class="mx-auto mb-12 h-1 w-24 bg-accent" />

      <div class="flex flex-col items-center justify-center">
         <!-- Contact Links (Email & Phone) -->
         <div
            class="mb-8 flex flex-col items-center space-y-4 md:flex-row md:space-x-8 md:space-y-0"
         >
            <a
               href="mailto:dmitrevnik@gmail.com"
               class="text-md group flex items-center text-primary-700 transition-colors hover:text-accent md:text-lg"
            >
               <Icon
                  name="ph:envelope-simple-duotone"
                  class="mr-2 h-6 w-6 text-accent"
               />
               <span>dmitrevnik@gmail.com</span>
            </a>
            <a
               href="tel:+79175250948"
               class="text-md group flex items-center text-primary-700 transition-colors hover:text-accent md:text-lg"
            >
               <Icon name="ph:phone-duotone" class="mr-2 h-6 w-6 text-accent" />
               <span>+7 (917) 525-09-48</span>
            </a>
         </div>

         <!-- Social Media Icons -->
         <div class="flex space-x-6">
            <a
               href="#"
               target="_blank"
               rel="noopener noreferrer"
               title="Telegram"
               class="text-accent transition-colors hover:text-primary-700"
            >
               <Icon name="basil:telegram-solid" class="h-8 w-8" />
            </a>
            <a
               href="#"
               target="_blank"
               rel="noopener noreferrer"
               title="YouTube"
               class="text-accent transition-colors hover:text-primary-700"
            >
               <Icon name="basil:youtube-solid" class="h-8 w-8" />
            </a>
            <a
               href="#"
               target="_blank"
               rel="noopener noreferrer"
               title="X (Twitter)"
               class="text-accent transition-colors hover:text-primary-700"
            >
               <Icon name="basil:twitter-solid" class="h-8 w-8" />
            </a>
         </div>
      </div>
   </div>
</template>
