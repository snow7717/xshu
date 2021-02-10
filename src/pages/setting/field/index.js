export default {
	data() {
		return {
			menus: [],
			form: {},
			actives: [],
			tags: [
				{
					value: 'input',
					label: '输入框'
				},
				{
					value: 'radiogroup',
					label: '单选框组'
				},
				{
					value: 'checkboxgroup',
					label: '复选框组'
				},
				{
					value: 'select',
					label: '下拉框'
				},
				{
					value: 'cascader',
					label: '级联选择器'
				},
				{
					value: 'datepicker',
					label: '日期时间选择器'
				},
			],
			inpuTypes: [
				{
					value: 'text',
					label: '文字'
				},
				{
					value: 'textarea',
					label: '文本域'
				},
				{
					value: 'number',
					label: '数字'
				},
				{
					value: 'password',
					label: '密码'
				}
			],
			dateTypes: [
				{
					value: 'date',
					label: '日'
				},
				{
					value: 'week',
					label: '周'
				},
				{
					value: 'month',
					label: '月'
				},
				{
					value: 'year',
					label: '年'
				},
			],
			spans: [
				12,
				24
			],
			fields: [
				{
					tag: 'input',
					key: 'name',
					label: '学院名称',
					type: '',
					placeholder: '',
					disabled: false,
					rows: 2,
					autosize: true,
					max: 100,
					min: 0,
					step: 1,
					order: 1,
					span: 24,
					show: true,
					showorder: 1,
					width: 100
				}
			],
			fields1: [
				{
					tag: 'select',
					key: 'campus',
					label: '所在校区',
					multiple: false,
					disabled: false,
					placeholder: '',
					filterable: false,
					allowCreate: false,
					order: 3,
					span: 12,
					show: true,
					showorder: 3,
					width: 100,
					options: [
						{
							value: '燕山校区',
							label: '燕山校区'
						},
						{
							value: '舜耕校区',
							label: '舜耕校区'
						},
						{
							value: '圣井校区',
							label: '圣井校区'
						},
					]
				}
			],
		}
	},
	components: {
	},
	created() {
		this.menuIndex()
	},
	mounted() {
	},
	methods: {
		menuIndex() {
			this.$http.get('/admin/menu/list').then((res) => {
				for(let item of res.data.result) {
					this.$set(item,'value',item.id)
				}
				let menus = res.data.result.filter((item) => {
					return item.level == 1
				})
				for(let item of menus) {
					if(res.data.result.filter((child) => {
						return child.parent == item.id
					}).length > 0) {
						this.$set(item,'children',res.data.result.filter((child) => {
						return child.parent == item.id
					}))
					}
				}
				this.menus = menus
			})
		},
		typeChange(val,index) {
			if(['select','radiogroup','checkboxgroup','cascader'].indexOf(val) > -1 && !this.fields[index].options){
				this.fields[index].options =  [
					{
						value: '',
						label: ''
					}
				]
			}
		},
		addOption(index) {
			this.fields[index].options.push({
				value: '',
				label: ''
			})
		},
		delOption(index,oindex) {
			this.fields[index].options.splice(oindex,1)
		}
	}
}