<template>
  <div v-if="van" class="my-padding flex flex-col gap-10">
    <router-link class="text-[#201F1D] underline-offset-4 " :to="{name:'home'}">&#8592; Back to all vans</router-link>
    <img class="md:w-3/5 rounded-md transform transition-transform duration-300
             hover:rotate-y-6 hover:rotate-x-3 hover:scale-105
             shadow-[0_15px_25px_rgba(0,0,0,0.5)]
             rounded-xl" :src="van.imageUrl" :alt="van.name || 'Van image'" />
    <section class="flex flex-col gap-6 ">
    <TheButton  :type="van.type"/>
    <h1 class="">{{ van.name }}</h1>
    <div class="">${{van.price}} /day</div>
    <p>{{ van.description }}</p>
    <RouterLink :to="{name:'registration'}">
    <button class="
    shadow-[0_15px_25px_rgba(0,0,0,0.5)]
    max-w-[500px] w-[100%] h-[50px] border-none rounded-md text-[18px] font-semibold text-white bg-[#FF8C38]">Rent this van</button>
  </RouterLink>  
  </section>
  </div>
  
</template>

<script lang="ts" setup>
import { computed,watchEffect} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useCounterStore } from '@/stores/counter';
import { useHead } from '@vueuse/head';
import type { Van } from '@/interfaces/van';
import TheButton from '@/components/TheButton.vue';
const router =useRouter()
const route = useRoute();
const id = route.params.id as string;

const store = useCounterStore();
const { data } = storeToRefs(store);

// computed возвращает объект типа Van | undefined
const van = computed<Van | undefined>(() => data.value.find(x => x.id === id));


useHead(() => ({
  title: van.value?.name || 'Van Not Found',
  link: [
    { rel: 'icon', href: van.value?.imageUrl || '/images/default.png' }
  ],
  meta: [
    { name: 'description', content: van.value?.description || 'Van page' }
  ]
}))

</script>

<style scoped>

</style>
