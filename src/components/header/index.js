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
			approve: false,
			visible: false,
			waitings: [],
			page: 1,
			total: 0,
		}
	},
	computed: {
		user() {
			return this.$store.state.user
		}
	},
	created() {
		this.messageing()
		this.index(1)
	},
	methods: {
		go(url) {
			this.$router.push(url)
		},
		index(page) {
			this.$http.get(`achieve/backlog/page/${page}/10`).then((res) => {
				console.log(res)
				this.page = page
				this.total = res.data.result.total
				this.waitings = res.data.result.list
			})
		},
		messageing() {
			let socket = new WebSocket("ws://39.100.236.213:12345/ws")
			socket.onopen = () => {
				socket.send(JSON.stringify({login: this.user.token}))
				setInterval(() => {
					socket.send('HeartBeat')
				},60000)
			}
			socket.onmessage = (evt) => {
				if(evt.data == 'pong') {
				}else{
					let result = JSON.parse(evt.data)
					if(result.msg) {
						this.$notify({
							title: '提示',
							message: result.msg.msg,
							duration: 5000
						})
						this.approve = true
					}
				}
			}
			socket.onerror = (err) => {
			}
			socket.onclose = () => { 
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