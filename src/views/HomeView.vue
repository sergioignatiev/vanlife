<template>
  <div class="my-padding pb-[155px]">
    <h1 class="font-700 text-[32px]">Explore our van options</h1>

    <section
      class="flex flex-col sm:flex-row justify-between max-w-[500px] mb-[56px] mt-[27px]"
      aria-label="filter by type"
    >
      <div class="flex gap-[20px]">
        <button
          v-for="type in findTypesOfVan"
          :key="type"
          class="capitalize min-w-[80px] w-[104px] h-[37px] bg-[#FFEAD0] border-none text-[#4D4D4D] rounded-[5px]"
          @click="changeType(type)"
        >
          {{ type }}
        </button>
      </div>

      <button
        class="bg-transparent mt-6 sm:mt-0 border-none text-un text-[#4d4d40] underline underline-offset-4"
        @click="showAll"
      >
        Clear Filters
      </button>
    </section>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5">
      <TheCard
        v-for="card in filteredArray"
        :key="card.id"
        v-bind="card"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useCounterStore } from '@/stores/counter';

import { storeToRefs } from 'pinia';
import TheCard from '@/components/TheCard.vue';
import { useHead } from '@vueuse/head';
const title =ref<string>('All Vans')
const store = useCounterStore();
const { data, findTypesOfVan } = storeToRefs(store);

const selectedType = ref<string | null>(null);

function changeType(x:string){
selectedType.value=x;
title.value=x
}
function showAll(){
  selectedType.value=null;
  title.value="All Vans"
}

const filteredArray = computed(() => {
  if (!selectedType.value) return data.value;
  return data.value.filter(card => card.type === selectedType.value);
});

useHead(()=>({
  title:title.value,
  link: [
    { rel: 'icon', href: '/images/logo2.png' }
  ],
  meta: [
    { name: 'description', content: 'This is the main page' }
  ]
}))

</script>

<style scoped>
</style>
