import qs from 'qs'
import ccontent from '@/components/content/index.vue'

export default {
	name: 'bstudent',
	data() {
		return {
			url: {
				index: '/student/page/',
				importpre: '/student/import/pre',
				importsave: '/student/import/save',
				exporter: '/export/student',
				show: '/student/info',
				save: '/student/save',
				del: '/student/remove'
			},
			labelW: '100px',
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