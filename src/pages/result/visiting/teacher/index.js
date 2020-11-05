import cheader from '@/components/header1/index.vue'
import csearch from '@/components/search/bar/index.vue'

export default {
	name: 'teacher1',
	data() {
		return {
			title: '教师访学',
			search: {
				name: ''
			},
			visitings: [],
			total: 0
		}
	},
	computed: {},
	components: {
		cheader,
		csearch
	},
	created() {
		this.index(1)
	},
	methods: {
		go(url) {
			this.$router.push({
				url: url
			})
		},
		/*-- 获取论文列表 --*/
		index(page) {
			this.$http.get(`/achieve/list/${page}/10/`, {params: {type_id: 20,condition: this.search.name}}).then((res) => {
				this.total = res.data.result.total
				this.visitings = res.data.result.list
			})
		},
		startsort(obj0,obj1) {
			let [
				date0,
				date1
			] = [
				new Date(obj0.start_at).getTime(),
				new Date(obj1.start_at).getTime()
			]
      return date0 - date1
		},
		endsort(obj0,obj1) {
			let [
				date0,
				date1
			] = [
				new Date(obj0.end_at).getTime(),
				new Date(obj1.end_at).getTime()
			]
      return date0 - date1
		},
		handlePapers(val) {
			this.selects = val
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