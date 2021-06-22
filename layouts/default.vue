<template>
  <div class="font-serif w-screen overflow-x-hidden">
    <Nav />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Nav from '@/components/common/Nav'
import Footer from '@/components/common/Footer'

export default {
  components: {
    Nav,
    Footer,
  },
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}
body {
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
