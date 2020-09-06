export default {
	name: 'login',
	data() {
		return {
			windowH: 0,
			form: {
				account: '',
				password: ''
			},
			rules: {
        account: [
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
          this.logged = true
        } else {
          return false
        }
      })
    }
	}
}