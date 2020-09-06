import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'
import csearch from '@/components/search/bar/index.vue'
import cmemsearch from '@/components/search/member/index.vue'

export default {
	name: 'member',
	data() {
		return {
			summary: '成员(11)',
			nameSearch: false,
			search: {
				name: '',
				status: [],
				member: {
					type: '',
					data: [],
					all: true
				},
				age: 'all'
			},
			status: {
				data: [
					'全职',
					'兼职',
					'退休',
					'离职'
				],
				checkAll: false,
		  	isIndeterminate: false
			},
			ages: [
				{
          value: 'all',
          label: '全部'
        }, 
				{
          value: '35岁以下',
          label: '0-34'
        }, 
				{
          value: '35-45岁',
          label: '35-45'
        }, 
				{
          value: '45-55岁',
          label: '45-55'
        }, 
				{
          value: '55岁以上',
          label: '55-100'
        }
		  ],
			members: [
				{
					name: '貂蝉',
					age: '20',
					jobtitle: '讲师',
					job: '院长',
					status: '全职',
					bachelor: '硕士',
					department: '电子商务部',
					tags: ['长江学者','国家津贴科学家'],
					phone: '17076467711',
					johntime: '2009-08-02',
					paper: 4,
					subjectY: 9,
					softbook: 18,
					patent: 15,
					awards: 6,
					sawards: 13,
					conedu: 3,
					book: 2,
					subjectX: 6,
					news: 3,
					file: 10,
					other: 17,
					newresult: 1
				},
				{
					name: '王昭君',
					age: '18',
					jobtitle: '讲师',
					job: '院长',
					status: '全职',
					bachelor: '硕士',
					department: '电子商务部',
					tags: ['长江学者','国家津贴科学家'],
					phone: '17076467712',
					johntime: '2009-08-01',
					paper: 2,
					subjectY: 9,
					softbook: 8,
					patent: 5,
					awards: 7,
					sawards: 3,
					conedu: 2,
					book: 20,
					subjectX: 0,
					news: 6,
					file: 2,
					other: 8,
					newresult: 3
				},
				{
					name: '安琪拉',
					age: '6',
					jobtitle: '讲师',
					job: '院长',
					status: '全职',
					bachelor: '硕士',
					department: '电子商务部',
					tags: ['长江学者','国家津贴科学家'],
					phone: '17076467713',
					johntime: '2009-08-04',
					paper: 1,
					subjectY: 19,
					softbook: 8,
					patent: 2,
					awards: 2,
					sawards: 2,
					conedu: 13,
					book: 1,
					subjectX: 2,
					news: 10,
					file: 1,
					other: 12,
					newresult: 60
				},
				{
					name: '武则天',
					age: '22',
					jobtitle: '讲师',
					job: '院长',
					status: '全职',
					bachelor: '硕士',
					department: '电子商务部',
					tags: ['长江学者','国家津贴科学家'],
					phone: '17076467714',
					johntime: '2009-08-03',
					paper: 3,
					subjectY: 91,
					softbook: 5,
					patent: 5,
					awards: 16,
					sawards: 12,
					conedu: 7,
					book: 12,
					subjectX: 10,
					news: 1,
					file: 8,
					other: 6,
					newresult: 6
				}
			],
			jobs: [
				'院长',
				'副院长',
				'学院书记',
				'学院副书记',
				'系主任',
				'副系主任',
				'系支书',
				'研究所/实验室主任'
			],
			departments: [
				'电子商务系',
				'物流管理系'
			],
			tags: [
				'长江学者',
				'国家津贴科学家'
			]
		}
	},
	components: {
		cheader,
		caside,
		csearch,
		cmemsearch
	},
	methods: {
		toggleName() {
			this.nameSearch = !this.nameSearch
		},
		handleAllStatus(val) {
      this.search.status = val ? this.status.data : []
      this.status.isIndeterminate = false
    },
    handleStatus(value) {
      this.status.checkAll = value.length === this.status.data.length
      this.status.isIndeterminate = value.length > 0 && value.length < this.status.data.length
    },
		statusQuery() {
			this.$refs.statusTriggle.click()
		},
		searcher() {
			console.log(this.search)
		},
		agesort(obj0,obj1) {
      return obj0.age - obj1.age
		},
		phonesort(obj0,obj1) {
      return obj0.phone - obj1.phone
		},
		johnsort(obj0,obj1) {
			let [
				date0,
				date1
			] = [
				new Date(obj0.johntime).getTime(),
				new Date(obj1.johntime).getTime()
			]
      return date0 - date1
		},
		papersort(obj0,obj1) {
			return obj0.paper - obj1.paper
		},
		subjectYsort(obj0,obj1) {
			return obj0.subjectY - obj1.subjectY
		},
		softbooksort(obj0,obj1) {
			return obj0.softbook - obj1.softbook
		},
		patentsort(obj0,obj1) {
			return obj0.patent - obj1.patent
		},
		awardsort(obj0,obj1) {
			return obj0.awards - obj1.awards
		},
		sawardsort(obj0,obj1) {
			return obj0.sawards - obj1.sawards
		},
		conedusort(obj0,obj1) {
			return obj0.conedu - obj1.conedu
		},
		booksort(obj0,obj1) {
			return obj0.book - obj1.book
		},
		subjectXsort(obj0,obj1) {
			return obj0.subjectX - obj1.subjectX
		},
		newsort(obj0,obj1) {
			return obj0.news - obj1.news
		},
		filesort(obj0,obj1) {
			return obj0.file - obj1.file
		},
		othersort(obj0,obj1) {
			return obj0.other - obj1.other
		},
		newresultsort(obj0,obj1) {
			return obj0.newresult - obj1.newresult
		},
		del() {
			this.$confirm('将此成员移出团队后，将不会在团队的列表中显示其任何信息', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
      })
		}
	}
}