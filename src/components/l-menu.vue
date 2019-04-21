<template>
	<div class="l-menu">
		<div v-if="isShowMenu">
			<Menu :text-color="navStyle.textColor"
						:active-text-color="navStyle.activeTextColor"
						:background-color="navStyle.backgroundColor"
						:style="{'background-color' : navStyle.backgroundColor}"
						:mode="pattern == 2 ? 'horizontal' : 'vertical'"
						:default-active="activeMenu">
				<Submenu :style="pattern == 2 ? 'width: auto;':'width: 200px;'"
								 :index="`${index}`"
								 v-for="(menu,index) in getMenuList" :key="index">
					<template slot="title">
						<i class="el-icon-message"></i>
						{{menu.label}}
					</template>
					<MenuItemGroup>
						<MenuItem :index="`${index}-${jItems}`"
											v-for="(item,jItems) in menu.children" :key="jItems"
											@click="handleChange(item, `${index}-${jItems}`)">
							<i class="el-icon-setting"></i>
							{{item.label}}
						</MenuItem>
					</MenuItemGroup>
				</Submenu>
			</Menu>
		</div>
		<div class="sidebar-menu"></div>
	</div>
</template>
<style scoped lang="less">
	.l-menu{
		/*width: 100%;*/
	}
	.sidebar-menu{
		width: 100%;
		/*transform: translate3d(-100%, 0, 0);*/
		transition: transform .4s ease;
	}
	.sidebar-menu-show{
		transform: translate3d(100%, 0, 0);
	}
</style>
<script>
	import {mapState,mapMutations} from 'vuex'
	export default {
		components: {},
		mixins: [],
		name: 'LMenu',
		data () {
			return {
        activeIndex:'0-1',
			}
		},
		props: {
			visible:Boolean,
			isShowMenu:{
				type:Boolean,
				default:true,
			},
		},
		computed: {
      ...mapState({
        pattern : state => state.layout.pattern,
        navStyle: state => state.layout.navStyle,
        activeMenu: state => state.layout.activeMenu,
      }),
			getMenuList:{
        get(){
          return JSON.parse(localStorage.getItem('menu')).map(menu=>{
            menu['check'] = false;
            return menu
					})
				},
				set(){

				}
			},
		},
		watch: {},
		created () {},
		mounted () {},
		methods: {
		  ...mapMutations([
		    'setMenuList',
				'setActiveMenu'
			]),
			handleChange(menuItem, index){
        this.setActiveMenu(index)
				//当前选中数组
        menuItem['check'] = true
		    this.setMenuList(menuItem)
				this.$router.push({name:menuItem.name})
			}
		},
		filters: {}
	}
</script>