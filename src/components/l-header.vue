<template>
	<div class="header"
			 :style="{'background-color' : navStyle.backgroundColor}"
			 :class="[{'header-fixed': fixedHeader}]">
		<Header class="as-header"
						:style="{'color' : navStyle.textColor}"
						v-if="pattern === '1'">
			<div class="as-header-content">
				<LHeaderContent :is-show-search="isShowSearch"></LHeaderContent>
			</div>
		</Header>

		<div v-else
				 class="as-pattern-header"
				 :style="{'color' : navStyle.textColor}">
			<HNav :pattern="pattern"
						:fixed-header="fixedHeader"
						:is-show-menu="isShowMenu"
						:is-show-search="isShowSearch"
						:is-show-click-menu="isShowClickMenu"
						:nav-style="navStyle"></HNav>
		</div>
		<!-- 侧边导航 控制按钮-->
		<div class="show-menu">
			<transition name="fade" mode="in-out">
				<i v-if="isShowClickMenu&&!isShowMenu"
					 class="el-icon-d-arrow-left"
					 :style="{'color' : navStyle.textColor}"
					 @click="isShowClickMenu = !isShowClickMenu">菜单</i>
				<i v-if="!isShowClickMenu&&!isShowMenu"
					 class="el-icon-d-arrow-right"
					 :style="{'color' : navStyle.textColor}"
					 @click="isShowClickMenu = !isShowClickMenu">菜单</i>
			</transition>
		</div>

		<Button class="setting"
						type="text"
						icon="el-icon-setting"
						:style="{'color' : navStyle.textColor}"></Button>
	</div>
</template>
<style scoped lang="less">
	@import "../assets/css/style";

	.header {
		position: relative;
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 60px;
	}

	//header
	.as-header {
		padding-right: 0;
		width: calc(100% - 50px);
		font-size: @as-default-fz;
		line-height: 60px;

		.as-header-content {
			display: flex;
			height: 100%;
			font-size: @fz14;
			align-items: center;
			justify-content: flex-end;
		}
	}

	//pattern 2
	.as-pattern-header {
		width: calc(100% - 50px);
		font-size: @as-default-fz;
		line-height: 60px;
	}

	.setting {
		width: 50px;
	}

	.show-menu {
		position: absolute;
		left: 5px;
		top: 25px;
	}
</style>
<script>
	import HNav           from './h-nav'
	import LHeaderContent from './l-hedaer-content'
	import { resize }     from '../utils'
	import { mapState }   from 'vuex'

	export default {
		components: { HNav, LHeaderContent },
		mixins: [],
		name: 'LHeader',
		data () {
			return {
				isShowSearch: true,
				isShowMenu: true,
				isShowClickMenu: false
			}
		},
		props: {},
		computed: {
			...mapState({
				pattern: state => state.layout.pattern,
				fixedHeader: state => state.layout.fixedHeader,
				navStyle: state => state.layout.navStyle
			}),
			widthPx () {
				return this.pattern == 1 ? 800 : 1000
			}
		},
		watch: {},
		created () {},
		mounted () {
			this.init()
			resize((evt) => {
				this.init()
			})
		},
		methods: {
			init () {
				this.isShowSearch = document.body.offsetWidth <= this.widthPx ? false : true
				this.isShowClickMenu = this.isShowMenu = this.pattern == 2 && document.body.offsetWidth <= 750 ? false : true
			}
		},
		filters: {}
	}
</script>