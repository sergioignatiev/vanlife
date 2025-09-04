<template>
  <div>
 <img width="104" class="rounded-md" :src="item?.imageUrl" :alt="item?.name||'van'" loading="lazy">
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

// id теперь computed, чтобы обновлялся при смене params
const id = computed(() => route.params.id as string)

// item ищет ван по текущему id
const item = computed(() => data.value.find(van => van.id === id.value))
</script>

<style>

</style>