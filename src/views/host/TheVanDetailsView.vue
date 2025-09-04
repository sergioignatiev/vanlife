<template>
  <div v-if="item" class="flex gap-[15px] flex-col">
    <div><span class="font-extrabold">Name:</span> {{ item.name }}</div>
    <div class="capitalize"><span class="font-extrabold">Category:</span> {{ item.type }}</div>
    <div class="leading-[22px]"><span class="font-extrabold">Description:</span> {{ item.description }}</div>
    <div><span class="font-extrabold">Visibility:</span> Public</div>
  </div>

  <div v-else class="text-red-600 font-bold">
    🚨 Такого id нет: {{ id }}
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const route = useRoute()
const store = useCounterStore()
const { data } = storeToRefs(store)

// id обновляется при смене params
const id = computed(() => route.params.id as string)

// item ищет ван по текущему id
const item = computed(() => data.value.find(van => van.id === id.value))
</script>
