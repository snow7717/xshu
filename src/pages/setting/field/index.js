export default {
	data() {
		let regkey = (rule, value, callback) => {
			if (/^[A-Za-z0-9_\-]+$/ig.test(value) && value) {
				let keyers = this.form.fields.map((item) => {
					return item.keyer
				})
				if(keyers.filter((item) => {
					return item == value
				}).length <= 1){
					callback()
				}else{
					callback(new Error('同一菜单下的字段key值不能重复'))
				}
			} else {
				callback(new Error('key值必填且只能输入英文字母'))
			}
		}
		let reglimit = (rule, value, callback) => {
			if(/^\+?[1-9][0-9]*$/.test(value) || !value) {
				callback()
			}else{
				callback(new Error('该字段必须为大于0的正整数'))
			}
		}
		return {
			windowH: 0,
			menus: [],
			form: {
				menu: [],
				fields: []
			},
			actives: [],
			tags: [
				{
					value: 'input',
					label: '输入框',
					props: [
						'keyer',
						'label',
						'placeholder',
						'type',
						'disabled',
						'isrequired',
						'span',
						'show',
						'width',
						'isfileter',
						'rows',
						'autosize',
						'max',
						'min',
						'step'
					]
				},
				{
					value: 'radiogroup',
					label: '单选框组',
					props: [
						'keyer',
						'label',
						'disabled',
						'isrequired',
						'span',
						'show',
						'width',
						'isfilter',
						'source',
						'options',
						'optionsource'
					]
				},
				{
					value: 'checkboxgroup',
					label: '复选框组',
					props: [
						'keyer',
						'label',
						'disabled',
						'isrequired',
						'span',
						'show',
						'width',
						'isfilter',
						'source',
						'options',
						'optionsource'
					]
				},
				{
					value: 'select',
					label: '下拉框',
					props: [
						'keyer',
						'label',
						'placeholder',
						'disabled',
						'isrequired',
						'span',
						'show',
						'width',
						'multiple',
						'filterable',
						'allowCreate',
						'isfilter',
						'source',
						'options',
						'optionsource'
					]
				},
				/*{
					value: 'cascader',
					label: '级联选择器'
				},*/
				{
					value: 'datepicker',
					label: '日期时间选择器',
					props: [
						'keyer',
						'label',
						'placeholder',
						'type',
						'diasbled',
						'isrequired',
						'span',
						'show',
						'width',
						'isfilter'
					]
				},
				{
					value: 'file',
					label: '文件上传',
					props: [
						'keyer',
						'label',
						'disabled',
						'isrequired',
						'span',
						'show',
						'width',
						'multiple',
						'limit',
						'accept'
					]
				},
				{
					value: 'table',
					label: '表格形式',
					props: [
						'keyer',
						'label',
						'fields'
					]
				}
			],
			inpuTypes: [
				{
					value: 'text',
					label: '文字'
				},
				{
					value: 'textarea',
					label: '文本域'
				},
				{
					value: 'number',
					label: '数字'
				},
				{
					value: 'password',
					label: '密码'
				}
			],
			dateTypes: [
				{
					value: 'date',
					label: '日'
				},
				{
					value: 'week',
					label: '周'
				},
				{
					value: 'month',
					label: '月'
				},
				{
					value: 'year',
					label: '年'
				},
				{
					value: 'daterange',
					label: '日期范围'
				},
				{
					value: 'monthrange',
					label: '月份范围'
				}
			],
			spans: [
				12,
				24
			],
			fileTypes: [
				{
					value: 'audio/*',
					label: '音频文件'
				},
				{
					value: 'video/*',
					label: '视频文件'
				},
				{
					value: 'image/*',
					label: '图片'
				},
				{
					value: '.pdf',
					label: 'pdf文件'
				},
				{
					value: '.doc',
					label: 'word文档'
				}
			],
			sources: [],
			rules: {
				tag: [
					{
						required: true,
					  message: '请选择字段标签',
					  trigger: true
					}
 				],
				key: [
					{
						required: true,
						validator: regkey,
						trigger: 'blur'
					}
				],
				label: [
					{
						required: true,
						message: '请输入字段名称',
						trigger: 'blur'
					}
				],
				source: [
					{
						required: true,
						message: '请选择选项来源',
						trigger: 'blur'
					}
				],
				options: [
					{
						required: true,
						message: '请至少设置一个选项',
						trigger: 'change'
					}
				],
				optionsource: [
					{
						required: true,
						message: '请选择选项来源',
						trigger: 'change'
					}
				],
				optionlabel: [
					{
						required: true,
						message: '请输入显示文字',
						trigger: 'blur'
					}
				],
				optionvalue: [
					{
						required: true,
						message: '请输入保存值',
						trigger: 'blur'
					}
				],
				type: [
					{
						required: true,
						message: '请选择日期类型',
						trigger: 'change'
					}
				],
				limit: [
					{ 
						validator: reglimit,
						trigger: 'blur'
					}
				]
			}
		}
	},
	components: {
	},
	created() {
		this.windowH = window.innerHeight
		this.menuIndex()
		this.sourceIndex()
	},
	mounted() {
	},
	methods: {
		menuIndex() {
			this.$http.get('/admin/menu/list').then((res) => {
				let uneditables = ['index','basis','setting']
				for(let item of res.data.result) {
					this.$set(item,'value',item.id)
				}
				let menus = res.data.result.filter((item) => {
					return item.level == 1 && uneditables.indexOf(item.name) == -1
				})
				for(let item of menus) {
					if(res.data.result.filter((child) => {
						return child.parent == item.id 
					}).length > 0) {
						this.$set(item,'children',res.data.result.filter((child) => {
						return child.parent == item.id && uneditables.indexOf(child.name) == -1
					}))
					}
				}
				this.menus = menus
			})
		},
		menuChange(val) {
			let mid = val[val.length - 1]
			this.$http.get(`/form/elements/${mid}`).then((res) => {
				for(let item of res.data.result) {
					if(item.options == ''){
						item.options = []
					}
				}
				this.form.fields = res.data.result
				console.log(this.form.fields)
			})
		},
		sourceIndex() {
			this.$http.get('/form/datatypes').then((res) => {
				this.sources = res.data.result
			})
		},
		hasProp(tag,proper) {
			let tager = this.tags.filter((item) => {
				return item.value == tag
			})[0]
			return tager.props.indexOf(proper) > -1
		},
		create(index) {
			if(index == 'none') {
				this.form.fields.push({
					tag: 'input',
					keyer: '',
					label: `字段${this.form.fields.length + 1}`,
					options: [],
					span: 12,
					fields: [],
					actives: []
				})
				this.actives.push(this.form.fields.length - 1)
			}else{
				this.form.fields[index].fields.push({
					tag: 'input',
					keyer: '',
					label: `字段${this.form.fields[index].fields.length + 1}`,
					options: [],
					span: 12
				})
				this.form.fields[index].actives.push(this.form.fields[index].fields.length - 1)
				
			}
		},
		del(i,i0 = 'none') {
			this.$confirm('确定删除该字段?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
				if(i0 == 'none') {
					if(this.form.fields[i].id) {
						this.$http.delete(`/form/element/delete/${this.form.fields[i].id}`).then((res) => {
							if(res.data.returnCode == 0) {
								this.form.fields.splice(i,1)
							}else{
								this.$message({
									message: res.data.returnMsg,
									type: 'warning'
								})
							}
						})
					}else{
						this.form.fields.splice(i,1)
					}
				}else{
				  this.form.fields[i].fields.splice(i0,1)	
				}
      }).catch(() => {        
      })
		},
		tagChange(val,index) {
			if(val == 'table' && this.form.fields[index].fields.length == 0){
				this.create(index)
			}
		},
		sourceChange(val,index) {
			if(val == 'custom' && this.form.fields[index].options.length == 0) {
				this.addOption(index)
			}
		},
		sourceChange1(val,index,index1) {
			if(val == 'custom' && this.form.fields[index].fields[index1].options.length == 0) {
				this.addOption(index,index1)
			}
		},
		addOption(index,index1='none') {
			if(index1 == 'none') {
				this.form.fields[index].options.push({
					value: '',
					label: ''
				})
			}else{
				this.form.fields[index].fields[index1].options.push({
					value: '',
					label: ''
				})
			}
		},
		delOption(index,oindex) {
			this.form.fields[index].options.splice(oindex,1)
		},
		delOption1(index,index1,oindex) {
			this.form.fields[index].fields[index1].options.splice(oindex,1)
		},
		submit(form) {
			console.log(this.form)
      this.$refs[form].validate((valid,field) => {
        if (valid) {
					for(let i = 0; i < this.form.fields.length; i++) {
						this.$set(this.form.fields[i],'showOrder',i+1)
					}
					this.$http.post('/form/elements/save',{menu: [...this.form.menu].pop(),fields: this.form.fields}).then((res) => {
						this.$message({
							message: res.data.returnMsg,
							type: res.data.returnCode == 0 ? 'success' : 'error'
						})
					})
        } else {
          return false
        }
      })
    },
	}
}