<template>
  <div class="wrap">
    <div class="newsitem-wrap">
      <h2>{{ news.title }}</h2>
      <div class="info">
        <span>{{ getData(news.time) }}</span>
        <a :href="news.link" target="_blank">来源：{{ news.form }}</a>
        <span>作者：{{ news.author }}</span>
      </div>
      <div class="newsitem-main" v-html="news.content"></div>
      <a class="original" :href="news.link" target="_blank">原文链接</a>
    </div>
  </div>
</template>
<script>
import { content } from '@/utils/request'
export default {
  name: 'newsitem',
  data() {
    return {
      news: {}
      // data末尾
    }
  },
  created() {
    this.getNews()
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
        return this.add0(m) + '月' + this.add0(d) + '日 ' + this.add0(h) + ':' + this.add0(mm)
      }
    },
    add0(d) {
      return d < 10 ? '0' + d : d
    },
    async getNews() {
      try {
        const { data } = await content(this.$route.params.newsId)
        this.news = data.news[0]
      } catch (error) {
        console.log(error)
      }
    }
    // methods末尾
  }
}
</script>

<style lang="less">
.wrap {
  display: flex;
  width: 1000px;
  .newsitem-wrap {
    // width: 740px;
    vertical-align: center;
    h2 {
      margin: 50px 0 30px 0;
      font-size: 28px;
      line-height: 50px;
      font-weight: bold;
    }
    .info {
      margin-bottom: 20px;
      span,
      a {
        font-size: 14px;
        line-height: 30px;
        color: #555;
        margin-left: 20px;
      }
      a:hover {
        color: #000;
      }
    }
    .newsitem-main {
      p {
        font-size: 18px;
        line-height: 30px;
        padding: 10px 0;
        color: #000;
      }
      li {
        font-size: 16px;
        line-height: 35px;
        color: #000;
        list-style: none;
      }
      li::before {
        content: '';
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: #555;
      }
      .bold {
        font-weight: bold;
      }
      img {
        width: 600px;
        height: 400px;
        margin: 10px 0;
        object-fit: contain;
      }
    }
    .original {
      font-size: 14px;
      line-height: 30px;
      color: #555;
    }
    .original:hover {
      color: #000;
    }
  }
}
</style>
