import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/user/login/index.vue'
import User from '@/pages/user/index/index.vue'
import Password from '@/pages/user/password/index.vue'

import Index from '@/pages/index/index.vue'
import Basis from '@/pages/basis/index/index.vue'
import Bschool from '@/pages/basis/school/index.vue'
import Bprofession from '@/pages/basis/profession/index.vue'
import Bteacher from '@/pages/basis/teacher/index.vue'
import Bstudent from '@/pages/basis/student/index.vue'
import Bstudent1 from '@/pages/basis/student1/index.vue'

import Research from '@/pages/research/index/index.vue'
import SubjectY from '@/pages/research/subjectY/index.vue'
import SubjectX from '@/pages/research/subjectX/index.vue'
import Award from '@/pages/research/award/index.vue'
import Paper from '@/pages/research/paper/index.vue'
import Book from '@/pages/research/book/index.vue'
import Patent from '@/pages/research/patent/index.vue'
import Soft from '@/pages/research/soft/index.vue'

import Teaching from '@/pages/teaching/index/index.vue'
import Tresearch from '@/pages/teaching/research/index.vue'
import Taward from '@/pages/teaching/award/index.vue'
import Course from '@/pages/teaching/course/index.vue'
import Graduate from '@/pages/teaching/graduate/index.vue'
import Colla from '@/pages/teaching/colla/index.vue'

import Student from '@/pages/student/index/index.vue'
import Competition from '@/pages/student/competition/index.vue'
import Sresearch from '@/pages/student/research/index.vue'
import Second from '@/pages/student/second/index.vue'
import Business from '@/pages/student/business/index.vue'
import Thesis from '@/pages/student/thesis/index.vue'
import Honor from '@/pages/student/honor/index.vue'
import Scholarship from '@/pages/student/scholarship/index.vue'

import Visiting from '@/pages/visiting/index/index.vue'
import Teacher from '@/pages/visiting/teacher/index.vue'
import Vstudent from '@/pages/visiting/student/index.vue'
import Attend from '@/pages/visiting/attend/index.vue'
import Sattend from '@/pages/visiting/sattend/index.vue'
import Cooperation from '@/pages/visiting/cooperation/index.vue'
import Base from '@/pages/visiting/base/index.vue'

import Setting from '@/pages/setting/index/index.vue'
import Role from '@/pages/setting/role/index.vue'
import Suser from '@/pages/setting/user/index.vue'
import Menu from '@/pages/setting/menu/index.vue'
import Field from '@/pages/setting/field/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
		{
			path: '/login',
      name: 'login',
      component: Login,
			meta: {
				label: '登录',
				global: true
			}
		},
		{
			path: '/user',
			name: 'user',
			component: User,
			meta: {
				label: '个人信息',
				global: true
			}
		},
		{
			path: '/password',
			name: 'password',
			component: Password,
			meta: {
				label: '修改密码',
				global: true
			}
		},
		{
			path: '/',
      name: 'index',
      component: Index,
			meta: {
				label: '全局总览',
				position: 'left',
				icon: 'el-icon-s-home',
				global: false
			}
		},
		{
			path: '/basis',
			name: 'basis',
			component: Basis,
			meta: {
				label: '基础信息',
				position: 'left',
				icon: 'el-icon-menu',
				global: false
			},
			children: [
				{
					path: 'school',
					name: 'bschool',
					component: Bschool,
					meta: {
						active: '1-1',
						label: '学院信息',
						global: false,
						permissions: [
							{
								label: '添加',
								name: 'bschooladd'
							},
							{
								label: '删除',
								name: 'bschooldel'
							},
							{
								label: '编辑',
								name: 'bschoolmodify'
							}
						]
					}
				},
				{
					path: 'profession',
					name: 'profession',
					component: Bprofession,
					meta: {
						active: '1-2',
						label: '专业信息',
						global: false,
						permissions: [
							{
								label: '添加',
								name: 'professionadd'
							},
							{
								label: '删除',
								name: 'professiondel'
							},
							{
								label: '编辑',
								name: 'professionmodify'
							}
						]
					}
				},
				{
					path: 'teacher',
					name: 'bteacher',
					component: Bteacher,
					meta: {
						active: '1-3',
						label: '教师信息',
						global: false,
						permissions: [
							{
								label: '添加',
								name: 'bteacheradd'
							},
							{
								label: '删除',
								name: 'bteacherdel'
							},
							{
								label: '编辑',
								name: 'bteachermodify'
							}
						]
					}
				},
				{
					path: 'student',
					name: 'bstudent',
					component: Bstudent,
					meta: {
						active: '1-4',
						label: '本科生信息',
						global: false,
						permissions: [
							{
								label: '添加',
								name: 'bstudentadd'
							},
							{
								label: '删除',
								name: 'bstudentdel'
							},
							{
								label: '编辑',
								name: 'bstudentmodify'
							}
						]
					}
				},
				{
					path: 'student1',
					name: 'bstudent1',
					component: Bstudent1,
					meta: {
						active: '1-5',
						label: '研究生信息',
						global: false,
						permissions: [
							{
								label: '添加',
								name: 'bstudent1add'
							},
							{
								label: '删除',
								name: 'bstudent1del'
							},
							{
								label: '编辑',
								name: 'bstudent1modify'
							}
						]
					}
				},
			]
		},
		{
			path: '/research',
			name: 'research',
			component: Research,
			meta: {
				label: '科研成果',
				position: 'left',
				icon: 'el-icon-s-data',
				global: false
			},
			children: [
				{
					path: 'subjecty',
					name: 'subjectY',
					component: SubjectY,
					meta: {
						active: '2-1',
						label: '纵向科研项目',
						global: false,
						permissions: [
							{
								label: '添加',
								name: 'subjectYadd'
							},
							{
								label: '删除',
								name: 'subjectYdel'
							},
							{
								label: '编辑',
								name: 'subjectYmodify'
							},
							{
								label: '审批',
								name: 'subjectYapprove'
							}
						]
					}
				},
				{
					path: 'subjectx',
					name: 'subjectX',
					component: SubjectX,
					meta: {
						active: '2-2',
						label: '横向科研项目',
						global: false,
						permissions: [
							{
								label: '添加',
								name: 'subjectXadd'
							},
							{
								label: '删除',
								name: 'subjectXdel'
							},
							{
								label: '编辑',
								name: 'subjectXmodify'
							},
							{
								label: '审批',
								name: 'subjectXapprove'
							}
						]
					}
				},
				{
					path: 'award',
					name: 'award',
					component: Award,
					meta: {
						active: '2-3',
						label: '科研奖励',
						global: false,
						permissions: [
							{
								label: '添加',
								name: 'awardadd'
							},
							{
								label: '删除',
								name: 'awarddel'
							},
							{
								label: '编辑',
								name: 'awardmodify'
							},
							{
								label: '审批',
								name: 'awardapprove'
							}
						]
					}
				},
				{
					path: 'paper',
					name: 'paper',
					component: Paper,
					global: false,
					meta: {
						active: '2-4',
						label: '论文',
						permissions: [
							{
								label: '添加',
								name: 'paperadd'
							},
							{
								label: '删除',
								name: 'paperdel'
							},
							{
								label: '编辑',
								name: 'papermodify'
							},
							{
								label: '审批',
								name: 'paperapprove'
							}
						]
					}
				},
				{
					path: 'book',
					name: 'book',
					component: Book,
					meta: {
						active: '2-5',
						label: '著作(教材)',
						global: false,
						permissions: [
							{
								label: '添加',
								name: 'bookadd'
							},
							{
								label: '删除',
								name: 'bookdel'
							},
							{
								label: '编辑',
								name: 'bookmodify'
							},
							{
								label: '审批',
								name: 'bookapprove'
							}
						]
					}
				},
				{
					path: 'patent',
					name: 'patent',
					component: Patent,
					meta: {
						active: '2-6',
						label: '专利',
						global: false,
						permissions: [
							{
								label: '添加',
								name: 'patentadd'
							},
							{
								label: '删除',
								name: 'patentdel'
							},
							{
								label: '编辑',
								name: 'patentmodify'
							},
							{
								label: '审批',
								name: 'patentapprove'
							}
						]
					}
				},
				{
					path: 'soft',
					name: 'soft',
					component: Soft,
					meta: {
						active: '2-7',
						label: '软件著作权',
						global: false,
						permissions: [
							{
								label: '添加',
								name: 'softadd'
							},
							{
								label: '删除',
								name: 'softdel'
							},
							{
								label: '编辑',
								name: 'softmodify'
							},
							{
								label: '审批',
								name: 'softapprove'
							}
						]
					}
				},
			]
		},
		{
			path: '/teaching',
			name: 'teaching',
			component: Teaching,
			meta: {
				label: '教学成果',
				position: 'left',
				icon: 'el-icon-s-platform',
				global: false
			},
			children: [
				{
					path: 'research',
					name: 'tresearch',
					component: Tresearch,
					global: false,
					meta: {
						active: '3-1',
						label: '教研项目',
						permissions: [
							{
								label: '添加',
								name: 'tresearchadd'
							},
							{
								label: '删除',
								name: 'tresearchdel'
							},
							{
								label: '编辑',
								name: 'tresearchmodify'
							},
							{
								label: '审批',
								name: 'tresearchapprove'
							}
						]
					}
				},
				{
					path: 'award',
					name: 'taward',
					component: Taward,
					meta: {
						active: '3-2',
						label: '教学奖励',
						global: false,
						permissions: [
							{
								label: '添加',
								name: 'tawardadd'
							},
							{
								label: '删除',
								name: 'tawarddel'
							},
							{
								label: '编辑',
								name: 'tawardmodify'
							},
							{
								label: '审批',
								name: 'tawardapprove'
							}
						]
					}
				},
				{
					path: 'course',
					name: 'course',
					component: Course,
					meta: {
						active: '3-3',
						label: '本科课程',
						global: false,
						permissions: [
							{
								label: '添加',
								name: 'courseadd'
							},
							{
								label: '删除',
								name: 'coursedel'
							},
							{
								label: '编辑',
								name: 'coursemodify'
							},
							{
								label: '审批',
								name: 'courseapprove'
							}
						]
					}
				},
				{
					path: 'graduate',
					name: 'graduate',
					component: Graduate,
					meta: {
						active: '3-4',
						label: '研究生课程',
						global: false,
						permissions: [
							{
								label: '添加',
								name: 'graduateadd'
							},
							{
								label: '删除',
								name: 'graduatedel'
							},
							{
								label: '编辑',
								name: 'graduatemodify'
							},
							{
								label: '审批',
								name: 'graduateapprove'
							}
						]
					}
				},
				{
					path: 'colla',
					name: 'colla',
					component: Colla,
					meta: {
						active: '3-5',
						label: '协同育人项目',
						global: false,
						permissions: [
							{
								label: '添加',
								name: 'collaadd'
							},
							{
								label: '删除',
								name: 'colladel'
							},
							{
								label: '编辑',
								name: 'collamodify'
							},
							{
								label: '审批',
								name: 'collaapprove'
							}
						]
					}
				},
			]
		},
		{
			path: '/student',
			name: 'student',
			component: Student,
			meta: {
				label: '学生成果',
				position: 'left',
				icon: 'el-icon-money',
				global: false
			},
			children: [
				{
					path: 'competition',
					name: 'competition',
					component: Competition,
					meta: {
						active: '4-1',
						label: '学生竞赛获奖',
						global: false,
						permissions: [
							{
								label: '添加',
								name: 'competitionadd'
							},
							{
								label: '删除',
								name: 'competitiondel'
							},
							{
								label: '编辑',
								name: 'competitionmodify'
							},
							{
								label: '审批',
								name: 'competitionapprove'
							}
						]
					}
				},
				{
					path: 'research',
					name: 'sresearch',
					component: Sresearch,
					meta: {
						active: '4-2',
						label: '研究成果获奖',
						global: false,
						permissions: [
							{
								label: '添加',
								name: 'sresearchadd'
							},
							{
								label: '删除',
								name: 'sresearchdel'
							},
							{
								label: '编辑',
								name: 'sresearchmodify'
							},
							{
								label: '审批',
								name: 'sresearchapprove'
							}
						]
					}
				},
				{
					path: 'second',
					name: 'second',
					component: Second,
					meta: {
						active: '4-3',
						label: '第二课堂实践创新',
						global: false,
						permissions: [
							{
								label: '添加',
								name: 'secondadd'
							},
							{
								label: '删除',
								name: 'seconddel'
							},
							{
								label: '编辑',
								name: 'secondmodify'
							},
							{
								label: '审批',
								name: 'secondapprove'
							}
						]
					}
				},
				{
					path: 'business',
					name: 'business',
					component: Business,
					meta: {
						active: '4-4',
						label: '实践创业成果',
						global: false,
						permissions: [
							{
								label: '添加',
								name: 'businessadd'
							},
							{
								label: '删除',
								name: 'businessdel'
							},
							{
								label: '编辑',
								name: 'businessmodify'
							},
							{
								label: '审批',
								name: 'businessapprove'
							}
						]
					}
				},
				{
					path: 'thesis',
					name: 'thesis',
					component: Thesis,
					meta: {
						active: '4-5',
						label: '优秀学位论文',
						global: false,
						permissions: [
							{
								label: '添加',
								name: 'thesisadd'
							},
							{
								label: '删除',
								name: 'thesisdel'
							},
							{
								label: '编辑',
								name: 'thesismodify'
							},
							{
								label: '审批',
								name: 'thesisapprove'
							}
						]
					}
				},
				{
					path: 'honor',
					name: 'honor',
					component: Honor,
					meta: {
						active: '4-6',
						label: '学生荣誉表彰',
						global: false,
						permissions: [
							{
								label: '添加',
								name: 'honoradd'
							},
							{
								label: '删除',
								name: 'honordel'
							},
							{
								label: '编辑',
								name: 'honormodify'
							},
							{
								label: '审批',
								name: 'honorapprove'
							}
						]
					}
				},
				{
					path: 'scholarship',
					name: 'scholarship',
					component: Scholarship,
					meta: {
						active: '4-7',
						label: '奖学金情况',
						global: false,
						permissions: [
							{
								label: '添加',
								name: 'scholarshipadd'
							},
							{
								label: '删除',
								name: 'scholarshipdel'
							},
							{
								label: '编辑',
								name: 'scholarshipmodify'
							},
							{
								label: '审批',
								name: 'scholarshipapprove'
							}
						]
					}
				},
			]
		},
		{
			path: '/visiting',
			name: 'visiting',
			component: Visiting,
			meta: {
				label: '交流访学',
				position: 'left',
				icon: 'el-icon-s-flag',
				global: false
			},
			children: [
				{
					path: 'teacher',
					name: 'teacher',
					component: Teacher,
					meta: {
						active: '5-1',
						label: '教师访学',
						global: false,
						permissions: [
							{
								label: '添加',
								name: 'teacheradd'
							},
							{
								label: '删除',
								name: 'teacherdel'
							},
							{
								label: '编辑',
								name: 'teachermodify'
							},
							{
								label: '审批',
								name: 'teacherapprove'
							}
						]
					}
				},
				{
					path: 'student',
					name: 'vstudent',
					component: Vstudent,
					meta: {
						active: '5-2',
						label: '学生访学',
						global: false,
						permissions: [
							{
								label: '添加',
								name: 'vstudentadd'
							},
							{
								label: '删除',
								name: 'vstudentdel'
							},
							{
								label: '编辑',
								name: 'vstudentmodify'
							},
							{
								label: '审批',
								name: 'vstudentapprove'
							}
						]
					}
				},
				{
					path: 'attend',
					name: 'attend',
					component: Attend,
					meta: {
						active: '5-3',
						label: '教师参会',
						global: false,
						permissions: [
							{
								label: '添加',
								name: 'attendadd'
							},
							{
								label: '删除',
								name: 'attenddel'
							},
							{
								label: '编辑',
								name: 'attendmodify'
							},
							{
								label: '审批',
								name: 'attendapprove'
							}
						]
					}
				},
				{
					path: 'sattend',
					name: 'sattend',
					component: Sattend,
					meta: {
						active: '5-4',
						label: '学生参会',
						global: false,
						permissions: [
							{
								label: '添加',
								name: 'sattendadd'
							},
							{
								label: '删除',
								name: 'sattenddel'
							},
							{
								label: '编辑',
								name: 'sattendmodify'
							},
							{
								label: '查询',
								name: 'sattendlist'
							},
							{
								label: '审批',
								name: 'sattendapprove'
							}
						]
					}
				},
				{
					path: 'cooperation',
					name: 'cooperation',
					component: Cooperation,
					meta: {
						active: '5-5',
						label: '合作协议',
						global: false,
						permissions: [
							{
								label: '添加',
								name: 'cooperationadd'
							},
							{
								label: '删除',
								name: 'cooperationdel'
							},
							{
								label: '编辑',
								name: 'cooperationmodify'
							},
							{
								label: '审批',
								name: 'copperationapprove'
							}
						]
					}
				},
				{
					path: 'base',
					name: 'baser',
					component: Base,
					meta: {
						active: '5-6',
						label: '实习实践基地',
						global: false,
						permissions: [
							{
								label: '添加',
								name: 'baseradd'
							},
							{
								label: '删除',
								name: 'baserdel'
							},
							{
								label: '编辑',
								name: 'basermodify'
							},
							{
								label: '审批',
								name: 'baserapprove'
							}
						]
					}
				},
			]
		},
		{
			path: '/setting',
			name: 'setting',
			component: Setting,
			meta: {
				label: '系统设置',
				position: 'left',
				icon: 'el-icon-setting',
				global: false
			},
			children: [
				{
					path: 'role',
					name: 'role',
					component: Role,
					meta: {
						active: '6-1',
						label: '角色管理',
						global: false,
						permissions: [
							{
								label: '添加',
								name: 'roleadd'
							},
							{
								label: '删除',
								name: 'roledel'
							},
							{
								label: '编辑',
								name: 'rolemodify'
							},
						]
					}
				},
				{
					path: 'user',
					name: 'suser',
					component: Suser,
					meta: {
						active: '6-2',
						label: '用户管理',
						global: false,
						permissions: [
							{
								label: '添加',
								name: 'suseradd'
							},
							{
								label: '删除',
								name: 'suserdel'
							},
							{
								label: '编辑',
								name: 'susermodify'
							},
						]
					}
				},
				/*{
					path: 'menu',
					name: 'menu',
					component: Menu,
					meta: {
						active: '6-3',
						label: '菜单管理',
						global: false,
						permissions: [
							{
								label: '添加',
								name: 'menuadd'
							},
							{
								label: '删除',
								name: 'menudel'
							},
							{
								label: '编辑',
								name: 'menumodify'
							},
						]
					}
				},*/
				{
					path: 'field',
					name: 'field',
					component: Field,
					meta: {
						active: '6-4',
						label: '成果字段',
						global: false,
						permissions: []
					}
				}
			]
		}
  ]
})
