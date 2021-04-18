import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'

export default {
	name: 'user',
	data() {
		return {
		}
	},
	computed: {
		active() {
			return this.$route.meta.active
		}
	},
	components: {
		cheader,
		caside
	},
	created() {
		
	}
}