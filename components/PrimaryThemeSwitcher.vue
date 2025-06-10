<script setup lang="ts">
const { toggleTheme } = useTheme();
</script>

<template>
   <button
      class="group relative h-5 w-5 cursor-pointer bg-background"
      @click="toggleTheme"
   >
      <div
         class="absolute top-1/2 h-full w-full -translate-y-1/2 rounded-full border border-primary bg-background transition-colors duration-200 ease-out"
      />
      <div
         class="absolute top-1/2 h-full w-full -translate-y-1/2 scale-[40%] rounded-full border border-primary bg-primary transition-all duration-200 ease-out group-hover:scale-[60%]"
      />
   </button>
</template>
