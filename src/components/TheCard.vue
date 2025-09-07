<template>
  <RouterLink
    :to="id"
    class="no-underline text-black flex flex-col overflow-hidden"
  >
    <img
      width="480"
      height="480"
      :srcset="`
        ${imageUrl}?w=320 320w,
        ${imageUrl}?w=480 480w,
        ${imageUrl}?w=720 720w
      `"
      sizes="(max-width: 480px) 100vw, 480px"
      :src="imageUrl"
      :alt="name"
      class="block max-w-full h-auto rounded-md hover:scale-95 duration-300 hover:shadow-[0_15px_25px_rgba(0,0,0,0.5)]"
      loading="lazy"
    />

    <div class="flex justify-between items-start mt-2">
      <h2 class="text-xl font-bold min-h-[1.5em]">{{ name }}</h2>

      <div class="flex flex-col items-end">
        <span class="text-xl font-bold min-h-[1.2em]">${{ price }}</span>
        <span class="text-sm text-gray-500">/day</span>
      </div>
    </div>

    <TheButton :type="type" />
  </RouterLink>
</template>

<script lang="ts" setup>
import type { Van } from '@/interfaces/van';
import TheButton from './TheButton.vue';
import { RouterLink } from 'vue-router';

defineProps<Van>();
</script>
