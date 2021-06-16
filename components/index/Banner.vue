<template>
  <van-swipe :show-indicators="false" :autoplay="6000" class="w-full h-screen overflow-hidden">
    <van-swipe-item class="relative w-full h-screen">
      <img src="@/assets/img/index-banner-1.jpg" alt="kaisen" class="w-full h-full object-cover">
      <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-5 flex items-center">
        <div class="text-white px-10">
          <h1 class="text-4xl font-medium pt-16">Shenzhen Kaisen Furniture Hardware</h1>
          <p class="text-lg mt-6 mb-10 font-sans">Your Well Trusted Furniture Hardware Supplier!</p>
          <button class="bg-white text-blueGray-700 text-xs px-5 py-3 rounded-sm uppercase">Explore More</button>
        </div>
      </div>
    </van-swipe-item>

    <van-swipe-item class="relative w-full h-screen">
      <img src="@/assets/img/index-banner-2.jpg" alt="kaisen" class="w-full h-full object-cover">
      <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-5 flex items-center">
        <div class="text-white px-10">
          <h1 class="text-4xl font-medium pt-16">Furniture of International Design and Craftsmanship</h1>
          <p class="text-lg mt-6 mb-16 font-sans">View our original Italian designs of luxurious, comfortable, and ergonomic leather furniture.</p>
          <button class="bg-white text-blueGray-700 text-xs px-5 py-3 rounded-sm uppercase">Explore More</button>
        </div>
      </div>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
</script>

<style>
</style>