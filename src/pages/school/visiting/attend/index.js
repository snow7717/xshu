import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'
import csearch from '@/components/search/bar/index.vue'
import cmemsearch from '@/components/search/member/index.vue'
import ctimesearch from '@/components/search/time/index.vue'
import cfilter from '@/components/search/filter/index.vue'

export default {
	name: 'attend',
	data() {
		return {
			summary: '教师参会',
			nameSearch: true,
			search: {
				name: ''
			},
			labelW: '70px',
			attends: [
				{
					number: '100',
					name: '百里玄策',
					department: '山东大学化学部',
					meetingname: '欧盟峰会',
					address: '上海',
					unit: '中国西部战区',
					start_at: '2019-09-09',
					back_at: '2020-09-09',
					speak: '是',
					topic: '关于削减核武器议题'
				}
			],
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
			this.$http.get(`/achieve/list/${page}/10`,{params: {type_id: 22, condition: this.search.name}}).then((res) => {
				this.total = res.data.result.total
				this.attends = res.data.result.list
			})
		},
		handlePapers(val) {
			this.selects = val.map((item) => {
				return item.id
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
		backsort(obj0,obj1) {
			let [
				date0,
				date1
			] = [
				new Date(obj0.back_at).getTime(),
				new Date(obj1.back_at).getTime()
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