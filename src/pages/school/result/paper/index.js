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
			summary: '论文(77)',
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
			papers: [
				{
					uploader: '老夫子',
					rank: 3,
					title: '纳米二氧化钛处治汽车尾气效果与应用方法的研究',
					important: 0,
					book: '公路交通科学',
					record: 'SCI',
					created_at: '2011-09-10',
					number: 2,
					page: '1-10',
					author: 1,
					impact: 0,
					issn: '1231-1990',
					jcr: "",
					cjcr: '',
					wos: '',
					cn: '',
					doi: '',
					quote: 1,
					type: '期刊论文',
					keyword: '',
					natural: '否',
					unitrank: 2,
					firstauthor: '协和医院马超',
					comauthor: '长城守卫军花木兰',
					allauthor: '邪恶帝王嬴政',
					together: '否',
					single: '是',
					esi: '',
					abstract: '',
					issue: 12,
					field: '自然科学',
					upload_at: '2019-09-09',
					updated_at: '2019-09-08'
				},
				{
					uploader: '程咬金',
					rank: 1,
					title: '纳米二氧化钛处治汽车尾气效果与应用方法的研究',
					important: 1,
					book: '公路交通科学',
					record: 'SCI',
					created_at: '2011-09-11',
					number: 3,
					page: '1-10',
					author: 0,
					impact: 3,
					issn: '1231-1990',
					jcr: "",
					cjcr: '',
					wos: '',
					cn: '',
					doi: '',
					quote: 0,
					type: '期刊论文',
					keyword: '',
					natural: '否',
					unitrank: 10,
					firstauthor: '协和医院马超',
					comauthor: '长城守卫军花木兰',
					allauthor: '邪恶帝王嬴政',
					together: '否',
					single: '是',
					esi: '',
					abstract: '',
					issue: 10,
					field: '自然科学',
					upload_at: '2019-09-19',
					updated_at: '2019-09-05'
				},
				{
					uploader: '公孙离',
					rank: 2,
					title: '纳米二氧化钛处治汽车尾气效果与应用方法的研究',
					important: 4,
					book: '公路交通科学',
					record: 'SCI',
					created_at: '2011-03-01',
					number: 1,
					page: '1-10',
					author: 0,
					impact: 6,
					issn: '1231-1990',
					jcr: "",
					cjcr: '',
					wos: '',
					cn: '',
					doi: '',
					quote: 2,
					type: '期刊论文',
					keyword: '',
					natural: '否',
					unitrank: 1,
					firstauthor: '协和医院马超',
					comauthor: '长城守卫军花木兰',
					allauthor: '邪恶帝王嬴政',
					together: '否',
					single: '是',
					esi: '',
					abstract: '',
					issue: 10,
					field: '自然科学',
					upload_at: '2019-04-19',
					updated_at: '2019-07-05'
				},
			]
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
	}
}