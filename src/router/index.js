import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import newslist from '@/views/news/newslist'
import newsitem from '@/views/news/newsitem'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'newslist',
        component: newslist
      },
      {
        path: '/news/:newsId',
        name: 'newsitem',
        component: newsitem
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
