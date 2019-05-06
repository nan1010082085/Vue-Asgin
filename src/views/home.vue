<template>
	<div class="main-container-warp mtb10">
		<h2>简单示例G2图表使用</h2> <i class="intro">更多G2图表参考 -- </i><a class="intro-a" href="https://antv.alipay.com/zh-cn/g2/3.x/index.html" target="_blank">地址</a>
		<Row>
			<Col :span="12">
				<h2>基础柱状图</h2>
				<Card class="home-g2-item">
					<div id="bar"></div>
				</Card>
			</Col>
			<Col :span="12">
				<h2>基础折线图</h2>
				<Card class="home-g2-item">
					<div id="line"></div>
				</Card>
			</Col>
			<Col :span="12">
				<h2>基础条形图</h2>
				<Card class="home-g2-item">
					<div id="item"></div>
				</Card>
			</Col>
			<Col :span="12">
				<h2>基础饼图</h2>
				<Card class="home-g2-item">
					<div id="pie"></div>
				</Card>
			</Col>
		</Row>
	</div>
</template>
<script>
	import G2 from '@antv/g2'
	import DataSet from '@antv/data-set'
	G2.track(false)
	G2.Global.renderer = 'svg'
	export default {
		components: {},
		mixins: [],
		name: '',
		data () {
			return {}
		},
		props: {},
		computed: {},
		watch: {},
		created () {},
		mounted () {
			this.bar()
			this.line()
			this.item()
			this.pie()
		},
		methods: {
			bar () {
				const data = [
					{ genre: 'Sports', sold: 275 },
					{ genre: 'Strategy', sold: 115 },
					{ genre: 'Action', sold: 120 },
					{ genre: 'Shooter', sold: 350 },
					{ genre: 'Other', sold: 150 }
				] // G2 对数据源格式的要求，仅仅是 JSON 数组，数组的每个元素是一个标准 JSON 对象。
				// Step 1: 创建 Chart 对象
				const chart = new G2.Chart({
					container: 'bar', // 指定图表容器 ID
					forceFit: true,
					height: 300 // 指定图表高度
				})
				// Step 2: 载入数据源
				chart.source(data)
				// Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
				chart.interval().position('genre*sold').color('genre')
				// Step 4: 渲染图表
				chart.render()
			},
			line () {
				let second = 1000
				let minute = 1000 * 60
				let hour = 60 * minute
				let day = 24 * hour

				function toInterge (number) {
					let fix = arguments.length > 1 && arguments[ 1 ] !== undefined ? arguments[ 1 ] : 1

					if (Math.round(number) === number) {
						return '' + number
					}
					return '' + Number(number).toFixed(fix)
				}

				function humanizeDuration (duration) {
					let fix = arguments.length > 1 && arguments[ 1 ] !== undefined ? arguments[ 1 ] : 1

					if (duration === 0) {
						return 0
					}
					if (duration < minute) {
						return toInterge(duration / second, fix) + ' 秒'
					}
					if (duration < hour) {
						return toInterge(duration / minute, fix) + ' 分'
					}
					if (duration < day) {
						return toInterge(duration / hour, fix) + '小时'
					}
					return toInterge(duration / hour / 24, fix) + ' 天'
				}

				let data = [
					{
						'date': 1489593600000,
						'pv': 17,
						'successRate': 0.23529411764705882,
						'time': 12351000,
						'count': 4
					}, {
						'date': 1489680000000,
						'pv': 10,
						'successRate': 0.6,
						'time': 18000,
						'count': 6
					}, {
						'date': 1489766400000,
						'pv': 3,
						'successRate': 0,
						'time': 0,
						'count': 0
					}, {
						'date': 1489852800000,
						'pv': 3,
						'successRate': 0,
						'time': 0,
						'count': 0
					}, {
						'date': 1489939200000,
						'pv': 18,
						'successRate': 0.2222222222222222,
						'time': 21157000,
						'count': 4
					}, {
						'date': 1490025600000,
						'pv': 32,
						'successRate': 0.25,
						'time': 3543000,
						'count': 8
					}, {
						'date': 1490112000000,
						'pv': 25,
						'successRate': 0.56,
						'time': 10000,
						'count': 14
					}, {
						'date': 1490198400000,
						'pv': 23,
						'successRate': 0.43478260869565216,
						'time': 24000,
						'count': 10
					}, {
						'date': 1490284800000,
						'pv': 7,
						'successRate': 0.2857142857142857,
						'time': 0,
						'count': 2
					}
				]
				let dash = [
					{
						'count': 4,
						'date': 1489593600000,
						'time': null
					}, {
						'count': 6,
						'date': 1489680000000,
						'time': 18000
					}, {
						'count': 0,
						'date': 1489766400000,
						'time': 0
					}, {
						'count': 0,
						'date': 1489852800000,
						'time': 0
					}, {
						'count': 4,
						'date': 1489939200000,
						'time': 21157000
					}, {
						'count': 8,
						'date': 1490025600000,
						'time': null
					}, {
						'count': 14,
						'date': 1490112000000,
						'time': null
					}, {
						'count': 10,
						'date': 1490198400000,
						'time': 24000
					}, {
						'count': 2,
						'date': 1490284800000,
						'time': 0
					}
				]

				function pick (data, field) {
					return data.map(function (item) {
						let result = {}
						for (let key in item) {
							if (item.hasOwnProperty(key) && field.indexOf(key) !== -1) {
								result[ key ] = item[ key ]
							}
						}
						return result
					})
				}

				const chart = new G2.Chart({
					container: 'line',
					forceFit: true,
					height: 300,
					padding: [ 20, 80, 80, 80 ]
				})
				chart.scale({
					time: {
						sync: true
					}
				})
				let scale = {
					date: {
						alias: '日期',
						type: 'time',
						mask: 'MM-DD'
					},
					pv: {
						alias: '进入次数',
						min: 0
					},
					time: {
						alias: '平均时长',
						formatter: function formatter (value) {
							return humanizeDuration(value, 0)
						}
					},
					count: {
						alias: '次数'
					}
				}
				let view1 = chart.view()
				view1.source(pick(data, [ 'pv', 'time', 'date' ]), scale)
				view1.axis('time', {
					grid: null
				})
				view1.line().position('date*pv*count').color('#4FAAEB').size(2)
				view1.line().position('date*time').color('#9AD681').size(2)
				let view2 = chart.view()
				view2.source(pick(dash, [ 'pv', 'time', 'date' ]), scale)
				view2.axis('time', false)
				view2.tooltip(false)
				view2.line().position('date*time').color('white').size(3).style({
					lineDash: [ 4, 4 ]
				})
				chart.render()
			},
			item () {
				let data = [
					{
						type: '收纳',
						value: 340,
						cat: '办公用品'
					}, {
						type: '笔',
						value: 20760,
						cat: '办公用品'
					}, {
						type: '纸张',
						value: 28750,
						cat: '办公用品'
					}, {
						type: '配件',
						value: 4090,
						cat: '技术'
					}, {
						type: '电话',
						value: 9880,
						cat: '技术'
					}, {
						type: '复印机',
						value: 40988,
						cat: '技术'
					}, {
						type: '桌子',
						value: 14870,
						cat: '家具'
					}, {
						type: '椅子',
						value: 37098,
						cat: '家具'
					}, {
						type: '书架',
						value: 49099,
						cat: '家具'
					}
				]

				const chart = new G2.Chart({
					container: 'item',
					forceFit: true,
					height: 300,
					padding: [ 20, 0, 50, 80 ]
				})
				chart.source(data, {
					value: {
						max: 55000,
						min: 0,
						nice: false,
						alias: '金额（元）'
					}
				})
				chart.axis('type', {
					label: {
						textStyle: {
							fill: '#8d8d8d',
							fontSize: 12
						}
					},
					tickLine: {
						alignWithLabel: false,
						length: 0
					},
					line: {
						lineWidth: 0
					}
				})
				chart.axis('value', {
					label: null,
					title: {
						offset: 30,
						textStyle: {
							fontSize: 12,
							fontWeight: 300
						}
					},
					grid: {
						lineStyle: {
							lineWidth: 0
						}
					}
				})
				chart.legend(false)
				chart.coord().transpose()
				chart.interval().position('type*value').color('cat', [ '#face1d', '#37c461', '#2194ff' ]).size(20).opacity(1).label('value', {
					textStyle: {
						fill: '#8d8d8d'
					},
					offset: 10,
					formatter: function formatter (text) {
						return text.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
					}
				})
				//guide
				chart.guide().text({
					top: true,
					position: [ '椅子', 'min' ],
					content: '家具',
					style: {
						fill: '#c0c0c0', // 文本颜色
						fontSize: 12, // 文本大小
						fontWeight: '300',
						textAlign: 'center',
						rotate: -90
					},
					offsetX: -70
				})
				chart.guide().text({
					top: true,
					position: [ '电话', 'min' ],
					content: '技术',
					style: {
						fill: '#c0c0c0', // 文本颜色
						fontSize: 12, // 文本大小
						fontWeight: '300',
						textAlign: 'center',
						rotate: -90
					},
					offsetX: -70
				})
				chart.guide().text({
					top: true,
					position: [ '笔', 'min' ],
					content: '办公用品',
					style: {
						fill: '#c0c0c0', // 文本颜色
						fontSize: 12, // 文本大小
						fontWeight: '300',
						textAlign: 'center',
						rotate: -90
					},
					offsetX: -70
				})
				chart.guide().line({
					start: [ '-20%', '33.2%' ],
					end: [ '100%', '33.2%' ],
					lineStyle: {
						stroke: '#c0c0c0',
						lineDash: [ 2, 2 ]
					}
				})
				chart.guide().line({
					start: [ '-20%', '66.8%' ],
					end: [ '100%', '66.8%' ],
					lineStyle: {
						stroke: '#c0c0c0',
						lineDash: [ 2, 2 ]
					}
				})
				chart.render()
			},
			pie () {
				let _DataSet = DataSet,
					DataView = _DataSet.DataView;

				let data = [{
					value: 251,
					type: '大事例一',
					name: '子事例一'
				}, {
					value: 1048,
					type: '大事例一',
					name: '子事例二'
				}, {
					value: 610,
					type: '大事例二',
					name: '子事例三'
				}, {
					value: 434,
					type: '大事例二',
					name: '子事例四'
				}, {
					value: 335,
					type: '大事例三',
					name: '子事例五'
				}, {
					value: 250,
					type: '大事例三',
					name: '子事例六'
				}];
				// 通过 DataSet 计算百分比
				let dv = new DataView();
				dv.source(data).transform({
					type: 'percent',
					field: 'value',
					dimension: 'type',
					as: 'percent'
				});
				const chart = new G2.Chart({
					container: 'pie',
					forceFit: true,
					height: 300,
					padding: 0
				});
				chart.source(dv, {
					percent: {
						formatter: function formatter(val) {
							val = (val * 100).toFixed(2) + '%';
							return val;
						}
					}
				});
				chart.coord('theta', {
					radius: 0.5
				});
				chart.tooltip({
					showTitle: false
				});
				chart.legend(false);
				chart.intervalStack().position('percent').color('type').label('type', {
					offset: -10
				}).tooltip('name*percent', function(item, percent) {
					percent = (percent * 100).toFixed(2) + '%';
					return {
						name: item,
						value: percent
					};
				}).select(false).style({
					lineWidth: 1,
					stroke: '#fff'
				});

				let outterView = chart.view();
				let dv1 = new DataView();
				dv1.source(data).transform({
					type: 'percent',
					field: 'value',
					dimension: 'name',
					as: 'percent'
				});
				outterView.source(dv1, {
					percent: {
						formatter: function formatter(val) {
							val = (val * 100).toFixed(2) + '%';
							return val;
						}
					}
				});
				outterView.coord('theta', {
					innerRadius: 0.5 / 0.75,
					radius: 0.75
				});
				outterView.intervalStack().position('percent').color('name', ['#BAE7FF', '#7FC9FE', '#71E3E3', '#ABF5F5', '#8EE0A1', '#BAF5C4']).label('name').tooltip('name*percent', function(item, percent) {
					percent = (percent * 100).toFixed(2) + '%';
					return {
						name: item,
						value: percent
					};
				}).select(false).style({
					lineWidth: 1,
					stroke: '#fff'
				});

				chart.render();
			}
		},
		filters: {}
	}
</script>
<style scoped lang="less">
	h2 {
		padding: 5px 0;
	}

	.home-g2-item {
		margin: 0 auto 15px;
		width: 550px;
	}

	.intro{
		font-size: 12px;
	}
	.intro-a{
		font-size: 12px;
		color: #00BABD;
	}
</style>