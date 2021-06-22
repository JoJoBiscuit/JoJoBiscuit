<template>
  <div class="relative w-full h-screen-90 md:h-124">
    <img src="@/assets/img/index-banner-1.jpg" alt="kaisen" class="w-full h-full object-cover">
    <div class="contact-item animate__animated absolute top-0 left-0 w-full h-full bg-black bg-opacity-20 flex items-center">
      <div class="text-white p-10 md:p-12">
        <h2 class="text-2xl font-semibold pt-16 md:text-3xl">{{title}}</h2>
        <p class="text-base mt-6 mb-12 font-sans md:leading-relaxed md:text-lg">{{content}}</p>
        <button class="bg-white text-blueGray-700 text-xs font-medium px-5 py-3 rounded-sm uppercase md:text-base md:px-8 md:py-4">Contact Us</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Make your own world with Zolano's premium Italian leather sofas today!",
      content: "Are you looking for leather sofa manufacturer Sungai Buloh? Visit one of our furniture showrooms near you or contact us for OEM/ODM, or local and international exporting enquiries.",
    }
  },
  methods: {
    initAnimation() {
      this.$scrollTrigger.batch('.contact-item', {
        toggleClass: 'animate__fadeInRight',
      })
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.initAnimation();
    })
  }
}
</script>

<style>

</style>