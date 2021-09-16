<template>
  <div>
    <!-- 置顶新闻 -->
    <div class="news-top">
      <a href="javascript:;" @click="$router.push('/news/10004')">
        <span>置顶</span>
        <p>炸裂 ！微软 Win11 原生支持运行安卓 App</p>
      </a>
      <a href="javascript:;" @click="$router.push('/news/10003')">
        <span>置顶</span>
        <p>Win11 来了，微软正式发布 Windows 11</p>
      </a>
    </div>
    <div
      class="news-wrap"
      v-for="item in newsLIst"
      :key="item.id"
      @click="$router.push('/news/' + item.id)"
    >
      <div class="news-l">
        <el-image :src="item.img" fit="fit"></el-image>
      </div>
      <div class="news-r">
        <h3>{{ item.title }}</h3>
        <p>{{ item.subhead }}</p>
        <div class="news-b">
          <span>
            <span>关键词 :</span>
            <span v-for="(word, index) in item.tags" :key="index">{{ word }}</span>
          </span>
          <span>{{ getData(item.time) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { news } from '@/utils/request'
export default {
  name: 'newslist',
  components: {},
  data() {
    return {
      newsLIst: null
      // data末尾
    }
  },
  created() {
    this.getNewsList()
  },
  methods: {
    getData(t) {
      const time = new Date(t * 1)
      const y = time.getFullYear()
      const m = time.getMonth() + 1
      const d = time.getDate()
      const h = time.getHours()
      const mm = time.getMinutes()
      const timeNow = new Date()
      if (timeNow.getFullYear() === y && timeNow.getMonth() + 1 === m && timeNow.getDate() === d) {
        return '今天 ' + this.add0(h) + ':' + this.add0(mm)
      } else {
        return this.add0(m) + '月' + this.add0(d) + '日'
      }
    },
    add0(d) {
      return d < 10 ? '0' + d : d
    },
    async getNewsList() {
      try {
        const { data } = await news()
        // console.log(data.newsList)
        this.newsLIst = data.list
        // console.log(this.newsLIst)
        // this.newsLIst[0].tags = this.newsLIst.tags[0].split(',')
        this.setTags()
      } catch (error) {
        console.log(error)
      }
    },
    setTags() {
      this.newsLIst.forEach(ele => {
        if (ele.tags) {
          ele.tags = ele.tags.split(',')
        }
      })
    }
    // methods末尾
  }
}
</script>

<style lang="less" scoped>
.news-top {
  display: flex;
  height: 40px;
  padding: 10px 20px;
  background-color: #fff;
  box-shadow: 2px 2px 10px #aaa;
  a {
    display: flex;
    flex: 1;
    width: 480px;
    font-size: 25px;
    line-height: 40px;
    span {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 15px;
      text-align: center;
      background-color: #1a1a1a;
      font-size: 15px;
      line-height: 40px;
      color: #eee;
    }
    p {
      width: 420px;
      padding: 0 10px;
      color: #222;
      //   处理文本溢出
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
  a:hover p {
    color: #d22222;
  }
}
.news-wrap {
  display: flex;
  margin-top: 30px;
  height: 150px;
  width: 100%;
  background-color: #fff;
  box-shadow: 2px 2px 10px #aaa;
  .news-l {
    margin-right: 20px;
    .el-image {
      height: 150px;
      width: 200px;
    }
  }
  .news-r {
    width: 780px;
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
      //   处理文本溢出
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .news-b {
      height: 30px;
      line-height: 30px;
      display: flex;
      justify-content: space-between;
      span {
        font-size: 15px;
        color: #222;
        margin-right: 15px;
      }
    }
  }
}
.news-wrap:hover {
  transform: translate(-1px, -1px);
  box-shadow: 3px 3px 20px #aaa;
  transition: all 0.1s;
}
</style>
