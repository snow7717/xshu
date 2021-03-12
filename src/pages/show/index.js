export default {
	data() {
		return {
			labelW: '70px',
			fields: []
		}
	},
	computed: {
		name() {
			return this.$route.params.name
		},
		form() {
			return this.$store.state.data
		}
	},
	created() {
		this.fieldIndex()
	},
	methods: {
		fieldIndex() {
			this.$http.get(`/form/elements/menu/${this.name}`).then((res) => {
				this.fields = res.data.result
				console.log(this.fields)
				//this.initForm(this.fields,'form')
			})
		},
	}
}