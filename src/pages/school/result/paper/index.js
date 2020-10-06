import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'
import csearch from '@/components/search/bar/index.vue'
import cmemsearch from '@/components/search/member/index.vue'
import ctimesearch from '@/components/search/time/index.vue'
import cfilter from '@/components/search/filter/index.vue'

export default {
	name: 'resultPaper',
	data() {
		return {
			summary: '论文',
			total: 0,
			nameSearch: false,
			search: {
				name: '',
				time: '',
				member: {
					type: '',
					data: [],
					all: true
				},
				lang: '',
				types: [],
				records: []
			},
			langs: [
				{
					lable: '全部',
					value: '全部'
				},
				{
					lable: '中文',
					value: '中文'
				},
				{
					lable: '英文',
					value: '英文'
				},
			],
			labelW: '70px',
			filters: [
				{
					label: '论文类型',
					field: 'types',
					isIndeterminate: false,
					checkAll: false,
					data: [
						'期刊论文',
						'会议论文集',
						'报纸',
						'学位论文'
					]
				},
				{
					label: '收录检索',
					field: 'records',
					isIndeterminate: false,
					checkAll: false,
					data: [
						'SCI',
						'SCIE',
						'SSCI',
						'ESCI'
					]
				}
			],
			papers: [],
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
		handleAll(value,field){
			let filter = this.filters.filter((item) => {
				return item.field == field
			})[0]
			this.search[field] = value ? filter.data : []
			filter.isIndeterminate = false
		},
		handleChange(value,field) {
			let filter = this.filters.filter((item) => {
				return item.field == field
			})[0]
			filter.checkAll = value.length == filter.data.length
      filter.isIndeterminate = value.length > 0 && value.length < filter.data.length
		},	
		searcher() {
			console.log(this.search)
		},
		/*-- 获取论文列表 --*/
		index(page) {
			this.$http.get(`/achieve/list/${page}/10/`, {params: {type_id: 1}}).then((res) => {
				this.total = res.data.result.total
				this.papers = res.data.result.list
			})
		},
		handlePapers(val) {
			console.log(val)
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
		uploadsort(obj0,obj1) {
			let [
				date0,
				date1
			] = [
				new Date(obj0.upload_at).getTime(),
				new Date(obj1.upload_at).getTime()
			]
      return date0 - date1
		},
		updatedsort(obj0,obj1) {
			let [
				date0,
				date1
			] = [
				new Date(obj0.updated_at).getTime(),
				new Date(obj1.updated_at).getTime()
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