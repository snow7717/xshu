import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/school/login/index.vue'
import Index from '@/pages/school/index/index.vue'
import Member from '@/pages/school/member/index/index.vue'
import MemberImport from '@/pages/school/member/import/index.vue'
import ResultPaper from '@/pages/school/result/paper/index.vue'
import ResultSubjectY from '@/pages/school/result/subjectY/index.vue'
import ResultSoft from '@/pages/school/result/soft/index.vue'
import ResultPatent from '@/pages/school/result/patent/index.vue'
import ResultAward from '@/pages/school/result/award/index.vue'
import ResultSaward from '@/pages/school/result/saward/index.vue'
import ResultConedu from '@/pages/school/result/conedu/index.vue'
import ResultBook from '@/pages/school/result/book/index.vue'
import ResultSubjectX from '@/pages/school/result/subjectX/index.vue'
import ResultNews from '@/pages/school/result/news/index.vue'
import ResultFile from '@/pages/school/result/file/index.vue'
import ResultOther from '@/pages/school/result/other/index.vue'
import ResultNewresult from '@/pages/school/result/newresult/index.vue'
import TeamInfo from '@/pages/school/setting/teaminfo/index.vue'
import TeamSet from '@/pages/school/setting/teamset/index.vue'
import ToolRembox from '@/pages/school/tool/rembox/index.vue'
import ToolBook from '@/pages/school/tool/book/index.vue'
import ToolFolder from '@/pages/school/tool/folder/index.vue'
import User from '@/pages/school/user/index.vue'
import Paper from '@/pages/result/paper/index/index.vue'
import PaperCreate from '@/pages/result/paper/create/index.vue'

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
			path: '/member/import',
			name: 'memberImport',
			component: MemberImport
		},
		{
			path: '/result/paper',
      name: 'resultPaper',
      component: ResultPaper
		},
		{
			path: '/result/subjecty',
      name: 'resultSubjectY',
      component: ResultSubjectY
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
		},
		{
			path: '/result/award',
      name: 'resultAward',
      component: ResultAward
		},
		{
			path: '/result/saward',
      name: 'resultSaward',
      component: ResultSaward
		},
		{
			path: '/result/conedu',
      name: 'resultConedu',
      component: ResultConedu
		},
		{
			path: '/result/book',
      name: 'resultBook',
      component: ResultBook
		},
		{
			path: '/result/subjectx',
      name: 'resultSubjectX',
      component: ResultSubjectX
		},
		{
			path: '/result/news',
      name: 'resultNews',
      component: ResultNews
		},
		{
			path: '/result/file',
      name: 'resultFile',
      component: ResultFile
		},
		{
			path: '/result/other',
      name: 'resultOther',
      component: ResultOther
		},
		{
			path: '/result/newresult',
      name: 'resultNewresult',
      component: ResultNewresult
		},
		{
			path: '/setting/teaminfo',
      name: 'teaminfo',
      component: TeamInfo
		},
		{
			path: '/setting/teamset',
      name: 'teamset',
      component: TeamSet
		},
		{
			path: '/tool/rembox',
      name: 'rembox',
      component: ToolRembox
		},
		{
			path: '/tool/book',
      name: 'book',
      component: ToolBook
		},
		{
			path: '/tool/folder',
      name: 'folder',
      component: ToolFolder
		},
		{
			path: '/user',
			name: 'user',
			component: User
		},
		{
			path: '/paper',
			name: 'paper',
			component: Paper
		},
		{
			path: '/paper/create',
			name: 'papercreate',
			component: PaperCreate
		},
  ]
})
