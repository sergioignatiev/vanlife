<template>
  <div class="flex flex-col gap-[58px] my-padding">
    <section class="flex flex-col gap-[18px]  ">
   <h1 class="text-[22px] sm:text-[36px] font-bold">INCOME</h1>
<TheLastThirtyDays/>
   <div class="text-[32px] sm:text-[48px] font-extrabold">$2,260</div>
    </section>
    <TheBarChart/>
    <section class="flex flex-col gap-[31px]">
<header class="flex justify-between">
  <h3>Your transactions ({{ transactions.length }})</h3>
    <TheLastThirtyDays/>
</header>
<div class="bg-white p-[29px] flex justify-between rounded-md" v-for="(transaction,id) in transactions" :key="id">
<h2>${{transaction.price  }}</h2>
<p>{{ transaction.date }}</p>
</div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import TheBarChart from '@/components/TheBarChart.vue';
import TheLastThirtyDays from '@/components/TheLastThirtyDays.vue';
import { ref } from 'vue';

const transactions=ref([
  {price:720,date:"11/01/2023"},
   {price:560,date:"02/01/2022"},
    {price:560,date:"02/04/2021"},
])

</script>

<style>

</style>