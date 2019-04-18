<template>
	<div>
		<!-- 布局 1 -->
		<Container v-if="false" class="as-views">
			<Lnav></Lnav>

			<div class="as-views-container">
				<Header class="as-header">
					<Button class="" icon="el-icon-setting">1</Button>
				</Header>

				<Main>
					<Table :data="tableData">
						<TableColumn prop="date" label="日期" width="140">
						</TableColumn>
						<TableColumn prop="name" label="姓名" width="120">
						</TableColumn>
						<TableColumn prop="address" label="地址">
						</TableColumn>
					</Table>
				</Main>
			</div>
		</Container>
		<!-- 布局 2 -->
		<div class="as-views">
			<Header class="as-header">
				<div class="as-header-left">平台</div>
				<div class="as-header-center">1111</div>
				<Button class="setting" type="text" icon="el-icon-setting"></Button>
			</Header>

			<Container class="as-views-container2">
				<Lnav></Lnav>
				<Main>
					<Table :data="tableData">
						<TableColumn prop="date" label="日期" width="140">
						</TableColumn>
						<TableColumn prop="name" label="姓名" width="120">
						</TableColumn>
						<TableColumn prop="address" label="地址">
						</TableColumn>
					</Table>
				</Main>
			</Container>
		</div>
	</div>
</template>
<style scoped lang="less">
	@import "../assets/css/style";
	.as-views{
		width: 100%;
		height: 100%;
	}
	//header
	.as-header{
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 50px!important;
		font-size: @as-default-fz;
		background-color: #B3C0D1;
		color: #333;
		line-height: 50px!important;

		.as-header-left{
			width: 25%;
			text-align: left;
		}
		.as-header-center{
			width: 70%;
			text-align: right;
		}
		.setting{
			color: #fff;
		}
	}

	.as-views-container{

	}

	.as-views-container2{
		height: calc(100% - 50px);
	}

</style>
<script>
	import Lnav from '../components/l-nav'
	export default {
		components: {Lnav},
		mixins: [],
		name: '',
		data () {

			const item = {
				date: '2016-05-02',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			};
			return {
				tableData: Array(20).fill(item)
			}
		},
		props: {},
		computed: {},
		watch: {},
		created () {},
		mounted () {},
		methods: {},
		filters: {},
		directives: {},
		//keep-alive
		activated () {
			//激活
		},
		deactivated () {
			//停用
		},
		beforeDestroy () {
			//实例被销毁前
		},
		destroyed () {}
		//route leave
		//beforeRouteLeave ( to, from, next ) {
		//} 
	}
</script>