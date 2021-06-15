<template>
  <div>
    <Banner></Banner>
    <Intro></Intro>
    <Product></Product>
    <News></News>
    <Contact></Contact>
  </div>
</template>

<script>
import Banner from '@/components/index/Banner'
import Intro from '@/components/index/Intro'
import Product from '@/components/index/Product'
import News from '@/components/index/News'
import Contact from '@/components/index/Contact'

export default {
  components: {
    Banner,
    Intro,
    Product,
    News,
    Contact,
  }
}
</script>

<style>

</style>