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
							name: '/login',
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
							submenus: [
								{
									name: 'school',
									// 菜单按钮权限
									permissions: [
										'add',
										'del',
										'modify',
										'list',
										'detail',
										'exp',
										'imp',
										'download',
										'upload'
									]
								}
							]
						}
					]
				},
				{
					id: '2',
					name: '老师'
				}
			],
			editshow: false,
			menu: '',
			defaultProps: {
        children: 'children',
        label: 'name'
      }
		}
	},
	computed: {
		menus() {
			return this.$router.options.routes
		}
	},
	components: {
	},
	created() {
		console.log(this.menus)
	},
	methods: {
		edit(id) {
			this.editshow = true
		},
		filterNode(value, data) {
			if(value) {
				return data.name.indexOf(value) != -1
			}else{
				return false
			}
    }
 	}
}