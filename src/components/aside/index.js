export default {
	name: 'caside',
	props: {
		active: {
			type: String
		}
	},
	data() {
		return {
			windowH: 0,
			isCollapse: false
		}
	},
  beforeMount(height) {
    this.windowH = document.documentElement.clientHeight || document.body.clientHeight
  },
	created() {
	},
	methods: {
		handleOpen(index) {
		},
		handleClose(index) {
		}
	}
}