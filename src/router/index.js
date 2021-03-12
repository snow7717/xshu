import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/user/login/index.vue'
import User from '@/pages/user/index/index.vue'
import Password from '@/pages/user/password/index.vue'

import Index from '@/pages/index/index.vue'
import Layout from '@/pages/layout/index.vue'
import Basis from '@/pages/basis/index.vue'
import Result from '@/pages/result/index.vue'
import Show from '@/pages/show/index.vue'

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
			component: Layout,
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
					component: Basis,
					meta: {
						active: '1-1',
						label: '学院信息',
						global: false,
						permissions: [
							{
								label: '查看',
								name: 'bschoolshow'
							},
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
					component: Basis,
					meta: {
						active: '1-2',
						label: '专业信息',
						global: false,
						permissions: [
							{
								label: '查看',
								name: 'professionshow'
							},
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
					component: Basis,
					meta: {
						active: '1-3',
						label: '教师信息',
						global: false,
						permissions: [
							{
								label: '查看',
								name: 'bteachershow'
							},
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
					component: Basis,
					meta: {
						active: '1-4',
						label: '学生信息',
						global: false,
						permissions: [
							{
								label: '查看',
								name: 'bstudentshow'
							},
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
				}
			]
		},
		{
			path: '/research',
			name: 'research',
			component: Layout,
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
					component: Result,
					meta: {
						active: '2-1',
						label: '纵向科研项目',
						global: false,
						permissions: [
							{
								label: '查看',
								name: 'subjectYshow'
							},
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
					component: Result,
					meta: {
						active: '2-2',
						label: '横向科研项目',
						global: false,
						permissions: [
							{
								label: '查看',
								name: 'subjectXshow'
							},
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
					component: Result,
					meta: {
						active: '2-3',
						label: '科研奖励',
						global: false,
						permissions: [
							{
								label: '查看',
								name: 'awardshow'
							},
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
					component: Result,
					global: false,
					meta: {
						active: '2-4',
						label: '论文',
						permissions: [
							{
								label: '查看',
								name: 'papershow'
							},
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
					component: Result,
					meta: {
						active: '2-5',
						label: '著作(教材)',
						global: false,
						permissions: [
							{
								label: '查看',
								name: 'bookshow'
							},
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
					component: Result,
					meta: {
						active: '2-6',
						label: '专利',
						global: false,
						permissions: [
							{
								label: '查看',
								name: 'patentshow'
							},
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
					component: Result,
					meta: {
						active: '2-7',
						label: '软件著作权',
						global: false,
						permissions: [
							{
								label: '查看',
								name: 'softshow'
							},
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
			component: Layout,
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
					component: Result,
					global: false,
					meta: {
						active: '3-1',
						label: '教研项目',
						permissions: [
							{
								label: '查看',
								name: 'tresearchshow'
							},
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
					component: Result,
					meta: {
						active: '3-2',
						label: '教学奖励',
						global: false,
						permissions: [
							{
								label: '添加',
								name: 'tawardshow'
							},
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
					component: Result,
					meta: {
						active: '3-3',
						label: '课程',
						global: false,
						permissions: [
							{
								label: '查看',
								name: 'tawardshow'
							},
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
					path: 'case',
					name: 'case',
					component: Result,
					meta: {
						active: '3-4',
						label: '案例库',
						global: false,
						permissions: [
							{
								label: '查看',
								name: 'caseshow'
							},
							{
								label: '添加',
								name: 'caseadd'
							},
							{
								label: '删除',
								name: 'casedel'
							},
							{
								label: '编辑',
								name: 'casemodify'
							},
							{
								label: '审批',
								name: 'caseapprove'
							}
						]
					}
				},
				{
					path: 'textbook',
					name: 'textbook',
					component: Result,
					meta: {
						active: '3-5',
						label: '教材',
						global: false,
						permissions: [
							{
								label: '查看',
								name: 'textbookshow'
							},
							{
								label: '添加',
								name: 'textbookadd'
							},
							{
								label: '删除',
								name: 'textbookdel'
							},
							{
								label: '编辑',
								name: 'textbookmodify'
							},
							{
								label: '审批',
								name: 'textbookapprove'
							}
						]
					}
				},
				{
					path: 'building',
					name: 'building',
					component: Result,
					meta: {
						active: '3-6',
						label: '专业建设',
						global: false,
						permissions: [
							{
								label: '查看',
								name: 'buildingshow'
							},
							{
								label: '添加',
								name: 'buildingadd'
							},
							{
								label: '删除',
								name: 'buildingdel'
							},
							{
								label: '编辑',
								name: 'buildingmodify'
							},
							{
								label: '审批',
								name: 'buildingapprove'
							}
						]
					}
				},
				{
					path: 'teachaward',
					name: 'teachaward',
					component: Result,
					meta: {
						active: '3-7',
						label: '教学比赛获奖',
						global: false,
						permissions: [
							{
								label: '查看',
								name: 'teachawardshow'
							},
							{
								label: '添加',
								name: 'teachawardadd'
							},
							{
								label: '删除',
								name: 'teachawarddel'
							},
							{
								label: '编辑',
								name: 'teachawardmodify'
							},
							{
								label: '审批',
								name: 'teachawardapprove'
							}
						]
					}
				},
				{
					path: 'title',
					name: 'title',
					component: Result,
					meta: {
						active: '3-8',
						label: '教师称号管理',
						global: false,
						permissions: [
							{
								label: '查看',
								name: 'titleshow'
							},
							{
								label: '添加',
								name: 'titleadd'
							},
							{
								label: '删除',
								name: 'titledel'
							},
							{
								label: '编辑',
								name: 'titlemodify'
							},
							{
								label: '审批',
								name: 'titleapprove'
							}
						]
					}
				},
			]
		},
		{
			path: '/student',
			name: 'student',
			component: Layout,
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
					component: Result,
					meta: {
						active: '4-1',
						label: '学生竞赛获奖',
						global: false,
						permissions: [
							{
								label: '查看',
								name: 'competitionshow'
							},
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
					component: Result,
					meta: {
						active: '4-2',
						label: '研究生成果获奖',
						global: false,
						permissions: [
							{
								label: '查看',
								name: 'sresearchshow'
							},
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
					path: 'business',
					name: 'business',
					component: Result,
					meta: {
						active: '4-3',
						label: '实践创业成果',
						global: false,
						permissions: [
							{
								label: '查看',
								name: 'businessshow'
							},
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
					component: Result,
					meta: {
						active: '4-4',
						label: '优秀学位论文',
						global: false,
						permissions: [
							{
								label: '查看',
								name: 'thesisshow'
							},
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
					component: Result,
					meta: {
						active: '4-5',
						label: '学生荣誉表彰',
						global: false,
						permissions: [
							{
								label: '查看',
								name: 'honorshow'
							},
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
					component: Result,
					meta: {
						active: '4-6',
						label: '奖学金',
						global: false,
						permissions: [
							{
								label: '添加',
								name: 'scholarshipshow'
							},
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
				{
					path: 'second',
					name: 'second',
					component: Result,
					meta: {
						active: '4-7',
						label: '第二课堂实践创新',
						global: false,
						permissions: [
							{
								label: '查看',
								name: 'secondshow'
							},
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
					path: 'cooperation',
					name: 'cooperation',
					component: Result,
					meta: {
						active: '4-8',
						label: '合作协议',
						global: false,
						permissions: [
							{
								label: '查看',
								name: 'cooperationshow'
							},
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
					component: Result,
					meta: {
						active: '4-9',
						label: '实习实践基地',
						global: false,
						permissions: [
							{
								label: '查看',
								name: 'basershow'
							},
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
			path: '/visiting',
			name: 'visiting',
			component: Layout,
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
					component: Result,
					meta: {
						active: '5-1',
						label: '教师访学',
						global: false,
						permissions: [
							{
								label: '查看',
								name: 'teachershow'
							},
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
					component: Result,
					meta: {
						active: '5-2',
						label: '学生访学',
						global: false,
						permissions: [
							{
								label: '查看',
								name: 'vstudentshow'
							},
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
					component: Result,
					meta: {
						active: '5-3',
						label: '教师参会',
						global: false,
						permissions: [
							{
								label: '查看',
								name: 'attendshow'
							},
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
					component: Result,
					meta: {
						active: '5-4',
						label: '学生参会',
						global: false,
						permissions: [
							{
								label: '查看',
								name: 'sattendshow'
							},
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
								label: '查看',
								name: 'roleshow'
							},
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
								label: '查看',
								name: 'susershow'
							},
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
				{
					path: 'menu',
					name: 'menu',
					component: Menu,
					meta: {
						active: '6-3',
						label: '菜单管理',
						global: false,
						permissions: [
							{
								label: '查看',
								name: 'menushow'
							},
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
				},
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
		},
		{
			path: '/show/:name',
			name: 'show',
			component: Show,
			meta: {
				
			}
		}
  ]
})
