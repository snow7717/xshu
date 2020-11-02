import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'
import csearch from '@/components/search/bar/index.vue'
import cmemsearch from '@/components/search/member/index.vue'
import ctimesearch from '@/components/search/time/index.vue'
import cfilter from '@/components/search/filter/index.vue'

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
		handleReturn() {
			this.returnShow = true
		},
		del() {
		  this.$confirm('将这份成果从成果列表中移除后，将不会在学院的列表中显示，并不会删除个人版中老师的文件，如需撤销移除，请前往成果移除回收站。', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
				confirmButtonClass: 'del-confirm',
        type: 'warning'
      }).then(() => {
      }).catch(() => {})
		}
	}
}