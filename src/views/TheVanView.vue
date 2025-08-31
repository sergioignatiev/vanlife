<template>
  <div v-if="van" class="my-padding flex flex-col gap-10">
    <router-link class="text-[#201F1D]" to="/">&#8592; Back to all vans</router-link>
    <img class="md:w-3/5 rounded-md " :src="van.imageUrl" :alt="van.name || 'Van image'" />
    <section class="flex flex-col gap-3 ">
    <TheButton  :type="van.type"/>
    <h1>{{ van.name }}</h1>
    <div class="">${{van.price}} /day</div>
    <p>{{ van.description }}</p>
    <button class="max-w-[500px] w-[100%] h-[50px] border-none rounded-md text-[18px] font-semibold text-white bg-[#FF8C38]">Rent this van</button>
    </section>
  </div>
  
</template>

<script lang="ts" setup>
import { computed,watchEffect} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useCounterStore } from '@/stores/counter';
import type { Van } from '@/interfaces/van';
import TheButton from '@/components/TheButton.vue';
const router =useRouter()
const route = useRoute();
const id = route.params.id as string;

const store = useCounterStore();
const { data } = storeToRefs(store);

// computed возвращает объект типа Van | undefined
const van = computed<Van | undefined>(() => data.value.find(x => x.id === id));

watchEffect(() => {
  if (van.value === undefined) {
    router.replace('/about');
   
  }
});
</script>

<style scoped>

</style>
