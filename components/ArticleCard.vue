<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
   id: { type: [String, Number], required: true },
   title: { type: String, required: true },
   snippet: { type: String, required: true },
   image: { type: String, required: true },
   date: { type: String, required: true },
   author: { type: String, required: true },
});

// This computed property can be adjusted if your article routes are different
const articleLink = computed(() => `/articles/${props.id}`);
</script>

<template>
   <div
      class="border-primary/10 group flex h-full transform flex-col overflow-hidden rounded-xl border bg-background shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
   >
      <NuxtLink :to="articleLink" class="block overflow-hidden">
         <NuxtImg
            :src="image"
            :alt="title"
            class="h-56 w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            width="600"
            height="400"
            format="webp"
            quality="80"
            loading="lazy"
         />
      </NuxtLink>
      <div class="flex flex-1 flex-col p-6">
         <h3
            class="mb-3 text-xl font-semibold text-primary transition-colors duration-300 group-hover:text-accent"
         >
            <NuxtLink :to="articleLink">
               {{ title }}
            </NuxtLink>
         </h3>
         <p class="mb-4 line-clamp-3 flex-grow text-sm text-primary-700">
            {{ snippet }}
         </p>
         <div class="mb-5 flex items-center text-xs text-primary-500">
            <Icon
               name="ph:calendar-blank-duotone"
               class="mr-1.5 h-4 w-4 text-accent"
            />
            <span>{{ date }}</span>
            <span class="mx-2">·</span>
            <Icon name="ph:user-duotone" class="mr-1.5 h-4 w-4 text-accent" />
            <span>{{ author }}</span>
         </div>
         <NuxtLink
            :to="articleLink"
            class="mt-auto inline-flex items-center self-start text-sm font-medium text-accent transition-colors duration-300 hover:text-primary"
         >
            Read More
            <Icon name="ph:arrow-right-bold" class="ml-1.5 h-4 w-4" />
         </NuxtLink>
      </div>
   </div>
</template>
