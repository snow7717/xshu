import 'echarts/lib/chart/line'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/legend'
import cheader from '@/components/header/index.vue'
import caside from '@/components/aside/index.vue'

export default {
	name: 'index',
	data() {
		return {
			name: 'hello',
			windowH: 0,
			dataH: '128px',
			option: {
				tooltip: {
					trigger: 'axis'
				},
				legend: {
					data: ['论文', '纵向课题', '专利', '著作', '软件著作权', '个人获奖', '学生获奖', '横向课题', '新闻报道', '档案资料', '继续教育材料'],
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
				  {
					  name: '论文',
						type: 'line',
					  stack: '总量',
						data: [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230]
					},
					{
						name: '纵向课题',
						type: 'line',
						stack: '总量',
						data: [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330]
					},
					{
						name: '专利',
						type: 'line',
						stack: '总量',
						data: [150, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154, 190, 330]
					},
					{
						name: '著作',
						type: 'line',
						stack: '总量',
						data: [320, 332, 301, 334, 390, 330, 320, 320, 332, 301, 334, 390, 330, 320, 320, 332, 301, 334, 390, 330]
					},
					{
						name: '软件著作权',
						type: 'line',
						stack: '总量',
						data: [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330]
					},
					{
						name: '个人获奖',
						type: 'line',
						stack: '总量',
						data: [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330]
					},
					{
						name: '学生获奖',
						type: 'line',
						stack: '总量',
						data: [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330]
					},
					{
						name: '横向课题',
						type: 'line',
						stack: '总量',
						data: [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330]
					},
					{
						name: '新闻报道',
						type: 'line',
						stack: '总量',
						data: [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330]
					},
					{
						name: '档案资料',
						type: 'line',
						stack: '总量',
						data: [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330]
					},
					{
						name: '继续教育材料',
						type: 'line',
						stack: '总量',
						data: [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290, 1330]
					}
				]
			}
		}
	},
	computed: {
		
	},
	components: {
		cheader,
		caside,
	},
	mounted() {
		this.windowH = document.documentElement.clientHeight || document.body.clientHeight
	},
	created() {
		
	},
	methods: {
		toggleData() {
			this.dataH == 'auto' ? this.dataH = '128px' : this.dataH = 'auto'
		}
	}
}