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
	computed: {
		menus() {
			return this.$router.options.routes.filter((item) => {
				return item.meta.position == 'left'
			})
		}
	},
  beforeMount(height) {
    this.windowH = document.documentElement.clientHeight || document.body.clientHeight
  },
	created() {
		console.log(this.menus)
	},
	methods: {
		handleOpen(index) {
		},
		handleClose(index) {
		}
	}
}