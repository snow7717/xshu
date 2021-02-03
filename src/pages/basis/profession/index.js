import ccontent from '@/components/content/index.vue'

export default {
	name: 'profession',
	data() {
		return {
			summary: '专业信息',
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
					name: '管理科学',
					school: '山东财经大学',
					year: '2020'
				}
			],
			page: 1,
			total: 0,
			selects: [],
			formshow: false,
			form: {},
			rules: {
				number: [
					{
						required: true,
						message: '清输入专业编号',
						trigger: 'blur'
					}
				],
				name: [
          { 
						required: true, 
						message: '请选择专业名称', 
						trigger: 'change' 
					}
        ],
				school: [
					{
						required: true,
						message: '请选择所在学院',
						trigger: 'change'
					}
				],
				year: [
					{
						required: true,
						message: '清选择设立年度',
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
	},
	mounted() {
	},
	methods: {
		index(page,total,datas) {
			this.page = page
			this.total = total
			this.datas = datas
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