<template>
	<Container class="as-views">
		<LNav v-if="pattern == 1" :fixed="fixedNav" :fixed-header="fixedHeader" :nav-style="navStyle"></LNav>

		<Container class="as-views-container"
							 :class="[
							 			{'as-views-container-header-fixed' : fixedHeader},
							 			{'as-views-container-fixed-nav' : fixedNav && pattern == 1}
							 ]">
			<LHeader @setting="showSetting"></LHeader>

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
			<!-- 控制面板 -->
			<Control :visible.sync="showControl"
							 :nav-style="navStyle"
							 @close="handleHideControl"
							 @layout="handleVuexLayout"></Control>
		</Container>
	</Container>
</template>
<style scoped lang="less">
	@import "../assets/css/style";
	.as-views{
		position: relative;
	}
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
	import Control from '../components/control'
	import {mapState, mapMutations} from 'vuex'
	export default {
		components: {LHeader,LNav,Control},
		mixins: [],
		name: 'views',
		data () {
			const item = {
				date: '2016-05-02',
				name: '王小虎',
				address: '上海市普陀区金沙江路 1518 弄'
			};
			return {
				tableData: Array(20).fill(item),
        showControl:false
			}
		},
		props: {},
		computed: {
			...mapState({
				pattern : state => state.layout.pattern,
				fixedNav: state => state.layout.fixedNav,
				fixedHeader: state => state.layout.fixedHeader,
				mainJustify: state => state.layout.mainJustify,
			})
		},
		watch: {},
		created () {},
		mounted () {
		},
		methods: {
			...mapMutations([
				'setLayout'
			]),
      showSetting(){
        this.showControl = true
			},
      handleHideControl(){
			  this.showControl = false
			},
      handleVuexLayout(layout){
			  this.handleHideControl()
        this.setLayout(layout)
			  const loading = this.$loading({
          // spinner: 'el-icon-loading',
          // text:'加载中...',
          background:'rgba(0,0,0,.35)'
				})
				setTimeout(()=>{
          loading.close()
				}, 500)
			},
		},
		filters: {},
	}
</script>