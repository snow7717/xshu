import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'

export default {
	name: 'book',
	data() {
		return {
			windowH: 0,
			members: [
				{
					name: '老夫子',
					position: '战士',
					phone: 17076467717,
					email: '158109640@qq.com'
				},
				{
					name: '花木兰',
					position: '战士',
					phone: 17705454790,
					email: '158109640@qq.com'
				},
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