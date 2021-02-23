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
			search: {
				label: ''
			},
			labelW: '70px',
			datas: [],
			page: 1,
			total: 0,
			selects: [],
			formshow: false,
			labelWidth: '100px',
			fields: [],
			levels: [
				{
					value: 1,
					label: '一级菜单'
				},
				{
					value: 2,
					label: '二级菜单'
				}
			],
			parents: [],
			permissions: [
				{
					label: 'add',
					text: '添加'
				},
				{
					label: 'modify',
					text: '编辑'
				},
				{
					label: 'del',
					text: '删除'
				},
				{
					label: 'approve',
					text: '审批'
				}
			],
			form: {
				permissions: []
			},
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
		this.parentIndex()
	},
	mounted() {
	},
	methods: {
		parentIndex() {
			this.$http.get('/admin/menu/list').then((res) => {
				this.parents = res.data.result.filter((item) => {
					return item.level == 1
				})
			})
		},
		index(page,total,datas) {
			for(let item of datas) {
				this.$set(item,'editable',true)
				this.$set(item,'deleteable',true)
				this.$set(item,'permissionStr',this.permissions.filter((per) => {
					return item.permissions.indexOf(per.label) != -1
				}))
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
		handleDatas(val) {
			this.selects = val
		},
		showform(form) {
			this.formshow = true
			this.form = form
		},
		cancel() {
			this.formshow = false
		}
	}
}