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
			operawidth: '100',
			form: {},
			fields: [
				{
					tag: 'input',
					keyer: 'name',
					label: '用户名称',
					disabled: false,
					isfilter: true,
					isrequired: true,
					span: 24,
					show: true,
					showOrder: 1
				},
				{
					tag: 'input',
					keyer: 'account',
					label: '用户账号',
					disabled: false,
					isfilter: false,
					isrequired: true,
					span: 24,
					show: true,
					showOrder: 2
				},
				{
					tag: 'select',
					keyer: 'school',
					label: '所属学院',
					disabled: false,
					isfilter: false,
					isrequired: true,
					span: 24,
					show: true,
					showOrder: 3,
					options: []
				},
				{
					tag: 'select',
					keyer: 'role',
					label: '所属角色',
					disabled: false,
					isfilter: false,
					isrequired: true,
					multiple: true,
					span: 24,
					show: true,
					showOrder: 4,
					options: []
				},
				{
					tag: 'radiogroup',
					keyer: 'status',
					label: '账号状态',
					disabled: false,
					isrequired: true,
					isfilter: false,
					span: 24,
					show: true,
					showOrder: 5,
					options: [
						{
							value: 1,
							label: '启用'
						},
						{
							value: 0,
							label: '关闭'
						}
					]
				}
			],
			rules: {}
		}
	},
	computed: {
	},
	components: {
		ccontent
	},
	created() {
		this.fieldIndex('/admin/role/all','role','roleid','title')
		this.fieldIndex('/school/all','school')
	},
	methods: {
		fieldIndex(url,field,value = 'id', label = 'name') {
			this.$http.get(url).then((res) => {
				this.fields.filter((item) => {
					return item.keyer == field
				})[0].options = res.data.result.map((item) => {
					return {value: item[value],label: item[label]}
				})
			})
		},
		index(datas) {
			for(let item of datas) {
				item.role = item.role.toString()
				item.status = item.status == 1 ? '启用' : '关闭'
			}
			this.datas = datas
		},
		showform(form) {
			this.form = form
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