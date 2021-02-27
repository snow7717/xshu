import ccontent from '@/components/content/index.vue'

export default {
	data() {
		return {
			url: {
				index: '/admin/role/list',
				show: '/admin/role/get',
				save: '/admin/role/save',
				del: '/admin/role/delete'
			},
			datas: [],
			operawidth: '0px'
		}
	},
	computed: {
		
	},
	watch: {
    
  },
	components: {
		ccontent
	},
	mounted() {},
	methods: {
		index(datas) {
			for(let item of datas) {
				this.$set(item,'editable',item.delyn)
				this.$set(item,'deleteable',item.delyn)
				item.useYn ? item.useYn = '已启用' : item.useYn = '已关闭'
			}
			this.datas = datas
		}
 	}
}