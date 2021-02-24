import ccontent from '@/components/content/index.vue'

export default {
	data() {
		return {
			url: {
				index: '',
				importpre: '',
				importsave: '',
				exporter: '',
				show: '',
				save: '',
				del: ''
			},
			labelW: '140px',
			datas: [],
			fields: [],
			form: {},
		}
	},
	components: {
		ccontent
	},
	created() {
		this.fieldList()
	},
	mounted() {
	},
	methods: {
		fieldList() {
			this.$http.get(`/form/elements/menu/${this.$route.name}`).then((res) => {
				this.fields = res.data.result
				console.log(this.fields)
			})
		},
		index(datas) {
			this.datas = datas
		},
		showform(form) {
			this.form = form
		},
		cancel() {
			this.formshow = false
		}
	}
}