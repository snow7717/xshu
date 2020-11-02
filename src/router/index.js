import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/school/login/index.vue'
import Index from '@/pages/school/index/index.vue'
import Member from '@/pages/school/member/index/index.vue'
import MemberImport from '@/pages/school/member/import/index.vue'
import SubjectY from '@/pages/school/research/subjectY/index.vue'
import SubjectX from '@/pages/school/research/subjectX/index.vue'
import Award from '@/pages/school/research/award/index.vue'
import Paper from '@/pages/school/research/paper/index.vue'
import Book from '@/pages/school/research/book/index.vue'
import Patent from '@/pages/school/research/patent/index.vue'
import Soft from '@/pages/school/research/soft/index.vue'
import Research from '@/pages/school/teaching/research/index.vue'
import Taward from '@/pages/school/teaching/award/index.vue'
import Course from '@/pages/school/teaching/course/index.vue'
import Graduate from '@/pages/school/teaching/graduate/index.vue'
import Colla from '@/pages/school/teaching/colla/index.vue'
import Competition from '@/pages/school/student/competition/index.vue'
import Sresearch from '@/pages/school/student/research/index.vue'
import Teacher from '@/pages/school/visiting/teacher/index.vue'
import Student from '@/pages/school/visiting/student/index.vue'
import Attend from '@/pages/school/visiting/attend/index.vue'
import Sattend from '@/pages/school/visiting/sattend/index.vue'
import Cooperation from '@/pages/school/visiting/cooperation/index.vue'
import Base from '@/pages/school/visiting/base/index.vue'
import TeamInfo from '@/pages/school/setting/teaminfo/index.vue'
import TeamSet from '@/pages/school/setting/teamset/index.vue'
import ToolRembox from '@/pages/school/tool/rembox/index.vue'
import ToolBook from '@/pages/school/tool/book/index.vue'
import ToolFolder from '@/pages/school/tool/folder/index.vue'
import User from '@/pages/school/user/index.vue'

import Paper1 from '@/pages/result/paper/index.vue'
import Create from '@/pages/result/create/index.vue'

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
			path: '/research/subjecty',
			name: 'subjectY',
			component: SubjectY
		},
		{
			path: '/research/subjectx',
			name: 'subjectX',
			component: SubjectX
		},
		{
			path: '/research/award',
			name: 'award',
			component: Award
		},
		{
			path: '/research/paper',
			name: 'paper',
			component: Paper
		},
		{
			path: '/research/book',
			name: 'book',
			component: Book
		},
		{
			path: '/research/patent',
			name: 'patent',
			component: Patent
		},
		{
			path: '/research/soft',
			name: 'soft',
			component: Soft
		},
		{
			path: '/teaching/research',
			name: 'research',
			component: Research
		},
		{
			path: '/teaching/award',
			name: 'taward',
			component: Taward
		},
		{
			path: '/teaching/course',
			name: 'course',
			component: Course
		},
		{
			path: '/teaching/graduate',
			name: 'graduate',
			component: Graduate
		},
		{
			path: '/teaching/colla',
			name: 'colla',
			component: Colla
		},
		{
			path: '/student/competition',
			name: 'competition',
			component: Competition
		},
		{
			path: '/student/research',
			name: 'sresearch',
			component: Sresearch
		},
		{
			path: '/visiting/teacher',
			name: 'teacher',
			component: Teacher
		},
		{
			path: '/visiting/student',
			name: 'student',
			component: Student
		},
		{
			path: '/visiting/attend',
			name: 'attend',
			component: Attend
		},
		{
			path: '/visiting/sattend',
			name: 'sattend',
			component: Sattend
		},
		{
			path: '/visiting/cooperation',
			name: 'cooperation',
			component: Cooperation
		},
		{
			path: '/visiting/base',
			name: 'baser',
			component: Base
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
      name: 'toolbook',
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
			name: 'paper1',
			component: Paper1
		},
		{
			path: '/create/:type',
			name: 'create',
			component: Create
		}
  ]
})
