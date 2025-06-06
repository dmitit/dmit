<script setup lang="ts"></script>

<template>
   <button
      class="group relative h-5 w-5 cursor-pointer bg-background"
      @click="setTheme('dark')"
   >
      <div
         class="absolute top-1/2 h-full w-full -translate-y-1/2 rounded-full border border-primary bg-background transition-colors duration-200 ease-out group-hover:shadow-[0_0_5px_0.5px_var(--color-primary-500)]"
      />
      <div
         class="absolute top-1/2 h-full w-full -translate-y-1/2 scale-[40%] rounded-full border border-primary bg-primary transition-all duration-200 ease-out group-hover:scale-[60%]"
      />
   </button>
</template>
