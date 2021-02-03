import qs from 'qs'
import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'
import ccontent from '@/components/content/index.vue'

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
			subjects: [],
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
			this.$http.get('/export/subject/x', {
        params: {subjectsIds: this.selects},
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