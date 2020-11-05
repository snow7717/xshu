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
			rules: {},
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
					label: '项目来源',
					key: 'source',
				},
				{
					componetType: 'input',
					type: 'string',
					label: '项目编号',
					key: 'number',
				},
				{
					componetType: 'input',
					type: 'string',
					label: '项目名称',
					key: 'title',
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
					label: '合同单位',
					key: 'unit',
				},
				{
					componetType: 'number',
					type: 'string',
					label: '到账经费',
					key: 'funding',
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
					componetType: 'select',
					type: 'string',
					label: '类型',
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
					componetType: 'input',
					type: 'string',
					label: '负责人',
					key: 'principal',
				},
				{
					componetType: 'input',
					type: 'string',
					label: '团队成果',
					key: 'result',
				},
				{
					componetType: 'number',
					type: 'string',
					label: '单位排名',
					key: 'unitrank',
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