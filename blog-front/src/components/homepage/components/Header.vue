<template>
  <div>
    <div class="logo">
      <div class="title">
        <h1>
          <span class="nick_name">IT风水师</span>
          <span class="website">卢越de个人网站</span>
        </h1>
      </div>
    </div>
    <el-container>
      <el-header :height="'50'">
        <ul class="nav_top">
          <a href="#"
             class="index">首页</a>
          <a href="#"
             class="nav_container">生活相册</a>
          <a href="#"
             class="nav_container">技术博客</a>
          <a href="#"
             class="nav_container">随笔</a>
          <a href="#"
             class="nav_container">关于博主</a>
          <a href="#"
             class="nav_container">java</a>
          <a href="#"
             class="nav_container">python</a>
          <!-- <a href="#"
             class="nav_container">hadoop</a> -->
          <!-- <a href="#"
             class="nav_container">更多内容</a> -->
        </ul>
        <div class="search_wrapper">
          <!-- <transition name="fade"> -->
          <el-input v-model="input"
                    placeholder="请输入内容"
                    size="medium"></el-input>
          <!-- </transition> -->
          <a href="#"
             class="iconfont seach"
             @click="handleDisplaySearch">&#xe632;</a>
        </div>
      </el-header>
    </el-container>

  </div>
</template>

<script>
// import $ from 'jquery'
export default {
  name: 'HomeHeader',
  data () {
    return {
      input: '',
      searchFlag: true
    }
  },
  methods: {
    handleDisplaySearch () {
      this.searchFlag = !this.searchFlag
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/scss_style/header.scss";
.logo {
  height: $logo_height;
  background-color: $bg_color;
  .title {
    line-height: $logo_height;
    width: 300px;
    margin: auto;
    color: #ffffff;
    h1 {
      font-weight: 100;
    }
    .nick_name {
      font-size: 45px;
    }
    .website {
      font-size: 16px;
    }
  }
}
.el-header {
  width: 100%;
  background-color: #5c5c5c;
  height: 50px;
}
.nav_top {
  width: $wrapper_width;
  margin: auto;
  line-height: 50px;
  font-size: 18px;
  text-align: center;
  a:hover {
    border-top: 3px solid red;
    background-color: #ffffff;
    color: black;
  }
  .index {
    width: 80px;
    margin-left: 50px;
    padding: 0 20px;
    float: left;
    @extend a:hover;
  }
  .nav_container {
    width: 80px;
    float: left;
    margin-left: 10px;
    padding: 0 20px;
    color: #ffffff;
  }
}
.search_wrapper {
  overflow: hidden;
  width: 260px;
  height: 100%;
  text-align: center;
  line-height: 50px;
  padding-left: 80px;
  .el-input {
    width: 200px;
  }
  .seach {
    width: 50px;
    font-size: 35px;
    color: #ffffff;
    display: inline-block;
    float: right;
    margin-left: 10px;
    background-color: $bg_color;
  }
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s;
}
</style>
