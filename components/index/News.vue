<template>
  <div class="py-16 bg-gray-50 md:py-20 flex justify-center lg:py-28">
    <div class="w-full lg:container">
      <div class="px-10 md:px-12 md:py-4">
        <h2 class="text-2xl font-semibold md:text-3xl">{{title}}</h2>
        <p class="index-news-desc pt-5 text-gray-500 md:text-lg">{{content}}</p>
      </div>

      <!-- 移动端 -->
      <van-swipe class="custom-swipe flex w-full overflow-hidden py-6 md:hidden">
        <van-swipe-item v-for="(item, index) in news" :key="index" class="index-news-item flex-shrink-0 w-screen px-10 py-4">
          <div class="w-full h-102 bg-white rounded-sm border border-gray-100">
            <img :src="item.image" alt="kaisen" class="w-full h-1/3 object-cover object-center">
            <div class="p-7">
              <h3 class="text-gray-800 text-lg font-semibold max-h-20 overflow-ellipsis overflow-hidden break-words">{{item.title}}</h3>
              <p class="text-gray-500 my-6 text-sm max-h-16 overflow-ellipsis overflow-hidden break-words">{{item.content}}</p>
              <small class="block pt-4 border-t border-gray-100 font-mono text-xs text-gray-900">{{item.time}}</small>
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>

      <!-- 平板、PC -->
      <div class="hidden w-full overflow-hidden py-6 px-9 md:flex">
        <div v-for="(item, index) in news" :key="index" class="w-4/12 h-108 px-3 2xl:h-120">
          <div class="news-item animate__animated w-full h-full bg-white rounded-sm border border-gray-100">
            <img :src="item.image" alt="kaisen" class="w-full h-1/3 object-cover object-center 2xl:h-72">
            <div class="p-8">
              <h3 class="text-gray-800 text-lg font-semibold max-h-20 overflow-ellipsis overflow-hidden break-words">{{item.title}}</h3>
              <p class="text-gray-500 my-7 text-base leading-relaxed max-h-18 overflow-ellipsis overflow-hidden break-words">{{item.content}}</p>
              <small class="block pt-4 border-t border-gray-100 font-mono text-xs text-gray-900">{{item.time}}</small>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center pt-4">
        <button class="px-6 py-2 rounded-sm bg-gray-700 text-white font-mono uppercase text-sm font-medium md:text-lg md:px-8 md:py-3 lg:text-sm">All Articles</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Latest News',
      content: 'Find out the latest news and press releases at Zolano, including events, product launches, and more. In addition, follow our blog to find out the latest furniture trends, styles, tips and information.',
      news: [{
        id: 1,
        image: require('@/assets/img/index-news-1.jpg'),
        title: '5 Tips on How to Clean and Take Care of your Leather Sofa',
        content: 'A leather sofa can add a touch of class and elegance to any living room. Although…',
        time: 'September 19, 2020'
      }, {
        id: 2,
        image: require('@/assets/img/index-news-2.jpg'),
        title: 'Export Furniture Exhibition 2019',
        content: 'Export Furniture Exhibition (EFE) is internationally known to global buyers from all…',
        time: 'September 19, 2020'
      }]
    }
  },
  methods: {
    initAnimation() {
      this.$scrollTrigger.batch('.news-item', {
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

<style lang="less">
.custom-swipe {
  .van-swipe__indicator {
    width: 10px;
    height: 10px;
    background-color: #ccc;
  }
  .van-swipe__indicator--active {
    background-color: #999;
  }
  .van-swipe__indicator:not(:last-child) {
    margin-right: 10px;
  }
}
</style>