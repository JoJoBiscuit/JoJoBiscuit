<template>
  <div class="font-sans">
    <div class="flex flex-col bg-gray-800 text-gray-50 text-lg px-10 pb-16">
      <div class="mt-10 -m-3">
        <img src="@/assets/img/logo-light.png" alt="kaisen" class="w-36 h-auto">
      </div>

      <div class="flex flex-col gap-1 mt-10">
        <NuxtLink to="/">
          Home
        </NuxtLink>
        <NuxtLink to="/products">
          Products
        </NuxtLink>
        <NuxtLink to="/news">
          News
        </NuxtLink>
        <NuxtLink to="/about">
          About Us
        </NuxtLink>
      </div>

      <div class="flex flex-col gap-1 mt-10">
        <NuxtLink to="/story">
          Story
        </NuxtLink>
        <NuxtLink to="/process">
          Process
        </NuxtLink>
        <NuxtLink to="/contact">
          Contact Us
        </NuxtLink>
      </div>

      <div class="flex flex-col gap-1 mt-10">
        <span>
          Building 7, No.3 Huachang RD, Dalang Street, Shenzhen, China,518110 
        </span>
      </div>

      <div class="flex flex-col gap-1 mt-10">
        <span>
          kaisen1@cnkaisen.com
        </span>
        <span>
          86 188-1410-3744
        </span>
      </div>
    </div>

    <div class="px-10 pt-8 pb-12 bg-blue-900 text-blue-50 font-serif">
      <span>© Copyright 2021 KAISEN. All rights reserved. </span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>