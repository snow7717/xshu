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
				return item.meta.position == 'left'
			})
		}
	},
  beforeMount(height) {
    this.windowH = document.documentElement.clientHeight || document.body.clientHeight
  },
	created() {
	},
	methods: {
		hashowChild(children) {
			for(let item of children)  {
				if(this.user.role.permissions.indexOf(item.name) > -1) {
					return true
				}
			}
			return false
		} 
	}
}