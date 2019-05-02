<template>
  <div class="swiper_wrapper">
    <div class="banner"
         id="banner">
      <div class="banner_list">
        <a href="#"
           v-for="(item, index) of list"
           :key="index"
           @click="handleSwiperChange(index)">
          <img class="banner_item"
               :src="item.imgUrl">
        </a>
      </div>
      <a href="#"
         v-for="(item,index) of list"
         :key="item.id">
        <!-- delay-2s -->
        <transition name="fade"
                    enter-active-class="animated flipInX slow"
                    leave-active-class="animated fadeOut faster">
          <img class="banner-slide"
               v-if="index === current_id"
               :src="item.imgUrl">
        </transition>
      </a>

    </div>
  </div>
</template>

<script>
import $ from 'jquery'
import animate from 'animate.css'

export default {
  name: 'Swiper',
  components: {
  },
  data () {
    return {
      current_id: 0,
      timer: null,
      list: [{
        id: 0,
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg'
      }, {
        id: 1,
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg'
      }, {
        id: 2,
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1802/51/e78f936a5b404102.jpg_640x200_c14f0b3a.jpg'
      }, {
        id: 3,
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1712/91/a275569091681d02.jpg_640x200_0519ccb9.jpg'
      }]
    }
  },
  methods: {
    // 第一次加载时为第一个选框添加边框
    firstAddBorder () {
      let bannerItems = $('.banner_item')
      bannerItems.eq(0).addClass('border_solid')
    },
    // 当轮播图切换时，切换边框
    addBorder () {
      let bannerItems = $('.banner_item')
      for (let i = 0; i < bannerItems.length; i++) {
        bannerItems.eq(i).removeClass('border_solid')
      }
      bannerItems.eq(this.current_id).addClass('border_solid')
    },
    // 轮播：利用v-show:index === this.current_id, 定时器用于变换current_id
    startAutoPlay () {
      this.timer = setInterval(() => {
        this.current_id = (++this.current_id) % this.list.length
        this.addBorder()
      }, 4000)
    },
    // 点击选框切换轮播图事件
    handleSwiperChange (index) {
      if (this.timer) {
        clearInterval(this.timer)
      }
      this.current_id = index
      this.addBorder()
      this.startAutoPlay()
    }

  },
  computed: {

  },
  mounted () {
    this.firstAddBorder()
    this.startAutoPlay()
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/scss_style/header.scss";

.border_solid {
  // #a4d3ee
  border: 2px solid #a4d3ee;
}

.banner {
  height: 297px;
  width: 832px;
  overflow: hidden;
  position: relative;
  .banner-slide {
    width: 712px;
    height: 297px;
    float: left;
  }
  .banner_list {
    width: 100px;
    padding-right: 20px;
    float: left;
    .banner_item {
      width: 100px;
      height: 62px;
      margin-bottom: 10px;
      // @extend .border_solid;
    }
  }
}
</style>
