import cheader from '@/components/header1/index.vue'
import ctab from '@/components/tab1/index.vue'

export default {
	name: 'paper',
	data() {
		return {
			title: '论文 3',
			recycle: '草稿箱 0',
			ranks: [
				'第一名+独著',
				'第一名+通讯作者',
				'前三名+通讯作者',
				'全部'
			],
			labelW: '80px',
			filters: [
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
				},
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
					label: '语言类型',
					field: 'langs',
					isIndeterminate: false,
					checkAll: false,
					data: [
						'中文成果',
						'英文成果'
					]
				}
			],
			search: {
				time: '',
				rank: '',
				types: [],
				records: [],
				langs: []
			},
			papers: [
				{
					important: '23',
					title: '国际金融管理',
					rank: '1',
					created_at: '2019-09-09'
				},
				{
					important: '23',
					title: '国际金融管理',
					rank: '1',
					created_at: '2019-09-09'
				},
				{
					important: '23',
					title: '国际金融管理',
					rank: '1',
					created_at: '2019-09-09'
				},
				{
					important: '23',
					title: '国际金融管理',
					rank: '1',
					created_at: '2019-09-09'
				},
			],
			drafts: [
				
			]
		}
	},
	computed: {
		clearShow() {
			for(let i in this.search) {
				if(this.search[i].length > 0) {
					return true
				}
			}
			return false
		}
	},
	components: {
		cheader,
		ctab
	},
	methods: {
		go(url) {
			this.$router.push({
				url: url
			})
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
		clearSearch() {
			for(let i in this.search) {
				if(typeof(this.search[i]) == 'string') {
				  this.search[i] = ''
			  }else{
					this.search[i] = [] 
				}
			}
			for(let item of this.filters) {
				item.checkAll = false
				item.isIndeterminate = false
			}
		}
	}
}