import cheader from '@/components/header1/index.vue'
import cupload from '@/components/upload/index.vue'

export default {
	name: 'subjectycreate',
	data() {
		return {
			uptitle: '纵向科研项目上传',
			upintro: '请上传您参与的纵向课题研究的重要信息：申请书/项目通知/立项名单等。',
			backurl: '/result/research/subjecty',
			form: {
				xy: 'y',
				//附件
				imgs: [],
				//作者信息
				authors: [
					{
						//本人排名
						author_seqn: '',
						//作者姓名
						author: '',
						//作者身份
						author_identity: '',
						//单位名称
						units: ''
					}
				]
			},
			rules: {
				cate: [
				  { 
					  required: true, 
					  message: '请选择项目类别', 
					  trigger: 'change' 
				  },
			  ],
				number: [
				  { 
					  required: true, 
					  message: '请输入项目编号', 
					  trigger: 'blur' 
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
					value: '',
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
					componetType: 'select',
					value: '',
					label: '项目来源',
					key: 'source',
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
					value: '',
					label: '项目编号',
					key: 'number',
				},
				{
					componetType: 'input',
					value: '',
					label: '项目名称',
					key: 'title',
				},
				{
					componetType: 'select',
					value: '',
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
					value: '',
					label: '合同单位',
					key: 'unit',
				},
				{
					componetType: 'number',
					value: '',
					label: '到账经费',
					key: 'funding',
					min: '0',
					max: ''
				},
				{
					componetType: 'date',
					value: '',
					label: '开始时间',
					key: 'created_at',
				},
				{
					componetType: 'date',
					value: '',
					label: '截止时间',
					key: 'until_at',
				},
				{
					componetType: 'select',
					value: '',
					label: '项目状态',
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
					componetType: 'select',
					value: '',
					label: '项目类型',
					key: 'type',
					opetionsJson: [
						{
							label: '重点',
							value: '1'
						},
						{
							label: '面上',
							value: '2'
						},
						{
							label: '青年',
							value: '3'
						},
						{
							label: '一般',
							value: '4'
						},
						{
							label: '自筹',
							value: '5'
						},
						{
							label: '其他',
							value: '6'
						},
					]
				},
				{
					componetType: 'select',
					value: '',
					label: '项目负责人',
					key: 'principal',
					opetionsJson: [
						{
							label: this.$store.state.user.userinfo.name,
							value: this.$store.state.user.userinfo.userid
						}
					]
				},
				{
					componetType: 'number',
					value: '1',
					label: '单位排名',
					key: 'unitrank',
					min: '1',
					max: ''
				},
				{
					componetType: 'year',
					value: '',
					label: '立项年度',
					key: 'year'
				},
			]
		}
	},
	computed: {
		type() {
			return this.$route.params.type
		},
		user() {
			return this.$store.state.user
		}
	},
	components: {
		cheader,
		cupload
	},
	created() {
		this.init()
	},
	methods: {
		init() {
			for(let item of this.fields) {
				this.$set(this.form,item.key,item.value)
			}
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