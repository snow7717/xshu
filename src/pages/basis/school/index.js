import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'
import ccontent from '@/components/content/index.vue'

export default {
	name: 'basischool',
	data() {
		return {
			summary: '学院信息',
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
		cheader,
		caside,
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