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
					this.$http.post("/login", this.form).then((res) => {						
						if(res.data.returnCode == 0) {
							this.$message({
								message: '登录成功',
								type: 'success'
							})
							this.$store.commit('login', res.data.result)
							this.go('/')
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