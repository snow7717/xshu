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
			src: ''
		}
	},
	methods: {
		fileSuccess(response, file, fileList) {
			console.log(fileList)
		}
	}
}