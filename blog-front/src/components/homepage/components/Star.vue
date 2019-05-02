<template>
  <div class="wrapper">
    <div class="qq_wraper">
      <a href="#"
         class="qq_item wei_bo">
        <i class="qq_item_label iconfont">&#xe75a;</i>
      </a>
      <a href="#"
         class="qq_item you_xiang">
        <i class="qq_item_label iconfont">&#xe629;</i>
      </a>
      <a href="#"
         class="qq_item wei_xin">
        <i class="qq_item_label iconfont">&#xe63a;</i>
      </a>
      <a href="#"
         class="qq_item qq">
        <i class="qq_item_label iconfont">&#xe630;</i>
      </a>
      <a href="#"
         class="qq_item wifi">
        <i class="qq_item_label iconfont">&#xe61c;</i>
      </a>
    </div>

    <div class="hot_title">
      <h2>热门专题</h2>
    </div>

    <div class="hot_class">
      <el-carousel height="172px">
        <el-carousel-item v-for="item in list"
                          :key="item.id">
          <img :src="item.imgUrl" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Star',
  data () {
    return {
      list: [{
        'id': '0001',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg'
      }, {
        'id': '0002',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg'
      }, {
        'id': '0003',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1802/51/e78f936a5b404102.jpg_640x200_c14f0b3a.jpg'
      }, {
        'id': '0004',
        'imgUrl': 'http://img1.qunarzz.com/piao/fusion/1712/91/a275569091681d02.jpg_640x200_0519ccb9.jpg'
      }]
    }
  }

}
</script>

<style lang="scss" scoped>
@import "~styles/scss_style/header.scss";

.wrapper {
  width: 360px;
  height: 720px;
  .qq_wraper {
    overflow: hidden;
    .wei_bo {
      background-color: $wei_bo_color;
    }
    .qq {
      background-color: $qq_color;
    }
    .you_xiang {
      background-color: $you_xiang_color;
    }
    .wifi {
      background-color: $wifi_color;
    }
    .wei_xin {
      background-color: $wei_xin_color;
    }
    .qq_item {
      width: 45px;
      height: 45px;
      float: left;
      margin: 0 16px 0 0;
      text-align: center;
      border-radius: 7px;
      .qq_item_label {
        line-height: 45px;
        font-size: 40px;
        color: #fff;
      }
    }
  }
  .hot_title {
    margin: 0 7px;
    height: 45px;
    border-bottom: 1px solid $qq_color;
    h2 {
      line-height: 45px;
      font-size: 18px;
      font-weight: 100;
    }
  }
  .hot_class {
    margin-top: 14px;
  }
}
</style>
