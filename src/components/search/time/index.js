export default {
	name: 'ctimesearch',
	props: {
		search: {
			type: Object
		}
	},
	data() {
		return {
			times: [
				{
					label: '2019-2020',
					value: '2019-2020'
				},
				{
					label: '2018-2019',
					value: '2018-2019'
				},
				{
					label: '2017-2018',
					value: '2017-2018'
				},
				{
					label: '2016-2017',
					value: '2016-2017'
				}
			]
		}
	}
}