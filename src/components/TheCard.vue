<template>
  <RouterLink :to="id" class="no-underline text-black flex flex-col  basis-[100%] sm:basis-[40%]   md:max-w-[229px] overflow-hidden">
    <img :src="imageUrl" :alt="name" class="w-full h-auto rounded-md"
    
     
    loading="lazy">
    
    <div class="flex justify-between items-start mt-2">
      <h2 class="text-xl font-bold">{{ name }}</h2>
      
      <div class="flex flex-col items-end">
        <span class="text-xl font-bold">${{ price }}</span>
        <span class="text-sm text-gray-500">/day</span>
      </div>
      
    </div>
   <TheButton :type="type"/>
  </RouterLink>
</template>

<script lang="ts" setup>
import type { Van } from '@/interfaces/van';
import TheButton from './TheButton.vue';
import { RouterLink } from 'vue-router';

defineProps<Van>()
</script>

<style scoped>

</style>