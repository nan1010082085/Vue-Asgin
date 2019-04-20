<template>
	<div class="nav" :style="{'background-color' : navStyle.backgroundColor}">
		<div class="h-nav-header"
				 :style="{
				 	'background-color' : navStyle.backgroundColor,
				 	'color': navStyle.textColor
				 }"
				 :class="[{'nav-fixed-header': fixedHeader,'tar': isNavHeaderTar}]">
			Vue Asgin
		</div>
		<div class="h-nav-menu" :style="{'background-color' : navStyle.backgroundColor}">
			<LMenu :visable="isShowClickMenu" :is-show-menu="isShowMenu"></LMenu>
			<LHeaderContent :is-show-search="isShowSearch"></LHeaderContent>
		</div>
	</div>
</template>
<style scoped lang="less">
	@import "../assets/css/style";
	.nav{
		width: inherit;
		display: flex;
		flex-direction: row;
	}
	.h-nav-menu{
		display: flex;
		align-items: center;
		justify-content: flex-end;
		width: inherit;
		height: 60px;
		text-align: right;
	}
	.h-nav-header{
		width: 200px;
		height: 60px;
		line-height: 60px;
		text-align: center;
		font-size: @fz20;
	}
</style>
<script>
	import LMenu from './l-menu'
	import LHeaderContent from './l-hedaer-content'
	import {mapState} from 'vuex'
	export default {
		components: {LMenu,LHeaderContent},
		mixins: [],
		name: 'HNav',
		data () {
			return {
				activeIndex:'',
			}
		},
		props: {
			isShowSearch:Boolean,
			isShowMenu:Boolean,
			isShowClickMenu: Boolean,
		},
		computed: {
      ...mapState({
        pattern: state => state.layout.pattern,
        fixedHeader: state => state.layout.fixedHeader,
        navStyle: state => state.layout.navStyle
      }),
			isNavHeaderTar(){
				return this.isShowClickMenu && !this.isShowMenu || !this.isShowClickMenu && !this.isShowMenu
			},
		},
		watch: {},
		created () {},
		mounted () {

		},
		methods: {
			handleSelect(){},
		},
		filters: {}
	}
</script>