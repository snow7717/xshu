import ccontent from '@/components/content/index.vue'

export default {
	data() {
		return {
			labelW: '100px',
			datas: [],
		}
	},
	computed: {
		url() {
			return {
				index: `/achieves/page/${this.$route.name}`,
				importpre: ``,
				importsave: ``,
				exporter: ``,
				show: `/achieves/get`,
				save: `/achieves/save`,
				del: `/achieves/delete`
			}
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
			this.datas = datas
		}
	}
}