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
							this.$http.get('/admin/menu/list').then((res) => {
								for(let item of res.data.result) {
									this.$set(item,'path',`/${item.name}`)
								}
								let parents = res.data.result.filter((item) => {
									return item.level == 1
								})
								let children
								for(let item of parents) {
									children = res.data.result.filter((child) => {
										return child.parent == item.id
									})
									if(children.length > 0) {
										this.$set(item,'children',children)
									}
								}
								this.$store.commit('menuIndex', parents)
							})
							this.go('/user')
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