import ccontent from '@/components/content/index.vue'

export default {
	name: 'profession',
	data() {
		return {
			url: {
				index: '/profession/page',
				importpre: '',
				importsave: '',
				exporter: '',
				show: '/profession/get',
				save: '/profession/post',
				del: '/profession/delete'
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
				item.schoolid = item.school
			}
			this.datas = datas
		}
	}
}