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
	if (/^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/.test(value) || !value) {
		callback()
  } else {
    callback(new Error('邮箱格式错误'))
  }
}

export default {
	name: 'bteacher',
	data() {
		return {
			url: {
				index: '/teacher/page/',
				importpre: '/teacher/import/pre',
				importsave: '/teacher/import/save',
				exporter: '/export/teacher',
				show: '/teacher/info',
				save: '/teacher/save',
				del: '/teacher/remove'
			},
			labelW: '130px',
			datas: []
		}
	},
	components: {
		ccontent
	},
	created() {
	},
	methods: {
		index(datas) {
			for(let item of datas) {
				this.$set(item,'editable',true)
				this.$set(item,'deleteable',true)
				item.schoolid = item.school
				item.professionid = item.profession
			}
			this.datas = datas
		}
	}
}