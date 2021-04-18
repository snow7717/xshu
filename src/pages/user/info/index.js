import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'

let valinumber = (rule, value, callback) => {  
  if (new RegExp(/^[+]{0,1}(\d+)$|^[+]{0,1}(\d+\.\d+)$/).test(value) || value == '') {
	  callback()
  }else{
		callback(new Error('该字段必须为大于0的数字'))
	}
}

export default {
	name: 'user',
	data() {
		return {
			windowH: 0,
			form: {},
			fields: [],
			rules: {},
		}
	},
	computed: {
		user() {
			return this.$store.state.user.userinfo
		}
	},
	components: {
		cheader,
		caside
	},
	mounted() {
		this.windowH = document.documentElement.clientHeight || document.body.clientHeight
	},
	created() {
		this.fieldIndex()
		this.show(this.user.id)
	},
	methods: {
		fieldIndex() {
			this.$http.get(`/form/elements/menu/bteacher`).then((res) => {
				this.fields = res.data.result
				this.initRules()
			})
		},
		initRules() {
			let rqueireds = this.fields.filter((item) => {
				return item.isrequired == true
			})
			for(let item of rqueireds) {
				this.$set(this.rules,item.keyer,[{
					required: true,
					message: item.tag == 'input' ? `请输入${item.label}` : `请选择${item.label}`,
					trigger: item.tag == 'input' ? 'blur' : 'change'
				}])
			}
			let numbers = this.fields.filter((item) => {
				return item.type == 'number'
			})
			for(let item of numbers) {
				if(this.rules[item.keyer]) {
					this.rules[item.keyer].push({
						validator: valinumber,
						trigger: item.tag == 'input' ? 'blur' : 'change'
					})
				}else{
					this.$set(this.rules,item.keyer,[{
						validator: valinumber,
						trigger: item.tag == 'input' ? 'blur' : 'change'
					}])
				}
			}
		},
		show(id) {
			this.$http.get(`/bteacher/get/${id}`).then((res) => {
				this.form = res.data.result
			})
		},
		submit(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.$http.post('/bteacher/post', this.form).then((res) => {
						if(res.data.returnCode == '0') {
							this.$message({
								message: res.data.returnMsg,
								type: 'success'
							})
						}else{
							this.$message({
								message: res.data.returnMsg,
								type: 'warning'
							})
						}
					})
        } else {
          return false
        }
      })
    },
	}
}