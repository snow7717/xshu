import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/school/login/index.vue'
import Index from '@/pages/school/index/index.vue'
import Member from '@/pages/school/member/index.vue'
import ResultWait from '@/pages/school/result/wait/index.vue'
import ResultPaper from '@/pages/school/result/paper/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
		{
			path: '/login',
      name: 'login',
      component: Login
		},
		{
			path: '/',
      name: 'index',
      component: Index
		},
		{
			path: '/member',
      name: 'member',
      component: Member
		},
		{
			path: '/result/wait',
      name: 'resultWait',
      component: ResultWait
		},
		{
			path: '/result/paper',
      name: 'resultPaper',
      component: ResultPaper
		},
  ]
})
