<template>
  <div v-if="van" class="my-padding flex flex-col gap-10">
    <RouterLink
      :to="{ name: 'home' }"
      class="text-[#201F1D] underline-offset-4"
    >
      &#8592; Back to all vans
    </RouterLink>

    <img
      :src="van.imageUrl"
      :alt="van.name || 'Van image'"
      class="md:w-3/5 rounded-xl shadow-[0_15px_25px_rgba(0,0,0,0.5)] transform transition-transform duration-300 hover:rotate-y-6 hover:rotate-x-3 hover:scale-105"
    />

    <section class="flex flex-col gap-6">
      <TheButton :type="van.type" />
      <h1>{{ van.name }}</h1>
      <div>${{ van.price }} /day</div>
      <p>{{ van.description }}</p>

      <RouterLink :to="{ name: 'registration' }">
        <button
          class="max-w-[500px] w-full h-[50px] rounded-md border-none text-[18px] font-semibold text-white bg-[#FF8C38] shadow-[0_15px_25px_rgba(0,0,0,0.5)] transition-all duration-300 transform hover:bg-[#ff9f59] hover:shadow-[0_8px_20px_rgba(255,140,56,0.6)] hover:-translate-y-[2px] active:translate-y-0 active:shadow-[0_4px_10px_rgba(255,140,56,0.5)]"
        >
          Rent this van
        </button>
      </RouterLink>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useCounterStore } from '@/stores/counter';
import { useHead } from '@vueuse/head';
import type { Van } from '@/interfaces/van';
import TheButton from '@/components/TheButton.vue';

const route = useRoute();
const id = route.params.id as string;

const store = useCounterStore();
const { data } = storeToRefs(store);

const van = computed<Van | undefined>(() =>
  data.value.find((x) => x.id === id),
);

useHead(() => ({
  title: van.value?.name || 'Van Not Found',
  link: [{ rel: 'icon', href: van.value?.imageUrl || '/images/default.png' }],
  meta: [
    { name: 'description', content: van.value?.description || 'Van page' },
  ],
}));
</script>
