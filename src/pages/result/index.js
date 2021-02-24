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
			labelW: '100px',
			datas: [],
			fields: [],
			form: {},
		}
	},
	watch:{
		$route(to,from){
			this.fieldList()
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
			console.log(this.$options)
			this.$http.get(`/form/elements/menu/${this.$route.name}`).then((res) => {
				this.fields = res.data.result
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