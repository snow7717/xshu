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