import ccontent from '@/components/content/index.vue'

export default {
	data() {
		return {
			url: {
				index: '/school/page',
				importpre: '',
				importsave: '',
				exporter: '',
				show: '/school/get',
				save: '/school/post',
				del: '/school/delete'
			},
			labelW: '70px',
			datas: [],
			fields: [
				{
					tag: 'input',
					keyer: 'name',
					label: '学院名称',
					type: '',
					placeholder: '请输入学校名称',
					disabled: false,
					isfilter: true,
					isrequired: true,
					rows: 2,
					autosize: true,
					max: 100,
					min: 0,
					step: 1,
					order: 1,
					span: 24,
					show: true,
					showOrder: 1
				},
				{
					tag: 'input',
					keyer: 'number',
					label: '学院编号',
					type: 'number',
					placeholder: '',
					disabled: false,
					isfilter: false,
					isrequired: true,
					rows: 2,
					autosize: true,
					max: 100,
					min: 0,
					step: 1,
					order: 2,
					span: 24,
					show: true,
					showOrder: 2,
				},
				{
					tag: 'select',
					keyer: 'campusid',
					label: '所在校区',
					multiple: false,
					disabled: false,
					isfilter: false,
					isrequired: true,
					placeholder: '请选择',
					filterable: false,
					allowCreate: false,
					order: 3,
					span: 24,
					show: true,
					showOrder: 3,
					options: []
				}
			],
			form: {
				
			},
		}
	},
	components: {
		ccontent
	},
	created() {
		this.fieldIndex('/campus/all','campusid')
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
				item.campusid = item.campus
			}
			this.datas = datas
		},
		showform(form) {
			this.form = form
		},
		cancel() {
			this.formshow = false
		}
	}
}