<template>
  <div class="logo-wrap" ref="wrap" @click="backtotop">
    <div class="eyes" id="eyes">
      <span></span>
      <span></span>
    </div>
    <!-- <div class="top"></div> -->
  </div>
</template>
<script>
export default {
  name: 'logo',
  data() {
    return {
      // 定时器
      timer: null
      // data末尾
    }
  },
  methods: {
    //   点击回到顶部功能
    backtotop() {
      document.documentElement.scrollTop = '0px'
    },
    // 获取窗口大小及logo位置
    getPisition() {
      this.pisition.pageWidth = document.documentElement.offsetWidth - 80
      this.pisition.pageHeight = document.documentElement.offsetHeight - 60
    }
    // methods末尾
  },
  mounted() {
    window.addEventListener('mousemove', function eyesmove(e) {
      var event = e || this.window.event
      const pageWidth = window.screen.width - 80
      const pageHeight = window.screen.height - 60
      const eyeX = Math.round(((event.clientX - pageWidth) / pageWidth) * 10)
      const eyeY = Math.round(((event.clientY - pageHeight) / pageHeight) * 10)
      this.document.getElementById('eyes').childNodes.forEach(ele => {
        ele.style.transform = `translate(${eyeX}px, ${eyeY}px)`
      })
    })
  }
}
</script>

<style lang="less" scoped>
// 定义眨眼动画
@keyframes blink {
  0% {
    width: 10px;
    height: 10px;
    margin-top: 0;
  }
  3% {
    width: 8px;
    height: 2px;
    margin-top: 4px;
  }
  6% {
    width: 10px;
    height: 10px;
    margin-top: 0;
  }
  9% {
    width: 8px;
    height: 2px;
    margin-top: 4px;
  }
  12% {
    width: 10px;
    height: 10px;
    margin-top: 0;
  }
}
.logo-wrap {
  position: fixed;
  z-index: 999;
  bottom: -50px;
  right: 5px;
  width: 150px;
  height: 150px;
  background: url(../assets/windroid-logo-close.png) no-repeat center;
  background-size: contain;
  transition: all 0.1s;
  .eyes {
    position: relative;
    top: 45px;
    left: 0;
    padding: 0 22px;
    display: flex;
    justify-content: space-around;
    span {
      display: block;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: #fff;
      transition: all 0.1s;
      //   设置眨眼动画
      animation-name: blink;
      animation-duration: 4s;
      animation-iteration-count: infinite;
    }
  }
}
.logo-wrap:hover {
  bottom: 0;
  ::before {
    content: '回到顶部';
    position: relative;
    top: -5px;
    left: 0;
    font-size: 15px;
    font-weight: bold;
    color: #999;
  }
  .eyes span {
    display: none;
    // transform: translate(10px, -10px);
    // height: 5px;
  }
}
</style>
