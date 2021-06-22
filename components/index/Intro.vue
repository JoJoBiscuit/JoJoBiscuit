<template>
  <div class="px-10 pt-16 pb-6 bg-gray-50 md:px-0 md:pt-20 md:pb-10">
    <div class="intro-item pb-1 animate__animated md:px-12">
      <h2 class="text-gray-800 text-2xl font-semibold md:text-3xl md:leading-tight">{{title}}</h2>
      <p class="py-5 text-gray-500 md:text-lg">{{content}}</p>
    </div>
    
    <div class="py-5 md:flex md:flex-wrap md:justify-around md:px-6">
      <div v-for="(item, index) in items" :key="index" class="intro-item py-3 animate__animated md:w-4/12 md:px-6">
        <h3 class="text-gray-800 text-xl font-semibold md:text-2xl md:leading-tight">{{item.title}}</h3>
        <p class="py-5 text-gray-500 md:text-lg">{{item.content}}</p>
        <button @click="clickButton(item)" class="pt-2 pb-1 mb-4 mt-4 font-mono uppercase text-sm text-gray-700 font-medium border-b border-gray-300 md:border-0 md:text-gray-800">{{item.btnText}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'We are the leading genuine leather sofa manufacturer in Malaysia.',
      content: 'Established in 1978, Zolano Design Sdn Bhd are passionate about committing to our clients’ needs for luxurious and high-end Italian genuine leather sofas. For the past 42 years, we have preserved our fine furniture craftsmanship.',
      items: [{
        title: 'Our Story',
        content: 'Founded by our Managing Director Mr. Yap Hoo in 1978, the Company began as a humble sofa frame manufacturer and has since progressed into sofa upholstering. We position our products to focus on Designer, Quantity and Branded Products. In 1998, the Zolano brand name was launched…',
        btnText: 'About Kaisen',
        href: 'https://www.zolano.com/',
        target: '_blank',
      }, {
        title: 'Our Process',
        content: 'Our designing and production team work passionately together to create different product leather sofa collections to fulfill our your various needs and requirements. Comfort and ergonomics are top priorities. Our consistent premium quality is one of the many reasons for our customer loyalty…',
        btnText: 'About Our Process',
        href: 'https://www.zolano.com/',
        target: '_blank',
      }, {
        title: 'Our Services',
        content: 'We produce through Original Equipment Manufacturing (OEM), Original Design Manufacturing (ODM), and Design. We have over 20 dealers in both East and West Malaysia, with some of them representing the top 5 furniture retailers. Internationally, we export all over the world…',
        btnText: 'About Our Services',
        href: 'https://www.zolano.com/',
        target: '_blank',
      }]
    }
  },
  methods: {
    initAnimation() {
      this.$scrollTrigger.batch('.intro-item', {
        toggleClass: 'animate__fadeInUp',
        top: 'center'
      })
    },
    clickButton(item) {
      item.target === '_blank' ? window.open(item.href) : window.location.href = item.href;
    }
  },
  mounted() {
    this.initAnimation();
  }
}
</script>

<style>

</style>