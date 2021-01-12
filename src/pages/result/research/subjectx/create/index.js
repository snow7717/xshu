import cheader from '@/components/header1/index.vue'
import cupload from '@/components/upload/index.vue'

export default {
	name: 'subjectxcreate',
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
					componetType: 'input',
					type: 'string',
					label: '项目负责人',
					key: 'principal',
				},
				{
					componetType: 'number',
					min: '0',
					value: '',
					label: '工号',
					key: 'no'
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
					label: '项目状态',
					key: 'status',
					opetionsJson: [
						{
							label: '项目在施',
							value: '项目在施'
						},
						{
							label: '已结项',
							value: '已结项'
						},
						{
							label: '在审核',
							value: '在审核'
						},
					]
				},
				{
					componetType: 'year',
					type: 'string',
					label: '立项年度',
					key: 'year'
				},
			]
		}
	},
	computed: {
		type() {
			return this.$route.params.type
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
				switch (item.type) {
					case 'string':
						this.$set(this.form,item.key,'')
						break
					case 'array':
						this.$set(this.form,item.key,[])
						break
					case "bool":
						this.$set(this.form,item.key,false)
						break
				}
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