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
		user() {
			return this.$store.state.user
		},
		menus() {
			return this.$router.options.routes.filter((item) => {
				return this.user.role.permissions.indexOf(item.name) > -1
			})
		}
	},
  beforeMount(height) {
    this.windowH = document.documentElement.clientHeight || document.body.clientHeight
  },
	created() {
		console.log(this.$router.options.routes)
	},
	methods: {
	}
}