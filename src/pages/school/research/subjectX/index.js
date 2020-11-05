import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'
import csearch from '@/components/search/bar/index.vue'
import cmemsearch from '@/components/search/member/index.vue'
import ctimesearch from '@/components/search/time/index.vue'
import cfilter from '@/components/search/filter/index.vue'

export default {
	name: 'subjectX',
	data() {
		return {
			summary: '横向科研项目',
			nameSearch: true,
			search: {
				name: ''
			},
			labelW: '70px',
			filters: [
				{
					label: '课题状态',
					field: 'status',
					isIndeterminate: false,
					checkAll: false,
					data: [
						'在研',
						'结题'
					]
				}
			],
			subjects: [],
			total: 0,
			selects: [],
		  returnShow: false,
			reason: {
				type: '数据不全',
				description: ''
			},
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
		index(page) {
			this.$http.get(`/subjects/page/${page}/10`,{params: {xy: 'x', 'title': this.search.name}}).then((res) => {
				this.total = res.data.result.total
				this.subjects = res.data.result.list
			})
		},
		toggleName() {
			this.nameSearch = !this.nameSearch
		},
		handlePapers(val) {
			this.selects = val.map((item) => {
				return item.id
			})
		},
		exporter() {
			if(this.selects.length == 0) {
				this.$message('请选择要导出的数据')
			}else{
				this.$http.get('/export/subject/x',{params: {subjectsIds: this.selects}}).then((res) => {
					console.log(res)
				})
			}
		},
		createdsort(obj0,obj1) {
			let [
				date0,
				date1
			] = [
				new Date(obj0.created_at).getTime(),
				new Date(obj1.created_at).getTime()
			]
      return date0 - date1
		},
		untilsort(obj0,obj1) {
			let [
				date0,
				date1
			] = [
				new Date(obj0.until_at).getTime(),
				new Date(obj1.until_at).getTime()
			]
      return date0 - date1
		},
		handleReturn() {
			this.returnShow = true
		},
		del(id) {
			this.$confirm('确定删除?', '', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
				this.$http.delete(`subjects/delete/${id}`).then((res) => {
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