import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'
import csearch from '@/components/search/bar/index.vue'
import cmemsearch from '@/components/search/member/index.vue'

export default {
	name: 'member',
	data() {
		return {
			summary: '成员',
			nameSearch: false,
			search: {
				name: '',
				status: [],
				member: {
					type: '',
					data: [],
					all: true
				},
				age: '0-100'
			},
			closeShow: true,
			total: 0,
			status: {
				data: [
					'全职',
					'兼职',
					'退休',
					'离职'
				],
				checkAll: true,
		  	isIndeterminate: false
			},
			ages: [
				{
          label: '全部',
          value: '0-100'
        }, 
				{
          label: '35岁以下',
          value: '0-34'
        }, 
				{
          label: '35-45岁',
          value: '35-45'
        }, 
				{
          label: '45-55岁',
          value: '45-55'
        }, 
				{
          label: '55岁以上',
          value: '55-100'
        }
		  ],
			members: [
			],
			jobs: [
				'院长',
				'副院长',
				'学院书记',
				'学院副书记',
				'系主任',
				'副系主任',
				'系支书',
				'研究所/实验室主任',
				'研究所/实验室副主任',
				'科研秘书',
				'院长助理',
				'其他',
				'无'
			],
			departments: [],
			tags: []
		}
	},
	computed: {
		user() {
			return this.$store.state.user
		}
	},
	components: {
		cheader,
		caside,
		csearch,
		cmemsearch
	},
	created() {
		this.departIndex()
		this.tagIndex()
		this.index(1)
	},
	methods: {
		go(url) {
			this.$router.push(url)
		},
		/*--获取所有系部--*/
		departIndex() {
			this.$http.get('/team/college/list',{params: {name: '', type: 2, superior: ''}}).then((res) => {
				this.departments = res.data.result
			})
		},
		/*-- 获取所有标签 --*/
		tagIndex() {
			this.$http.get('/tags/list', {params: {tagname: ''}}).then((res) => {
				this.tags = res.data.result
			})
		},
		toggleName() {
			this.nameSearch = !this.nameSearch
			if(this.nameSearch == false) {
				this.search.name = ''
				this.index(1)
			}
		},
		handleAllStatus(val) {
      this.search.status = val ? this.status.data : []
      this.status.isIndeterminate = false
    },
    handleStatus(value) {
      this.status.checkAll = value.length === this.status.data.length
      this.status.isIndeterminate = value.length > 0 && value.length < this.status.data.length
    },
		query(ref) {
			this.$refs[ref].click()
			this.index(1)
		},
		/*-- 获取成员列表 --*/
		index(page) {
			this.$http.get(`/member/manage/list/${page}/10/`, {params: {name: this.search.name, jobtypes: this.search.status.toString(), age1: this.search.age.split('-')[0], age2: this.search.age.split('-')[1], userids: this.search.member.data.toString().replace(/member_/,'')}}).then((res) => {
				this.total = res.data.result.total
				this.members = []
				for(let item of res.data.result.list){
					this.members.push({
						teamid: item.teamid,
						userid: item.userid,
						name: item.name,
						age: item.age,
						jobtitle: item.title,
						job: item.position,
						jobnum: item.jobnum,
						status: item.jobtype,
						bachelor: item.degree,
						department: item.collegeid,
						tags: item.tags,
						phone: item.tel,
						jointime: item.jointime
					})
				}
			})
		},
		/*-- 更新成员信息 --*/
		edit(member,method) {
			this.$http.post(`/user/${method}`,{userid:member.userid, position: member.job, jobtype: member.status, collegeid: member.department, tags: member.tags}).then((res) => {
				if(res.data.returnCode == 0) {
					this.$message({
						type: 'success',
						message: res.data.returnMsg
					})
				}else{
					this.$message({
						type: 'success',
						message: res.data.returnMsg
					})
				}
			})
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
				new Date(obj0.jointime).getTime(),
				new Date(obj1.jointime).getTime()
			]
      return date0 - date1
		},
		/*-- 导出 --*/
		importer(type) {
			switch (type){
				case 'excel':
					this.$http.get('/export/users').then((res) => {
						window.location.href = res.data.result
					})
					break
			}
		},
		del(member) {
			this.$confirm('将此成员移出团队后，将不会在团队的列表中显示其任何信息', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
			  this.$http.post(`/user/remove/${member.userid}`).then((res) => {
					if(res.data.returnCode == 0) {
						this.$message({
							type: 'success',
							message: res.data.returnMsg
						})
						this.index(1)
					}else{
						this.$message({
							type: 'error',
							message: res.data.returnMsg
						})
					}
				})
      }).catch(() => {
      })
		}
	}
}