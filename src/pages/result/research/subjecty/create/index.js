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
				afunding: [
				  { 
					  required: true, 
					  message: '清输入合同总经费', 
					  trigger: 'blur' 
				  },
			  ],
				funding: [
				  { 
					  required: true, 
					  message: '清输入实际到账经费', 
					  trigger: 'blur' 
				  },
			  ],
				source: [
				  { 
					  required: true, 
					  message: '请选择项目来源', 
					  trigger: 'change' 
				  },
			  ],
				principal: [
				  { 
					  required: true, 
					  message: '请选择项目负责人', 
					  trigger: 'change' 
				  },
			  ],
				no: [
				  { 
					  required: true, 
					  message: '请输入工号', 
					  trigger: 'blur' 
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
							label: '社会科学',
							value: '2'
						}
					]
				},
				{
					componetType: 'select',
					editable: true,
					value: '',
					label: '项目来源',
					key: 'source',
					opetionsJson: [
						{
							label: '国家社会科学基金项目',
							value: '国家社会科学基金项目'
						},
						{
							label: '国家社科基金后期资助项目',
							value: '国家社科基金后期资助项目'
						},
						{
							label: '国家自然科学基金项目',
							value: '国家自然科学基金项目'
						},
						{
							label: '国务院其他部门科技项目和人才计划',
							value: '国务院其他部门科技项目和人才计划'
						},
						{
							label: '济南市科技发展计划',
							value: '济南市科技发展计划'
						},
						{
							label: '教育部人文社会科学研究项目',
							value: '教育部人文社会科学研究项目'
						},
						{
							label: '其他厅局项目',
							value: '其他厅局项目'
						},
						{
							label: '其他项目',
							value: '其他项目'
						},
						{
							label: '山东高校“青创科技计划”',
							value: '山东高校“青创科技计划”'
						},
						{
							label: '山东省教育科学规划项目',
							value: '山东省教育科学规划项目'
						},
						{
							label: '山东省软科学研究计划项目',
							value: '山东省软科学研究计划项目'
						},
						{
							label: '山东省优秀中青年科学家科研奖励基金',
							value: '山东省优秀中青年科学家科研奖励基金'
						},
						{
							label: '山东省重点研发计划',
							value: '山东省重点研发计划'
						},
						{
							label: '山东省自然科学基金',
							value: '山东省自然科学基金'
						},
						{
							label: '社科联人文社会科学课题',
							value: '社科联人文社会科学课题'
						},
						{
							label: '省、市、自治区科技计划项目',
							value: '省、市、自治区科技计划项目'
						},
						{
							label: '省部共建项目',
							value: '省部共建项目'
						},
						{
							label: '省高等学校人文社科计划项目',
							value: '省高等学校人文社科计划项目'
						},
						{
							label: '省教育厅科研发展计划',
							value: '省教育厅科研发展计划'
						},
						{
							label: '省经信委科研项目',
							value: '省经信委科研项目'
						},
						{
							label: '省社科规划项目',
							value: '省社科规划项目'
						},
						{
							label: '省统计局科研项目',
							value: '省统计局科研项目'
						},
						{
							label: '市哲学社会科学规划项目',
							value: '市哲学社会科学规划项目'
						},
						{
							label: '中央其他部委项目',
							value: '中央其他部委项目'
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
					editable: true,
					label: '项目等级',
					key: 'leveler',
					opetionsJson: [
						{
							label: '特类',
							value: '特类'
						},
						{
							label: 'A1',
							value: 'A1'
						},
						{
							label: 'A2',
							value: 'A2'
						},
						{
							label: 'B',
							value: 'B'
						},
						{
							label: 'C',
							value: 'C'
						},
					]
				},
				{
					componetType: 'select',
					value: '',
					editable: true,
					label: '项目级别',
					key: 'level',
					opetionsJson: [
						{
							label: '国家级',
							value: '0'
						},
						{
							label: '教育部',
							value: '1'
						},
						{
							label: '省部级',
							value: '2'
						},
						{
							label: '厅局级',
							value: '3'
						},
						{
							label: '校级',
							value: '4'
						},
					]
				},
				{ 
					componetType: 'select',
					value: '',
					editable: true,
					label: '项目性质',
					key: 'type',
					opetionsJson: [
						{
							label: '重大',
							value: '重大'
						},
						{
							label: '重点',
							value: '重点'
						},
						{
							label: '专项',
							value: '专项'
						},
						{
							label: '青年',
							value: '青年'
						},
						{
							label: '一般',
							value: '一般'
						}
					]
				},
				{
					componetType: 'select',
					editable: true,
					value: '',
					label: '项目批准单位',
					key: 'unit',
					opetionsJson: [
						{
							label: '财政部',
							value: '财政部'
						},
						{
							label: '国家旅游局',
							value: '国家旅游局'
						},
						{
							label: '国家统计局',
							value: '国家统计局'
						},
						{
							label: '国家自然基金委员会',
							value: '国家自然基金委员会'
						},
						{
							label: '济南市科技局',
							value: '济南市科技局'
						},
						{
							label: '济南市哲学社会科学规划管理办公室',
							value: '济南市哲学社会科学规划管理办公室'
						},
						{
							label: '教育部',
							value: '教育部'
						},
						{
							label: '科技部',
							value: '科技部'
						},
						{
							label: '民政部',
							value: '民政部'
						},
						{
							label: '其他厅局',
							value: '其他厅局'
						},
						{
							label: '全国哲学社会科学规划办公室',
							value: '全国哲学社会科学规划办公室'
						},
						{
							label: '山东财经大学',
							value: '山东财经大学'
						},
						{
							label: '山东省发展和改革委员会',
							value: '山东省发展和改革委员会'
						},
						{
							label: '山东省教育科学规划领导小组办公室',
							value: '山东省教育科学规划领导小组办公室'
						},
						{
							label: '山东省教育厅',
							value: '山东省教育厅'
						},
						{
							label: '山东省经济与信息化委员会',
							value: '山东省经济与信息化委员会'
						},
						{
							label: '山东省科技厅',
							value: '山东省科技厅'
						},
						{
							label: '山东省社会科学界联合会',
							value: '山东省社会科学界联合会'
						},
						{
							label: '山东省统计局',
							value: '山东省统计局'
						},
						{
							label: '山东省哲学社会科学工作办公室',
							value: '山东省哲学社会科学工作办公室'
						}
					]
				},
				{
					required: true,
					componetType: 'number',
					value: '',
					label: '合同总经费',
					key: 'afunding',
					min: '0',
					max: ''
				},
				{
					required: true,
					componetType: 'number',
					value: '',
					label: '实际到账经费',
					key: 'funding',
					min: '0',
					max: ''
				},
				{
					componetType: 'date',
					value: '',
					label: '项目开始时间',
					key: 'created_at',
				},
				{
					componetType: 'date',
					value: '',
					label: '项目截止时间',
					key: 'until_at',
				},
				{
					componetType: 'select',
					value: '',
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
						}
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
					min: '0',
					value: '',
					label: '负责人工号',
					key: 'no'
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