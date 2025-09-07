<script setup lang="ts">
import VueECharts from 'vue-echarts';
import { use } from 'echarts/core';
import { BarChart } from 'echarts/charts';
import { GridComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

use([BarChart, GridComponent, TooltipComponent, CanvasRenderer]);

const options = {
  tooltip: { show: false },
  // Increased left margin to ensure labels have enough space
  grid: { left: '55px', right: '50px', top: '10%', bottom: '10%' },
  xAxis: { type: 'value', max: 100, show: false },
  yAxis: {
    type: 'category',
    data: ['5 stars', '4 stars', '3 stars', '2 stars', '1 star'],
    inverse: true,
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: {
      show: true,
      color: '#000',
      fontWeight: 'bold',
      margin: 10,
      width: '55px',
      align: 'right',
    },
  },
  series: [
    {
      type: 'bar',
      barWidth: '10px',
      itemStyle: { borderRadius: 10 },
      data: [
        { value: 100, itemStyle: { color: '#FF8C38' } },
        { value: 100, itemStyle: { color: '#E0E0E0', borderRadius: 10 } },
        { value: 100, itemStyle: { color: '#E0E0E0', borderRadius: 10 } },
        { value: 100, itemStyle: { color: '#E0E0E0', borderRadius: 10 } },
        { value: 100, itemStyle: { color: '#E0E0E0', borderRadius: 10 } },
      ],
      label: {
        show: true,
        position: 'right',
        formatter: (params: any) => (params.dataIndex === 0 ? '100%' : '0%'),
        color: '#000',
        fontWeight: 'bold',
      },
    },
  ],
};
</script>

<template>
  <div class="w-full h-[250px] p-0">
    <VueECharts :option="options" autoresize class="w-full h-full" />
  </div>
</template>
