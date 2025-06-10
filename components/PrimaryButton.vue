<template>
   <button
      class="relative overflow-hidden rounded-bl-md rounded-tr-md bg-primary px-14 py-2 font-semibold text-background transition-all duration-200 hover:rounded-bl-none hover:rounded-tr-none focus:outline-none"
   >
      <span
         class="shine pointer-events-none absolute left-[-75%] top-0 h-full w-1/2 translate-x-0 rotate-12 bg-accent opacity-30 blur-lg transition-transform duration-700 ease-out"
      />
      <span class="relative z-10">
         <slot />
      </span>
   </button>
</template>

<style scoped>
button:hover .shine {
   transform: translateX(250%);
   transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
