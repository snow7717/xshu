import qs from 'qs'
import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'
import csearch from '@/components/search/bar/index.vue'
import cmemsearch from '@/components/search/member/index.vue'
import ctimesearch from '@/components/search/time/index.vue'
import cfilter from '@/components/search/filter/index.vue'

export default {
	name: 'basistudent1',
	data() {
		return {
			summary: '学生信息',
			nameSearch: true,
			search: {
				name: ''
			},
			labelW: '70px',
			basis: [],
			total: 0,
			selects: [],
		  returnShow: false,
			reason: {
				type: '数据不全',
				description: ''
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
		this.index(1)
	},
	methods: {
		toggleName() {
			this.nameSearch = !this.nameSearch
		},	
		index(page) {
			this.$http.get(`/student1/page/${page}/10`,{params: {name: this.search.name}}).then((res) => {
				this.total = res.data.result.total
				this.basis = res.data.result.list
				console.log(this.basis)
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
			this.$http.post('/student1/import/pre',formData).then((res) => {
				if(res.data.returnCode == '0') {
					this.$http.post('/student1/import/save', {students: res.data.result}).then((res1) => {
						if(res1.data.returnCode == '0') {
							this.$message({
								message: res1.data.returnMsg,
								type: 'success'
							})
							this.index(1)
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
			this.$http.get('/export/achieve/12', {
        params: {achieveIds: this.selects},
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
		del(id) {
			this.$confirm('确定删除?', '', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
				this.$http.delete(`student1/remove/${id}`).then((res) => {
					if(res.data.returnCode == '0') {
						this.$message({
							type: 'success',
							message: '删除成功!'
						})
						setTimeout(() => {
							this.index(1)
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