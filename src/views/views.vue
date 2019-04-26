<template>
	<Container class="as-views">
		<LNav v-if="pattern == 1"></LNav>

		<div class="as-views-container"
							 :class="[
							 			{'as-views-container-header-fixed' : fixedHeader},
							 			{'as-views-container-fixed-nav' : fixedNav && pattern == 1}
							 ]">
			<LHeader @setting="showSetting"></LHeader>

			<div :class="[
				'main-default',
				{'main-justify' : pattern == 2 || mainJustify}
			]">
				<!--动态路由标签-->
				<VTabs></VTabs>
				<!--页面内容-->
				<div class="main-route-view plr10">
					<router-view></router-view>
				</div>
			</div>
			<!-- 控制面板 -->
			<Control :visible.sync="showControl"
							 @close="handleHideControl"
							 @layout="handleVuexLayout"></Control>
		</div>
	</Container>
</template>
<style scoped lang="less">
	@import "../assets/css/style";
	.as-views{
		position: relative;
	}
	.as-views-container{
		width: 100%;
		min-height: 100vh;
		flex-wrap: wrap;
		background: #f9f9f9;
	}
	.main-default{
		width: 100%;
		.main-route-view{
			width: calc(100% - 1px);
			transition: none;
		}
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
	import VTabs from '../components/v-tabs'
	import {mapState, mapMutations} from 'vuex'
	export default {
		components: {LHeader,LNav,Control,VTabs},
		mixins: [],
		name: 'views',
		data () {
			return {
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
			// this.$router.push({name:'views'})
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