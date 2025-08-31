<template>
  <div>
    <TheNavbar/>
    <main class="min-h-[100vh]">
    <router-view/>
    </main>
    <TheFooter/>
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';
import TheFooter from './components/TheFooter.vue';
import TheNavbar from './components/TheNavbar.vue';
</script>

<style>

</style>