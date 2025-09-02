<template>
  <button :class="type" class="
  max-w-[130px] transform 
  shadow-[0_15px_25px_rgba(0,0,0,0.5)]
  border-none rounded-md capitalize h-[34px]  text-white text-[1rem] font-semibold w-[37%] min-w-[86px]">{{ type }}</button>
</template>

<script lang="ts" setup>
defineProps({type:String})

</script>

<style scoped>
.simple{
background-color:#E17653 ;
}
.rugged{
background-color: #115E59;
}
.luxury{
background-color: #161616;
}
</style>