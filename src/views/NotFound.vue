<template>
  <div class="flex flex-col items-center justify-center h-screen text-center px-4">
    <h1 class="text-2xl font-bold text-[#1c1c1c]">
      Sorry, the page you were looking for was not found.
    </h1>

    <router-link
      :to="{ name: 'home' }"
      class="mt-6 px-6 py-3 bg-black text-white rounded-md font-medium hover:bg-[#222] transition"
    >
      Return to home
    </router-link>
  </div>
</template>

<script setup lang="ts">
// ничего не нужно, всё через <router-link>
</script>
