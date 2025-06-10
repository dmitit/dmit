<script setup lang="ts">
const activeTab = ref(0);
const tabs = [
   {
      name: "Why Choose Us?",
      content: [
         'At dmit, we merge innovative technology with striking design, crafting web solutions that excel in both performance and aesthetics. Our "STRICT IT STYLE" philosophy ensures robust, scalable backends and intuitive, engaging user interfaces.',
         "We collaborate closely to transform your vision into digital reality, focusing on quality and impactful results that help your business thrive.",
      ],
   },
   {
      name: "Our Approach",
      content: [
         "We champion transparency, collaboration, and unwavering client focus. Expect open communication and active involvement throughout your project, ensuring your goals are always at the forefront.",
         "Our aim is to forge lasting partnerships built on trust, delivering high-impact digital products that drive tangible business growth and success.",
      ],
   },
   {
      name: "Something Funny",
      content: [
         "Our team runs on passion, precision, and an impressive amount of coffee. We believe a good laugh (and a solid, elegant codebase) can conquer any digital challenge.",
         "While we're deeply serious about delivering exceptional results, we don't take ourselves too seriously. Expect a professional, effective, yet refreshingly personable journey with dmit.",
      ],
   },
];
</script>

<template>
   <div class="text-center">
      <h2 class="mb-4 text-3xl font-bold sm:text-4xl">About Us</h2>
      <div class="mx-auto mb-8 h-1 w-24 bg-accent sm:mb-12" />

      <!-- Tab Navigation -->
      <div
         class="mb-8 flex flex-col items-stretch space-y-3 px-4 sm:mb-10 sm:flex-row sm:items-center sm:justify-center sm:space-x-4 sm:space-y-0 sm:px-0"
      >
         <button
            v-for="(tab, index) in tabs"
            :key="index"
            :class="[
               'rounded-md px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-opacity-50 sm:px-6 sm:text-base',
               activeTab === index
                  ? 'bg-accent text-white'
                  : 'bg-background-100 text-primary hover:bg-background-300',
            ]"
            @click="activeTab = index"
         >
            {{ tab.name }}
         </button>
      </div>

      <!-- Tab Content -->
      <div class="mx-auto max-w-3xl px-4 text-left sm:px-0">
         <div
            v-if="tabs[activeTab] && tabs[activeTab].content"
            class="space-y-3 text-base text-primary-700 sm:space-y-4 sm:text-lg"
         >
            <p
               v-for="(paragraph, pIndex) in tabs[activeTab].content"
               :key="pIndex"
            >
               {{ paragraph }}
            </p>
         </div>
      </div>
   </div>
</template>
