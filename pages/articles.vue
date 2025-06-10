<script setup lang="ts">
import { ref } from "vue";

// Placeholder data for articles
// In a real application, you would fetch this data from an API
const articles = ref([
   {
      id: "future-web-dev-2025",
      title: "The Future of Web Development in 2025",
      snippet:
         "Discover the upcoming trends and technologies shaping the future of web development. From AI-driven UIs to serverless architectures, we cover it all.",
      image: "https://picsum.photos/seed/futuristicweb/600/400",
      date: "October 26, 2024",
      author: "Elena Petrova",
   },
   {
      id: "mastering-tailwind-css",
      title: "Mastering Tailwind CSS: A Comprehensive Guide",
      snippet:
         "A deep dive into Tailwind CSS, exploring advanced techniques, customization, and best practices for building beautiful and responsive interfaces efficiently.",
      image: "https://picsum.photos/seed/tailwindmastery/600/400",
      date: "October 22, 2024",
      author: "Ivan Morozov",
   },
   {
      id: "nuxt3-performant-vue",
      title: "Nuxt 3: Building Performant Vue Applications",
      snippet:
         "Learn how Nuxt 3 enhances Vue development with its powerful features, improved performance, and delightful developer experience. Includes practical examples.",
      image: "https://picsum.photos/seed/nuxtperf/600/400",
      date: "October 18, 2024",
      author: "Anna Kuznetsova",
   },
   {
      id: "ux-modern-web-design",
      title: "The Importance of UX in Modern Web Design",
      snippet:
         "User experience is paramount. This article explores why UX should be at the core of your design process and how it impacts user engagement and conversion.",
      image: "https://picsum.photos/seed/uximportance/600/400",
      date: "October 15, 2024",
      author: "Dmitry Smirnov",
   },
   {
      id: "ssr-vs-csr",
      title: "Server-Side Rendering vs. Client-Side Rendering",
      snippet:
         "A comparative analysis of SSR and CSR, discussing their pros, cons, and use cases to help you choose the right rendering strategy for your project.",
      image: "https://picsum.photos/seed/renderwars/600/400",
      date: "October 10, 2024",
      author: "Olga Fedorova",
   },
   {
      id: "cybersecurity-web-apps",
      title: "Cybersecurity Best Practices for Web Applications",
      snippet:
         "Protect your web applications from common threats. This guide covers essential cybersecurity measures every developer should implement to keep data safe.",
      image: "https://picsum.photos/seed/webappsecurity/600/400",
      date: "October 5, 2024",
      author: "Sergey Volkov",
   },
]);

useHead({
   title: "Articles | DMIT",
   meta: [
      {
         name: "description",
         content:
            "Explore insightful articles on web development, design, and technology from the DMIT team.",
      },
   ],
});
</script>

<template>
   <PrimaryContainer>
      <section class="py-16 text-primary">
         <div class="mb-12 text-center">
            <h1 class="mb-4 text-4xl font-bold text-primary">Our Articles</h1>
            <div class="mx-auto h-1 w-24 bg-accent" />
            <p class="mt-6 text-lg text-primary-700">
               Explore insights, trends, and stories from our team.
            </p>
         </div>

         <div
            v-if="articles.length"
            class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
         >
            <ArticleCard
               v-for="article in articles"
               :id="article.id"
               :key="article.id"
               :title="article.title"
               :snippet="article.snippet"
               :image="article.image"
               :date="article.date"
               :author="article.author"
            />
         </div>
         <div v-else class="py-12 text-center">
            <Icon name="ph:files-duotone" class="mb-4 h-16 w-16 text-accent" />
            <p class="text-xl text-primary-700">
               No articles available at the moment.
            </p>
            <p class="text-primary-500">Please check back soon!</p>
         </div>
      </section>
   </PrimaryContainer>
</template>
