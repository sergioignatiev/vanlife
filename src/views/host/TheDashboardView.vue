<script setup lang="ts">
import { Line } from 'vue-chartjs'
import { Chart, Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale } from 'chart.js'

Chart.register(Title, Tooltip, Legend, LineElement, PointElement, CategoryScale, LinearScale)

const chartData = {
  labels: ['Jan', 'Feb', 'Mar'],
  datasets: [
    {
      label: 'Продажи',
      data: [10, 20, 15],
      borderColor: 'blue',
      fill: false
    }
  ]
}
</script>

<template>
<h1>DASH</h1>
</template>
