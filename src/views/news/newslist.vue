<template>
  <div>
    <p>newslist组件</p>
    <newsitem></newsitem>
    <div class="news-wrap">
      <div class="news-l">
        <el-image src="https://ss.im5i.com/2021/08/04/PhQ7t.jpg" fit="fit"></el-image>
        <!-- <img src="https://ss.im5i.com/2021/08/04/PhQ7t.jpg" alt="" /> -->
      </div>
      <div class="news-r">
        <h3>
          微软 Win11 Build 22000.100 更新发布：全新任务栏应用提醒，大量细节优化Lorem ipsum dolor sit
          amet consectetur, adipisicing elit. Quibusdam, excepturi autem deserunt incidunt nisi
          accusantium velit rem tempore necessitatibus tempora, vero, error recusandae expedita id
          reiciendis accusamus ipsum facilis sed.
        </h3>
        <p>今日，微软宣布向预览体验计划用户发布 Windows 11 Build 22000.100 更新</p>
        <div class="news-b">
          <span>关键词:weirqn</span>
          <span>07月23日</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import newsitem from './newsitem.vue'
export default {
  name: 'newslist',
  components: {
    newsitem
  },
  data() {
    return {
      newsLIst: [
        {
          id: 10001,
          title: '微软 Win11 Build 22000.100 更新发布：全新任务栏应用提醒，大量细节优化',
          subhead: '今日，微软宣布向预览体验计划用户发布 Windows 11 Build 22000.100 更新',
          tags: ['微软', 'Windows11'],
          time: 1628042122016,
          content: ''
        }
      ]
      // data末尾
    }
  },
  methods: {
    // methods末尾
  }
}
</script>

<style lang="less" scoped>
.news-wrap {
  display: flex;
  height: 150px;
  width: 100%;
  background-color: #ffffff;
  .news-l {
    margin-right: 20px;
    .el-image {
      height: 150px;
      width: 200px;
    }
  }
  .news-r {
    width: 980px;
    h3 {
      font-size: 20px;
      line-height: 40px;
      font-weight: bold;
      color: #000;
      margin: 0;
      //   处理文本溢出
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    p {
      font-size: 15px;
      line-height: 30px;
      color: #aaa;
      margin-bottom: 50px;
    }
    .news-b {
      height: 30px;
      line-height: 30px;
      display: flex;
      justify-content: space-between;
      span {
        font-size: 15px;
        color: #222;
      }
    }
  }
}
</style>
