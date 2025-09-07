<template>
  <div class="my-padding flex gap-[48px] flex-col mt-[51px]">
    <h1 class="font-bold text-[32px] w-full text-center">
      Sign in to your account
    </h1>
    <form action="" class="flex flex-col gap-[22px]">
      <div class="">
        <input
          type="email"
          class="border-[1px] border-slate-300 w-full h-[48px] shadow-sm rounded-tl-md rounded-tr-md pl-6"
          placeholder="Email Address"
        />
        <input
          type="password"
          class="border-[1px] border-slate-300 w-full h-[48px] shadow-sm rounded-bl-md rounded-br-md pl-6"
          placeholder="Password"
        />
      </div>
      <button
        type="button"
        @click="registration"
        class="bg-[#FF8C38] h-[48px] w-[100%] rounded-md text-white"
      >
        Sign in
      </button>
    </form>

    <div class="text-center">
      Don’t have an account?
      <a href="#" class="font-bold no-underline text-[#FF8C38]"
        >Create one now</a
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useHead } from '@vueuse/head';
import { useRouter } from 'vue-router';
const router = useRouter();
function registration() {
  router.push({ name: 'dashboard' });
}
useHead(() => ({
  title: 'Registration',
  link: [{ rel: 'icon', href: '/images/registration.png' }],
  meta: [{ name: 'description', content: 'This is the registration' }],
}));
</script>

<style scoped></style>
