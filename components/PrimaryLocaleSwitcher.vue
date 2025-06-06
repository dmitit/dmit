<script setup>
const { locale, locales } = useI18n();

const isOpen = ref(false);

const switchLocalePath = useSwitchLocalePath();

const availableLocales = computed(() => {
   return locales.value.filter((i) => i.code !== locale.value);
});
</script>

<template>
   <div class="h-5 w-5">
      <div
         class="relative h-full w-full"
         @mouseenter="isOpen = true"
         @mouseleave="isOpen = false"
      >
         <button
            class="flex h-full w-full border border-primary bg-background text-xs font-medium text-primary"
         >
            <span class="pl-[1px]">
               {{ locale }}
            </span>
         </button>
         <Transition
            name="dropdown"
            enter-active-class="transition-all duration-200"
            leave-active-class="transition-all duration-300"
            enter-from-class="opacity-0 scale-y-0"
            enter-to-class="opacity-100 scale-y-100"
            leave-from-class="opacity-100 scale-y-100"
            leave-to-class="opacity-0 scale-y-0"
         >
            <div
               v-if="isOpen"
               class="absolute left-0 z-10 w-full origin-top border border-primary-900"
            >
               <ul>
                  <li
                     v-for="loc in availableLocales"
                     :key="loc.code"
                     class="h-5 w-full cursor-pointer bg-primary text-xs font-medium text-background"
                     @click="
                        () => {
                           switchLocalePath(loc.code);
                           isOpen = false;
                        }
                     "
                  >
                     <NuxtLink :to="switchLocalePath(loc.code)" class="flex">
                        <span class="pl-[1px]">
                           {{ loc.code }}
                        </span>
                     </NuxtLink>
                  </li>
               </ul>
            </div>
         </Transition>
      </div>
   </div>
</template>
