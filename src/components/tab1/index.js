export default {
	name: 'ctab1',
	props: {
		title: {
			type: String
		},
		recycle: {
			type: String
		},
		timeLabel: {
			type: String
		},
		timeShow: {
			type: Boolean
		},
		ranks: {
			type: Array
		},
		rankShow: {
			type: Boolean
		},
		filters: {
			type: Array
		},
		filterShow: {
			type: Boolean
		},
		labelW: {
			type: String
		},
		search: {
			type: Object
		},
		clearShow: {
			type: Boolean
		},
		createUrl: {
			type: String
		}
	},
	data() {
		return {
			active: 'first'
		}
	},
	methods: {
		go(url) {
			this.$router.push(url)
		},
		handleAll(value,field) {
		  this.$emit('handleAll',value,field)
		},
		handleChange(value,field) {
			this.$emit('handleChange',value,field)
		},
		query(ref) {
			this.$refs[ref].click()
			this.$emit('query',ref)
		},
		clearSearch() {
			this.$emit('clearSearch')
		}
	}
}