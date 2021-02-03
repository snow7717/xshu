import qs from 'qs'
import ccontent from '@/components/content/index.vue'

let regphone = (rule, value, callback) => {
  if (/^1\d{10}$/.test(value)) {
    callback()
  } else {
		callback(new Error('手机号未填写或格式错误'))
  }
}
let regemail = (rule, value, callback) => {
	if (/^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/.test(value) || value == '') {
		callback()
  } else {
    callback(new Error('邮箱格式错误'))
  }
}

export default {
	name: 'bteacher',
	data() {
		return {
			summary: '教师信息',
			url: {
				index: '/teacher/page/',
				importpre: '/teacher/import/pre',
				importsave: '/teacher/import/save',
				exporter: '/export/teacher',
				show: '/teacher/info',
				save: '/teacher/save',
				del: '/teacher/remove'
			},
			nameSearch: true,
			search: {
				name: ''
			},
			labelW: '70px',
			datas: [],
			page: 1,
			total: 0,
			selects: [],
			formshow: false,
			form: {},
			rules: {
        name: [
          { 
						required: true, 
						message: '请输入姓名', 
						trigger: 'blur' 
					}
        ],
				number: [
					{
						required: true,
						message: '清输入职工号',
						trigger: 'blur'
					}
				],
				phone: [
					{
						required: true,
						validator: regphone,
						trigger: 'blur'
					}
				],
				email: [
					{
						validator: regemail,
						trigger: 'blur'
					}
				],
				unit: [
					{
						required: true,
						message: '清输入最新单位',
						trigger: 'blur'
					}
				]
			}
		}
	},
	components: {
		ccontent
	},
	created() {
	},
	methods: {
		index(page,total,datas) {
			this.page = page
			this.total = total
			this.datas = datas
		},
		handleDatas(val) {
			this.selects = val
		},
		create() {
			this.formshow = true
		},
		edit(form) {
			this.formshow = true
			this.form = form
		},
		cancel() {
			this.formshow = false
		}
	}
}