<template>
  <div class="px-10 py-16 bg-white">
    <div class="product-item pb-2">
      <h2 class="text-gray-800 text-2xl font-semibold">Our Original Collections of Leather Sofas</h2>
      <p class="py-5 text-gray-500">View our original Italian leather corner, 1-2-3 seater, arm chair and other sofas here.</p>
    </div>
    
    <div class="py-5">
      <div class="product-item py-3 text-center">
        <img src="@/assets/img/index-product-1.jpg" alt="kaisen" class="w-full h-auto">
        <h3 class="text-gray-800 text-xl font-semibold">KS-A003</h3>
        <button class="py-2 my-4 font-mono uppercase text-sm text-gray-700 font-medium">Read More</button>
      </div>
      <div class="product-item py-3 text-center">
        <img src="@/assets/img/index-product-2.jpg" alt="kaisen" class="w-full h-auto">
        <h3 class="text-gray-800 text-xl font-semibold">KS-B021</h3>
        <button class="py-2 my-4 font-mono uppercase text-sm text-gray-700 font-medium">Read More</button>
      </div>
      <div class="product-item py-3 text-center">
        <img src="@/assets/img/index-product-3.jpg" alt="kaisen" class="w-full h-auto">
        <h3 class="text-gray-800 text-xl font-semibold">KS-C001</h3>
        <button class="py-2 my-4 font-mono uppercase text-sm text-gray-700 font-medium">Read More</button>
      </div>
    </div>

    <div class="pt-5 text-center">
      <button class="product-item px-6 py-2 rounded-sm bg-gray-700 text-white font-mono uppercase text-sm font-medium">All Collections</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    init() {
      let productItemClass = '.product-item';
      let productItems = this.$gsap.utils.toArray(productItemClass);
      
      productItems.forEach(item => {
        this.$gsap.set(item, {
          autoAlpha: 0
        });

        this.$scrollTrigger.create({
          trigger: item,
          onEnter: () => {
            this.$gsap.fromTo(item, {
              yPercent: 100,
              autoAlpha: 0
            }, {
              duration: 1.5,
              yPercent: 0,
              autoAlpha: 1,
              ease: 'expo',
              overwrite: 'auto'
            })
          },
        })
      })
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    })
  }
}
</script>

<style>

</style>