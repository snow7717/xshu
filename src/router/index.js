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
import Second from '@/pages/school/student/second/index.vue'
import Business from '@/pages/school/student/business/index.vue'
import Thesis from '@/pages/school/student/thesis/index.vue'
import Honor from '@/pages/school/student/honor/index.vue'
import Scholarship from '@/pages/school/student/scholarship/index.vue'
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

import SubjectY1 from '@/pages/result/research/subjecty/index/index.vue'
import SubjectYCreate from '@/pages/result/research/subjecty/create/index.vue' 
import SubjectYEdit from '@/pages/result/research/subjecty/edit/index.vue'
import SubjectX1 from '@/pages/result/research/subjectx/index/index.vue'
import SubjectXCreate from '@/pages/result/research/subjectx/create/index.vue'
import SubjectXEdit from '@/pages/result/research/subjectx/edit/index.vue'
import Paper1 from '@/pages/result/research/paper/index.vue'
import Award1 from '@/pages/result/research/award/index.vue'
import Book1 from '@/pages/result/research/book/index.vue'
import Patent1 from '@/pages/result/research/patent/index.vue'
import Soft1 from '@/pages/result/research/soft/index.vue'
import Research1 from '@/pages/result/teaching/research/index.vue'
import Taward1 from '@/pages/result/teaching/award/index.vue'
import Course1 from '@/pages/result/teaching/course/index.vue'
import Graduate1 from '@/pages/result/teaching/graduate/index.vue'
import Colla1 from '@/pages/result/teaching/colla/index.vue'
import Competition1 from '@/pages/result/student/competition/index.vue'
import Sresearch1 from '@/pages/result/student/research/index.vue'
import Teacher1 from '@/pages/result/visiting/teacher/index.vue'
import Student1 from '@/pages/result/visiting/student/index.vue'
import Attend1 from '@/pages/result/visiting/attend/index.vue'
import Sattend1 from '@/pages/result/visiting/sattend/index.vue'
import Cooperation1 from '@/pages/result/visiting/cooperation/index.vue'
import Base1 from '@/pages/result/visiting/base/index.vue'
import Create from '@/pages/result/create/index.vue'
import Edit from '@/pages/result/edit/index.vue'

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
			path: '/result/research/subjecty',
			name: 'subjecty1',
			component: SubjectY1
		},
		{
			path: '/subjecty/create',
			name: 'subjectycreate',
			component: SubjectYCreate
		},
		{
			path: '/subjecty/edit/:id',
			name: 'subjectyedit',
			component: SubjectYEdit
		},
		{
			path: '/result/research/subjectx',
			name: 'subjectx1',
			component: SubjectX1
		},
		{
			path: '/subjectx/create',
			name: 'subjectxcreate',
			component: SubjectXCreate
		},
		{
			path: '/subjectx/edit/:id',
			name: 'subjectxedit',
			component: SubjectXEdit
		},
		{
			path: '/result/research/paper',
			name: 'paper1',
			component: Paper1
		},
		{
			path: '/result/research/award',
			name: 'award1',
			component: Award1
		},
		{
			path: '/result/research/book',
			name: 'book1',
			component: Book1
		},
		{
			path: '/result/research/patent',
			name: 'patent1',
			component: Patent1
		},
		{
			path: '/result/research/soft',
			name: 'soft1',
			component: Soft1
		},
		{
			path: '/result/teaching/research',
			name: 'research1',
			component: Research1
		},
		{
			path: '/result/teaching/award',
			name: 'taward1',
			component: Taward1
		},
		{
			path: '/result/teaching/course',
			name: 'course1',
			component: Course1
		},
		{
			path: '/result/teaching/graduate',
			name: 'graduate1',
			component: Graduate1
		},
		{
			path: '/result/teaching/colla',
			name: 'colla1',
			component: Colla1
		},
		{
			path: '/result/student/competition',
			name: 'competition1',
			component: Competition1
		},
		{
			path: '/result/student/research',
			name: 'sresearch1',
			component: Sresearch1
		},
		{
			path: '/result/visiting/teacher',
			name: 'teacher1',
			component: Teacher1
		},
		{
			path: '/result/visiting/student',
			name: 'student1',
			component: Student1
		},
		{
			path: '/result/visiting/attend',
			name: 'attend1',
			component: Attend1
		},
		{
			path: '/result/visiting/sattend',
			name: 'sattend1',
			component: Sattend1
		},
		{
			path: '/result/visiting/cooperation',
			name: 'cooperation1',
			component: Cooperation1
		},
		{
			path: '/result/visiting/base',
			name: 'base1',
			component: Base1
		},
		{
			path: '/create/:type',
			name: 'create',
			component: Create
		},
		{
			path: '/edit/:type/:id',
			name: 'edit',
			component: Edit
		}
  ]
})
