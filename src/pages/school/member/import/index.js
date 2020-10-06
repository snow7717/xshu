import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'

export default {
	name: 'memberImport',
	data() {
		return {
			members: []
		}
	},
	computed: {
		user() {
			return this.$store.state.user
		}
	},
	components: {
		cheader,
		caside
	},
	created() {
		console.log(this.user)
	},
	methods: {
		go(url) {
			this.$router.push(url)
		},
		uploadSuccess(response, file, fileList) {
			if(response.returnCode == 0) {
				this.$message.success(response.returnMsg)
			  this.members = response.result
			}else{
				this.$message.error(response.returnMsg)
			}
		},
		back() {
			this.members = []
		},
		importer() {
			this.$confirm('批量导入的成员统一使用：账户（手机号码）+密码（手机号后6位）登录。若成员手机号已自行注册，批量导入时会将其加入本单位，但仍使用其自己设置的密码。','确认创建账户', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
				this.$http.post('/user/import',{colgId: this.user.role.collegeid, staffs: this.members}).then(res => {
					console.log(res)
					if(res.data.returnCode == 0) {
						this.$message.success(res.data.returnMsg)
						this.$router.push('/member')
					}else{
						this.$message.error(res.data.returnMsg)
					}
				})
      }).catch(() => {        
      })
		}
	}
}