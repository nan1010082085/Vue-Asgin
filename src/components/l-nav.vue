<template>
	<div class="nav"
			 :style="{
			 'background-color':$store.state.layout.navStyle.backgroundColor
			 }"
			 :class="[
			 	 {'nav-fixed': $store.state.layout.fixedNav, 'nav-fixed-aside-header': $store.state.layout.fixedHeader}
			 ]">
		<Aside width="200px">
			<div class="nav-header"
					 :style="{
					 'background-color':$store.state.layout.navStyle.backgroundColor,
					 'color':$store.state.layout.navStyle.textColor
					 }"
					 :class="[{'nav-fixed-header': $store.state.layout.fixedHeader}]">
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
		computed: {},
		watch: {},
		created () {},
		mounted () {},
		methods: {},
		filters: {}
	}
</script>