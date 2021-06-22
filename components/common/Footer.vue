<template>
  <div class="font-sans">
    <div class="w-full bg-gray-800 flex justify-center">
      <div class="flex flex-col text-gray-50 text-lg px-10 pb-16 md:flex-row md:flex-wrap md:pt-36 md:pb-40 md:px-12 md:text-xl lg:container lg:text-base">
        <div class="mt-10 -m-3 md:w-3/12">
          <img src="@/assets/img/logo-light.png" alt="kaisen" class="w-36 h-auto">
        </div>

        <div class="flex flex-col gap-1 mt-10 md:w-3/12 md:gap-3">
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

        <div class="flex flex-col gap-1 mt-10 md:w-3/12 md:gap-3">
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

        <div class="flex flex-col gap-1 mt-10 md:w-3/12 md:gap-3">
          <span class="italic">
            {{address}}
          </span>
          <span class="mt-6">
            {{email}}
          </span>
          <span>
            {{phone}}
          </span>
        </div>
      </div>
    </div>

    <div class="px-10 pt-8 pb-12 bg-blue-900 text-blue-50 font-serif uppercase md:px-12 md:py-10 md:text-center lg:text-sm">
      <span>© Copyright 2021 {{name}}. All rights reserved. </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      address: 'Building 7, No.3 Huachang RD, Dalang Street, Shenzhen, China,518110',
      email: 'kaisen1@cnkaisen.com',
      phone: '86 188-1410-3744',
      name: 'KAISEN',
    }
  }
}
</script>

<style>

</style>