import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'

export default {
	name: 'rembox',
	data() {
		return {
			windowH: 0,
			results: [
				{
					uploader: '老夫子',
					type: '科学研究',
					title: '环境保护课题研究'
				},
				{
					uploader: '橘右京',
					type: '科学研究',
					title: '环境保护课题研究'
				}
			],
			checkedResults: []
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
		handleResults(value) {
			this.checkedResults = value
		}
	}
}