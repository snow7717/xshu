import cheader from '@/components/header1/index.vue'
import cupload from '@/components/upload/index.vue'

export default {
	name: 'papercreate',
	data() {
		return {
			uptitle: '',
			upintro: '',
			backurl: '',
			form: {
				//附件
				imgs: [],
				//作者信息
				authors: [
					{
						//本人排名
						author_seqn: '',
						//作者姓名
						author: '',
						//作者身份
						author_identity: '',
						//通讯作者
						corres_yn: false,
						//共同一作
						together_yn: false,
						//单位名称
						units: ''
					}
				]
			},
			rules: {
				title: [
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
			},
			fields: []
		}
	},
	computed: {
		type() {
			return this.$route.params.type
		}
	},
	components: {
		cheader,
		cupload
	},
	created() {
		this.init()
	},
	methods: {
		init() {
			switch(this.$route.params.type) {
				case '1':
					this.uptitle = '论文上传'
					this.upintro = '请上传您发表的论文的重要信息：封面 / 目录 / 文章 / 封底，检索报告等。'
					this.backurl = '/paper'
					break
			}
			this.$http.get('/achieve/elements/1').then((res) => {
				this.fields = res.data.result
				console.log(this.fields)
				for(let item of this.fields) {
					switch (item.type) {
						case 'string':
							this.form[item.key] = ''
							break
						case 'array':
							this.form[item.key] = []
							break
						case "bool":
							this.form[item.key] = false
							break
					}
				}
			})
		},
		addAuthor() {
			this.form.authors.push({
				author_seqn: '',
				author: '',
				author_identity: '',
				corres_yn: false,
				together_yn: false,
				units: ''
			})
		},
		removeAuthor(i) {
			this.form.authors.splice(i,1)
		},
		submit(form) {
			this.$refs[form].validate((valid) => {
        if (valid) {
					this.form.imgs = this.$refs.upload.srcs
					this.$http.post('/achieve/save',{type: this.$route.params.type, result: this.form}).then((res) => {
						if(res.data.returnCode == 0) {
							this.$message({
								message: res.data.returnMsg,
								type: 'success'
							})
							setTimeout(() => {
								this.$router.push(this.backurl)
							},1500)
						}else{
							this.$message({
								message: res.data.returnMsg,
								type: 'warn'
							})
						}
					})
        } else {
          return false
        }
      })
		}
	}
}