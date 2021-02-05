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
					campus: '燕山校区'
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