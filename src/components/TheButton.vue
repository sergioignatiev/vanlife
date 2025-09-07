<template>
  <button
    :class="type"
    class="max-w-[130px] transform shadow-[0_15px_25px_rgba(0,0,0,0.5)] border-none rounded-md capitalize h-[34px] text-white text-[1rem] font-semibold w-[37%] min-w-[86px]"
  >
    {{ type }}
  </button>
</template>

<script lang="ts" setup>
defineProps({ type: String });
</script>

<style scoped>
.simple {
  background-color: #e17653;
  transition: all 0.2s ease;
}
.simple:hover {
  background-color: #f18462;
  box-shadow: 0 8px 20px rgba(225, 118, 83, 0.6);
  transform: translateY(-2px);
}
.simple:active {
  transform: translateY(0); /* возвращаем вниз */
  box-shadow: 0 4px 10px rgba(225, 118, 83, 0.5);
}

.rugged {
  background-color: #115e59;
  transition: all 0.2s ease;
}
.rugged:hover {
  background-color: #14746f;
  box-shadow: 0 8px 20px rgba(17, 94, 89, 0.6);
  transform: translateY(-2px);
}
.rugged:active {
  transform: translateY(0);
  box-shadow: 0 4px 10px rgba(17, 94, 89, 0.5);
}

.luxury {
  background-color: #161616;
  transition: all 0.2s ease;
}
.luxury:hover {
  background-color: #2a2a2a;
  box-shadow: 0 8px 20px rgba(22, 22, 22, 0.6);
  transform: translateY(-2px);
}
.luxury:active {
  transform: translateY(0);
  box-shadow: 0 4px 10px rgba(22, 22, 22, 0.5);
}
</style>
