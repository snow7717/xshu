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
			srcs: []
		}
	},
	methods: {
		fileSuccess(response, file, fileList) {
			console.log(fileList)
		},
		uploader(param) {
			let formData = new FormData()
			formData.append('files',param.file)
			this.$http.post('/achieve/up',formData).then((res) => {
				console.log(res)
			})
		},
	}
}