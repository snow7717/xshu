import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'

export default {
	name: 'teaminfo',
	data() {
		return {
			windowH: 0,
			form0: {
				name: '',
				ename: '',
				team: '',
				eteam: '',
				logo: ''
			},
			rules0: {
				name: [
					{
						required: true,
						message: '请输入单位名称',
						trigger: 'blur'
					}
				],
				team: [
					{
						required: true,
						message: '请输入团队名称',
						trigger: 'blur'
					}
				],
				logo: [
					{
						required: true,
						message: '情上传团队logo',
						trigger: 'change'
					}
				]
			},
			form1: {
				question: '',
				answer: ''
			},
			rules1: {
				question: [
					{
						required: true,
						message: '请输入问题',
						trigger: 'blur'
					}
				],
				answer: [
					{
						required: true,
						message: '请输入答案',
						trigger: 'blur'
					}
				]
			},
			admins: [
				{
					name: '司马懿',
					type: '超级管理员',
					phone: '17076467717'
				},
				{
					name: '沈梦溪',
					type: '管理员',
					phone: '17705454790'
				},
				{
					name: '不知火舞',
					type: '管理员',
					phone: '17705454791'
				},
			],
			adminShow: false,
			teacher: {
				searchWord: '',
				isIndeterminate: false,
				data: [
					{
						name: '司马懿',
						phone: '17076467717'
					},
					{
						name: '沈梦溪',
						phone: '17705454790'
					},
					{
						name: '不知火舞',
						phone: '17705454791'
					},
					{
						name: '韩信',
						phone: '17705454792'
					},
					{
						name: '虞姬',
						phone: '17705454793'
					}
				],
				checkAll: false,
			  checkeds: []
			}
		}
	},
	components: {
		cheader,
		caside
	},
	mounted() {
		this.windowH = document.documentElement.clientHeight || document.body.clientHeight
	},
	methods: {
		handleAvatar(res, file) {
      this.form0.logo = URL.createObjectURL(file.raw)
    },
    beforeAvatar(file) {
      const isLt2M = file.size / 1024 / 1024 < 2
      if (isLt2M) {
        return true
      }else{
				this.$message.error('上传头像图片大小不能超过 2MB!')
			}
    },
		submit(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          return false
        }
      })
    },
		del(admin) {
			this.$confirm('确定删除该管理员?', '', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
				showClose: false,
        type: 'warning'
      }).then(() => {
      }).catch(() => {      
      })
		},
		handleAdd() {
		  this.adminShow = true	
		},
		teacherAll(val) {
      this.teacher.checkeds = val ? this.teacher.data : []
      this.teacher.isIndeterminate = false
    },
    teacherChange(value) {
      this.teacher.checkAll = value.length === this.teacher.data.length
      this.teacher.isIndeterminate = value.length > 0 && value.length < this.teacher.data.length
    },
		confirmAdd() {
			this.adminShow = false
			console.log(this.teacher.checkeds)
		}
	}
}