import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'

export default {
	name: 'teamset',
	data() {
		return {
			windowH: 0,
			teacher: {
				searchWord: '',
				isIndeterminate: false,
				data: [],
				checkAll: false,
			  checkeds: []
			},
			departs: [],
			departAddShow: false,
			departEditShow: false,
			formAdd0: {
				name: ''
			},
			editdepart: {},
			total0: 0,
			form0: {
				id: '',
				collegeName: '',
				members: []
			},
			departMemberShow: false,
			teams: [
				{
					name: '阿里巴巴科研队',
					ename: 'ALIBABA'
				},
				{
					name: '腾讯创新队',
					ename: 'tcincreate'
				}
			],
			teamAddShow: false,
			teamEditShow: false,
			formAdd1: {
				name: '',
				ename: ''
			},
			form1: {
				name: '',
				members: [
					{
						name: '虞姬',
					},
					{
						name: '司马懿'
					}
				]
			},
			teamMemberShow: false,
			tags: [],
			tagAddShow: false,
			tagEditShow: false,
			formAdd2: {
				name: ''
			},
			form2: {
				id: '',
				name: '',
				members: []
			},
			rule0: {
				name: {
					required: true,
					message: '请输入标签名称'
				}
			},
			rule2: {
				name: {
					required: true,
					message: '请输入标签名称'
				}
			},
			tagMemberShow: false,
		}
	},
	components: {
		cheader,
		caside
	},
	mounted() {
		this.windowH = document.documentElement.clientHeight || document.body.clientHeight
	},
	created() {
		this.memberIndex()
		this.departIndex()
		this.tagIndex()
	},
	methods: {
		/*-- 获取所有成员 --*/
		memberIndex() {
			this.$http.get('/user/list').then((res) => {
				this.teacher.data = res.data.result
			})
		},
		/*-- 获取系部列表 --*/
		departIndex() {
			this.$http.get('/team/college/list',{type: 2}).then((res) => {
				this.departs = res.data.result
			})
		},
		/*-- 保存系部列表 --*/
		departSave() {
			this.$refs.formAdd0.validate((valid) => {
				if(valid) {
					this.$http.post('/team/college/save',{isuse: 1, superior: 1, collegeName: this.formAdd0.name}).then((res) => {
						this.departAddShow = false
						if(res.data.returnCode == 0) {
							this.$message({
								type: 'success',
								message: res.data.returnMsg
							})
							this.departIndex()
						}else{
							this.$message({
								type: 'error',
								message: res.data.returnMsg
							})
						}
					})
				}else{
					return false
				}
			})
		},
		/*-- 查询系部下的成员 --*/
		departmemIndex(page) {
			this.$http.get(`user/listWithCond/${page}/10`, {params: {collegeid: this.form0.id}}).then((res) => {
				this.form0.members = res.data.result.list
				this.total0 = res.data.result.total
			})
		},
		handleDepartEdit(depart) {
			this.form0.id = depart.id
			this.form0.collegeName = depart.collegeName
			this.departEditShow = true
			this.departmemIndex(1)
		},
		/*-- 向某个系部下添加成员 --*/
		departmemAdd(){
			if(this.teacher.checkeds.length == 0){
				this.$message({
					type: 'error',
					message: '为选中任何成员'
				})
			}else{
				this.$http.post('/team/college/members/save', {collegeid: this.form0.id, userids: this.teacher.checkeds}).then((res) => {
					if(res.data.returnCode == 0) {
						this.$message({
							type: 'success',
							message: res.data.returnMsg
						})
						this.memberClose('departMemberShow')
						this.departmemIndex(1)
					}else{
						this.$message({
							type: 'error',
							message: res.data.returnMsg
						})
					}
				})
			}
		},
		/*-- 删除某个系部下的某个成员 --*/
		deldepartmem(id) {
			this.$confirm('确定删除该成员?', '', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				showClose: false,
				type: 'warning'
			}).then(() => {
				this.$http.post('/team/college/member/remove',{collegeid: this.form0.id,userid: id}).then((res) => {
					if(res.data.returnCode == 0) {
						this.$message({
							type: 'success',
							message: res.data.returnMsg
						})
						this.departmemIndex(1)
					}else{
						this.$message({
							type: 'error',
							message: res.data.returnMsg
						})
					}
				})
			}).catch(() => {      
      })
		},
		delDepart(depart) {
			this.$confirm('确定删除该教学系部?', '', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
				showClose: false,
        type: 'warning'
      }).then(() => {
      }).catch(() => {      
      })
		},
		handleTeamEdit(team) {
			this.teamEditShow = true
		},
		delTeam(team) {
			this.$confirm('确定删除该科研团队?', '', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
				showClose: false,
        type: 'warning'
      }).then(() => {
      }).catch(() => {      
      })
		},
		/*-- 获取标签列表 --*/
		tagIndex() {
			this.$http.get('/tags/list').then((res) => {
				this.tags = res.data.result
			})
		},
		/*-- 保存标签 --*/
		tagSave() {
			this.$refs.formAdd2.validate((valid) => {
				if(valid) {
					this.$http.post('/tags/save',{tagname: this.formAdd2.name}).then((res) => {
						if(res.data.returnCode == 0) {
							this.tagAddShow = false
							this.$message({
								type: 'success',
								message: res.data.returnMsg
							})
							this.tagIndex()
						}else{
							this.$message({
								type: 'error',
								message: res.data.returnMsg
							})
						}
					})
				}else{
					return false
				}
			})
		},
		/*-- 获取某个标签下的所有成员 --*/
		tagmemIndex(tagid) {
			this.$http.get(`/tags/members/${tagid}`).then((res) => {
				this.form2.members = res.data.result
			})
		},
		/*-- 向某个标签下添加成员 --*/
		tagmemAdd(){
			if(this.teacher.checkeds.length == 0){
				this.$message({
					type: 'error',
					message: '为选中任何成员'
				})
			}else{
				this.$http.post('/tags/user/save', {tagid: this.form2.id,  userid: this.teacher.checkeds}).then((res) => {
					if(res.data.returnCode == 0) {
						this.$message({
							type: 'success',
							message: res.data.returnMsg
						})
						this.memberClose('tagMemberShow')
						this.tagmemIndex(this.form2.id)
					}else{
						this.$message({
							type: 'error',
							message: res.data.returnMsg
						})
					}
				})
			}
		},
		/*-- 编辑标签 --*/
		handleTagEdit(tag) {
			this.form2.id = tag.id
			this.form2.name = tag.tagname
			/*-- 获取某个标签下的所有成员 --*/
			this.tagmemIndex(tag.id)
			this.tagEditShow = true
		},
		/*-- 更新标签 --*/
		tagUpdate() {
			this.$refs.form2.validate((valid) => {
				if(valid) {
					this.$http.post('/tags/save',{id: this.form2.id,tagname: this.form2.name}).then((res) => {
						if(res.data.returnCode == 0) {
							this.tagEditShow = false
							this.$message({
								type: 'success',
								message: res.data.returnMsg
							})
							this.tagIndex()
						}else{
							this.$message({
								type: 'error',
								message: res.data.returnMsg
							})
						}
					})
				}else{
					return false
				}
			})
		},
		/*-- 删除某个标签下的某个成员 --*/
		deltagmem(tagmem) {
			this.$confirm('确定删除该成员?', '', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				showClose: false,
				type: 'warning'
			}).then(() => {
				this.$http.post('/tags/user/remove',{tagid: tagmem.tagid,userid: tagmem.userid}).then((res) => {
					if(res.data.returnCode == 0) {
						this.$message({
							type: 'success',
							message: res.data.returnMsg
						})
						this.tagmemIndex(tagmem.tagid)
					}else{
						this.$message({
							type: 'error',
							message: res.data.returnMsg
						})
					}
				})
			}).catch(() => {      
      })
		},
		delTag(tag) {
			this.$confirm('确定删除该标签?', '', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
				showClose: false,
        type: 'warning'
      }).then(() => {
				this.$http.post(`/tags/remove/${tag.id}`).then((res) => {
					if(res.data.returnCode == 0) {
						this.$message({
							type: 'success',
							message: res.data.returnMsg
						})
						this.tagIndex()
					}else{
						this.$message({
							type: 'error',
							message: res.data.returnMsg
						})
					}
				})
      }).catch(() => {      
      })
		},
		teacherAll(val) {
      this.teacher.checkeds = val ? this.teacher.data.map((item) => {
				return item.userid
			}) : []
      this.teacher.isIndeterminate = false
    },
    teacherChange(value) {
      this.teacher.checkAll = value.length === this.teacher.data.length
      this.teacher.isIndeterminate = value.length > 0 && value.length < this.teacher.data.length
    },
		memberClose(dialogShow) {
			this[dialogShow] = false
			this.teacher.checkeds = []
			this.teacher.isIndeterminate = false
		}
	}
}