<template>
  <div class="index-banner-wrapper flex w-full overflow-hidden">
    <div class="index-banner-item relative flex-shrink-0 w-full h-screen">
      <img src="@/assets/img/index-banner-1.jpg" alt="kaisen" class="w-full h-full object-cover">
      <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-5 flex items-center">
        <div class="text-white px-10">
          <h1 class="text-4xl font-medium pt-16">Shenzhen Kaisen Furniture Hardware</h1>
          <p class="text-lg mt-6 mb-10 font-sans">Your Well Trusted Furniture Hardware Supplier!</p>
          <button class="bg-white text-blueGray-700 text-xs px-5 py-3 rounded-sm uppercase">Explore More</button>
        </div>
      </div>
    </div>

    <div class="index-banner-item relative flex-shrink-0 w-full h-screen">
      <img src="@/assets/img/index-banner-2.jpg" alt="kaisen" class="w-full h-full object-cover">
      <div class="absolute top-0 left-0 w-full h-full bg-black bg-opacity-5 flex items-center">
        <div class="text-white px-10">
          <h1 class="text-4xl font-medium pt-16">Furniture of International Design and Craftsmanship</h1>
          <p class="text-lg mt-6 mb-16 font-sans">View our original Italian designs of luxurious, comfortable, and ergonomic leather furniture.</p>
          <button class="bg-white text-blueGray-700 text-xs px-5 py-3 rounded-sm uppercase">Explore More</button>
        </div>
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
      let bannerClass = '.index-banner-wrapper';
      let bannerItemClass = '.index-banner-item';
      let bannerItems = gsap.utils.toArray(bannerItemClass);

      let offsetWidth = document.querySelector(bannerClass).offsetWidth;
      let offsetHeight = document.querySelector(bannerClass).offsetHeight;
      let endSize = offsetWidth > offsetHeight ? offsetWidth : offsetHeight;

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: bannerClass,
          pin: true,
          scrub: 1,
          snap: 1 / (bannerItems.length - 1),
          end: () => "+=" + endSize,
        },
      })

      tl.to(bannerItems, {
        xPercent: -100 * (bannerItems.length - 1),
        force3D: true,
        ease: "expo",
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