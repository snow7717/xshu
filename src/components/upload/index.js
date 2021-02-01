export default {
	name: 'cupload',
	props: {
		title: {
			type: String
		},
		intro: {
			type: String
		}
	},
	data() {
		return {
			dialogImageUrl: '',
			srcs: [],
			src: ''
		}
	},
	methods: {
		fileSuccess(response, file, fileList) {},
		uploader(param) {
			let formData = new FormData()
			formData.append('files',param.file)
			this.$http.post('/achieve/up',formData).then((res) => {
				this.srcs = this.srcs.concat(res.data.result)
				this.src = res.data.result[0].url
			})
		},
		handlePreview(file) {
			this.src = file.url
		},
		beforeRemove(file,fileList) {
			let i = fileList.indexOf(file)
			if(file.url == this.src){
				this.src = ''
			}
			this.srcs.splice(i,1)
		}
	}
}