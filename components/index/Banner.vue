<template>
  <van-swipe :show-indicators="false" :autoplay="6000" class="w-full h-screen overflow-hidden">
    <van-swipe-item v-for="(item, index) in items" :key="index" class="relative w-full h-screen">
      <img :src="item.image" alt="kaisen" class="w-full h-full object-cover object-center">
      <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-5 flex items-center justify-center">
        <div class="text-white px-10 w-full md:w-8/12 md:px-12 lg:container">
          <h1 class="text-4xl font-medium pt-16 md:text-5xl md:leading-tight lg:w-8/12">{{item.title}}</h1>
          <p class="text-lg mt-6 mb-16 font-sans md:text-xl lg:w-8/12">{{item.content}}</p>
          <button @click="clickButton(item)" class="bg-white text-blueGray-700 text-xs px-5 py-3 rounded-sm uppercase md:text-sm md:px-8 md:py-3">Explore More</button>
        </div>
      </div>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  data() {
    return {
      items: [{
        image: require('@/assets/img/index-banner-1.jpg'),
        title: 'Shenzhen Kaisen Furniture Hardware',
        content: 'Your Well Trusted Furniture Hardware Supplier!',
        href: 'https://www.zolano.com/',
        target: '_blank',
      }, {
        image: require('@/assets/img/index-banner-2.jpg'),
        title: 'Furniture of International Design and Craftsmanship',
        content: 'View our original Italian designs of luxurious, comfortable, and ergonomic leather furniture.',
        href: 'https://www.zolano.com/',
        target: '_blank',
      }]
    }
  },
  methods: {
    clickButton(item) {
      item.target === '_blank' ? window.open(item.href) : window.location.href = item.href;
    }
  },
}
</script>

<style>
</style>