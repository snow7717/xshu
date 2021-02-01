import qs from 'qs'
import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'
import csearch from '@/components/bar/index.vue'

export default {
	name: 'competition',
	data() {
		return {
			summary: '.学生竞赛获奖',
			nameSearch: true,
			search: {
				name: ''
			},
			labelW: '70px',
			competitions: [
				{
					//姓名
					name: 'lucy',
					//层次
					level: '国家级',
					//班级
					class: '七班',
					//年级
					grade: '一年级',
					//专业
					profession: '电子工程',
					//竞赛名称
					competition: '算法大赛',
					//作品或项目名称
					project: '',
					//获奖等级
					awardgrade: '',
					//获奖时间
					awarded_at: '2020-09-09',
					//获奖年度
					year: '',
					//学生位次
					slevel: '',
					//指导教师
					teacher: '',
					//指导教师所在学院
					tschool: '',
					//是否有证书电子版
					ecert: '',
					//证书编号
					certno: '',
					//备注
					remark: ''
				}
			],
			total: 0,
			selects: []
		}
	},
	components: {
		cheader,
		caside,
		csearch
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
			  this.competitions = res.data.result.list
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