import ccontent from '@/components/content/index.vue'

export default {
	data() {
		return {
			url: {
				index: '/admin/menu/page',
				importpre: '',
				importsave: '',
				exporter: '',
				show: '/admin/menu/get',
				save: '/admin/menu/save',
				del: '/admin/menu/delete'
			},
			datas: [],
			labelW: '100px',
		}
	},
	components: {
		ccontent
	},
	created() {},
	mounted() {},
	methods: {
		index(datas) {
			console.log(datas)
			for(let item of datas) {
				this.$set(item,'editable',true)
				this.$set(item,'deleteable',true)
				item.level == 1 ? item.level = '一级菜单' : item.level = '二级菜单'
				item.parent = item.parentname
				item.permissions = item.permissionstr.toString()
			}
			this.datas = datas
		}
	}
}