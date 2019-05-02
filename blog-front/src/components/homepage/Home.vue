<template>
  <div class="">
    <home-header></home-header>
    <el-row class="margin_top18">
      <el-col :span='15'>
        <home-swiper></home-swiper>
      </el-col>
      <el-col :span='9'
              class="padding-left20">
        <home-star></home-star>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeStar from './components/Star'
import TestSwiper from './components/TestSwiper'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeStar,
    TestSwiper
  },
  data () {
    return {
    }
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
@import "~styles/scss_style/header.scss";

.el-row {
  width: 1360px;
  margin: auto;
}

.margin_top18 {
  margin-top: 18px;
}

.padding-left20 {
  padding-left: 50px;
}

//
</style>
