<template>
  <div class="my-padding">
    <h1>Your listed vans</h1>
    <section class="flex flex-col gap-4 mt-[32px]">
      <router-link
        :to="{ name: 'van-details', params: { id: van.id } }"
        v-for="van in data"
        class="flex items-center text-black no-underline rounded-md gap-4 bg-white px-[18px] py-[12px] sm:px-[28px] sm:py-[18px]"
        :key="van.id"
      >
        <img
          width="66"
          height="66"
          class="rounded-md"
          :src="van.imageUrl"
          :alt="van.name || 'van'"
          loading="lazy"
        />
        <div class="flex flex-col gap-2">
          <h2 class="text-[20px]">{{ van.name }}</h2>
          <p class="text-[13px] sm:text-[16px] text-[#4D4D4D]">
            ${{ van.price }}/day
          </p>
        </div>
      </router-link>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';
import { RouterLink } from 'vue-router';
const store = useCounterStore();
const { data } = storeToRefs(store);
</script>

<style></style>
