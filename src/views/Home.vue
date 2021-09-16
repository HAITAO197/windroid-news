<template>
  <div class="home-container">
    <!-- 顶部 -->
    <div class="header-wrap">
      <div class="header">
        <h1 @click="$router.push('/')">Windroid 新闻</h1>
        <!-- <p>收集全网Windows+Android新闻</p> -->
        <p>Windroid = 一台设备 两套生态</p>
      </div>
    </div>
    <div class="main">
      <!-- 新闻列表 -->
      <router-view></router-view>
    </div>
    <logo></logo>
  </div>
</template>

<script>
import logo from '@/views/logo'
export default {
  name: 'Home',
  components: { logo }
}
</script>
<style lang="less" scoped>
.header-wrap {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 60px;
  background-color: #1a1a1a;
  .header {
    display: flex;
    justify-content: space-between;
    width: 1000px;
    margin: 0 auto;
    color: #fff;
    h1 {
      margin: 0;
      font-size: 30px;
      line-height: 60px;
    }
    p {
      font-size: 15px;
      line-height: 60px;
    }
  }
}
.home-container {
  background-color: #e9e9e9;
  padding: 90px 0 50px 0;
  min-height: 100vh;
  box-sizing: border-box;
  .main {
    margin: 0 auto;
    width: 1000px;
    // background-color: #ddd;

    .news-top:hover {
      transform: translate(-1px, -1px);
      box-shadow: 3px 3px 20px #aaa;
      transition: all 0.1s;
    }
  }
}
</style>
