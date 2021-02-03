import qs from 'qs'
import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'
import ccontent from '@/components/content/index.vue'

export default {
	name: 'honor',
	data() {
		return {
			summary: '学生荣誉表彰',
			nameSearch: true,
			search: {
				name: ''
			},
			labelW: '70px',
			honors: [
				{
					//姓名
					name: 'lucy',
					//学历层次
					education: '大专',
					//班级
					class: '七班',
					//年级
					grade: '一年级',
					//专业
					profession: '电子科技',
					//学院
					school: '财经大学',
					//年度
					year: '2020',
					//表彰级别
					level: '国家级',
					//表彰类型
					type: '优秀干部',
					//备注
					remark: '无'
				}
			],
			total: 0,
			selects: []
		}
	},
	components: {
		cheader,
		caside,
		ccontent
	},
	created() {
		this.index(1)
	},
	methods: {
		toggleName() {
			this.nameSearch = !this.nameSearch
		},
		index(page) {
			this.$http.get(`/achieve/list/${page}/10`,{params: {type_id: 5, condition: this.search.name}}).then((res) => {
				this.total = res.data.result.total
			  this.seconds = res.data.result.list
			})
		},
		handlePapers(val) {
			this.selects = val.map((item) => {
				return item.id
			})
		},
		exporter() {
			this.$http.get('/export/achieve/5', {
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
				this.$http.delete(`achieve/delete/${id}`).then((res) => {
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