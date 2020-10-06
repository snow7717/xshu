import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'
import csearch from '@/components/search/bar/index.vue'
import cmemsearch from '@/components/search/member/index.vue'
import ctimesearch from '@/components/search/time/index.vue'
import cfilter from '@/components/search/filter/index.vue'

export default {
	name: 'resultAward',
	data() {
		return {
			summary: '个人获奖(77)',
			nameSearch: false,
			search: {
				name: '',
				time: '',
				member: {
					type: '',
					data: [],
					all: true
				},
				rankings: [],
				levels: [],
				unitranks: []
			},
			labelW: '90px',
			filters: [
				{
					label: '获奖名次',
					field: 'rankings',
					isIndeterminate: false,
					checkAll: false,
					data: [
						'一等奖',
						'二等奖',
						'三等奖'
					]
				},
				{
					label: '级别',
					field: 'levels',
					isIndeterminate: false,
					checkAll: false,
					data: [
						'国际级',
						'国家级',
						'省级',
						'市厅级',
						'校级',
						'其他'
					]
				},
				{
					label: '本单位排名',
					field: 'unitranks',
					isIndeterminate: false,
					checkAll: false,
					data: [
						'第一名',
						'第二名',
						'第三名',
						'第四名',
						'其他'
					]
				}
			],
		  patents: [
				{
					uploader: '老夫子',
					title: '全国优秀高校教师奖',
					type: '一等奖',
					important: 0,
					level: '国家级',
					unit: '教育部',
					award_at: '2011-01-10',
					rank: 2,
					unitrank: 2,
					allauthor: '邪恶帝王嬴政',
					upload_at: '2019-09-09',
					updated_at: '2019-09-08'
				},
				{
					uploader: '程咬金',
					title: '全国优秀高校教师奖',
					type: '一等奖',
					important: 0,
					level: '国家级',
					unit: '教育部',
					award_at: '2011-01-10',
					rank: 2,
					unitrank: 2,
					allauthor: '邪恶帝王嬴政',
					upload_at: '2019-09-09',
					updated_at: '2019-09-08'
				},
				{
					uploader: '公孙离',
				  title: '全国优秀高校教师奖',
					type: '一等奖',
					important: 0,
					level: '国家级',
					unit: '教育部',
					award_at: '2011-01-10',
					rank: 2,
					unitrank: 2,
					allauthor: '邪恶帝王嬴政',
					upload_at: '2019-09-09',
					updated_at: '2019-09-08'
				},
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
		awardsort(obj0,obj1) {
			let [
				date0,
				date1
			] = [
				new Date(obj0.award_at).getTime(),
				new Date(obj1.award_at).getTime()
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