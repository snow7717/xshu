import qs from 'qs'
import ccontent from '@/components/content/index.vue'

export default {
	name: 'bstudent',
	data() {
		return {
			url: {
				index: '/student/page/',
				importpre: '/student/import/pre',
				importsave: '/student/import/save',
				exporter: '/export/student',
				show: '/student/info',
				save: '/student/save',
				del: '/student/remove'
			},
			labelW: '100px',
			datas: [],
			fields: [
				{
					tag: 'input',
					keyer: 'number',
					label: '学号',
					type: 'number',
					placeholder: '',
					disabled: false,
					isrequired: true,
					isfilter: false,
					rows: 2,
					autosize: true,
					max: 100,
					min: 0,
					step: 1,
					order: 2,
					span: 12,
					show: true,
					showOrder: 2,
				},
				{
					tag: 'input',
					keyer: 'name',
					label: '学生姓名',
					type: '',
					isrequired: true,
					isfilter: true,
					placeholder: '',
					disabled: false,
					span: 12,
					show: true,
					width: 80,
					showOrder: 1
				},
				{
					tag: 'radiogroup',
					keyer: 'gender',
					label: '性别',
					options: [
						{
							value: '男',
							label: '男'
						},
						{
							value: '女',
							label: '女'
						}
					],
					isrequired: true,
					isfilter: false,
					span: 12,
					show: true,
					width: 50,
					showOrder: 3
				},
				{
					tag: 'datepicker',
					keyer: 'birthday',
					label: '出生日期',
					type: 'date',
					isrequired: true,
					isfilter: false,
					span: 12,
					show: false,
					showOrder: 3
				},
				{
					tag: 'select',
					keyer: 'class_',
					label: '班级',
					placeholder: '请选择',
					isrequired: true,
					isfilter: false,
					filterable: true,
					allowCreate: true,
					span: 12,
					show: false,
					showOrder: 12,
					options: []
				},
				{
					tag: 'datepicker',
					keyer: 'grade',
					label: '年级',
					type: 'year',
					placeholder: '请选择',
					isrequired: true,
					isfilter: false,
					filterable: true,
					allowCreate: true,
					span: 12,
					show: false,
					showOrder: 12,
					options: []
				},
				{
					tag: 'select',
					keyer: 'professionid',
					label: '所在专业',
					placeholder: '请选择',
					isrequired: true,
					isfilter: false,
					filterable: true,
					allowCreate: true,
					span: 12,
					show: true,
					showOrder: 16,
					options: []
				},
				{
					tag: 'select',
					keyer: 'schoolid',
					label: '所在学院',
					multiple: false,
					disabled: false,
					isrequired: true,
					isfilter: false,
					placeholder: '请选择',
					filterable: true,
					allowCreate: true,
					span: 12,
					show: true,
					showorder: 4,
					options: []
				},
				{
					tag: 'select',
					keyer: 'education',
					label: '学历层次',
					placeholder: '请选择',
					isrequired: true,
					isfilter: false,
					filterable: true,
					allowCreate: true,
					span: 12,
					show: false,
					showOrder: 12,
					options: [
						{
							value: '本科',
							label: '本科'
						},
						{
							value: '硕士',
							label: '硕士'
						},
						{
							value: '博士',
							label: '博士'
						},
					]
				},
				{
					tag: 'input',
					keyer: 'teacher',
					label: '导师姓名',
					placeholder: '',
					isrequired: false,
					isfilter: false,
					span: 12,
					show: false,
					showOrder: 13
				}
			],
			form: {},
			rules: {}
		}
	},
	components: {
		ccontent
	},
	created() {
		this.fieldIndex('/school/all','schoolid')
		this.fieldIndex('profession/all','professionid')
		this.fieldIndex('/student/class/list','class_')
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
				item.professionid = item.profession
			}
		  this.datas = datas
		},
		showform(form) {
			this.form = form
		}
	}
}