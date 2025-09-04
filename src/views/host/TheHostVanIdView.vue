<template>
  <div>
    <!-- ссылка назад ко всем фургонам -->
    <router-link class="text-black underline underline-offset-4 " :to="{ name: 'vans' }">
      &#8592; Back to all vans 
    </router-link>

    <!-- если фургон найден -->
    <div v-if="vansList" class="bg-white p-[25px] mt-[60px] rounded-md">
      <section class="flex items-center gap-[20px]">
        <img
          width="160"
          class="rounded-md"
          :src="vansList.imageUrl"
          :alt="vansList.name"
        />
        <div class="flex flex-col gap-4">
          <TheButton :type="vansList.type" />
          <h2>{{ vansList.name }}</h2>
          <p>
            <span class="font-bold">${{ vansList.price }}</span>/day
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

      <div class="py-[27px]">
        <router-view />
      </div>
    </div>

    <!-- если id некорректный -->
    <div v-else class="bg-white p-[25px] mt-[60px] rounded-md text-red-600 font-bold text-lg">
      🚨 Фургона с таким id ({{ id }}) не существует
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

const route = useRoute()
const id = computed(() => route.params.id as string)

const vansList = computed(() => data.value.find(van => van.id === id.value))
</script>

<style scoped>
nav > a {
  color: #4d4d4d;
  text-decoration: none;
}
.router-link-exact-active {
  color: black;
  text-decoration: underline;
  font-weight: 600;
  text-underline-offset: 4px;
}
</style>
