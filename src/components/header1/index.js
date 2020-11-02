export default {
	name: 'cheader',
	data() {
		return {
			
		}
	},
	computed: {
		user() {
			return this.$store.state.user
		}
	},
	created() {
		
	},
	methods: {
		handleSelect(index) {
			
		},
		logout() {
			this.$store.commit('logout')
			setTimeout(() => {
				this.$router.push('/login')
			},1000)
		}
	}
}