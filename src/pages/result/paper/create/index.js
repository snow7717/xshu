import cheader from '@/components/header1/index.vue'
import cupload from '@/components/upload/index.vue'

export default {
	name: 'papercreate',
	data() {
		return {
			uptitle: '论文上传',
			upintro: '请上传您发表的论文的重要信息：封面 / 目录 / 文章 / 封底，检索报告等。',
			form: {
				name: '',
				type: '',
				field: '',
				rank: '',
				single: true,
				book: '',
				record: [],
				created_at: '',
				doi: '',
				quote: '',
				keyword: '',
				page: '',
				subject: '',
				authors: [
					{
						rank: '',
						name: '',
						identity: '',
						coAuthor: false,
						together: false,
						units: ''
					}
				],
				sync: '',
				effect: '',
				volumn: '',
				issue: '',
				cn: '',
				abstract: '',
				remark: ''
			},
			rules: {
				name: [
				  { 
						required: true, 
						message: '请输入论文名', 
						trigger: 'blur' 
					},
				],
				type: [
					{ 
						required: true, 
						message: '请选择论文类型', 
						trigger: 'change' 
					},
				],
				rank: [
					{ 
						required: true, 
						message: '请输入本人排名', 
						trigger: 'blur' 
					},
				],
				book: [
					{ 
						required: true, 
						message: '请输入刊物名称', 
						trigger: 'blur' 
					},
				],
				created_at: [
					{ 
						required: true, 
						message: '请选择发表时间', 
						trigger: 'change' 
					},
				]
			}
		}
	},
	components: {
		cheader,
		cupload
	},
	methods: {
		addAuthor() {
			this.form.authors.push({
				rank: '',
				name: '',
				identity: '',
				coAuthor: false,
				together: false,
				units: ''
			})
		},
		removeAuthor(i) {
			this.form.authors.splice(i,1)
		},
		submit(form) {
			this.$refs[form].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          return false
        }
      })
		}
	}
}