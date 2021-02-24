import qs from 'qs'
import ccontent from '@/components/content/index.vue'

let regphone = (rule, value, callback) => {
  if (/^1\d{10}$/.test(value)) {
    callback()
  } else {
		callback(new Error('手机号未填写或格式错误'))
  }
}
let regemail = (rule, value, callback) => {
	if (/^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/.test(value) || !value) {
		callback()
  } else {
    callback(new Error('邮箱格式错误'))
  }
}

export default {
	name: 'bteacher',
	data() {
		return {
			url: {
				index: '/teacher/page/',
				importpre: '/teacher/import/pre',
				importsave: '/teacher/import/save',
				exporter: '/export/teacher',
				show: '/teacher/info',
				save: '/teacher/save',
				del: '/teacher/remove'
			},
			labelW: '130px',
			datas: [],
			fields: [
				{
					tag: 'input',
					keyer: 'name',
					label: '教师姓名',
					type: '',
					placeholder: '',
					isrequired: true,
					isfilter: true,
					disabled: false,
					span: 12,
					show: true,
					width: 80,
					showOrder: 1
				},
				{
					tag: 'input',
					keyer: 'number',
					label: '职工编号',
					type: 'number',
					placeholder: '',
					isrequired: true,
					isfilter: false,
					disabled: false,
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
					keyer: 'birthmonth',
					label: '出生年月',
					type: 'month',
					isrequired: false,
					isfilter: false,
					span: 12,
					show: false,
					showOrder: 3
				},
				{
					tag: 'select',
					keyer: 'schoolid',
					label: '所在学院',
					multiple: false,
					disabled: false,
					placeholder: '请选择',
					isrequired: false,
					isfilter: false,
					filterable: true,
					allowCreate: true,
					span: 12,
					show: true,
					showorder: 4,
					options: []
				},
				{
					tag: 'select',
					keyer: 'professionid',
					label: '所在专业',
					placeholder: '请选择',
					filterable: true,
					allowCreate: true,
					isrequired: false,
					isfilter: false,
					span: 12,
					show: true,
					showOrder: 16,
					options: []
				},
				{
					tag: 'input',
					keyer: 'highunit',
					label: '最高学位获得单位',
					type: '',
					placeholder: '',
					isrequired: false,
					isfilter: false,
					disabled: false,
					span: 24,
					show: false,
					showOrder: 5
				},
				{
					tag: 'input',
					keyer: 'highprofession',
					label: '最高学位专业',
					type: '',
					placeholder: '',
					isrequired: false,
					isfilter: false,
					disabled: false,
					span: 24,
					show: false,
					showOrder: 6
				},
				{
					tag: 'input',
					keyer: 'overseas',
					label: '海外背景',
					type: '',
					placeholder: '',
					isrequired: false,
					isfilter: false,
					disabled: false,
					span: 24,
					show: false,
					showOrder: 7
				},
				{
					tag: 'input',
					keyer: 'researchto',
					label: '研究方向',
					type: '',
					placeholder: '',
					isrequired: false,
					isfilter: false,
					disabled: false,
					span: 24,
					show: false,
					showOrder: 8
				},
				
				{
					tag: 'input',
					keyer: 'partime',
					label: '学术兼职',
					type: '',
					placeholder: '',
					isrequired: false,
					isfilter: false,
					disabled: false,
					span: 24,
					show: false,
					showOrder: 10
				},
				{
					tag: 'select',
					keyer: 'political',
					label: '政治面貌',
					placeholder: '请选择',
					isrequired: false,
					isfilter: false,
					filterable: true,
					allowCreate: true,
					span: 12,
					show: false,
					showOrder: 11,
					options: [
						{
							value: '九三学社',
							label: '九三学社'
						},
						{
							value: '民革',
							label: '民革'
						},
						{
							value: '民建',
							label: '民建'
						},
						{
							value: '中共党员',
							label: '中共党员'
						},
						{
							value: '无党派',
							label: '无党派'
						}
					]
				},
				{
					tag: 'select',
					keyer: 'jobtitle',
					label: '职称',
					placeholder: '请选择',
					isrequired: false,
					isfilter: false,
					filterable: true,
					allowCreate: true,
					span: 12,
					show: false,
					showOrder: 12,
					options: [
						{
							value: '副教授',
							label: '副教授'
						},
						{
							value: '副研究馆员',
							label: '副研究馆员'
						},
						{
							value: '副研究员',
							label: '副研究员'
						},
						{
							value: '馆员',
							label: '馆员'
						},
						{
							value: '讲师',
							label: '讲师'
						},
						{
							value: '教授',
							label: '教授'
						},
						{
							value: '预聘制副教授',
							label: '预聘制副教授'
						},
						{
							value: '助教',
							label: '助教'
						}
					]
				},
				{
					tag: 'radiogroup',
					keyer: 'isdouble',
					label: '是否双师型',
					isrequired: false,
					isfilter: false,
					options: [
						{
							value: 'true',
							label: '是'
						},
						{
							value: 'false',
							label: '否'
						}
					],
					span: 12,
					show: false,
					showOrder: 9
				},
				{
					tag: 'select',
					keyer: 'bachelor',
					label: '最高学位',
					placeholder: '请选择',
					filterable: true,
					allowCreate: true,
					isrequired: false,
					isfilter: false,
					span: 12,
					show: false,
					showOrder: 13,
					options: [
						{
							value: '博士',
							label: '博士'
						},
						{
							value: '硕士',
							label: '硕士'
						},
						{
							value: '学士',
							label: '学士'
						}
					]
				},
				{
					tag: 'input',
					keyer: 'phone',
					label: '移动电话',
					type: 'number',
					isrequired: true,
					isfilter: false,
					placeholder: '',
					disabled: false,
					rows: 2,
					autosize: true,
					max: 100,
					min: 0,
					step: 1,
					order: 2,
					span: 12,
					show: true,
					showOrder: 14,
				},
				{
					tag: 'input',
					keyer: 'email',
					label: '电子邮箱',
					type: 'email',
					isrequired: true,
					isfilter: false,
					placeholder: '',
					disabled: false,
					order: 2,
					span: 12,
					show: true,
					showOrder: 15,
				},
				{
					tag: 'input',
					keyer: 'post',
					label: '职务',
					type: '',
					isrequired: false,
					isfilter: false,
					placeholder: '',
					span: 24,
					show: true,
					showOrder: 16
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
		},
	}
}