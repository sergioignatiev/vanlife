<template>
  <div>
 <h1>Your listed vans</h1>
 <section class="flex flex-col gap-4 mt-[32px] ">
  <router-link  :to="{name:'van-details',params:{id:van.id}}" v-for="van in data"
   class="flex items-center text-black no-underline gap-4 bg-white h-[102px] p-[24px]" :key="van.id">
    <img width="66" height="66" class="rounded-md" :src="van.imageUrl" :alt="van.name||'van'">
    <div class="">
      <h2>{{ van.name }}</h2>
      <p>${{van.price  }}/day</p>
    </div>
  </router-link>
 </section>
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';
import { RouterLink } from 'vue-router';
const store=useCounterStore()
const {data}=storeToRefs(store)
</script>

<style>

</style>