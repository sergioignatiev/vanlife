<template>
  <div class="">
    <TheChart 
    :labels="labels"
:data="data"
:colors="colors"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TheChart from '@/components/TheChart.vue';

const labels=['Ju','Fe','Ma','Ap','May',"Ju"]
const data=[4000,3000,3800,2700,3800,3300]
const colors=['blue','white']
</script>