import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'
import csearch from '@/components/search/bar/index.vue'
import cmemsearch from '@/components/search/member/index.vue'
import ctimesearch from '@/components/search/time/index.vue'
import cfilter from '@/components/search/filter/index.vue'

export default {
	name: 'book',
	data() {
		return {
			summary: '著作/教材(77)',
			nameSearch: false,
			search: {
				name: '',
				time: '',
				member: {
					type: '',
					data: [],
					all: true
				},
				identities: [],
				types: [],
				unitranks: []
			},
			labelW: '90px',
			filters: [
				{
					label: '身份',
					field: 'identities',
					isIndeterminate: false,
					checkAll: false,
					data: [
						'总主编',
						'副主编',
						'主编',
						'参编',
						'其他'
					]
				},
				{
					label: '著作类型',
					field: 'types',
					isIndeterminate: false,
					checkAll: false,
					data: [
						'非教材',
						'普通教材',
						'省级规划教材',
						'国家级规划教材',
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
		  books: [
				{
					name: '王者荣耀',
					editor: '老夫子',
					secondeditor: '姜子牙',
					isbn: '23546',
					type: '教育材料',
					house: '人民教育出版社',
					pub_at: '2019-09-09',
					planning: '是',
					planame: '第三版语文课本'
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
		pubsort(obj0,obj1) {
			let [
				date0,
				date1
			] = [
				new Date(obj0.pub_at).getTime(),
				new Date(obj1.pub_at).getTime()
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