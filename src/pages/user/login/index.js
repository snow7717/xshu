export default {
	name: 'login',
	data() {
		return {
			windowH: 0,
			form: {
				username: '',
				password: ''
			},
			rules: {
        username: [
          { 
						required: true, 
						message: '请输入账号', 
						trigger: 'blur' 
					}
        ],
				password: [
					{
						required: true, 
						message: '请输入密码', 
						trigger: 'blur' 
					},
					{ 
						min: 6, 
						max: 16, 
						message: '长度在 6 到 16 个字符', 
						trigger: 'blur' 
					}
				]
			},
			logged: false
		}
	},
	computed: {
		user() {
			return this.$store.state.user
		}
	},
	mounted() {
		this.windowH = document.documentElement.clientHeight || document.body.clientHeight
	},
	methods: {
		go(url) {
			this.$router.push(url)
		},
		submit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
					this.$http.post("/admin/log/in", this.form).then((res) => {						
						if(res.data.returnCode == 0) {
							this.$message({
								message: '登录成功',
								type: 'success'
							})
							res.data.result.role = res.data.result.roles.filter((item) => {
								return item.useYn == true
							})[0]
							this.$store.commit('login', res.data.result)
							console.log(res.data.result.role.mpermissions)
							console.log(this.$router.options.routes)
							let firstName = res.data.result.role.mpermissions[0]
							let firstRoute = this.$router.options.routes.filter((item) => {
								return item.name == firstName
							})[0]
							if(firstRoute.children) {
								let firstName1 = res.data.result.role.mpermissions[1]
								let firstRoute1 = firstRoute.children.filter((item) => {
									return item.name == firstName1
								})[0]
								this.go(firstRoute.path + '/' + firstRoute1.path)
							}else{
								this.go(firstRoute.path)
							}
						}else{
							this.$message({
								message: res.data.returnMsg,
								type: 'warning'
							})
						}
					})
        } else {
          return false
        }
      })
    }
	}
}