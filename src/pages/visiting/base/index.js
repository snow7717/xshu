import qs from 'qs'
import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'
import ccontent from '@/components/content/index.vue'

export default {
	name: 'baser',
	data() {
		return {
			summary: '实习实践基地',
			nameSearch: true,
			search: {
				name: ''
			},
			labelW: '70px',
			bases: [
				{
					// 基地名称
					base: '中国社会科学院',
					// 专业名称
					profession: '历史学',
					//签约时间
					sign_at: '2019-09-09',
					// 合作周期
					cycle: '一年',
					//基地地点
					address: '山东泰安',
					// 实习成就
					effect: '没有成效'
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
			this.$http.get(`/achieve/list/${page}/10`,{params: {type_id: 25, condition: this.search.name}}).then((res) => {
				this.total = res.data.result.total
				this.bases = res.data.result.list
			})
		},
		handlePapers(val) {
			this.selects = val.map((item) => {
				return item.id
			})
		},
		exporter() {
			this.$http.get('/export/achieve/25', {
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
		signsort(obj0,obj1) {
			let [
				date0,
				date1
			] = [
				new Date(obj0.sign_at).getTime(),
				new Date(obj1.sign_at).getTime()
			]
      return date0 - date1
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