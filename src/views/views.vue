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
				<VTabs v-if="isTabs"></VTabs>
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
<style scoped lang="scss">
	@import "~@/assets/css/variables";
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
		height: calc(100% - 60px);
		.main-route-view{
			width: calc(100% - 1px);
			height: inherit;
			transition: none;
		}
	}
	.main-justify{
		margin: auto;
		width: 1200px;
	}
</style>
<script>
	import LHeader                  from '../components/nav/l-header'
	import LNav                     from '../components/nav/l-nav'
	import Control                  from '../components/nav/control'
	import VTabs                    from '../components/nav/v-tabs'
	import {mapState, mapMutations} from 'vuex'
	export default {
		components: {LHeader,LNav,Control,VTabs},
		mixins: [],
		name: 'views',
		data () {
			return {
        showControl:false,
        isTabs:false,
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
		watch: {
		  '$route':{
		    handler:'handleRoute',
				deep:true,
				immediate:true
			},
		},
		created () {},
		mounted () {},
		methods: {
			...mapMutations([
				'setLayout',
				'setActiveMenu'
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
          spinner: 'el-icon-loading',
          text:'加载中...',
          background:'rgba(0,0,0,.35)'
				})
				setTimeout(()=>{
					loading.close()
				}, 500)
			},
      handleRoute(to){
			  if(to.name == 'home'){
          this.setActiveMenu({ menu: 'home', tabs: '' })
      	}
				this.isTabs = !(to.name == 'home')
			},
		},
		filters: {},
	}
</script>