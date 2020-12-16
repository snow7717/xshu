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
			option1: {
				tooltip: {
					trigger: 'axis'
				},
				xAxis: {
					type: 'category',
					data: ["论文","软件著作权","专利","学生竞赛获奖","其他","科研奖励","著作教材","教研项目","教学奖励","课程","研究生课程","协同育人项目","研究成果获奖","教师访学","学生访学","教师参会","学生参会","合作协议","实习实践基地"]
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
					  data: [120, 200, 150, 80, 70, 110, 130,120, 200, 150, 80, 70, 110, 130,120, 200, 150, 80, 70, 110, 130],
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
						console.log(res.data.result)
						break	
				}
			})
		},
		seriesChange(val) {
			this.$refs.chart.clear()
		},
		yearChange(val) {
			
		}
	}
}