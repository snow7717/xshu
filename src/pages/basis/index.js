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
				template: `/import/get/template/${this.$route.name}`,
				importpre: `/${this.$route.name}/import/pre`,
				importsave: `/${this.$route.name}/import/save`,
				exporter: `/export/${this.$route.name}`,
				show: `/${this.$route.name}/get`,
				save: `/${this.$route.name}/post`,
				del: `/${this.$route.name}/delete`
			}
		}
	},
	components: {
		ccontent
	},
	created() {
		var a = 2;
function a() {
    console.log(3);
}
console.log(typeof a);
	},
	mounted() {
	},
	methods: {
		index(datas) {
			for(let item of datas) {
				this.$set(item,'editable',true)
				this.$set(item,'deleteable',true)
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