import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'
import csearch from '@/components/search/bar/index.vue'
import cmemsearch from '@/components/search/member/index.vue'
import ctimesearch from '@/components/search/time/index.vue'
import cfilter from '@/components/search/filter/index.vue'

export default {
	name: 'resultSoft',
	data() {
		return {
			summary: '专利(77)',
			nameSearch: false,
			search: {
				name: '',
				time: '',
				member: {
					type: '',
					data: [],
					all: true
				},
				types: [],
				status: [],
				ranks: []
			},
			labelW: '90px',
			filters: [
				{
					label: '专利类型',
					field: 'types',
					isIndeterminate: false,
					checkAll: false,
					data: [
						'发明',
						'实用新型',
						'外观设计',
						'国际专利'
					]
				},
				{
					label: '专利状态',
					field: 'status',
					isIndeterminate: false,
					checkAll: false,
					data: [
						'已授权',
						'已受理',
						'已申请'
					]
				},
				{
					label: '本单位排名',
					field: 'ranks',
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
					title: '纳米二氧化钛处治汽车尾气效果与应用方法的研究',
					type: '发明',
					important: 0,
					number: '',
					auth_at: '2011-01-10',
					appli_at: '2011-01-10',
					rank: 2,
					appno: '222uiy',
					status: '已授权',
					owner: '河北经贸大学',
					unitrank: 2,
					allauthor: '邪恶帝王嬴政',
					upload_at: '2019-09-09',
					updated_at: '2019-09-08'
				},
				{
					uploader: '程咬金',
					title: '纳米二氧化钛处治汽车尾气效果与应用方法的研究',
					type: '发明',
					important: 0,
					number: '',
					auth_at: '2011-01-10',
					appli_at: '2011-01-10',
					rank: 2,
					appno: '222uiy',
					status: '已授权',
					owner: '河北经贸大学',
					unitrank: 2,
					allauthor: '邪恶帝王嬴政',
					upload_at: '2019-09-09',
					updated_at: '2019-09-08'
				},
				{
					uploader: '公孙离',
				  title: '纳米二氧化钛处治汽车尾气效果与应用方法的研究',
					type: '发明',
					important: 0,
					number: '',
					auth_at: '2011-01-10',
					appli_at: '2011-01-10',
					rank: 2,
					appno: '222uiy',
					status: '已授权',
					owner: '河北经贸大学',
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
		authsort(obj0,obj1) {
			let [
				date0,
				date1
			] = [
				new Date(obj0.auth_at).getTime(),
				new Date(obj1.auth_at).getTime()
			]
      return date0 - date1
		},
		applisort(obj0,obj1) {
			let [
				date0,
				date1
			] = [
				new Date(obj0.appli_at).getTime(),
				new Date(obj1.appli_at).getTime()
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