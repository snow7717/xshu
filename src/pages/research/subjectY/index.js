import qs from 'qs'
import ccontent from '@/components/content/index.vue'

export default {
	name: 'subjectY',
	data() {
		return {
			url: {
				index: '/subjects/page',
				importpre: '/teacher/import/pre',
				importsave: '/teacher/import/save',
				exporter: '/export/subject/y',
				show: '/teacher/info',
				save: '/teacher/save',
				del: '/subjects/delete'
			},
			nameSearch: true,
			search: {
				xy: 'y',
				title: ''
			},
			labelW: '130px',
			datas: [],
			page: 1,
			total: 0,
			selects: [],
			formshow: false,
			fields: [],
			form: {},
			rules: {}
		}
	},
	components: {
		ccontent
	},
	created() {
	},
	methods: {
		index(page,total,datas) {
			[
				this.page,
				this.total,
				this.datas
			] = [
				page,
				total,
				datas
			]
		},
		handleDatas(val) {
			this.selects = val
		},
		showform(form) {
			this.formshow = true
			this.form = form
		},
		cancel() {
			this.formshow = false
		}
	}
}