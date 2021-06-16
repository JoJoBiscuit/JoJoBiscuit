<template>
  <div class="nav flex justify-between w-screen px-10 rounded-b-sm fixed top-0 left-0 z-20" :class="{
    'bg-white': status === 2,
    '-top-32': status === 1,
  }">
    <div class="w-32 flex p-3 bg-white" :class="{
      'h-20': status !== 0,
      'items-center': status !== 0,
      'h-32': status === 0,
      'items-end': status === 0,
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
      ticking: false,
    }
  },
  methods: {
    handleScroll() {
      if( !this.ticking) {
        window.requestAnimationFrame(() => {
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
          if (scrollTop > 20) {
            if(scrollTop > this.lastScrollTop) { // 下滑页面
              this.status = 1;
            }
            else { // 上滑页面
              this.status = 2;
            }
          } else { // 顶部
            this.status = 0;
          }
          this.lastScrollTop = scrollTop;

          this.ticking = false;
        })

        this.ticking = true;
      }
    },
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
  transition: all .8s;
}
</style>