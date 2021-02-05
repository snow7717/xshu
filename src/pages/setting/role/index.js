import ccontent from '@/components/content/index.vue'

export default {
	data() {
		return {
			url: {
				index: '/admin/role/list',
				show: '/admin/role/get',
				save: '/admin/role/save',
				del: '/admin/role/delete'
			},
			search: {
				title: ''
			},
			datas: [],
			operawidth: '0px',
			page: 1,
			total: 0,
			formshow: false,
			menu: '',
			props: {
        children: 'children',
				label: `label`      
			},
			form: {
				permissions: []
			},
			rules: {
				title: [
					{
						required: true,
						message: '清输入角色名称',
						trigger: 'blur'
					}
				],
				useYn: [
					{
						required: true,
						message: '清选择角色状态',
						trigger: 'change'
					}
				],
				scope: [
					{
						required: true,
						message: '请选择权限范围',
						trigger: 'change'
					}
				]
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
			return this.$router.options.routes.filter((item) => {
				return item.meta.global == false
			})
		},
	},
	watch: {
    menu(val) {
      this.$refs.tree.filter(val)
    }
  },
	components: {
		ccontent
	},
	created() {
		this.init()
	},
	methods: {
		init() {
			this.$options.name = this.$route.name
		  this.summary = this.$route.meta.label
		},
		index(page,total,datas) {
			for(let item of datas) {
				this.$set(item,'editable',item.delyn)
				this.$set(item,'deleteable',item.delyn)
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
			this.$nextTick(() => {
				this.$refs.tree.setCheckedKeys(this.form.permissions)
			})
		},
		filterNode(value, data) {
			if(value) {
				return data.label.indexOf(value) != -1
			}else{
				return true
			}
    },
		cancel() {
			this.formshow = false
		},
		handleChecked(data,checkeds) {
			this.form.permissions = checkeds.checkedKeys
		}
 	}
}