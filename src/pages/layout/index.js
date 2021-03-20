import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'

export default {
	name: 'layout',
	data() {
		return {
			from: ''
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
	beforeRouteEnter(to, from, next) {
    next(vm => {
		  vm.from = from.name
    })
  },
	created() {
	}
}