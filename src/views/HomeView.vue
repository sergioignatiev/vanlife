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
          @click="selectedType = type"
        >
          {{ type }}
        </button>
      </div>

      <button
        class="bg-transparent border-none text-un text-[#4d4d40] underline"
        @click="selectedType = null"
      >
        Clear Filters
      </button>
    </section>

    <div class="flex flex-wrap justify-center gap-[35.88px]">
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


const store = useCounterStore();
const { data, findTypesOfVan } = storeToRefs(store);

const selectedType = ref<string | null>(null);

const filteredArray = computed(() => {
  if (!selectedType.value) return data.value;
  return data.value.filter(card => card.type === selectedType.value);
});
</script>

<style scoped>
</style>
