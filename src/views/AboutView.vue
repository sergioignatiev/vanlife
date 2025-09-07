<template>
  
  <div class="flex flex-col gap-[48px]">
    
    <img 
    src=" /images/about.png"
     srcset="
    /images/modest-explorer.png 480w,
 /images/about.png 1024w,
   /images/about.png 1920w
  "
      sizes="(max-width: 768px) 100vw, 1920px"
  alt="abt"
  loading="lazy"
  class="w-full h-auto"
   />

    <section class="my-padding flex flex-col gap-[33px]">
      <h1 class="text-[32px] font-bold">Don’t squeeze in a sedan when you could relax in a van.</h1>
<p>
  Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
(Hitch costs extra 😉)
</p>
<p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>

</section>
<section class="bg-[#FFCC8D] my-padding py-[32px] flex flex-col gap-[25px]">
  <div class="">
  <h2 class="text-[24px] font-bold">Your destination is waiting.</h2>
<h2 class="text-[24px] font-bold">Your van is ready.</h2>
</div>  
<router-link :to="{name:'home'}">
      <button class="min-w-[179px] font-bold h-[49px] border-none text-white bg-black rounded-[10px]">Explore our vans</button>
    </router-link>
</section>
  
  </div>
</template>
<script lang="ts" setup>
import { useHead } from '@vueuse/head';

useHead({
  title: 'About Page',
  link: [
    { rel: 'icon', href:'/images/about.png',type:'image/png'}
  ],
  meta: [
    { name: 'description', content: 'This is the about page' }
  ]
})


</script>
<style scoped>
p{
  font-weight: 500;
}

</style>
