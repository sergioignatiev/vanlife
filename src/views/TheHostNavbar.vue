<template>
  <nav class="flex justify-between my-padding py-[36px] items-center h-[116px]">
    <router-link to="/" class="font-extrabold text-[26px]">
      <img class="w-[144px]" src="/images/logo.png" alt="logo" />
    </router-link>

    <ul class="flex list-none gap-[13px]">
      <li>
        <router-link class="underline-offset-4" :to="{ name: 'dashboard' }"
          >Host</router-link
        >
      </li>
      <li>
        <router-link class="underline-offset-4" :to="{ name: 'about' }"
          >About</router-link
        >
      </li>
      <li>
        <router-link class="underline-offset-4" :to="{ name: 'home' }"
          >Vans</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup></script>

<style scoped>
a {
  color: #4d4d4d;
  font-weight: 600;
  text-decoration: none;
}
.router-link-active {
  text-decoration: underline;
  color: #161616;
}
</style>
