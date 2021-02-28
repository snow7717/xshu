import ccontent from '@/components/content/index.vue'

export default {
	data() {
		return {
			url: {
				index: '/admin/user/page',
				show: '/admin/user/get',
				save: '/admin/user/save',
				del: '/admin/user/delete'
			},
			datas: [],
			operawidth: '100'
		}
	},
	computed: {},
	components: {
		ccontent
	},
	created() {},
	methods: {
		index(datas) {
			for(let item of datas) {
				item.role = item.role.toString()
				item.status = item.status == 1 ? '启用' : '关闭'
				item.school = item.school_zh
			}
			this.datas = datas
		},
		repass(id) {
			this.$confirm('确定为该用户重置密码?', '', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
				this.$http.get(`/admin/user/reset/pwd/${id}`).then((res) => {
					if(res.data.returnCode == '0') {
						this.$message({
							type: 'success',
							message: '重置成功!'
						})
					}else{
						this.$message({
							type: 'success',
							message: res.data.returnMsg
						})
					}
				})
      }).catch(() => {         
      })
		}
 	}
}