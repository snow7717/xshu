import ccontent from '@/components/content/index.vue'

export default {
	data() {
		return {
			url: {
				index: '/school/page',
				importpre: '',
				importsave: '',
				exporter: '',
				show: '/school/get',
				save: '/school/post',
				del: '/school/delete'
			},
			labelW: '70px',
			datas: []
		}
	},
	components: {
		ccontent
	},
	created() {
	},
	mounted() {
	},
	methods: {
		index(datas) {
			for(let item of datas) {
				this.$set(item,'editable',true)
				this.$set(item,'deleteable',true)
				item.campusid = item.campus
			}
			this.datas = datas
		}
	}
}