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
			datas: [],
			operawidth: '0px',
			menu: '',
			props: {
        children: 'children',
				label: `label`      
			},
			form: {
				permissions: []
			},
			fields: [
				{
					tag: 'input',
					keyer: 'title',
					label: '角色名称',
					disabled: false,
					isfilter: true,
					isrequired: true,
					span: 24,
					show: true,
					showOrder: 1
				},
				{
					tag: 'radiogroup',
					keyer: 'useYn',
					isfilter: false,
					isrequired: true,
					label: '角色状态',
					options: [
						{
							value: true,
							label: '启用'
						},
						{
							value: false,
							label: '关闭'
						}
					],
					span: 24,
					show: true,
					showOrder: 2
				},
				{
					tag: 'select',
					keyer: 'scope',
					label: '权限范围',
					isfilter: false,
					isrequired: true,
					options: [
						{
							value: '全院',
							label: '全院'
						},
						{
							value: '个人',
							label: '个人'
						}
					],
					span: 24,
					show: true,
					showOrder: 3
				}
			],
			rules: {}
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
	},
	methods: {
		index(datas) {
			for(let item of datas) {
				this.$set(item,'editable',item.delyn)
				this.$set(item,'deleteable',item.delyn)
				item.useYn ? item.useYn = '已启用' : item.useYn = '已关闭'
			}
			this.datas = datas
		},
		showform(role) {
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
		handleChecked(data,checkeds) {
			this.form.permissions = checkeds.checkedKeys
		}
 	}
}