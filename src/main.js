// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from './axios'
import ElementUI from 'element-ui'
import ECharts from 'vue-echarts'
import awe from 'awe-dnd'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/reset.css'
import '@/assets/css/function.css'
import '@/assets/css/common.css'
import '@/assets/css/iconfont.css'

Vue.config.productionTip = false
axios.defaults.baseURL = location.href.indexOf("localhost") > 0 ? "/api" : 'http://39.100.236.213/zqy/yhat/'
Vue.prototype.$http = axios
Vue.use(ElementUI)
Vue.component('v-chart', ECharts)
Vue.use(awe)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	store,
  components: { App },
  template: '<App/>'
})
