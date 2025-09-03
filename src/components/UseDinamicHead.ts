// composables/useDynamicHead.ts
import { useRoute } from 'vue-router'
import { useCounterStore } from '@/stores/counter'
import { useHead } from '@vueuse/head'
import { computed } from 'vue'

export function useDynamicHead() {
  const route = useRoute()
  const store = useCounterStore()

  const van = computed(() => store.data.find(v => v.id === route.params.id))

  useHead(() => {
    if (route.name === 'van-page' && van.value) {
      return {
        title: van.value.name,
        link: [{ rel: 'icon', href: van.value.imageUrl }]
      }
    }
    return {
      title: route.meta.title as string || 'Default Title',
      link: route.meta.favicon ? [{ rel: 'icon', href: route.meta.favicon as string }] : []
    }
  })
}
