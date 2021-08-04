<template>
  <div class="home-container">
    <!-- 顶部 -->
    <div class="header-wrap">
      <div class="header">
        <span>windroid 新闻</span>
      </div>
    </div>
    <div class="main">
      <!-- 置顶新闻 -->
      <div class="news-top">
        <a href="javascript:;">
          <!-- <span>1</span> -->
          <p>win11发布...</p>
        </a>
        <a href="javascript:;">
          <!-- <span>2</span> -->
          <p>安卓手机运行Windows...</p>
        </a>
      </div>
      <p>新闻</p>
      <!-- 新闻列表 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {}
}
</script>
<style lang="less" scoped>
.header-wrap {
  width: 100%;
  height: 60px;
  background-color: #1a1a1a;
  .header {
    width: 1200px;
    margin: 0 auto;
    color: #fff;
    font-size: 30px;
    line-height: 60px;
  }
}
.home-container {
  background-color: #bfc;
  .main {
    margin: 0 auto;
    width: 1200px;
    background-color: #ddd;
    .news-top {
      display: flex;
      height: 40px;
      padding: 10px 20px;
      a {
        display: flex;
        flex: 1;
        font-size: 25px;
        line-height: 40px;
        // span {
        //   width: 40px;
        //   height: 40px;
        //   border-radius: 50%;
        //   margin-right: 15px;
        //   text-align: center;
        //   background-color: #d22222;
        //   color: #eee;
        // }
        p {
          color: #222;
        }
      }
      a:hover p {
        color: #d22222;
      }
    }
  }
}
</style>
