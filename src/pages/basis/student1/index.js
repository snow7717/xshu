import qs from 'qs'
import ccontent from '@/components/content/index.vue'

export default {
	name: 'bstudent1',
	data() {
		return {
			url: {
				index: '/student1/page/',
				importpre: '/student1/import/pre',
				importsave: '/student1/import/save',
				exporter: '/export/student1',
				show: '/student1/info',
				save: '/student1/save',
				del: '/student1/remove'
			},
			labelW: '100px',
			datas: []
		}
	},
	components: {
		ccontent
	},
	created() {},
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