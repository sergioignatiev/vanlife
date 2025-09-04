<template>
  <div>
    <canvas ref="chartRef"></canvas>
  </div>
</template>

<script>
import { ref, onMounted, watch } from 'vue';
import { Chart, BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

Chart.register(BarElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

export default {
  props: {
    labels: { type: Array, required: true },
    data: { type: Array, required: true },
    colors: { type: Array, required: true },
    title: { type: String, default: '' }
  },
  setup(props) {
    const chartRef = ref(null);
    let chartInstance = null;

    const createChart = () => {
      if (!chartRef.value) return;

      const maxData = Math.max(...props.data);

      chartInstance = new Chart(chartRef.value, {
        type: 'bar',
        data: {
          labels: props.labels,
          datasets: [
            {
              label: '',
              data: props.data,
              backgroundColor: props.colors,
              borderRadius: 4
            }
          ]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
            title: props.title ? { display: true, text: props.title } : undefined
          },
          scales: {
            x: { grid: { display: false } },
            y: {
              max: maxData + 1000,
              ticks: {
                callback(value) {
                  if (value >= 1000) return '$' + value / 1000 + 'k';
                  return '$' + value;
                }
              },
              grid: { borderDash: [5, 5] }
            }
          }
        }
      });
    };

    onMounted(createChart);

    watch(
      () => [props.labels, props.data, props.colors, props.title],
      ([labels, data, colors, title]) => {
        if (!chartInstance) return;

        const maxData = Math.max(...data);

        chartInstance.data = {
          labels: labels,
          datasets: [
            {
              label: '',
              data: data,
              backgroundColor: colors,
              borderRadius: 4
            }
          ]
        };

        chartInstance.options = {
          responsive: true,
          plugins: {
            legend: { display: false },
            title: title ? { display: true, text: title } : undefined
          },
          scales: {
            x: { grid: { display: false } },
            y: {
              max: maxData + 1000,
              ticks: {
                callback(value) {
                  if (value >= 1000) return '$' + value / 1000 + 'k';
                  return '$' + value;
                }
              },
              grid: { borderDash: [5, 5] }
            }
          }
        };

        chartInstance.update();
      },
      { deep: true }
    );

    return { chartRef };
  }
};
</script>

<style scoped>
canvas {
  max-width: 100%;
}
</style>
