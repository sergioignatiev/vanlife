<template>
  <RouterLink
    :to="id"
    class="no-underline text-black flex flex-col overflow-hidden"
  >
    <!-- Responsive WebP image -->
    <picture>
      <source
        type="image/webp"
        :srcset="`
          ${imageUrl}-320.webp 320w,
          ${imageUrl}-392.webp 392w,
          ${imageUrl}-480.webp 480w,
          ${imageUrl}-720.webp 720w
        `"
        sizes="(max-width: 480px) 100vw, 392px"
      />
      <!-- Fallback for browsers without WebP support -->
      <img
        width="392"
        height="392"
        :src="`${imageUrl}-392.webp`"
        :alt="name"
        class="block max-w-full h-auto rounded-md hover:scale-95 duration-300 hover:shadow-[0_15px_25px_rgba(0,0,0,0.5)]"
        loading="lazy"
      />
    </picture>

    <!-- Info -->
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
import type { Van } from '@/interfaces/van'
import TheButton from './TheButton.vue'
import { RouterLink } from 'vue-router'

defineProps<Van>()
</script>
