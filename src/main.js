import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/global.css'
import { Button, image } from 'element-ui'
Vue.config.productionTip = false
Vue.use(Button)
Vue.use(image)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
