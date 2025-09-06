<template>
  <div>
    <router-view name="navbar"/>
    
    <main class="min-h-[100vh]">
    <router-view/>
    </main>
    <TheFooter/>
  </div>
</template>

<script lang="ts" setup>
import { RouterView } from 'vue-router';
import TheFooter from './components/TheFooter.vue';

</script>

<style>
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
  max-width: 100%;

   font-family: 'Inter', sans-serif;
}
body{
  background-color: #fff7ed;
}
button{
  border:none;
}
.router-link-active{
  color:red;
}
.my-padding{
   padding:0 10px 50px 10px;
}
@media (min-width:500px) {
    .my-padding{
        padding:0 26px 50px 26px;
    }
}

@media (min-width:768px) {
    .my-padding{
        padding:0 34px 50px 34px;
    }
}
@media (min-width:1024px) {
    .my-padding{
        padding:0 56px 50px 56px;
    }
}
@media (min-width:1280px) {
    .my-padding{
        padding:0 94px 50px 94px;
    }
}
</style>