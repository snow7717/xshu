export default {
	name: 'cheader',
	props: {
		from: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			loading: false
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
		handleRole(val) {
			this.$store.commit('login',this.user)
			if(this.$route.name == 'user' && this.from == 'login') {
				this.loading = true
				location.reload()
			}else if(this.$route.name == 'user'){
							 
			}else{
				this.$router.push('/user')
			}
		},
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