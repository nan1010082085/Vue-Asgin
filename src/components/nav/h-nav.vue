<template>
	<div class="nav" :style="{'background-color' : navStyle.backgroundColor}">
		<div class="h-nav-header"
				 :style="{
				 	'background-color' : navStyle.backgroundColor,
				 	'color': navStyle.textColor
				 }"
				 :class="[{'nav-fixed-header': fixedHeader,'tar': isNavHeaderTar}]">
			Vue asgin
		</div>
		<div class="h-nav-menu" :style="{'background-color' : navStyle.backgroundColor}">
			<LMenu :visible="isShowClickMenu" :is-show-menu="isShowSearch"></LMenu>
			<LHeaderContent :is-show-search="isShowSearch"></LHeaderContent>
		</div>
	</div>
</template>
<style scoped lang="scss">
	@import "../../assets/css/variables";
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
		font-size: $fz20;
	}
</style>
<script>
	import LMenu          from './l-menu'
	import LHeaderContent from './l-hedaer-content'
	import {mapState}     from 'vuex'
	export default {
		components: {LMenu,LHeaderContent},
		mixins: [],
		name: 'HNav',
		data () {
			return {}
		},
		props: {
			isShowSearch:Boolean,
			isShowClickMenu: Boolean,
		},
		computed: {
      ...mapState({
        pattern: state => state.layout.pattern,
        fixedHeader: state => state.layout.fixedHeader,
        navStyle: state => state.layout.navStyle
      }),
			isNavHeaderTar(){
				return this.isShowClickMenu && !this.isShowSearch || !this.isShowClickMenu && !this.isShowSearch
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