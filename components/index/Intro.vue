<template>
  <div class="px-10 py-16 bg-gray-50">
    <div class="intro-item pb-1">
      <h2 class="text-gray-800 text-2xl font-semibold">We are the leading genuine leather sofa manufacturer in Malaysia.</h2>
      <p class="py-5 text-gray-500">Established in 1978, Zolano Design Sdn Bhd are passionate about committing to our clients’ needs for luxurious and high-end Italian genuine leather sofas. For the past 42 years, we have preserved our fine furniture craftsmanship.</p>
    </div>
    
    <div class="py-5">
      <div class="intro-item py-3">
        <h3 class="text-gray-800 text-xl font-semibold">Our Process</h3>
        <p class="py-5 text-gray-500">Our designing and production team work passionately together to create different product leather sofa collections to fulfill our your various needs and requirements. Comfort and ergonomics are top priorities. Our consistent premium quality is one of the many reasons for our customer loyalty…</p>
        <button class="py-2 my-4 font-mono uppercase text-sm text-gray-700 font-medium">About Our Process</button>
      </div>
      <div class="intro-item py-3">
        <h3 class="text-gray-800 text-xl font-semibold">Our Story</h3>
        <p class="py-5 text-gray-500">Our designing and production team work passionately together to create different product leather sofa collections to fulfill our your various needs and requirements. Comfort and ergonomics are top priorities. Our consistent premium quality is one of the many reasons for our customer loyalty…</p>
        <button class="py-2 my-4 font-mono uppercase text-sm text-gray-700 font-medium">About Zolano</button>
      </div>
      <div class="intro-item py-3">
        <h3 class="text-gray-800 text-xl font-semibold">Our Services</h3>
        <p class="py-5 text-gray-500">We produce through Original Equipment Manufacturing (OEM), Original Design Manufacturing (ODM), and Design. We have over 20 dealers in both East and West Malaysia, with some of them representing the top 5 furniture retailers. Internationally, we export all over the world…</p>
        <button class="py-2 my-4 font-mono uppercase text-sm text-gray-700 font-medium">About Our Services</button>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  methods: {
    init() {
      let introItemClass = '.intro-item';
      let introItems = gsap.utils.toArray(introItemClass);
      
      introItems.forEach(item => {
        ScrollTrigger.create({
          trigger: item,
          onEnter: () => {
            gsap.fromTo(item, {
              yPercent: 100,
              autoAlpha: 0
            }, {
              duration: 1.5,
              yPercent: 0,
              autoAlpha: 1,
              ease: 'expo',
              overwrite: 'auto'
            })
          }
        })
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