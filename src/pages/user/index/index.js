import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'

export default {
	name: 'user',
	data() {
		return {
			windowH: 0,
			from: '',
			rules: {
				name: [
					{
						required: true,
						message: '请输入真实姓名',
						trigger: 'blur'
					}
				],
				birthday: { 
					type: 'date', 
					required: true, 
					message: '请选择出生日期', 
					trigger: 'change' 
				},
				title: {
					required: true, 
					message: '请选择职称', 
					trigger: 'change' 
				},
				position: {
					required: true, 
					message: '请选择职位', 
					trigger: 'change' 
				},
				jobtype: {
					required: true, 
					message: '请选择工作身份', 
					trigger: 'change' 
				},
				degree: {
					required: true, 
					message: '请选择最高学位', 
					trigger: 'change' 
				},
				jointime: {
					required: true, 
					message: '请选择加入学院时间', 
					trigger: 'change' 
				},
				tel: {
					required: true, 
					message: '请输入手机号', 
					trigger: 'blur' 
				},
				email: {
					required: true,
					type: 'email',
					message: '请输入常用邮箱', 
					trigger: 'blur' 
				}
			},
			jobs:[
				'教授',
        '副教授',
        '助理教授',
        '讲师',
        '助教',
        '研究员',
        '副研究员',
        '助理研究员',
				'实习研究员',
				'高级工程师',
				'中级工程师',
				'初级工程师',
				'助理工程师',
				'高级实验师',
				'实验师',
				'助理实验师',
				'实验员',
				'主任医师',
				'副主任医师',
				'主治医师',
				'住院医师',
				'正高级教师',
				'高级教师',
				'一级(中级)教师',
				'二级(初级)教师',
				'三级教师',
				'其它'
			],
			positions: [
				'院长',
				'副院长',
				'学院书记',
				'学院副书记',
				'系主任',
				'副系主任',
				'系支书',
				'研究所/实验室主任',
				'研究所/实验室副主任',
				'科研秘书',
				'院长助理',
				'其他',
				'无'
			],
			departs: []
		}
	},
	computed: {
		form() {
			return this.$store.state.user.userinfo
		}
	},
	components: {
		cheader,
		caside
	},
	beforeRouteEnter (to, from, next) {
    next((vm) => {
			vm.from = from.name
    })
  },
	mounted() {
		this.windowH = document.documentElement.clientHeight || document.body.clientHeight
	},
	created() {
		this.departIndex()
	},
	methods: {
		/*--获取所有系部--*/
		departIndex() {
			this.$http.get('/team/college/list',{params: {name: '', type: 2, superior: ''}}).then((res) => {
				this.departs = res.data.result
			})
		},
		submit(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
	}
}