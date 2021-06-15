<template>
  <div class="nav flex justify-between w-full px-10 rounded-b-sm fixed top-0 left-0 z-20" :class="{
    'bg-white': status === 2,
    '-top-32': status === 1,
  }">
    <div class="w-32 flex items-end p-3 bg-white" :class="{
      'h-20': status !== 0,
      'h-32': status === 0,
    }">
      <img src="@/assets/img/logo.png" alt="kaisen" class="w-full h-auto">
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      status: 0, // 0默认 1下滑页面 2上滑页面
      lastScrollTop: 0,
    }
  },
  methods: {
    handleScroll() {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop > 10) {
        if(scrollTop > this.lastScrollTop) { // 1下滑页面
          this.status = 1;
        }
        else { // 2上滑页面
          this.status = 2;
        }
      } else { // 顶部
        this.status = 0;
      }
      this.lastScrollTop = scrollTop;
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style lang="less">
.nav {
  transition: all .4s;
}
</style>