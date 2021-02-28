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
				this.$set(item,'approveable',this.user.userinfo.id != item.createuser && item.status == 1)
			}
			this.datas = datas
		}
	}
}