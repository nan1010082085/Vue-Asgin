<template>
	<Container class="as-views">
		<LNav v-if="pattern == 1" :fixed="fixedNav" :fixed-header="fixedHeader"></LNav>

		<Container class="as-views-container"
							 :class="[
							 			{'as-views-container-header-fixed' : fixedHeader},
							 			{'as-views-container-fixed-nav' : fixedNav && pattern == 1}
							 ]">
			<LHeader></LHeader>

			<div :class="[
				'main-default plr10',
				{'main-justify' : pattern == 2 || mainJustify}
			]">
					<Table :data="tableData">
						<TableColumn prop="date" label="日期" width="140">
						</TableColumn>
						<TableColumn prop="name" label="姓名" width="120">
						</TableColumn>
						<TableColumn prop="address" label="地址">
						</TableColumn>
					</Table>
				<!--<router-view/>-->
			</div>
		</Container>
	</Container>
</template>
<style scoped lang="less">
	@import "../assets/css/style";
	.as-views{}
	.as-views-container{
		min-height: 100vh;
		flex-wrap: wrap;
	}
	.main-default{
		width: 100%;
	}
	.main-justify{
		margin: auto;
		width: 1200px;
	}
</style>
<script>
	import LHeader from '../components/l-header'
	import LNav from '../components/l-nav'
	import {mapState, mapMutations} from 'vuex'
	export default {
		components: {LHeader,LNav},
		mixins: [],
		name: 'views',
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
		computed: {
			...mapState({
				pattern : state => state.layout.pattern,
				fixedNav: state => state.layout.fixedNav,
				fixedHeader: state => state.layout.fixedHeader,
				mainJustify: state => state.layout.mainJustify
			})
		},
		watch: {},
		created () {},
		mounted () {
		},
		methods: {
			...mapMutations([
				'setPattern'
			])
		},
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