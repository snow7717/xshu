import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'

export default {
	name: 'index',
	data() {
		return {
			name: '',
			windowH: 0,
			dataH: '128px',
			datas: [],
			option: {
				tooltip: {
					trigger: 'axis'
				},
				legend: {
					data: [],
					top: 'bottom'
				},
				grid: {
					top: '3%',
					left: '0%',
					right: '1.5%',
					bottom: '10%',
					containLabel: true
				},
				toolbox: {
					feature: {
					  saveAsImage: {}
					}
				},
				xAxis: {
					type: 'category',
					boundaryGap: false,
					data: ['2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020']
				},
				yAxis: {
					type: 'value'
				},
				series: [
				  
				]
			},
			top: {
				result: [],
				paper: [],
				soft: [],
				patent: []
			}
		}
	},
	computed: {
		user() {
			return this.$store.state.user
		}
	},
	components: {
		cheader,
		caside,
	},
	mounted() {
		this.windowH = document.documentElement.clientHeight || document.body.clientHeight
	},
	created() {
		this.dataIndex()
		this.chartIndex()
		this.topIndex(0)
		this.topIndex(1)
		this.topIndex(2)
		this.topIndex(3)
	},
	methods: {
		toggleData() {
			this.dataH == 'auto' ? this.dataH = '128px' : this.dataH = 'auto'
		},
		dataIndex() {
			this.$http.post("/achieve/type/analysis").then(res => {
				this.datas = res.data.result
			})
		},
		chartIndex() {
			this.$http.post('/achieve/type/chart/line').then(res => {
				this.option.legend.data = res.data.result.legend
				this.option.xAxis.data = res.data.result.years
				for(let item of res.data.result.series) {
					item.type = 'line'
					item.stack = '总量'
				}
				this.option.series = res.data.result.series
			})
		},
		topIndex(type) {
			this.$http.post(`/achieve/top/5/${type}`).then(res => {
				switch(parseInt(type)) {
					case 0:
						this.top.result = res.data.result
						break
					case 1:
						this.top.paper = res.data.result
						break
					case 2:
						this.top.soft = res.data.result
						break
					case 3:
						this.top.patent = res.data.result
						break	
				}
			})
		}
	}
}