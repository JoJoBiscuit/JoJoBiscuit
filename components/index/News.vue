<template>
  <div class="pt-6 pb-16 bg-gray-50">
    <div class="pt-10">
      <div class="px-10">
        <h2 class="text-2xl font-semibold">Latest News</h2>
        <p class="index-news-desc pt-5 text-gray-500">Find out the latest news and press releases at Zolano, including events, product launches, and more. In addition, follow our blog to find out the latest furniture trends, styles, tips and information.</p>
      </div>

      <div class="index-news-wrapper pt-10">
        <div class="flex w-full overflow-hidden">
          <div class="index-news-item flex-shrink-0 w-screen px-10 py-4">
            <div class="w-full h-102 bg-white rounded-sm border border-gray-100">
              <img src="@/assets/img/index-news-1.jpg" alt="kaisen" class="w-full h-1/3 object-cover">
              <div class="p-7">
                <h3 class="text-gray-800 text-lg font-semibold max-h-20 overflow-ellipsis overflow-hidden break-words">5 Tips on How to Clean and Take Care of your Leather Sofa</h3>
                <p class="text-gray-500 my-6 text-sm max-h-16 overflow-ellipsis overflow-hidden break-words">A leather sofa can add a touch of class and elegance to any living room. Although…</p>
                <small class="block pt-4 border-t border-gray-100 font-mono text-xs text-gray-900">September 19, 2020</small>
              </div>
            </div>
          </div>

          <div class="index-news-item flex-shrink-0 w-screen px-10 py-4">
            <div class="w-full h-102 bg-white rounded-sm border border-gray-100">
              <img src="@/assets/img/index-news-2.jpg" alt="kaisen" class="w-full h-1/3 object-cover">
              <div class="p-7">
                <h3 class="text-gray-800 text-lg font-semibold max-h-20 overflow-ellipsis overflow-hidden break-words">Export Furniture Exhibition 2019</h3>
                <p class="text-gray-500 my-6 text-sm max-h-16 overflow-ellipsis overflow-hidden break-words">Export Furniture Exhibition (EFE) is internationally known to global buyers from all…</p>
                <small class="block pt-4 border-t border-gray-100 font-mono text-xs text-gray-900">September 19, 2020</small>
              </div>
            </div>
          </div>
        </div>

        <div class="pt-6 text-center">
          <button class="px-6 py-2 rounded-sm bg-gray-700 text-white font-mono uppercase text-sm font-medium">All News</button>
        </div>
      </div>

      <div class="mt-20 h-102"></div>
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
      let newsClass = '.index-news-wrapper';
      let newsItemClass = '.index-news-item';
      let newsItems = gsap.utils.toArray(newsItemClass);

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: newsClass,
          pin: true,
          scrub: 1,
          snap: 1 / (newsItems.length - 1),
          pinSpacing: false,
        },
      })

      tl.to(newsItems, {
        xPercent: -100 * (newsItems.length - 1),
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