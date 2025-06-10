<template>
   <div
      class="group relative overflow-hidden rounded-xl bg-background-100 p-6 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl"
   >
      <div class="relative mb-4">
         <NuxtImg
            :src="image"
            :alt="name"
            class="h-48 w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
         />
         <div
            class="absolute inset-0 rounded-lg bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
         />
      </div>
      <h3 class="mb-1 text-xl font-bold text-primary">{{ name }}</h3>
      <p class="mb-2 text-sm text-accent-500">{{ specialization }}</p>
      <p class="mb-4 text-xs leading-relaxed text-primary-700">
         {{ description }}
      </p>
      <NuxtLink
         :to="portfolioUrl"
         target="_blank"
         class="inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-700"
      >
         View Portfolio
         <Icon name="ph:arrow-right-bold" class="ml-2 h-4 w-4" />
      </NuxtLink>
      <div
         class="bg-accent/20 absolute -bottom-10 -right-10 h-24 w-24 rounded-full opacity-0 transition-all duration-500 ease-out group-hover:bottom-0 group-hover:right-0 group-hover:opacity-100"
      />
   </div>
</template>

<script setup lang="ts">
defineProps({
   name: {
      type: String,
      required: true,
   },
   specialization: {
      type: String,
      required: true,
   },
   description: {
      type: String,
      required: true,
   },
   image: {
      type: String,
      required: true,
   },
   portfolioUrl: {
      type: String,
      required: true,
   },
});
</script>
