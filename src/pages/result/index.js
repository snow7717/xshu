import ccontent from '@/components/content/index.vue'

export default {
	data() {
		return {
			datas: [],
		}
	},
	computed: {
		url() {
			return {
				index: `/achieves/page/${this.$route.name}`,
				template: `/import/get/template/${this.$route.name}`,
				importpre: `/import/${this.$route.name}/pre`,
				importsave: `/import/${this.$route.name}/save`,
				exporter: `/export/achieve/${this.$route.name}`,
				show: `/achieves/get`,
				save: `/achieves/save`,
				del: `/achieves/delete`
			}
		},
		user() {
			return this.$store.state.user
		}
	},
	components: {
		ccontent
	},
	created() {},
	mounted() {},
	methods: {
		index(datas) {
			for(let item of datas) {
				this.$set(item,'editable',this.user.userinfo.id == item.createuser)
				this.$set(item,'deleteable',this.user.userinfo.id == item.createuser)
				this.$set(item,'approveable',item._status == 1)
			}
			this.datas = datas
		}
	}
}