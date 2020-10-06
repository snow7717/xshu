export default {
	name: 'cmemsearch',
	props: {
		search: {
			type: Object
		}
	},
	data() {
		return {
			member: {
				active: 'first'
			},
			department: {
				keyword: '',
				data: [
					{
						key: '0',
						label: '全部',
						children: []
					}
				],
				checkeds: []
			},
			team: {
				keyword: '',
				data: [
					{
						key: '0',
						label: '全部',
						children: []
					}
				],
				checkeds: []
			},
			tag: {
				keyword: '',
				data: [
					{
						key: '0',
						label: '全部',
						children: []
					}
				],
				checkeds: []
			},
		}
	},
	watch: {
    'department.keyword'(val,oldval) {
      this.$refs.departree.filter(val)
    },
		'team.keyword'(val,oldval) {
      this.$refs.teamtree.filter(val)
    },
		'tag.keyword'(val,oldval) {
      this.$refs.tagtree.filter(val)
    }
  },
	mounted() {
		this.departIndex()
		this.teamIndex()
		this.tagIndex()
	},
	methods: {
		/*-- 获取教学系部及其下面的成员 --*/
		departIndex(){
			this.$http.get('/member/manage/tree/college').then((res) => {
				this.department.data[0].children = res.data.result
			})
		},
		/*-- 获取科研团队及其下面的成员 --*/
		teamIndex() {
			this.$http.get('/member/manage/tree/team').then((res) => {
				this.team.data[0].children = res.data.result
			})
		},
		/*-- 获取科研标签及其下面的成员 --*/
		tagIndex() {
			this.$http.get('/member/manage/tree/tag').then((res) => {
				this.tag.data[0].children = res.data.result
			})
		},
		filterTree(value, data) {
			if(value) {
				return data.label.indexOf(value) !== -1
			}else{
				return true
			}
    },
		memberQuery(key) {
			this.search.member.all = this.$refs[key].getCheckedKeys().indexOf(0) != -1 || this.$refs[key].getCheckedKeys().length == 0
			this.search.member.data = this.$refs[key].getCheckedKeys().filter((item) => {
				return item.indexOf('member') != -1
			})
			this.$refs.memberTriggle.click()
			this.$emit('search')
		}
	}
}