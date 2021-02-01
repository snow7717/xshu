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
		summary: {
			type: String
		},
		nameSearch: {
			type: Boolean
		},
		search: {
			type: Object,
			default() {
				return {}
			}
		},
		closeShow: {
			type: Boolean,
			default: false
		},
		placeholder: {
			type: String,
			default: ''
		},
		selects: {
			type: Array,
			default() {
				return []
			}
		},
		datas: {
		  type: Array,
			default() {
				return []
			}
	  },
		page: {
			type: Number,
			default: 1
		},
		total: {
			type: Number,
			default: 1
		},
		formshow: {
			type: Boolean,
			default: false
		},
		rules: {
			type: Object,
			default() {
				return {}
			}
		},
		form: {
			type: Object,
			default() {
				return {}
			}
		}
	},
	created() {
		this.index(this.page)
	},
	methods: {
		toggleName() {
			this.$emit('toggleName')
		},
		index(page) {
			this.$http.get(`${this.url.index}/${page}/10`,{params: {name: this.search.name}}).then((res) => {
        this.$emit('index', page, res.data.result.total, res.data.result.list)
			})
		},
		handleDatas(val) {
			this.$emit('handleDatas',val.map((item) => {
				return item.id
			}))
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
			this.$emit('create')
		},
		edit(id) {
			this.$http.get(this.url.show + '/' + id).then((res) => {
				this.$emit('edit',res.data.result)
			})
		},
		cancel() {
			this.$emit('cancel')
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
								this.cancelEdit()
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
				this.$http.delete(this.url.del + id).then((res) => {
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