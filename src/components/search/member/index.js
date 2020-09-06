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
						key: 0,
						label: '全部',
						children: [
							{
								key: 1,
								label: '电子商务系',
								children: [
									{
										key: '1-1',
										label: '马保国'
									},
									{
										key: '1-2',
										label: '貂蝉'
									}
								]
							},
							{
								key: '2',
								label: '物流管理系',
								children: [
									{
										key: '2-1',
										label: '吕布'
									},
									{
										key: '2-2',
										label: '狂铁'
									}
								]
							}
						]
					}
				],
				checkeds: [0]
			},
			team: {
				keyword: '',
				data: [
					{
						key: 0,
						label: '全部',
						children: [
							{
								key: '1',
								label: '阿里巴巴科研队',
								children: [
									{
										key: '1-1',
										label: '马保国'
									},
									{
										key: '1-2',
										label: '貂蝉'
									}
								]
							}
						]
					}
				],
				checkeds: [0]
			},
			tag: {
				keyword: '',
				data: [
					{
						key: 0,
						label: '全部',
						children: [
							{
								key: '1',
								label: '长江学者',
								children: [
									{
										key: '1-1',
										label: '马保国'
									},
									{
										key: '1-2',
										label: '貂蝉'
									}
								]
							},
							{
								key: '2',
								label: '国家津贴科学家',
								children: [
									{
										key: '2-1',
										label: '吕布'
									},
									{
										key: '2-2',
										label: '狂铁'
									}
								]
							}
						]
					}
				],
				checkeds: [0]
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
	methods: {
		filterTree(value, data) {
			if(value) {
				return data.label.indexOf(value) !== -1
			}else{
				return true
			}
    },
		memberQuery(key) {
			this.search.member.all = this.$refs[key].getCheckedKeys().indexOf(0) != -1
			this.$refs.memberTriggle.click()
		}
	}
}