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
			rules: {},
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
		//this.ruleIndex()
	},
	methods: {
		init() {
			switch(this.type) {
				case '1':
					this.uptitle = '论文上传'
					this.upintro = '请上传您发表的论文的重要信息：封面 / 目录 / 文章 / 封底，检索报告等。'
					this.backurl = '/result/research/paper'
					break
				case '2':
					this.uptitle = '软件著作权上传'
					this.upintro = '请上传您著作权的证书。'
					this.backurl = '/result/research/soft'
					break	
				case '3':
					this.uptitle = '专利上传'
					this.upintro = '请上传您获得的专利证书。'
					this.backurl = '/result/research/patent'
					break	
				case '5':
					this.uptitle = '学生竞赛获奖上传'
					this.upintro = '请上传您指导学生获奖的荣誉/奖项等。'
					this.backurl = '/result/student/competition'
					break		
				case '7':
					this.uptitle = '著作上传'
					this.upintro = '请上传您发表过的著作的重要信息：封面/目录/正文/封底等。'
					this.backurl = '/result/research/book'
					break	
				case '12':
					this.uptitle = '科研奖励上传'
					this.upintro = ''
					this.backurl = '/result/research/award'
					break
				case '14':
					this.uptitle = '教研项目上传'
					this.upintro = ''
					this.backurl = '/result/teaching/research'
					break	
				case '15':
					this.uptitle = '教学奖励上传'
					this.upintro = ''
					this.backurl = '/result/teaching/award'
					break		
				case '16':
					this.uptitle = '课程上传'
					this.upintro = ''
					this.backurl = '/result/teaching/course'
					break			
				case '17':
					this.uptitle = '研究生课程上传'
					this.upintro = ''
					this.backurl = '/result/teaching/graduate'
					break				
				case '18':
					this.uptitle = '协同育人项目上传'
					this.upintro = ''
					this.backurl = '/result/teaching/colla'
					break					
				case '19':
					this.uptitle = '研究成果获奖上传'
					this.upintro = ''
					this.backurl = '/result/teaching/research'
					break			
				case '20':
					this.uptitle = '教师访学上传'
					this.upintro = ''
					this.backurl = '/result/visiting/teacher'
					break			
				case '21':
					this.uptitle = '学生访学上传'
					this.upintro = ''
					this.backurl = '/result/visiting/student'
					break				
				case '22':
					this.uptitle = '教师参会上传'
					this.upintro = ''
					this.backurl = '/result/visiting/attend'
					break						
				case '23':
					this.uptitle = '学生参会上传'
					this.upintro = ''
					this.backurl = '/result/visiting/sattend'
					break						
				case '24':
					this.uptitle = '合作协议上传'
					this.upintro = ''
					this.backurl = '/result/visiting/cooperation'
					break		
				case '25':
					this.uptitle = '实习实践基地上传'
					this.upintro = ''
					this.backurl = '/result/visiting/base'
					break			
			}
			this.$http.get(`/achieve/elements/${this.type}`).then((res) => {
				this.fields = res.data.result
				console.log(res.data.result)
				for(let item of this.fields) {
					switch (item.type) {
						case 'string':
							this.$set(this.form,item.key,'')
							break
						case 'array':
							this.$set(this.form,item.key,[])
							break
						case "bool":
							this.$set(this.form,item.key,false)
							break
					}
				}
			})
		},
		ruleIndex() {
			this.$http.get(`achieve/elements/rules/${this.type}`).then((res) => {
				this.rules = res.data.result
			})
		},
		addAuthor() {
			let author
			switch (this.type) {
				case '1':
					author = {
						author_seqn: '',
						author: '',
						author_identity: '',
						corres_yn: false,
						together_yn: false,
						units: ''
					}
					break
			}
			this.form.authors.push(author)
		},
		removeAuthor(i) {
			this.form.authors.splice(i,1)
		},
		submit(form) {
			this.$refs[form].validate((valid) => {
        if (valid) {
					this.form.imgs = this.$refs.upload.srcs
					this.$http.post('/achieve/save',{type: this.type, result: this.form}).then((res) => {
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