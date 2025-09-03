<template>
  <div>
    <!-- ссылка назад ко всем фургонам -->
    <router-link :to="{ name: 'vans' }">
      back to all vans {{ id }}
    </router-link>

    <div class="bg-white p-[25px] mt-[60px]">
      <section class="flex items-center gap-[20px]">
        <img
          width="160"
          class="rounded-md"
          :src="vansList?.imageUrl"
          :alt="vansList?.name || 'My Van'"
        />
        <div class="flex flex-col gap-4">
          <TheButton :type="vansList?.type" />
          <h2>{{ vansList?.name || 'wait' }}</h2>
          <p>
            <span class="font-bold">${{ vansList?.price }}</span>/day
          </p>
        </div>
      </section>

      <!-- навигация по вкладкам -->
      <nav class="flex gap-4 mt-4">
        <router-link :to="{ name: 'van-details', params: { id } }">
          Details
        </router-link>
        <router-link :to="{ name: 'van-pricing', params: { id } }">
          Pricing
        </router-link>
        <router-link :to="{ name: 'van-photos', params: { id } }">
          Photos
        </router-link>
      </nav>
<router-view/>
     
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'
import TheButton from '@/components/TheButton.vue'

const store = useCounterStore()
const { data } = storeToRefs(store)

// Берём id из текущего роута
const route = useRoute()
const id = computed(() => route.params.id as string)

// Ищем нужный ван по id
const vansList = computed(() => {
  return data.value.find(van => van.id == id.value)
})
</script>


<style>

</style>