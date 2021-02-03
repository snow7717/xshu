export default {
	name: 'role',
	data() {
		return {
			summary: '角色管理',
			search: {
				name: ''
			},
			datas: [
				{
					id: '1',
					name: '超级管理员',
					permissions: ['login','index','user','password','bschooladd']
				},
				{
					id: '2',
					name: '老师',
					permissions: []
				}
			],
			total: 0,
			editshow: false,
			menu: '',
			props: {
        children: 'children',
				label: `label`      
			},
			form: {
				name: '',
				menus: []
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
	},
	methods: {
		create() {
			
		},
		edit(role) {
			this.editshow = true
			this.$nextTick(() => {
				this.$refs.tree.setCheckedKeys(role.permissions)
			})
		},
		filterNode(value, data) {
			if(value) {
				return data.label.indexOf(value) != -1
			}else{
				return true
			}
    },
		handleMenus(data, checked, a) {
			console.log(this.$refs.tree.getCheckedNodes())
		},
 	}
}