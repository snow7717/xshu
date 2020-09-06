export default {
	name: 'cfilter',
	props: {
		labelW: {
			type: String
		},
		search: {
			type: Object
		},
		filters: {
			type: Array
		}
	},
	methods: {
		handleAll(value,field) {
		  this.$emit('handleAll',value,field)
		},
		handleChange(value,field) {
			this.$emit('handleChange',value,field)
		},
		query(ref) {
			this.$refs[ref].click()
			this.$emit('query',ref)
		}
	}
}