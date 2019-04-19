<template>
	<div class="nav"
			 :style="{
			 'background-color':navStyle.backgroundColor
			 }"
			 :class="[
			 	 {'nav-fixed': fixed, 'nav-fixed-aside-header': fixedHeader}
			 ]">
		<Aside width="200px">
			<div class="nav-header"
					 :style="{
					 'background-color':navStyle.backgroundColor,
					 'color':navStyle.textColor
					 }"
					 :class="[{'nav-fixed-header': fixedHeader}]">
				Vue Asgin
			</div>
			<LMenu :pattern="pattern" :is-show-menu="isShowMenu" :nav-style="navStyle"></LMenu>
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
		props: {
			pattern: String,
			fixed: Boolean,
			fixedHeader: Boolean
		},
		computed: {
			...mapState({
				pattern : state => state.layout.pattern,
				sidebarBtnShow : state => state.layout.sidebarBtnShow,
				navStyle : state => state.layout.navStyle
			})
		},
		watch: {},
		created () {},
		mounted () {},
		methods: {},
		filters: {}
	}
</script>