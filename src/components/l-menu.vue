<template>
	<div class="l-menu">
		<div v-if="isShowMenu">
			<Menu ref="elMenu"
						:text-color="navStyle.textColor"
						:active-text-color="navStyle.activeTextColor"
						:background-color="navStyle.backgroundColor"
						:style="{'background-color' : navStyle.backgroundColor}"
						:mode="pattern == 2 ? 'horizontal' : 'vertical'"
						:default-active="getActiveIndex"
						router>
				<Submenu :style="pattern == 2 ? 'width: auto;':'width: 200px;'"
								 :index="`${index}`"
								 v-if="menu.children"
								 v-for="(menu,index) in getMenuList" :key="index">
					<template slot="title">
						<i :class="menu.icon"></i>
						{{menu.label}}
					</template>
					<MenuItemGroup>
						<MenuItem :index="`${index}-${jItems}`"
											v-if="item.isShow"
											v-for="(item,jItems) in menu.children" :key="jItems"
											@click="handleChange(item, `${index}-${jItems}`)">
							<i :class="item.icon"></i>
							{{item.label}}
						</MenuItem>
					</MenuItemGroup>
				</Submenu>
				<MenuItem :index="`${index}`"
									v-if="!menu.children&&menu.isShow"
									v-for="(menu,index) in getMenuList" :key="index">
					<i :class="menu.icon"></i>
					{{item.label}}
				</MenuItem>
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
        activeIndex:'',
				menuList:[]
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
				isAddMenu: state => state.layout.isAddMenu,
      }),
			getActiveIndex:{
				get(){
					return this.activeIndex = this.activeMenu
				},
			},
			getMenuList: {
      	get(){
					return this.menuList
				},
			}
		},
		watch: {
			activeIndex:{
				handler(atIndex){
					// console.log(this.$refs['elMenu'].activeIndex)
					this.$refs['elMenu'].activeIndex = atIndex
				},
			},
			'$route':{
				handler(to){
					//重新提交选中路由状态
					this.menuList.forEach((item,index)=>{
						if(item.children){
							item.children.forEach((items, jItems)=>{
								if(items.name == to.name){
									this.handleChange(items, `${index}-${jItems}`)
									return
								}
							})
						}
					})
				},
			},
			isAddMenu:'updateData'
		},
		created () {
			this.getData();
		},
		mounted () {
			if(this.activeMenu && this.activeMenu != ''){
				this.init()
			}
		},
		methods: {
		  ...mapMutations([
		    'setMenuList',
				'setActiveMenu',
			]),
			getData(){
				 this.menuList = JSON.parse(localStorage.getItem('menu')).map(menu=>{
					menu['check'] = false;
					return menu
				})
			},
			updateData(bool){
				if(bool){
					console.log('update menuList')
					this.menuList = JSON.parse(localStorage.getItem('menu')).map(menu=>{
						menu['check'] = false;
						return menu
					})
				}
			},
			init(){
				let loading = this.$loading()
				setTimeout(()=>{
					let arr = this.activeMenu.split('-')
					let menuItem = this.menuList[arr[0]].children[arr[1]]
					this.$router.push({name:menuItem.name,query:this.$route.query})
					loading.close();
				},500)
			},
			handleChange(menuItem, index){
        this.setActiveMenu(index)
				//当前选中数组
        menuItem['check'] = true
				menuItem['query'] = this.$route.query
		    this.setMenuList(menuItem)
				this.$router.push({name:menuItem.name,query:this.$route.query})
			}
		},
		filters: {}
	}
</script>