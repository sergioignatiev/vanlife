<template>
  <div class="flex flex-col w-full sm:w-[230px]  max-w-sm overflow-hidden">
    <img :src="imageUrl" :alt="name" class="w-full h-auto rounded-md"
    
      width="230" 
       height="230" 
    loading="lazy">
    
    <div class="flex justify-between items-start mt-2">
      <h2 class="text-xl font-bold">{{ name }}</h2>
      
      <div class="flex flex-col items-end">
        <span class="text-xl font-bold">${{ price }}</span>
        <span class="text-sm text-gray-500">/day</span>
      </div>
      
    </div>
    <button :class="type" class=" border-none rounded-md capitalize h-[34px]  text-white text-[1rem] font-semibold w-[37%] min-w[86px]">{{ type }}</button>
  </div>
</template>

<script lang="ts" setup>
interface Card { 
  id: string, 
  name: string, 
  price: number, 
  description: string, 
  imageUrl: string, 
  type: string,
  hostId: string 
}
defineProps<Card>()
</script>

<style scoped>
.simple{
background-color:#E17653 ;
}
.rugged{
background-color: #115E59;
}
.luxury{
background-color: #161616;
}
</style>