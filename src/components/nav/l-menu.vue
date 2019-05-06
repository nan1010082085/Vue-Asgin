<template>
	<div class="l-menu">
		<div v-if="isShowMenu">
			<Menu ref="elMenu"
						:text-color="navStyle.textColor"
						:active-text-color="navStyle.activeTextColor"
						:background-color="navStyle.backgroundColor"
						:style="{'background-color' : navStyle.backgroundColor}"
						:mode="pattern == 2 ? 'horizontal' : 'vertical'"
						:default-active="getActiveIndex">
				<!-- 一级路由 -->
				<!-- 所有路由均判断 name别名 与isShow是否显示-->
				<MenuItem :style="pattern == 2 ? 'width: auto;':'width: 200px;'"
									:index="`${menu.path}`"
									v-if="!menu.meta.isShow&&menu.name!=''"
									v-for="(menu,index) in getMenuList" :key="menu.meta.label"
									@click="handleRoute(menu, menu.path, '')">
					<i :class="[menu.meta.icon]"></i>
					{{menu.meta.label}}
				</MenuItem>
				<!-- 一级菜单 -->
				<!-- 所有菜单均判断 isShow是否显示 与isSubmenu是否是菜单-->
				<Submenu :style="pattern == 2 ? 'width: auto;':'width: 200px;'"
								 :index="`${menu._id}`"
								 v-if="menu.meta.isShow&&menu.meta.isSubmenu"
								 v-for="(menu,index) in getMenuList" :key="index">
					<template slot="title">
						<i :class="[menu.meta.icon]"></i>
						{{menu.meta.label}}
					</template>
					<!-- 二级路由 -->
					<MenuItem :index="`${menu._id}-${menu2.path}`"
										v-if="menu2.meta.isShow&&menu2.name!=''"
										v-for="(menu2,jItems) in menu.children" :key="jItems"
										@click="handleChange(menu2, `${menu._id}-${menu2.path}`, menu2.path)">
						<i :class="[menu2.meta.icon]"></i>
						{{menu2.meta.label}}1
					</MenuItem>
					<!-- 二级菜单 -->
					<Submenu :style="pattern == 2 ? 'width: auto;':'width: 200px;'"
									 :index="`${menu._id}-${menu2._id}`"
									 v-if="menu2.meta.isShow&&menu2.meta.isSubmenu"
									 v-for="(menu2,menu2Index) in menu.children" :key="menu2Index">
						<template slot="title">
							<i :class="[menu2.meta.icon]"></i>
							{{menu2.meta.label}}2
						</template>
						<!-- 三级路由 -->
						<MenuItem :index="`${menu._id}-${menu2._id}-${menu3.path}`"
											v-if="menu3.meta.isShow&&menu3.name!=''"
											v-for="(menu3,menu3Index) in menu2.children" :key="menu3Index"
											@click="handleChange(menu3, `${menu._id}-${menu2._id}-${menu3.path}`, menu3.path)">
							<i :class="[menu3.meta.icon]"></i>
							{{menu3.meta.label}}
						</MenuItem>
					</Submenu>
				</Submenu>
			</Menu>
		</div>
		<!--顶部导航 侧边按钮弹出-->
		<div v-else class="sidebar-menu"
				 :class="{'sidebar-menu-show': visible}"
				 :style="{'background-color' : navStyle.backgroundColor}">
			<Menu ref="elMenu"
						:text-color="navStyle.textColor"
						:active-text-color="navStyle.activeTextColor"
						:background-color="navStyle.backgroundColor"
						:style="{'background-color' : navStyle.backgroundColor}"
						mode="vertical"
						:default-active="getActiveIndex">
				<MenuItem :style="pattern == 2 && isShowMenu ? 'width: auto;':'width: 200px;'"
									:index="`${menu.path}`"
									v-if="!menu.meta.isShow&&menu.name!=''"
									v-for="(menu,index) in getMenuList" :key="menu.meta.label"
									@click="handleRoute(menu, menu.path, '')">
					<i :class="[menu.meta.icon]"></i>
					{{menu.meta.label}}
				</MenuItem>
				<Submenu :style="pattern == 2 && isShowMenu ? 'width: auto;':'width: 200px;'"
								 :index="`${menu._id}`"
								 v-if="menu.meta.isShow&&menu.meta.isSubmenu"
								 v-for="(menu,index) in getMenuList" :key="index">
					<template slot="title">
						<i :class="[menu.meta.icon]"></i>
						{{menu.meta.label}}
					</template>
					<!-- 二级路由 -->
					<MenuItem :index="`${menu._id}-${menu2.path}`"
										v-if="menu2.meta.isShow&&menu2.name!=''"
										v-for="(menu2,jItems) in menu.children" :key="jItems"
										@click="handleChange(menu2, `${menu._id}-${menu2.path}`, menu2.path)">
						<i :class="[menu2.meta.icon]"></i>
						{{menu2.meta.label}}
					</MenuItem>
					<!-- 二级菜单 -->
					<Submenu :style="pattern == 2 ? 'width: auto;':'width: 200px;'"
									 :index="`${menu._id}-${menu2._id}`"
									 v-if="menu2.meta.isShow&&menu2.meta.isSubmenu"
									 v-for="(menu2,menu2Index) in menu.children" :key="menu2Index">
						<template slot="title">
							<i :class="[menu2.meta.icon]"></i>
							{{menu2.meta.label}}
						</template>
						<!-- 三级路由 -->
						<MenuItem :index="`${menu._id}-${menu2._id}-${menu3.path}`"
											v-if="menu3.meta.isShow&&menu3.name!=''"
											v-for="(menu3,menu3Index) in menu2.children" :key="menu3Index"
											@click="handleChange(menu3, `${menu._id}-${menu2._id}-${menu3.path}`, menu3.path)">
							<i :class="[menu3.meta.icon]"></i>
							{{menu3.meta.label}}111
						</MenuItem>
					</Submenu>
				</Submenu>
			</Menu>
		</div>
	</div>
</template>
<style scoped lang="scss">
	.l-menu {
		/*width: 100%;*/
	}
	.sidebar-menu{
		position: fixed;
		z-index: 1000;
		width: 200px;
		top: 60px;
		left: 0;
		height: 100%;
		text-align: left;
		transform: translate3d(-200px, 0, 0);
		transition: transform .4s ease;
	}
	.sidebar-menu-show{
		transform: translate3d(0, 0, 0);
	}
</style>
<script>
	import { mapMutations, mapState } from 'vuex'
	export default {
		components: {},
		mixins: [],
		name: 'LMenu',
		data () {
			return {
				activeIndex: '',
				menuList: []
			}
		},
		props: {
			visible: Boolean,
			isShowMenu: {
				type: Boolean,
				default: true
			}
		},
		computed: {
			...mapState({
				pattern: state => state.layout.pattern,
				navStyle: state => state.layout.navStyle,
				activeMenu: state => state.layout.activeMenu,
				closeRouterName: state => state.layout.closeRouterName,
			}),
			getActiveIndex: {
				get () {
					return this.activeIndex = this.activeMenu
				}
			},
			getMenuList: {
				get () {
					return this.menuList
				}
			},
		},
		watch: {
			activeIndex: {
				handler (atIndex) {
					this.$refs[ 'elMenu' ].activeIndex = atIndex;
				}
			},
			closeRouterName(route){
				if(route){
					this.$router.push({name:route.name,query:route.query})
				}
			},
			menuList: {
				handler :'initMenuList'
			}
		},
		created () {
			this.getData()
		},
		mounted () {},
		methods: {
			...mapMutations([
				'setMenuList',
				'setActiveMenu'
			]),
			getData () {
				this.menuList = JSON.parse(sessionStorage.getItem('menu'))
			},
			initMenuList(list){
				/*
				* 初始化数据 --- 刷新网页时
				* */
				if(this.activeIndex === ''){
					list.forEach((item) => {
						if (item.children) {
							item.children.forEach((items) => {
								if (items.path == this.$route.name) {
									this.handleChange(items, `${items.parentId}-${items.path}`, items.path)
									return
								}
							})
						}
					})
				}
			},
			/* 导航跳转时 */
			handleChange (menuItem, index, tabs) {
				this.setActiveMenu({ menu: index, tabs: tabs })
				menuItem[ 'query' ] = this.$route.query
				this.setMenuList(menuItem)
				this.$router.push({ name: menuItem.name, query: this.$route.query })
			},
			/* 一级导航跳转 */
      handleRoute(menu, index, tabs){
        this.setActiveMenu({ menu: index, tabs: tabs })
        this.$router.push({name:menu.name})
			},
		},
		filters: {}
	}
</script>