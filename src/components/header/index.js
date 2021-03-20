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
			loading: false,
			approve: true
		}
	},
	computed: {
		user() {
			return this.$store.state.user
		}
	},
	created() {
		this.messageing()
	},
	methods: {
		go(url) {
			this.$router.push(url)
		},
		messageing() {
			let socket = new WebSocket("ws://39.100.236.213:12345/ws")
			socket.onopen = () => {
				socket.send(JSON.stringify({login: this.user.token}))
			}
			socket.onmessage = (evt) => {
				alert(evt.data)
			}
			socket.onerror = (err) => {
				alert(err)
			}
			socket.onclose = () => { 
        // 关闭 websocket
      }
		},
		handleRole(val) {
			this.$store.commit('login',this.user)
			let firstName = this.user.role.mpermissions[0]
			let firstRoute = this.$router.options.routes.filter((item) => {
				return item.name == firstName
			})[0]
			if(firstRoute.children) {
				let firstName1 = this.user.role.mpermissions[1]
				let firstRoute1 = firstRoute.children.filter((item) => {
					return item.name == firstName1
				})[0]
				this.go(firstRoute.path + '/' + firstRoute1.path)
			}else{
				this.go(firstRoute.path)
			}
			window.location.reload()
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