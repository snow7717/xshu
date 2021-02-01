import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login/index.vue'
import Index from '@/pages/index/index.vue'
import BasisSchool from '@/pages/basis/school/index.vue'
import BasisProfession from '@/pages/basis/profession/index.vue'
import BasisTeacher from '@/pages/basis/teacher/index.vue'
import BasisStudent from '@/pages/basis/student/index.vue'
import BasisStudent1 from '@/pages/basis/student1/index.vue'
import SubjectY from '@/pages/research/subjectY/index.vue'
import SubjectX from '@/pages/research/subjectX/index.vue'
import Award from '@/pages/research/award/index.vue'
import Paper from '@/pages/research/paper/index.vue'
import Book from '@/pages/research/book/index.vue'
import Patent from '@/pages/research/patent/index.vue'
import Soft from '@/pages/research/soft/index.vue'
import Research from '@/pages/teaching/research/index.vue'
import Taward from '@/pages/teaching/award/index.vue'
import Course from '@/pages/teaching/course/index.vue'
import Graduate from '@/pages/teaching/graduate/index.vue'
import Colla from '@/pages/teaching/colla/index.vue'
import Competition from '@/pages/student/competition/index.vue'
import Sresearch from '@/pages/student/research/index.vue'
import Second from '@/pages/student/second/index.vue'
import Business from '@/pages/student/business/index.vue'
import Thesis from '@/pages/student/thesis/index.vue'
import Honor from '@/pages/student/honor/index.vue'
import Scholarship from '@/pages/student/scholarship/index.vue'
import Teacher from '@/pages/visiting/teacher/index.vue'
import Student from '@/pages/visiting/student/index.vue'
import Attend from '@/pages/visiting/attend/index.vue'
import Sattend from '@/pages/visiting/sattend/index.vue'
import Cooperation from '@/pages/visiting/cooperation/index.vue'
import Base from '@/pages/visiting/base/index.vue'
import TeamInfo from '@/pages/setting/teaminfo/index.vue'
import TeamSet from '@/pages/setting/teamset/index.vue'
import ToolRembox from '@/pages/tool/rembox/index.vue'
import ToolBook from '@/pages/tool/book/index.vue'
import ToolFolder from '@/pages/tool/folder/index.vue'
import User from '@/pages/user/index/index.vue'
import Password from '@/pages/user/password/index.vue'

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
			path: '/basis/school',
			name: 'basischool',
			component: BasisSchool
		},
		{
			path: '/basis/profession',
			name: 'profession',
			component: BasisProfession
		},
		{
			path: '/basis/teacher',
			name: 'basisteacher',
			component: BasisTeacher
		},
		{
			path: '/basis/student',
			name: 'basistudent',
			component: BasisStudent
		},
		{
			path: '/basis/student1',
			name: 'basistudent1',
			component: BasisStudent1
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
			path: '/student/second',
			name: 'second',
			component: Second
		},
		{
			path: '/student/business',
			name: 'business',
			component: Business
		},
		{
			path: '/student/thesis',
			name: 'thesis',
			component: Thesis
		},
		{
			path: '/student/honor',
			name: 'honor',
			component: Honor
		},
		{
			path: '/student/scholarship',
			name: 'scholarship',
			component: Scholarship
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
			path: '/password',
			name: 'password',
			component: Password
		}
  ]
})
