<template>
  <div class="">
    <button
    @click="filtering(type)"
      v-for="type in findTypesOfVan"
      :key="type"
    >
      {{ type }}
    </button>
    <button @click="toAllVans">AllVans</button>
    <div class="flex flex-wrap justify-center gap-[33px]">
      <TheCard
        v-for="card in filteredArray"
        :key="card.id"
        v-bind="card"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import TheCard from './components/TheCard.vue';
import { useCounterStore } from './stores/counter';

const store = useCounterStore();
const { data, findTypesOfVan } = storeToRefs(store);
const filteredArray=ref(data.value)

function filtering(x:string){
  const types=data.value.filter(card=>card.type==x)
filteredArray.value=types
}
function toAllVans(){
  filteredArray.value=data.value
}
</script>

<style scoped>
</style>