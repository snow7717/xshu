import ccontent from '@/components/content/index.vue'

export default {
	data() {
		return {
			url: {
				index: '/admin/menu/page',
				importpre: '',
				importsave: '',
				exporter: '',
				show: '/admin/menu/get',
				save: '/admin/menu/save',
				del: '/admin/menu/delete'
			},
			datas: [],
			formshow: false,
			labelW: '100px',
			form: {
				permissions: []
			},
			fields: [
				{
					tag: 'input',
					keyer: 'name',
					label: '菜单name',
					isrequired: true,
					isfilter: false,
					show: false,
					showOrder: 1
				},
				{
					tag: 'input',
					keyer: 'label',
					label: '菜单名称',
					isrequired: true,
					isfilter: true,
					show: true,
					showOrder: 2
				},
				{
					tag: 'select',
					keyer: 'level',
					label: '菜单级别',
					isrequired: true,
					show: true,
					showOrder: 3,
					options: [
						{
							value: 1,
							label: '一级菜单'
						},
						{
							value: 2,
							label: '二级菜单'
						}
					]
				},
				{
					tag: 'select',
					keyer: 'parent',
					label: '父级菜单',
					isrequired: true,
					show: true,
					showOrder: 4,
					options: []
				},
				{
					tag: 'checkboxgroup',
					keyer: 'permissions',
					label: '菜单权限',
					isrequired: false,
					show: true,
					showOrder: 5,
					options: [
						{
							value: 'add',
							label: '添加'
						},
						{
							value: 'modify',
							label: '编辑'
						},
						{
							value: 'del',
							label: '删除'
						},
						{
							value: 'approve',
						  label: '审批'
						}
					]
				}
			],
			rules: {
				name: [
					{
						required: true,
						message: '请填写菜单name值',
						trigger: 'blur'
					}
				],
				label: [
					{
						required: true,
						message: '请填写菜单名称',
						trigger: 'blur'
					}
				],
				level: [
					{
						required: true,
						message: '清选择菜单级别',
						trigger: 'change'
					}
				],
				parent: [
					{
						required: true,
						message: '请选择父级菜单',
						trigger: 'change'
					}
				]
			}
		}
	},
	components: {
		ccontent
	},
	created() {
		this.fieldIndex('/admin/menu/list?level=1','parent','id','label')
	},
	mounted() {
	},
	methods: {
		fieldIndex(url,field,value='id',label='name') {
			this.$http.get(url).then((res) => {
				this.fields.filter((item) => {
					return item.keyer == field
				})[0].options = res.data.result.map((item) => {
					return {value: item[value],label: item[label]}
				})
			})
		},
		index(datas) {
			let parents = this.fields.filter((item) => {
				return item.keyer == 'parent'
			})[0].options
			let permissions = this.fields.filter((item) => {
				return item.keyer == 'permissions'
			})[0].options
			for(let item of datas) {
				this.$set(item,'editable',true)
				this.$set(item,'deleteable',true)
				item.level == 1 ? item.level = '一级菜单' : item.level = '二级菜单'
				if(item.level == '二级菜单') {
					item.parent = parents.filter((item1) => {
						return item1.value == item.parent
					})[0].label
				}
				let arr = []
				for(let item1 of item.permissions) {
					item1 = permissions.filter((item2) => {
						return item2.value == item1
					})[0].label
					arr.push(item1)
				}
				item.permissions = arr.toString()
			}
			this.datas = datas
		},
		showform(form) {
			this.form = form
		}
	}
}