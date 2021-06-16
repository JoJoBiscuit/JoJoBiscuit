<template>
  <div class="relative">
    <div class="nav w-screen px-5 py-4 rounded-b-sm fixed top-0 left-0 flex justify-between items-center" :class="{
      'shadow': status !== 0,
      'bg-white': status !== 0 || isShowMenu,
      '-top-32': status === 1,
    }" :style="{
      'z-index': isShowMenu ? 9999 : 20
    }">
      <div class="w-32 relative">
        <img src="@/assets/img/logo-dark.png" alt="kaisen" class="logo w-full h-auto" :class="{
          'opacity-0': status === 0 && !isShowMenu
        }">
        <img src="@/assets/img/logo-light.png" alt="kaisen" class="logo w-full h-auto absolute top-0 left-0" :class="{
          'opacity-0': status !== 0 || isShowMenu
        }">
      </div>

      <div class="menu-icon" @click="toggleMenu()" :class="{
        'active': isShowMenu,
        'default': !isShowMenu,
      }">
        <span v-for="num in 3" :key="num" class="line" :class="[
          isShowMenu || status !== 0 ? 'bg-gray-800' : 'bg-white'
        ]"></span>
      </div>
    </div>

    <van-popup v-model="isShowMenu" :duration="0.4" position="top" :style="{
      height: '100%',
      'z-index': 10,
    }">
      <div class="w-full h-full flex flex-col justify-center items-center font-mono gap-2 bg-gray-800 text-gray-50 text-xl">
        <NuxtLink class="link p-1 font-bold animate__animated animate__fadeInDown animate__faster" to="/">
          Home
        </NuxtLink>
        <NuxtLink class="link p-1 font-bold animate__animated animate__fadeInDown animate__faster" to="/story">
          Story
        </NuxtLink>
        <NuxtLink class="link p-1 font-bold animate__animated animate__fadeInDown animate__faster" to="/process">
          Process
        </NuxtLink>
        <NuxtLink class="link p-1 font-bold animate__animated animate__fadeInDown animate__faster" to="/products">
          Products
        </NuxtLink>
        <NuxtLink class="link p-1 font-bold animate__animated animate__fadeInDown animate__faster" to="/news">
          News
        </NuxtLink>
        <NuxtLink class="link p-1 font-bold animate__animated animate__fadeInDown animate__faster" to="/about">
          About Us
        </NuxtLink>
        <NuxtLink class="link p-1 font-bold animate__animated animate__fadeInDown animate__faster" to="/contact">
          Contact Us
        </NuxtLink>
      </div>
    </van-popup>
  </div>
</template>

<script>

export default {
  data(){
    return {
      status: 0, // 0默认 1下滑页面 2上滑页面
      lastScrollTop: 0,
      ticking: false,
      isShowMenu: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isShowMenu = !this.isShowMenu;
    },
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
.nav,
.logo,
.line {
  transition: all .4s ease-out;
}

.menu-icon {
  width: 30px;
  cursor: pointer;

  .line {
    display: block;
    width: 100%;
    border-radius: 2px;
    height: 3px;
    position: relative;
    margin-top: 5px;
    transition: all .4s .4s ease-out;

    &:first-child {
      margin-top: 0;
    }
  }

  &.active {
    .line:nth-child(1) {
      animation: ease 1s top-1 forwards;
    }
    .line:nth-child(2) {
      animation: ease 1s scaled-1 forwards;
    }
    .line:nth-child(3) {
      animation: ease 1s bottom-1 forwards;
    }
  }
  &.default {
    .line:nth-child(1) {
      animation: ease 1s top-2 forwards;
    }
    .line:nth-child(2) {
      animation: ease 1s scaled-2 forwards;
    }
    .line:nth-child(3) {
      animation: ease 1s bottom-2 forwards;
    }
  }
}

@keyframes top-1 {
  0% { top: 0; transform: rotate(0); }
  50% { top: 8px; transform: rotate(0); }
  100% { top: 8px; transform: rotate(45deg); }
}
@keyframes top-2 {
  0% { top: 8px; transform: rotate(45deg); }
  50% { top: 8px; transform: rotate(0deg); }
  100% { top: 0; transform: rotate(0deg); }
}
@keyframes bottom-1 {
  0% { bottom: 0; transform: rotate(0); }
  50% { bottom: 8px; transform: rotate(0); }
  100% { bottom: 8px; transform: rotate(135deg); }
}
@keyframes bottom-2 {
  0% { bottom: 8px; transform: rotate(135deg); }
  50% { bottom: 8px; transform: rotate(0); }
  100% { bottom: 0; transform: rotate(0); }
}
@keyframes scaled-1 {
  50% { transform: scale(0); }
  100% { transform: scale(0); }
}
@keyframes scaled-2 {
  0% { transform: scale(0); }
  50% { transform: scale(0); }
  100% { transform: scale(1); }
}

.link:nth-child(1) {
  animation-delay: .2s;
}
.link:nth-child(2) {
  animation-delay: .4s;
}
.link:nth-child(3) {
  animation-delay: .6s;
}
.link:nth-child(4) {
  animation-delay: .8s;
}
.link:nth-child(5) {
  animation-delay: 1s;
}
.link:nth-child(6) {
  animation-delay: 1.2s;
}
.link:nth-child(7) {
  animation-delay: 1.4s;
}
.link:nth-child(8) {
  animation-delay: 1.6s;
}
.link:nth-child(9) {
  animation-delay: 1.8s;
}
.link:nth-child(10) {
  animation-delay: 2.0s;
}
</style>