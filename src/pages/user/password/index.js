import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'

export default {
	name: 'password',
	data() {
		let repeatvalidate = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.newpwd) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
		return {
			windowH: 0,
			form: {
				oldpwd: '',
				newpwd: '',
				newpwd_repeat: ''
			},
			rules: {
				oldpwd: [
					{
						required: true,
						message: '请输入原密码',
						trigger: 'blur'
					}
				],
				newpwd: [
					{
						required: true,
						message: '请输入新密码',
						trigger: 'blur'
					},
					{ 
						min: 6, 
						message: '密码长度不能小于6位', 
						trigger: 'blur' 
				  }
				],
				newpwd_repeat: [
					{ 
						required: true,
						validator: repeatvalidate, 
					  trigger: 'blur' 
					}
				]
			}
		}
	},
	computed: {
		user() {
			return this.$store.state.user.userinfo
		}
	},
	components: {
		cheader,
		caside
	},
	mounted() {
		this.windowH = document.documentElement.clientHeight || document.body.clientHeight
	},
	methods: {
		submit(form) {
			this.$refs[form].validate((valid) => {
        if (valid) {
					this.$http.post('admin/user/pwd',this.form).then((res) => {
						if(res.data.returnCode == '0') {
							this.$message({
								message: res.data.returnMsg,
								type: 'success'
							})
							this.$store.commit('logout')
							setTimeout(() => {
								this.$router.push('/login')
							},1000)
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