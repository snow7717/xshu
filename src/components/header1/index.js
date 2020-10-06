export default {
	name: 'cheader',
	data() {
		return {
			
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