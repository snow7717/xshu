import ccontent from '@/components/content/index.vue'

export default {
	data() {
		return {
			datas: []
		}
	},
	computed: {
		url() {
			return {
				index: `/${this.$route.name}/page`,
				exporter: `/export/${this.$route.name}`,
				show: `/bstudent/get`,
			}
		}
	},
	components: {
		ccontent
	},
	created() {
	},
	mounted() {
	},
	methods: {
		index(datas) {
			for(let item of datas) {
				this.$set(item,'editable',false)
				this.$set(item,'deleteable',false)
				if(item.campusid) {
					item.campusid = item.campus
				}
				if(item.schoolid) {
					item.schoolid = item.school
				}
				if(item.professionid) {
					item.professionid = item.profession
				}
			}
			this.datas = datas
		}
	}
}