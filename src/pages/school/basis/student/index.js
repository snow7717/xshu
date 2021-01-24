import qs from 'qs'
import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'
import csearch from '@/components/search/bar/index.vue'
import cmemsearch from '@/components/search/member/index.vue'
import ctimesearch from '@/components/search/time/index.vue'
import cfilter from '@/components/search/filter/index.vue'

export default {
	name: 'basistudent',
	data() {
		return {
			summary: '学生信息',
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
			classArr: [],
		  form: {},
			rules: {
				number: [
					{
						required: true,
						message: '清输入学号',
						trigger: 'blur'
					}
				],
        name: [
          { 
						required: true, 
						message: '请输入姓名', 
						trigger: 'blur' 
					}
        ],
				gender: [
          { 
						required: true, 
						message: '请选择性别', 
						trigger: 'change' 
					}
        ],
				school: [
          { 
						required: true, 
						message: '请选择学院名称', 
						trigger: 'change' 
					}
        ],
				profession: [
          { 
						required: true, 
						message: '请选择专业', 
						trigger: 'change' 
					}
        ],
				class_: [
          { 
						required: true, 
						message: '请选择班级', 
						trigger: 'change' 
					}
        ],
				grade: [
          { 
						required: true, 
						message: '请选择年级', 
						trigger: 'change' 
					}
        ],
				birth: [
          { 
						required: true, 
						message: '请选择出生日期', 
						trigger: 'change' 
					}
        ],
				education: [
					{
						required: true,
						message: '清选择学历层次',
						trigger: 'change'
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
		this.classIndex()
	},
	methods: {
		toggleName() {
			this.nameSearch = !this.nameSearch
		},	
		index(page) {
			this.page = page
			this.$http.get(`/student/page/${page}/10`,{params: {name: this.search.name}}).then((res) => {
				this.total = res.data.result.total
				this.basis = res.data.result.list
			})
		},
		classIndex() {
			this.$http.get('student/class/list').then((res) => {
				this.classArr = res.data.result
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
			this.$http.post('/student/import/pre',formData).then((res) => {
				if(res.data.returnCode == '0') {
					this.$http.post('/student/import/save', {students: res.data.result}).then((res1) => {
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
			this.$http.get('/export/student', {
        params: {studentIds: this.selects},
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
			this.$http.get(`/student/info/${id}`).then((res) => {
				this.form = res.data.result
			})
		},
		submit(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.$http.post('student/save', this.form).then((res) => {
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
				this.$http.delete(`student/remove/${id}`).then((res) => {
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