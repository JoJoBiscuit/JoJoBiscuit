<template>
  <div class="px-10 py-16 bg-white md:px-0 md:py-28">
    <div class="product-item pb-2 animate__animated md:px-12 md:text-center">
      <h2 class="text-gray-800 text-2xl font-semibold md:text-3xl">{{title}}</h2>
      <p class="py-5 text-gray-500 md:text-lg">{{content}}</p>
    </div>
    
    <div class="py-5 md:flex md:flex-wrap md:justify-around md:px-9">
      <div v-for="(item, index) in items" :key="index" class="product-item py-3 text-center animate__animated md:w-4/12 md:px-3">
        <img :src="item.image" alt="kaisen" class="w-full h-auto min-h-32">
        <h3 class="text-gray-800 text-xl font-semibold md:text-2xl md:leading-tight">{{item.name}}</h3>
        <button class="py-2 my-4 font-mono uppercase text-sm text-gray-700 font-medium md:text-lg">Read More</button>
      </div>
    </div>

    <div class="pt-5 text-center">
      <button class="product-item px-6 py-2 rounded-sm bg-gray-700 text-white font-mono uppercase text-sm font-medium md:text-lg md:px-8 md:py-4">All Collections</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Our Original Collections of Leather Sofas',
      content: 'View our original Italian leather corner, 1-2-3 seater, arm chair and other sofas here.',
      items: [{
        id: 1,
        image: require('@/assets/img/index-product-1.jpg'),
        name: 'KS-A003',
      }, {
        id: 2,
        image: require('@/assets/img/index-product-2.jpg'),
        name: 'KS-B021',
      }, {
        id: 3,
        image: require('@/assets/img/index-product-3.jpg'),
        name: 'KS-C001',
      }]
    }
  },
  methods: {
    initAnimation() {
      this.$scrollTrigger.batch('.product-item', {
        toggleClass: 'animate__fadeInUp',
      })
    },
  },
  mounted() {
    this.initAnimation();
  }
}
</script>

<style>

</style>