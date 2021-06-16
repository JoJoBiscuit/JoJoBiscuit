<template>
  <div class="px-10 pt-16 pb-6 bg-gray-50">
    <div class="intro-item pb-1 animate__animated">
      <h2 class="text-gray-800 text-2xl font-semibold">We are the leading genuine leather sofa manufacturer in Malaysia.</h2>
      <p class="py-5 text-gray-500">Established in 1978, Zolano Design Sdn Bhd are passionate about committing to our clients’ needs for luxurious and high-end Italian genuine leather sofas. For the past 42 years, we have preserved our fine furniture craftsmanship.</p>
    </div>
    
    <div class="py-5">
      <div class="intro-item py-3 animate__animated">
        <h3 class="text-gray-800 text-xl font-semibold">Our Process</h3>
        <p class="py-5 text-gray-500">Our designing and production team work passionately together to create different product leather sofa collections to fulfill our your various needs and requirements. Comfort and ergonomics are top priorities. Our consistent premium quality is one of the many reasons for our customer loyalty…</p>
        <button class="pt-2 pb-1 mb-4 mt-4 font-mono uppercase text-sm text-gray-700 font-medium border-b border-gray-300">About Our Process</button>
      </div>
      <div class="intro-item py-3 animate__animated">
        <h3 class="text-gray-800 text-xl font-semibold">Our Story</h3>
        <p class="py-5 text-gray-500">Our designing and production team work passionately together to create different product leather sofa collections to fulfill our your various needs and requirements. Comfort and ergonomics are top priorities. Our consistent premium quality is one of the many reasons for our customer loyalty…</p>
        <button class="pt-2 pb-1 mb-4 mt-4 font-mono uppercase text-sm text-gray-700 font-medium border-b border-gray-300">About Zolano</button>
      </div>
      <div class="intro-item py-3 animate__animated">
        <h3 class="text-gray-800 text-xl font-semibold">Our Services</h3>
        <p class="py-5 text-gray-500">We produce through Original Equipment Manufacturing (OEM), Original Design Manufacturing (ODM), and Design. We have over 20 dealers in both East and West Malaysia, with some of them representing the top 5 furniture retailers. Internationally, we export all over the world…</p>
        <button class="pt-2 pb-1 mb-4 mt-4 font-mono uppercase text-sm text-gray-700 font-medium border-b border-gray-300">About Our Services</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    init() {
      this.$scrollTrigger.batch('.intro-item', {
        toggleClass: "animate__fadeInUp"
      })
    }
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