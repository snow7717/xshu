import cheader from '@/components/header1/index.vue'
import cupload from '@/components/upload/index.vue'

export default {
	name: 'subjectxedit',
	data() {
		return {
			uptitle: '横向科研项目上传',
			upintro: '请上传您参与的横向课题的重要信息：合同/汇款账单等。',
			backurl: '/result/research/subjectx',
			form: {
				xy: 'x',
				//附件
				imgs: [],
				//作者信息
				authors: []
			},
			rules: {
				cate: [
				  { 
					  required: true, 
					  message: '请选择项目类别', 
					  trigger: 'change' 
				  },
			  ],
				title: [
				  { 
					  required: true, 
					  message: '请输入项目名称', 
					  trigger: 'blur' 
				  },
			  ],
				level: [
				  { 
					  required: true, 
					  message: '请选择项目级别', 
					  trigger: 'change' 
				  },
			  ],
				created_at: [
				  { 
					  required: true, 
					  message: '请选择开始时间', 
					  trigger: 'change' 
				  },
			  ],
				until_at: [
				  { 
					  required: true, 
					  message: '请选择截止时间', 
					  trigger: 'change' 
				  },
			  ],
			},
			fields: [
				{ 
					componetType: 'select',
					type: 'string',
					label: '项目类别',
					key: 'cate',
					opetionsJson: [
						{
							label: '自然科学',
							value: '1'
						},
						{
							label: '人文科学',
							value: '2'
						}
					]
				},
				{
					componetType: 'input',
					type: 'string',
					label: '项目名称',
					key: 'title',
				},
				{
					componetType: 'input',
					type: 'string',
					label: '项目来源',
					key: 'source',
				},
				{
					componetType: 'select',
					type: 'string',
					label: '项目级别',
					key: 'level',
					opetionsJson: [
						{
							label: '国家级',
							value: '0'
						},
						{
							label: '省部级',
							value: '1'
						},
						{
							label: '市厅级',
							value: '2'
						},
						{
							label: '其他',
							value: '3'
						},
					]
				},
				{
					componetType: 'input',
					type: 'string',
					label: '负责人',
					key: 'principal',
				},
				{
					componetType: 'input',
					type: 'string',
					label: '所在学院',
					key: 'school',
				},
				{
					componetType: 'number',
					type: 'string',
					label: '合同经费',
					key: 'funding',
				},
				{
					componetType: 'number',
					type: 'string',
					label: '到账经费',
					key: 'receivefund',
				},
				{
					componetType: 'date',
					type: 'string',
					label: '开始时间',
					key: 'created_at',
				},
				{
					componetType: 'date',
					type: 'string',
					label: '截止时间',
					key: 'until_at',
				},
				{
					componetType: 'select',
					type: 'string',
					label: '状态',
					key: 'status',
					opetionsJson: [
						{
							label: '在研',
							value: '0'
						},
						{
							label: '结题',
							value: '1'
						},
					]
				},
				{
					componetType: 'input',
					type: 'string',
					label: '团队成员',
					key: 'member',
				},
				{
					componetType: 'number',
					type: 'string',
					label: '立项年度',
					key: 'year'
				},
			]
		}
	},
	computed: {
		sid() {
			return this.$route.params.id
		}
	},
	components: {
		cheader,
		cupload
	},
	created() {
		this.show()
	},
	methods: {
		show() {
			this.$http.get(`/subjects/info/${this.sid}`).then((res) => {
				this.form = res.data.result
				this.$refs.upload.srcs = this.form.imgs
				if(this.form.imgs[0]) {
					this.$refs.upload.src = this.form.imgs[0].url
				}
			})
		},
		addAuthor() {
			this.form.authors.push({
				author_seqn: '',
				author: '',
				author_identity: '',
				units: ''
			})
		},
		removeAuthor(i) {
			this.form.authors.splice(i,1)
		},
		submit(form) {
			this.$refs[form].validate((valid) => {
        if (valid) {
					this.form.imgs = this.$refs.upload.srcs
					this.$http.post('subjects/save',this.form).then((res) => {
						if(res.data.returnCode == 0) {
							this.$message({
								message: res.data.returnMsg,
								type: 'success'
							})
							setTimeout(() => {
								this.$router.push(this.backurl)
							},1500)
						}else{
							this.$message({
								message: res.data.returnMsg,
								type: 'warn'
							})
						}
					})
        } else {
          return false
        }
      })
		}
	}
}