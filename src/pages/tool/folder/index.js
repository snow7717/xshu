import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'

export default {
	name: 'folder',
	data() {
		return {
			windowH: 0,
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
		
	}
}