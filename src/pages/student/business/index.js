import qs from 'qs'
import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'
import ccontent from '@/components/content/index.vue'

export default {
	name: 'business',
	data() {
		return {
			summary: '实践创业成果',
			nameSearch: true,
			search: {
				name: ''
			},
			labelW: '70px',
			business: [
				{
					//年度
					year: '2020',
					//时间
					time: '2020-10-09',
					//团队名称
					team: 'ytg',
					//队长
					leader: '珍慕斯',
					//成员
					members: 'Lucy，lily',
					//指导教师
					teacher: 'Jenny',
					//团队获奖
					teamaward: '诺贝尔和平奖',
					//指导教师获奖
					teacheraward: '诺贝尔文学奖',
					//学生获奖
					sawrad: '诺贝尔物理学奖',
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