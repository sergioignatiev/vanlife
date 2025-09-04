<template>
  <div class="">
    <TheChart :data="chartData" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TheChart from '@/components/TheChart.vue';

const chartData = ref([
  { month: 'Ju', value: 4000 },
  { month: 'Au', value: 1200 },
  { month: 'Se', value: 2800 },
  { month: 'Oc', value: 2500 },
  { month: 'No', value: 1400 },
  { month: 'De', value: 450 },
]);
</script>