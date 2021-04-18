import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'

export default {
	name: 'setting',
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