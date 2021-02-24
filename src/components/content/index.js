import qs from 'qs'

export default {
	name: 'ccontent',
	props: {
		url: {
			type: Object,
			default() {
				return {
					index: '',
					importpre: '',
					importsave: '',
					exporter: '',
					show: '',
					save: '',
					del: ''
				}
			}
		},
		search: {
			type: Object,
			default() {
				return {
				}
			}
		},
		fields: {
			type: Array,
			default() {
				return []
			}
		},
		selectable: {
			type: Boolean,
			default: true
		},
		datas: {
		  type: Array,
			default() {
				return []
			}
	  },
		operawidth: {
			type: String,
			default: '70px'
		},
		form: {
			type: Object,
			default() {
				return {}
			}
		},
		labelWidth: {
			type: String,
			default: '80px'
		}
	},
	data() {
		return {
			summary: '',
			pname: '',
			rules: {},
			page: 1,
			total: 0,
			selects: [],
			formshow: false
		}
	},
	computed: {
		user() {
			return this.$store.state.user
		},
	},
	watch:{
		$route(to,from){
			this.init()
		}
	},
	created() {
		this.init()
		this.initRules()
		this.initTableRules()
		this.initSearch()
		this.index(this.page)
	},
	mounted() {
	},
	methods: {
		init() {
			this.pname = this.$route.name
		  this.summary = this.$route.meta.label
		},
		initRules() {
			let rqueireds = this.fields.filter((item) => {
				return item.isrequired == true
			})
			for(let item of rqueireds) {
				this.$set(this.rules,item.keyer,[{
					required: true,
					message: item.tag == 'input' ? `请输入${item.label}` : `请选择${item.label}`,
					trigger: item.tag == 'input' ? 'blur' : 'change'
				}])
			}
		},
		initTableRules() {
			let tables = this.fields.filter((item) => {
				return item.tag == 'table'
			})
			for(let item of tables) {
				for(let item1 of item.fields) {
					if(item1.isrequired) {
						this.$set(this.rules,item1.keyer,[{
							required: true,
							message: item1.tag == 'input' ? `请输入${item1.label}` : `请选择${item1.label}`,
							trigger: item1.tag == 'input' ? 'blur' : 'change'
						}])
					}
				}
			}
		},
		initSearch() {
			let filters = this.fields.filter((item) => {
				return item.isfilter == true
			})
			for(let item of filters) {
				this.$set(this.search,item.keyer,'')
			}
		},
		index(page) {
			this.$http.get(`${this.url.index}/${page}/10`,{params: this.search}).then((res) => {
				this.page = page
				this.total = res.data.result.total
        this.$emit('index', res.data.result.list)
			})
		},
		handleDatas(val) {
			this.selects = val.map((item) => {
				return item.id
			})
		},
		hasPerm(perm) {
			return this.user.role.permissions.indexOf(this.pname + perm) > -1
		},
		importer(param) {
			let formData = new FormData()
			formData.append('files',param.file)
			this.$http.post(this.url.importpre,formData).then((res) => {
				if(res.data.returnCode == '0') {
					this.$http.post(this.url.importsave, {datas: res.data.result}).then((res1) => {
						if(res1.data.returnCode == '0') {
							this.$message({
								message: res1.data.returnMsg,
								type: 'success'
							})
							this.index(this.page)
						}else{
							this.$message({
								message: res1.data.returnMsg,
								type: 'warning'
							})
						}
					})
				}else{
					this.$message({
						message: res.data.returnMsg,
						type: 'warning'
					})
				}
			})
		},
		exporter() {
			this.$http.get(this.url.exporter, {
        params: {datas: this.selects},
        paramsSerializer: (params) => {
          return qs.stringify(params, { arrayFormat: 'repeat' })
        }
      }).then((res) => {
        if(res.data.returnCode == '0') {
          this.$message({
            type: 'success',
            message: '导出成功!'
          })
          window.location.href = res.data.result
        }else{
          this.$message({
            type: 'success',
            message: res.data.returnMsg
          })
        }
      })
		},
		create() {
			this.formshow = true
			this.$emit('create')
		},
		edit(id) {
			this.formshow = true
			this.$http.get(this.url.show + '/' + id).then((res) => {
				this.$emit('edit',res.data.result)
			})
		},
		cancel() {
			this.formshow = false
		},
		uploader(param) {
			let formData = new FormData()
			formData.append('files',param.file)
			this.$http.post('/achieve/up',formData).then((res) => {
				if(this.form[param.filename]) {
					this.form[param.filename] = this.form[param.filename].concat(res.data.result)
				}else{
					this.$set(this.form,param.filename,res.data.result)
				}
			})
		},
		addtable(index) {
			let keyer = this.fields[index].keyer
			let props = this.fields[index].fields.map((item) => {
				return item.keyer
			})
			let obj = {}
			for(let item of props) {
				this.$set(obj,item,'')
			}
			if(this.form[keyer]) {
				this.form[keyer].push(obj)
			}else{
				this.$set(this.form,keyer,[])
			}
		},
		deltable(keyer,index1) {
			this.form[keyer].splice(index1,1)
		},
		submit(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.$http.post(this.url.save, this.form).then((res) => {
						if(res.data.returnCode == '0') {
							this.$message({
								message: res.data.returnMsg,
								type: 'success'
							})
							setTimeout(() => {
								this.cancel()
								this.index(this.page)
							}, 1000)
						}else{
							this.$message({
								message: res.data.returnMsg,
								type: 'warning'
							})
						}
					})
        } else {
          return false
        }
      })
    },
		del(id) {
			this.$confirm('确定删除?', '', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
				this.$http.delete(this.url.del + '/' + id).then((res) => {
					if(res.data.returnCode == '0') {
						this.$message({
							type: 'success',
							message: '删除成功!'
						})
						setTimeout(() => {
							this.index(this.page)
						},1500)
					}else{
						this.$message({
							type: 'success',
							message: res.data.returnMsg
						})
					}
				})
      }).catch(() => {         
      })
		}
	}
}