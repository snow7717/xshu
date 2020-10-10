import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'
import csearch from '@/components/search/bar/index.vue'
import cmemsearch from '@/components/search/member/index.vue'
import ctimesearch from '@/components/search/time/index.vue'
import cfilter from '@/components/search/filter/index.vue'

export default {
	name: 'research',
	data() {
		return {
			summary: '教研项目(77)',
			nameSearch: false,
			search: {
				name: '',
				time: '',
				member: {
					type: '',
					data: [],
					all: true
				},
				status: []
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
			researches: [
				{
					number: 100,
					title: '小学语文教育',
					source: '人民教育',
					cate: '教学',
					type: '教学研究',
					level: '国家级',
					principal: '诸葛亮',
					member: '凯',
					funding: 1000,
					created_at: '2019-09-09',
					until_at: '2020-09-09',
					status: '审核中',
					unitrank: 1,
					year: '2019'
				},
				{
					number: 100,
					title: '小学语文教育',
					source: '人民教育',
					cate: '教学',
					type: '教学研究',
					level: '国家级',
					principal: '诸葛亮',
					member: '凯',
					funding: 2000,
					created_at: '2019-09-11',
					until_at: '2020-09-11',
					status: '审核中',
					unitrank: 1,
					year: '2019'
				},
				{
					number: 100,
					title: '小学语文教育',
					source: '人民教育',
					cate: '教学',
					type: '教学研究',
					level: '国家级',
					principal: '诸葛亮',
					member: '凯',
					funding: 500,
					created_at: '2019-09-10',
					until_at: '2020-09-10',
					status: '审核中',
					unitrank: 1,
					year: '2019'
				}
			],
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