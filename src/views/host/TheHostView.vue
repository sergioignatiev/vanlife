<template>
  <div class="my-padding">
  
  <nav >
<ul class="flex items-center h-[100px] gap-[28px] list-none">
    <li v-for="(route,index) in hostRoutes":key=index >
        <router-link :to="{name:route.name}"   
        class="capitalize text-[#4D4D4D] no-underline">
        {{ route.name }}
    </router-link>
     </li>
</ul>
    
  
  </nav>
  <router-view/>
  </div>
</template>

<script lang="ts" setup>
import { useHead } from '@vueuse/head';
import { reactive } from 'vue';
useHead(()=>({
  title:"Host",
  link: [
    { rel: 'icon', href: '/images/registration.png' }
  ],
  meta: [
    { name: 'description', content: 'This is the host' }
  ]
}))


// Now, use this type for your reactive array
const hostRoutes = reactive([
  { name: 'dashboard' },
  { name: 'income' },
  { name: 'vans' },
  { name: 'reviews' }
]);

</script>

<style scoped>
.router-link-exact-active{
    text-decoration: underline;
  
    color:black;
}

</style>