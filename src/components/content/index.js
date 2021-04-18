import qs from 'qs'

let valinumber = (rule, value, callback) => {  
  if (new RegExp(/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/).test(value) || value == '') {
	  callback()
  }else{
		callback(new Error('该字段必须为大于0的数字'))
	}
}

export default {
	name: 'ccontent',
	props: {
		url: {
			type: Object,
			default() {
				return {
					index: '',
					template: '',
					importpre: '',
					importsave: '',
					exporter: '',
					show: '',
					save: '',
					del: ''
				}
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
			default: '90px'
		}
	},
	data() {
		let valibegintime = (rule, value, callback) => {
			if (this.form.endtime) {
				if(new Date(value) > new Date(this.form.endtime)) {
					callback(new Error('开始日期不能大于结束日期'))
				}else{
					callback()
				}
      }else{
				callback()
			}
		}
		let valiendtime = (rule, value, callback) => {
			if (this.form.begintime) {
				if(new Date(value) < new Date(this.form.begintime)) {
					callback(new Error('结束日期不能小于开始日期'))
				}else{
					callback()
				}
      }else{
				callback()
			}
		}
		let valigrade = (rule, value, callback) => {
			let options = this.fields.filter((item) => {
				return item.keyer == 'stu_class'
			})[0].options
			let stulabel = options.filter((item) => {
				return item.value == this.form.stu_class
			})[0].label
			if(stulabel.substring(0,4) == value) {
				callback()
			}else{
				callback(new Error('班级和年级不匹配'))
			}
		}
		let valiyear = (rule, value, callback) => {
			if(this.form.begintime) {
				if(value > this.form.begintime.substring(0,4)) {
					callback(new Error('立项年度不能晚于项目开始时间'))
				}else{
					callback()
				}
			}else{
				callback()
			}
		}
		return {
			summary: '',
			pname: '',
			fields: [],
			search: {},
			searchShow: false,
			form: {},
			labelWidth: '0',
			rules: {
				begintime: [
					{
						validator: valibegintime,
						trigger: 'change'
					}
				],
				endtime: [
					{
						validator: valiendtime,
						trigger: 'change'
					}
				],
				stu_grade: [
					{
						validator: valigrade,
						trigger: 'change'
					}
				],
				item_year: [
					{
						validator: valiyear,
						trigger: 'change'
					}
				]
			},
			page: 1,
			total: 0,
			selects: [],
			viewshow: false,
			formshow: false,
			approveshow: false,
			menu: '',
			showurl: '',
			teachers: [],
			students: []
		}
	},
	computed: {
		user() {
			return this.$store.state.user
		},
		filterFields() {
			return this.fields.filter((item) => {
				return item.isfilter
			})
		},
		menus() {
			for(let item of this.$router.options.routes) {
				this.$set(item,'label',item.meta.label)
				if(item.children) {
					for(let itemer of item.children) {
						this.$set(itemer,'label',itemer.meta.label)
						if(itemer.meta.permissions) {
							this.$set(itemer,'children',itemer.meta.permissions)
						}
					}
				}
			}
			return this.$router.options.routes.filter((item) => {
				return item.meta.global == false
			})
		},
		hasTeamer() {
			return this.fields.filter((item) => {
				return item.keyer == 'teamers'
			}).length > 0
		},
		isresult() {
			let basis = ['bschool','profession','bteacher','bstudent','mstudent']
			if(basis.indexOf(this.$route.name) == -1) {
				return true
			}else{
				return false
			}
		}
	},
	watch:{
		$route(to,from){
			window.location.reload()
		},
		menu(val) {
      this.$refs.tree[0].filter(val)
    }
	},
	created() {
		this.init()
		this.fieldIndex()
		this.index(this.page)
		this.teacherIndex()
	},
	mounted() {},
	methods: {
		init() {
			this.pname = this.$route.name
		  this.summary = this.$route.meta.label
		},
		fieldIndex() {
			this.$http.get(`/form/elements/menu/${this.$route.name}`).then((res) => {
				this.fields = res.data.result
				this.initLableWidth()
				this.initRules()
				this.initTableRules()
				this.initForm(this.fields,'form')
				this.initForm(this.filterFields,'search')
			})
		},
		initLableWidth() {
			let labels = this.fields.map((item) => {
				return item.label
			})
			let Lengths = labels.map((item) => {
				return item.length
			})
			let max = Function.prototype.apply.bind(Math.max, null)(Lengths)
			this.labelWidth = 18 * max + 'px'
		},
		initRules() {
			for(let item of this.fields) {
				this.$set(this.rules,item.keyer,[{
					required: item.isrequired,
					message: item.tag == 'input' ? `请输入${item.label}` : `请选择${item.label}`,
					trigger: item.tag == 'input' ? 'blur' : 'change'
				}])
			}
			let numbers = this.fields.filter((item) => {
				return item.type == 'number'
			})
			for(let item of numbers) {
				if(this.rules[item.keyer]) {
					this.rules[item.keyer].push({
						validator: valinumber,
						trigger: item.tag == 'input' ? 'blur' : 'change'
					})
				}else{
					this.$set(this.rules,item.keyer,[{
						validator: valinumber,
						trigger: item.tag == 'input' ? 'blur' : 'change'
					}])
				}
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
		initForm(fields,form,initLeader = false) {
			this[form] = {}
			for(let item of fields) {
				let defaulter
				switch(item.tag) {
					case 'input':
						defaulter = ''
						break
					case 'radiogroup':
						defaulter = ''
						break
					case 'checkboxgroup':
						defaulter = []
						break
					case 'select':
						if(item.multiple) {
							defaulter = []
						}else{
							defaulter = ''
						}
						break
					case 'datepicker':
						defaulter = ''
						break
					case 'tree':
						defaulter = []
						break
				}
				this.$set(this[form],item.keyer,defaulter)
				if(item.keyer == 'item_leader' && initLeader) {
					this[form].item_leader = parseInt(this.user.userinfo.relid)
				}
				if(item.keyer == 'leader_number' && initLeader) {
					this[form].leader_number = this.user.userinfo.number
				}
				if(item.keyer == 'item_college' && initLeader) {
					this[form].item_college = this.user.userinfo.school
				}
			}
		},
		query() {
			this.index(1)
			this.searchShow = false
		},
		clear() {
			this.initForm(this.filterFields,'search')
			this.search._status = ''
			this.index(1)
		},
		index(page) {
			this.$http.get(`${this.url.index}/${page}/10`,{params: this.search}).then((res) => {
				this.page = page
				this.total = res.data.result.total
        this.$emit('index', res.data.result.list)
				if(this.students.length == 0) {
					this.studentIndex()
				}
			})
		},
		teacherIndex() {
			this.$http.get("/bteacher/all").then((res) => {
				this.teachers = res.data.result.map((item) => {
					return {value: item.id, label: item.name}
				})
			})
		},
		studentIndex() {
			this.$http.get('/bstudent/all').then((res) => {
				this.students = res.data.result.map((item) => {
					return {value: item.id, label: item.name}
				})
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
		selectChange($event,keyer,index = 0) {
			if(keyer == 'item_leader') {
				this.$http.get(`/bteacher/get/${$event}`).then((res) => {
					if(this.form.leader_number == null) {
					}else{
						this.form.leader_number = res.data.result.number
					}
					if(this.form.item_college == null) {
					}else{
						this.form.item_college = res.data.result.schoolid
					}
				})
			}else if(keyer == 'zxitem_type') {
				this.$http.get(`/achieves/prosource/get/${$event}`).then((res) => {
					let source = this.fields.filter((item) => {
						return item.keyer == 'item_source'
					})[0]
					source.options = res.data.result
				})
			}else if(keyer == 'lwzzleibie') {
				let options
				if($event == '本校教师') {
					options = this.teachers
				}else if($event == '本校学生' || $event == '院内学生'){
					options = this.students
				}else{
					options = []
				}
				let author = this.fields.filter((item) => {
					return item.keyer == 'lwdyzz'
				})[0]
				this.$set(author,'options',options)
			}else if(keyer == 'lwdyzz') {
				if(this.form.lwzzleibie == '本校教师') {
					this.$http.get(`/bteacher/get/${$event}`).then((res) => {
						this.form.lwdyzzgh = res.data.result.number
						this.form.lwzzxueyuan = res.data.result.school
					})
				}else if(this.form.lwzzleibie == '本校学生' || $event == '院内学生') {
					this.$http.get(`/bstudent/get/${$event}`).then((res) => {
						this.form.lwdyzzgh = res.data.result.number
						this.form.lwzzxueyuan = res.data.result.school
					})
				}
			}else if(keyer == 'shenfen') {
				let teamer = this.form.teamers[index]
				if($event == '本校教师') {
					this.$set(teamer,'options',this.teachers)
				}else if($event == '本校学生' || $event == '院内学生') {
					this.$set(teamer,'options',this.students)
				}else{
					this.$set(teamer,'options', [])
				}
			}else if(keyer == 'xingming') {
				if(this.form.teamers[index].shenfen == '本校教师') {
					this.$http.get(`/bteacher/get/${$event}`).then((res) => {
						this.form.teamers[index].danwei = res.data.result.school
						this.form.teamers[index].xuehao = res.data.result.number
						this.form.teamers[index].showname = res.data.result.name
					})
				}else if(this.form.teamers[index].shenfen == '本校学生' || this.form.teamers[index].shenfen == '院内学生') {
					this.$http.get(`/bstudent/get/${$event}`).then((res) => {
						this.form.teamers[index].danwei = res.data.result.school
						this.form.teamers[index].xuehao = res.data.result.number
						this.form.teamers[index].banji = res.data.result.stu_class
						this.form.teamers[index].zhuanye = res.data.result.profession
						this.form.teamers[index].xueweileixing = res.data.result.bachelor
						this.form.teamers[index].showname = res.data.result.name
					})
				}
			}else if(keyer == 'xueshengxm') {
				this.$http.get(`/bstudent/get/${$event}`).then((res) => {
					this.form.xueshengxueli = res.data.result.education
					this.form.xueshengbanji = res.data.result.stu_class
					this.form.xueshengnianji = res.data.result.stu_grade
					this.form.xueshengzhuanye = res.data.result.profession
					this.form.xueshengxueyuan = res.data.result.school
				})
			}else if(keyer == 'level' && this.$route.name == 'menu') {
				if(this.form.level == 1) {
					this.fields.filter((item) => {
						return item.keyer == 'parent'
					})[0].isrequired = false
				}else{
					this.fields.filter((item) => {
						return item.keyer == 'parent'
					})[0].isrequired = true
				}
				this.initRules()
			}
		},
		templatedownload() {
			this.$http.get(this.url.template).then((res) => {
				window.location.href = res.data
			})
		},
		importer(param) {
			let formData = new FormData()
			formData.append('files',param.file)
			this.$http.post(this.url.importpre,formData).then((res) => {
				if(res.data.returnCode == '0') {
					if(res.data.result.msgs.length > 0) {
						this.$message({
							message: res.data.result.msgs[0],
							type: 'warning'
						})
					}else{
						this.$http.post(this.url.importsave,  res.data.result).then((res1) => {
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
					}
				}else{
					this.$message({
						message: res.data.returnMsg,
						type: 'warning'
					})
				}
			})
		},
		exporter() {
			this.$set(this.search,'datas',this.selects)
			this.$http.get(this.url.exporter, {
        params: this.search,
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
		view(id) {
			this.viewshow = true
			this.$http.get(this.url.show + '/' + id).then((res) => {
				if(res.data.result.teamers) {
					for(let item of res.data.result.teamers) {
						if(item.shenfen == '本校学生' || item.shenfen == '院内学生') {	  this.$http.get(`/bstudent/get/`+item.xingming).then((res) =>{
							 item.options = [{value: res.data.result.id, label: res.data.result.name}]
						 })
						}else if(item.shenfen == '本校教师') {
						  this.$http.get(`/bteacher/get/`+item.xingming).then((res) => {
							  item.options = [{value: res.data.result.id, label: res.data.result.name}]
						  })
						}
					}
				}
				this.form = res.data.result
				if(this.fields.filter((item) => {
					return item.tag == 'tree'
				}).length > 0) {
					this.$nextTick(() => {
						this.$refs.tree[0].setCheckedKeys(this.form.permissions)
					})
				}
			})
		}, 
		create() {
			this.initForm(this.fields,'form',true)
			this.formshow = true
			let table = this.fields.filter((item) => {
				return item.tag == 'table'
			})[0]
		  if(table) {
				let i = this.fields.indexOf(table)
			  this.addtable(i)
			}
			if(this.fields.filter((item) => {
				return item.tag == 'tree'
			}).length > 0) {
				this.$set(this.form,'delyn',true)
				this.$nextTick(() => {
					this.$refs.tree[0].setCheckedKeys([this.form.permissions])
				})
			}
		},
		edit(id) {
			this.formshow = true
			this.$http.get(this.url.show + '/' + id).then((res) => {
				if(res.data.result.teamers) {
					for(let item of res.data.result.teamers) {
						if(item.shenfen == '本校学生' || item.shenfen == '院内学生') {
							let loading = this.$loading({
								lock: true,
								text: '加载中...',
								spinner: 'el-icon-loading',
								background: 'rgba(0, 0, 0, 0.7)'
							})
							this.$http.get(`/bstudent/all`).then((res) => {
								loading.close()
								item.options = res.data.result.map((itemer) => {
									return {value: itemer.id, label: itemer.name}
								})
							})
						}else if(item.shenfen == '本校教师') {
							this.$http.get(`/bteacher/all`).then((res) => {
								item.options = res.data.result.map((itemer) => {
									return {value: itemer.id, label: itemer.name}
								})
							})
						}
					}
				}
				this.form = res.data.result
				if(this.fields.filter((item) => {
					return item.tag == 'tree'
				}).length > 0) {
					this.$nextTick(() => {
						this.$refs.tree[0].setCheckedKeys(this.form.permissions)
					})
				}
			})
		},
		handleApprove(id) {
			this.approveshow = true
			this.$http.get(this.url.show + '/' + id).then((res) => {
				this.form = res.data.result
			})
		},
		approve(id,status) {
			let approvestr = status == 2 ? '审批通过?' : '审批不通过?'
			this.$prompt('请输入审批意见', '确定' + approvestr, {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then((value) => {
				this.$http.post('/achieves/approve',{id: id, _status: status,suggest: value.value}).then((res) => {
					if(res.data.returnCode == '0') {
						this.$message({
							type: 'success',
							message: res.data.returnMsg
						})
						setTimeout(() => {
							this.index(this.page)
						},1500)
					}else{
						this.$message({
							type: 'warning',
							message: res.data.returnMsg
						})
					}
				})
			}).catch(() => {         
      })
		},
		cancel() {
			this.formshow = false
		},
		uploader(param) {
			let formData = new FormData()
			formData.append('files',param.file)
			this.$http.post('/achieves/up',formData).then((res) => {
				if(this.form[param.filename]) {
					this.form[param.filename] = this.form[param.filename].concat(res.data.result)
				}else{
					this.$set(this.form,param.filename,res.data.result)
				}
			})
		},
		fileremove(file,files,keyer) {
			this.form[keyer] = files
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
			}else{
				this.$set(this.form,keyer,[])
			}
			this.form[keyer].push(obj)
		},
		deltable(keyer,index1) {
			this.form[keyer].splice(index1,1)
		},
		/*-- 处理树形空间 --*/
		filterNode(value, data) {
			if(value) {
				return data.label.indexOf(value) != -1
			}else{
				return true
			}
    },
		handleChecked(data,checkeds) {
			this.form.permissions = checkeds.checkedKeys
			this.form.mpermissions = checkeds.halfCheckedKeys.concat(checkeds.checkedKeys)
		},
		/*-- 提交表单 --*/
		submit(form) {
			if(this.form.teamers) {
				let orders = this.form.teamers.map((item) => {
					return item.paixu
				})
				let teamers = this.form.teamers.map((item) => {
					return item.shenfen + '' + item.xingming
				})
				if(new Set(orders).size == orders.length && new Set(teamers).size == teamers.length) {
				}else{
					this.$message({
						message: '团队成员的序号和所选的团队成员不可重复',
						type: 'warning'
					})
					return false
				}
			}
			
      this.$refs[form].validate((valid) => {
        if (valid) {
					this.$set(this.form,'_menu',this.$route.name)
					if(this.form.teamers) {
						for(let item of this.form.teamers) {
							item.options = []
						}
					}
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
							type: 'warning',
							message: res.data.returnMsg
						})
					}
				})
      }).catch(() => {         
      })
		}
	}
}