import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/school/login/index.vue'
import Index from '@/pages/school/index/index.vue'
import Member from '@/pages/school/member/index.vue'
import ResultWait from '@/pages/school/result/wait/index.vue'
import ResultPaper from '@/pages/school/result/paper/index.vue'
import ResultSubjectX from '@/pages/school/result/subjectX/index.vue'
import ResultSoft from '@/pages/school/result/soft/index.vue'
import ResultPatent from '@/pages/school/result/patent/index.vue'

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
		{
			path: '/result/subjectx',
      name: 'resultSubjectX',
      component: ResultSubjectX
		},
		{
			path: '/result/soft',
      name: 'resultSoft',
      component: ResultSoft
		},
		{
			path: '/result/patent',
      name: 'resultPatent',
      component: ResultPatent
		}
  ]
})
