<template>
   <PrimaryContainer>
      <section class="py-16 text-primary">
         <div class="mb-12 text-center">
            <h1 class="mb-4 text-4xl font-bold text-primary">Meet The Stars</h1>
            <div class="mx-auto h-1 w-24 bg-accent" />
            <p class="mt-6 text-lg text-primary-700">
               Discover talented individuals making a difference in the tech
               world.
            </p>
         </div>

         <div
            v-if="stars.length"
            class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
         >
            <StarCard
               v-for="star in stars"
               :id="star.id"
               :key="star.id"
               :name="star.name"
               :specialization="star.specialization"
               :description="star.description"
               :image="star.image"
               :portfolio-url="star.portfolioUrl"
            />
         </div>
         <div v-else class="py-12 text-center">
            <Icon
               name="ph:star-four-duotone"
               class="mb-4 h-16 w-16 text-accent"
            />
            <p class="text-xl text-primary-700">
               No stars featured at the moment.
            </p>
            <p class="text-primary-500">Please check back soon!</p>
         </div>
      </section>
   </PrimaryContainer>
</template>

<script setup lang="ts">
import { ref } from "vue";

interface Star {
   id: string;
   name: string;
   specialization: string;
   description: string;
   image: string;
   portfolioUrl: string;
}

const stars = ref<Star[]>([
   {
      id: "star-jane-doe",
      name: "Jane Doe",
      specialization: "Frontend Wizard",
      description:
         "Jane crafts beautiful and intuitive user interfaces with a passion for pixel-perfect design and cutting-edge technologies. She turns complex problems into elegant solutions.",
      image: "https://picsum.photos/seed/janedoe/600/400",
      portfolioUrl: "#", // Replace with actual portfolio URL
   },
   {
      id: "star-john-smith",
      name: "John Smith",
      specialization: "Backend Architect",
      description:
         "John builds robust and scalable backend systems. With a keen eye for performance and security, he ensures applications run smoothly and reliably under any load.",
      image: "https://picsum.photos/seed/johnsmith/600/400",
      portfolioUrl: "#",
   },
   {
      id: "star-alex-green",
      name: "Alex Green",
      specialization: "Full-Stack Developer",
      description:
         "Alex bridges the gap between frontend and backend, delivering complete web solutions. A versatile developer who enjoys tackling diverse challenges and learning new skills.",
      image: "https://picsum.photos/seed/alexgreen/600/400",
      portfolioUrl: "#",
   },
   {
      id: "star-sarah-lee",
      name: "Sarah Lee",
      specialization: "UI/UX Designer",
      description:
         "Sarah creates engaging and user-centric designs that solve real problems. Her process involves deep research, iterative prototyping, and a focus on usability.",
      image: "https://picsum.photos/seed/sarahlee/600/400",
      portfolioUrl: "#",
   },
]);

useHead({
   title: "Our Stars | DMIT",
   meta: [
      {
         name: "description",
         content:
            "Meet the talented specialists and developers featured by DMIT. Discover their skills and portfolios.",
      },
   ],
});
</script>
