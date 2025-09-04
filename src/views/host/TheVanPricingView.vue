<template>
<div class="">
    <div class="text-[24px]"><span class="font-semibold">${{ item?.price }}.00</span>/day</div>
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

