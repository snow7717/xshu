import qs from 'qs'
import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'
import csearch from '@/components/search/bar/index.vue'
import cmemsearch from '@/components/search/member/index.vue'
import ctimesearch from '@/components/search/time/index.vue'
import cfilter from '@/components/search/filter/index.vue'

let regphone = (rule, value, callback) => {
  if (/^1\d{10}$/.test(value)) {
    callback()
  } else {
		callback(new Error('手机号未填写或格式错误'))
  }
}
let regemail = (rule, value, callback) => {
	if (/^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/.test(value) || value == '') {
		callback()
  } else {
    callback(new Error('邮箱格式错误'))
  }
}

export default {
	name: 'basisteacher',
	data() {
		return {
			summary: '教师信息',
			nameSearch: true,
			search: {
				name: ''
			},
			labelW: '70px',
			basis: [],
			page: 1,
			total: 0,
			selects: [],
			editshow: false,
			form: {},
			rules: {
        name: [
          { 
						required: true, 
						message: '请输入姓名', 
						trigger: 'blur' 
					}
        ],
				number: [
					{
						required: true,
						message: '清输入职工号',
						trigger: 'blur'
					}
				],
				phone: [
					{
						required: true,
						validator: regphone,
						trigger: 'blur'
					}
				],
				email: [
					{
						validator: regemail,
						trigger: 'blur'
					}
				],
				unit: [
					{
						required: true,
						message: '清输入最新单位',
						trigger: 'blur'
					}
				]
			}
		}
	},
	components: {
		cheader,
		caside,
		csearch,
		cmemsearch,
		ctimesearch,
		cfilter
	},
	created() {
		this.index(this.page)
	},
	methods: {
		toggleName() {
			this.nameSearch = !this.nameSearch
		},	
		index(page) {
			this.page = page
			this.$http.get(`/teacher/page/${page}/10`,{params: {name: this.search.name}}).then((res) => {
				this.total = res.data.result.total
				this.basis = res.data.result.list
			})
		},
		handlePapers(val) {
			this.selects = val.map((item) => {
				return item.id
			})
		},
		importer(param) {
			let formData = new FormData()
			formData.append('files',param.file)
			this.$http.post('/teacher/import/pre',formData).then((res) => {
				if(res.data.returnCode == '0') {
					this.$http.post('teacher/import/save', {teachers: res.data.result}).then((res1) => {
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
			this.$http.get('/export/teacher', {
        params: {teacherIds: this.selects},
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
		edit(id) {
			this.editshow = true
			this.$http.get(`/teacher/info/${id}`).then((res) => {
				this.form = res.data.result
			})
		},
		submit(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.$http.post('teacher/save', this.form).then((res) => {
						if(res.data.returnCode == '0') {
							this.$message({
								message: res.data.returnMsg,
								type: 'success'
							})
							setTimeout(() => {
								this.editshow = false
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
				this.$http.delete(`teacher/remove/${id}`).then((res) => {
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