export default {
	name: 'role',
	data() {
		return {
			datas: [
				{
					id: '1',
					name: '超级管理员',
					menus: [
						{
							name: 'login',
						},
						{
							name: 'index'
						},
						{
							name: 'user',
						},
						{
							name: 'password',
						},
						{
							// 一级菜单
							name: 'basis',
							// 二级菜单
							children: [
								{
									name: 'bschool',
									// 菜单按钮权限
									permissions: [
										{
											label: '添加',
											name: 'bschooladd'
										}
									]
								}
							]
						}
					]
				},
				{
					id: '2',
					name: '老师',
					menus: []
				}
			],
			editshow: false,
			menu: '',
			props: {
        children: 'children',
				label: `label`      
			}
		}
	},
	computed: {
		menus() {
			for(let item of this.$router.options.routes) {
				this.$set(item,'label',item.meta.label)
				if(item.children) {
					for(let itemer of item.children) {
						this.$set(itemer,'label',itemer.meta.label)
						if(itemer.meta.permissions) {
							this.$set(itemer,'children',itemer.meta.permissions)
						}
					}
				}
			}
			return this.$router.options.routes
		}
	},
	watch: {
    menu(val) {
      this.$refs.tree.filter(val)
    }
  },
	components: {
	},
	created() {
		console.log(this.menus)
	},
	methods: {
		edit(role) {
			this.editshow = true
			let menus = role.menus.map((item) => {
				if(item.children) {
					return item.children.map((itemer) => {
						if(itemer.permissions) {
							return itemer.permissions.map((itemer1) => {
								return itemer1.name
							})[0]
						}else{
							return itemer.name
						}
						
					})[0]
				}else{
					return item.name
				}
			})
			this.$nextTick(() => {
				this.$refs.tree.setCheckedKeys(menus)
			})
		},
		filterNode(value, data) {
			if(value) {
				return data.label.indexOf(value) != -1
			}else{
				return true
			}
    },
		handleMenus(data, checked, indeterminate) {
			
		},
 	}
}