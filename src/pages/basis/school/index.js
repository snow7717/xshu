import ccontent from '@/components/content/index.vue'

export default {
	data() {
		return {
			summary: '',
			url: {
				index: '',
				importpre: '',
				importsave: '',
				exporter: '',
				show: '',
				save: '',
				del: ''
			},
			search: {
				name: ''
			},
			labelW: '70px',
			datas: [
				{
					id: '1',
					number: '1111',
					name: '山东财经大学',
					campus: '燕山校区',
					editable: true,
					deleteable: true
				}
			],
			page: 1,
			total: 0,
			selects: [],
			formshow: false,
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
				},
				{
					tag: 'input',
					key: 'number',
					label: '学院编号',
					type: 'number',
					placeholder: '',
					disabled: false,
					rows: 2,
					autosize: true,
					max: 100,
					min: 0,
					step: 1,
					order: 2,
					span: 24,
					show: true,
					showorder: 2,
					width: 100
				},
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
					span: 24,
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
			form: {},
			rules: {
				number: [
					{
						required: true,
						message: '清输入学院编号',
						trigger: 'blur'
					}
				],
				name: [
          { 
						required: true, 
						message: '请输入学院名称', 
						trigger: 'blur' 
					}
        ],
				campus: [
					{
						required: true,
						message: '请选择所在校区',
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
		this.init()
	},
	mounted() {
	},
	methods: {
		init() {
			this.$options.name = this.$route.name
		  this.summary = this.$route.meta.label
		},
		index(page,total,datas) {
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
		create() {
			this.formshow = true
		},
		edit(form) {
			this.formshow = true
			this.form = form
		},
		cancel() {
			this.formshow = false
		}
	}
}