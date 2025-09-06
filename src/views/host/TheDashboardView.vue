<template>
  <div>
<section aria-label="welcome" class="flex justify-between items-center bg-[#FFEAD0] my-padding py-[37px] ">

<div class="flex flex-col gap-3 ">
  <h1 class="text-[22px] sm:text-[36px]">Welcome</h1>
  <div class="flex text-[13px] sm:text-[16px]">income <pre> </pre><span>
     <TheLastThirtyDays/>
  </span></div>
<div class="font-extrabold text-[24px] sm:text-[38px]">$2,260</div>
</div>

<router-link class="no-underline text-[13px] sm:text-[16px]" :to="{name:'income'}">Details</router-link>

</section>

<section class="my-padding flex justify-between items-center py-[42px] bg-[#FFDDB2]" aria-label="reviews">
<div class="flex gap-4 items-center">
  <h3 class="font-bold">Review score</h3>
  <div class="flex gap-2 items-center"> 
    <TheStar/>
    <div class=""><span class="font-bold">5.0</span>/5</div>
  </div>
</div>
<router-link class="no-underline text-[black]" :to="{name:'reviews'}">Details</router-link>
</section>

<section class="my-padding">

<header class="flex justify-between items-center py-[30px]">
<h2 class="font-bold">Your listed vans</h2>
<RouterLink  :to="{name:'vans'}">View All</RouterLink>
</header>
<div class="flex gap-3 flex-col ">
<router-link class="bg-white rounded-md items-center flex justify-between px-[18px] py-[12px]  sm:px-[28px] sm:py-[18px]" v-for="(van,index) in data" :to="{name:'van-details',params:{id:van.id}}" :key="index">
<div class="flex gap-3 items-center">
  <img class="h-[66px] rounded-md" :src="van?.imageUrl" :alt="van?.name||'van'">

<div class="flex flex-col gap-2">
<h2 class="text-[16px] sm:text-[20px]">{{ van?.name }}</h2>
<div class="text-[#4D4D4D] text-[13px] sm:text-[16px]">${{van?.price}}/day</div>
</div>
</div>
<p class="text-[13px]">Edit</p>
</router-link>
</div>
</section>

  </div>

</template>

<script lang="ts" setup>
import TheLastThirtyDays from '@/components/TheLastThirtyDays.vue';
import TheStar from '@/components/TheStar.vue';
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';
const store=useCounterStore()
const {data}=storeToRefs(store)
</script>

<style scoped>
a{
  color:black;
  text-decoration: none;
}

</style>