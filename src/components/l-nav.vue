<template>
	<div class="nav"
			 :style="{
			 'background-color':navStyle.backgroundColor
			 }"
			 :class="[
			 	 {'nav-fixed': fixedNav, 'nav-fixed-aside-header': fixedHeader}
			 ]">
		<Aside style="width: inherit;">
			<div class="nav-header"
					 :style="{
					 'background-color':navStyle.backgroundColor,
					 'color':navStyle.textColor
					 }"
					 :class="[{'nav-fixed-header': fixedHeader}]">
				Vue Asgin
			</div>
			<LMenu :is-show-menu="isShowMenu"></LMenu>
		</Aside>
	</div>
</template>
<style scoped lang="less">
	@import "../assets/css/style";
	.nav {
		width: 200px;
	}
	i[class^=el-icon-]{
		color: @text-color !important;
	}
	.nav-header {
		height: 60px;
		line-height: 60px;
		text-align: center;
		font-size: @fz20;
	}
</style>
<script>
	import LMenu from './l-menu'
	import {mapState} from 'vuex'
	export default {
		components: {LMenu},
		mixins: [],
		name: 'LNav',
		data () {
			return {
				isShowMenu:true
			}
		},
		props: {},
		computed: {
      ...mapState({
        fixedNav : state => state.layout.fixedNav,
        fixedHeader : state => state.layout.fixedHeader,
        navStyle: state => state.layout.navStyle,
      })
		},
		watch: {},
		created () {},
		mounted () {},
		methods: {},
		filters: {}
	}
</script>