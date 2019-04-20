<template>
	<div class="nav" :style="{'background-color' : $store.state.layout.backgroundColor}">
		<div class="h-nav-header"
				 :style="{
				 	'background-color' : $store.state.layout.backgroundColor,
				 	'color': $store.state.layout.textColor
				 }"
				 :class="[{'nav-fixed-header': $store.state.layout.fixedHeader,'tar': isNavHeaderTar}]">
			Vue Asgin
		</div>
		<div class="h-nav-menu" :style="{'background-color' : $store.state.layout.backgroundColor}">
			<LMenu :visable="isShowClickMenu" :is-show-menu="isShowMenu"></LMenu>
			<LHeaderContent :is-show-search="isShowSearch"></LHeaderContent>
		</div>
	</div>
</template>
<style scoped lang="less">
	@import "../assets/css/style";
	.nav{
		width: 100%;
		display: flex;
		flex-direction: row;
	}
	.h-nav-menu{
		display: flex;
		align-items: center;
		justify-content: flex-end;
		width: calc(100% - 200px);
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