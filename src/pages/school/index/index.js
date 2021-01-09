import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
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
			series: [],
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
				series: []
			},
			year: new Date().getFullYear() + '',
			yearoption: {
				disabledDate (time) {
          return time.getTime() > Date.now()
        }
			},
			option1: {
				tooltip: {
					trigger: 'axis'
				},
				xAxis: {
					type: 'category',
					data: []
				},
				yAxis: {
					type: 'value'
				},
				grid: {
					top: '5%',
					left: '0%',
					right: '1.5%',
					bottom: '0%',
					containLabel: true
				},
				series: [
					{
					  data: [],
					  type: 'bar',
						label: {
							normal: {
								show: true,
								position: 'top'
							}
						}
				  }
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
	watch: {},
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
		this.barIndex()
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
					this.$set(item,'type','line')
					this.$set(item,'stack','总量')
					this.$set(item,'label',{
						normal: {
              show: true,
              position: 'top'
            }
					})
				}
				this.series = res.data.result.series
				this.$set(this.option.series,0,this.series[0])
			})
		},
		barIndex() {
			this.$http.get('/achieve/type/chart/bar',{params: {year: this.year}}).then((res) => {
				this.option1.xAxis.data = res.data.result.map((item) => {
					return item.name
				})
				this.option1.series[0].data = res.data.result.map((item) => {
					return item.value
				})
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
		},
		seriesChange(val) {
			this.$refs.chart.clear()
		},
		yearChange(val) {
			this.barIndex()
		}
	}
}