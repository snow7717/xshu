import ccontent from '@/components/content/index.vue'

export default {
	name: 'profession',
	data() {
		return {
			url: {
				index: '/profession/page',
				importpre: '',
				importsave: '',
				exporter: '',
				show: '/profession/get',
				save: '/profession/post',
				del: '/profession/delete'
			},
			labelW: '70px',
			datas: [],
			fields: [
				{
					tag: 'input',
					keyer: 'number',
					label: '专业编号',
					type: 'number',
					placeholder: '',
					disabled: false,
					isrequired: true,
					max: 100,
					min: 0,
					step: 1,
					span: 24,
					show: true,
					showOrder: 2
				},
				{
					tag: 'select',
					keyer: 'name',
					label: '专业名称',
					type: '',
					placeholder: '请选择',
					disabled: false,
					isrequired: true,
					isfilter: true,
					filterable: true,
					allowCreate: true,
					options: [
						{
							value: '信息管理与信息系统',
							label: '信息管理与信息系统'
						},
						{
							value: '电子商务',
							label: '电子商务'
						},
						{
							value: '物流管理',
							label: '物流管理'
						},
						{
							value: '工程管理',
							label: '工程管理'
						},
						{
							value: '大数据管理与应用',
							label: '大数据管理与应用'
						},
						{
							value: '管理科学',
							label: '管理科学'
						},
						{
							value: '信息管理与信息系统(服务外包方向)',
							label: '信息管理与信息系统(服务外包方向)'
						},
						{
							value: '信息管理与信息系统(大数据与商务分析)',
							label: '信息管理与信息系统(大数据与商务分析)'
						},
						{
							value: '管理科学与工程类',
							label: '管理科学与工程类'
						},
						{
							value: '电子商务类',
							label: '电子商务类'
						},
					],
					span: 24,
					show: true,
					showOrder: 1
				},
				{
					tag: 'select',
					keyer: 'schoolid',
					label: '所在学院',
					multiple: false,
					disabled: false,
					isrequired: true,
					placeholder: '请选择',
					filterable: false,
					allowCreate: false,
					order: 3,
					span: 24,
					show: true,
					showorder: 3,
					options: []
				},
				{
					tag: 'datepicker',
					keyer: 'year',
					type: 'year',
					label: '设立年度',
					isrequired: true,
					show: true,
					showOrder: 4
				}
			],
			form: {}
		}
	},
	components: {
		ccontent
	},
	created() {
		this.fieldIndex('/school/all','schoolid')
	},
	mounted() {
	},
	methods: {
		fieldIndex(url,field) {
			this.$http.get(url).then((res) => {
				this.fields.filter((item) => {
					return item.keyer == field
				})[0].options = res.data.result.map((item) => {
					return {value: item.id,label: item.name}
				})
			})
		},
		index(datas) {
			for(let item of datas) {
				this.$set(item,'editable',true)
				this.$set(item,'deleteable',true)
				item.schoolid = item.school
			}
			this.datas = datas
		},
		showform(form) {
			this.form = form
		}
	}
}