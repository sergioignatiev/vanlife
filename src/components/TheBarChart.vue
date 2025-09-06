<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import VueECharts from 'vue-echarts'
import { use } from 'echarts/core'
import { BarChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, GridComponent, LegendComponent } from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

// Регистрируем компоненты
use([BarChart, TitleComponent, TooltipComponent, GridComponent, LegendComponent, CanvasRenderer])

// Ссылка на компонент ECharts
const chartRef = ref<any>(null)

// Данные графика
const options = {
  tooltip: {},
  xAxis: {
    type: 'category',
    data: ['JU', 'AU', 'SE', 'OC', 'NO','DE'],
  },
  yAxis: { 
    type: 'value',
    axisLabel: {
      formatter: (value: number) => `$${value / 1000}k`
    }
  },
  grid: {
    left: 0,
    right: 0,
    top: '10px',
    bottom: 0,
    containLabel: true
  },
  series: [
    {
      name: 'Продажи',
      type: 'bar',
      data: [ 
        { value: 2000, itemStyle: { color: '#FFEAD0' } },
        { value: 1500, itemStyle: { color: '#FFEAD0' } },
        { value: 3800, itemStyle: { color: '#FFEAD0' } },
        { value: 3918, itemStyle: { color: '#FFEAD0' } },
        { value: 3918, itemStyle: { color: '#FF8C38' } },
        { value: 3918, itemStyle: { color: '#FF8C38' } },
      ],
    },
  ],
}

// Функция ресайза
const resizeChart = () => {
  chartRef.value?.resize?.()
}

onMounted(() => {
  window.addEventListener('resize', resizeChart)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resizeChart)
})
</script>

<template>
  <!-- Контейнер задаёт высоту графика -->
  <div class="w-full h-[50vh]">
    <VueECharts ref="chartRef" :option="options" style="width: 100%; height: 100%;" />
  </div>
</template>

<style scoped>
</style>
