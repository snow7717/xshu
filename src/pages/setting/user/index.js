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
			search: {
				name: ''
			},
			datas: [],
			operawidth: '100',
			page: 1,
			total: 0,
			formshow: false,
			form: {},
			rules: {
				name: [
					{
						required: true,
						message: '清输入用户名',
						trigger: 'blur'
					}
				],
				account: [
					{
						required: true,
						message: '清输入用户账号',
						trigger: 'blur'
					}
				],
				school: [
					{
						required: true,
						message: '请选择所属学院',
						trigger: 'change'
					}
				],
				role: [
					{
						required: true,
						message: '清选择所属角色',
						trigger: 'change'
					}
				]
			},
			roles: []
		}
	},
	computed: {
	},
	components: {
		ccontent
	},
	created() {
		this.init()
		this.roleIndex()
	},
	methods: {
		init() {
			this.$options.name = this.$route.name
		  this.summary = this.$route.meta.label
		},
		roleIndex() {
			this.$http.get('/admin/role/all').then((res) => {
				this.roles = res.data.result
			})
		},
		index(page,total,datas) {
			for(let item of datas) {
				item.roles = item.roles.map((role) => {
					return role.title
				}).toString()
			}
			[
				this.page,
				this.total,
				this.datas
			] = [
				page,
				total,
				datas
			]
		},
		showform(role) {
			this.formshow = true
			this.form = role
		},
		cancel() {
			this.formshow = false
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