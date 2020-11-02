export default {
	name: 'csearchbar',
	props: {
		summary: {
			type: String
		},
		nameSearch: {
			type: Boolean
		},
		search: {
			type: Object
		},
		closeShow: {
			type: Boolean,
			default: false
		},
		placeholder: {
			type: String,
			default: ''
		}
	},
	methods: {
		toggleName() {
			this.$emit('toggleName')
		},
		searcher() {
			this.$emit('search')
		}
	}
}