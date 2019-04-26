<template>
	<div class="v-router">
		<Tabs class="v-router-tabs"
					v-model="activeName"
					@tab-click="handleClick"
					@tab-remove="handleRemove"
					closable>
			<TabPane 	 v-for="(r, i) in getMenuList" :key="i"
								 :label="r.label"
								 :name="r.path"
								 ></TabPane>
		</Tabs>
	</div>
</template>
<style scoped lang="less">
	.v-router{
		width: 100%;
	}
</style>
<script>
	import {mapState,mapMutations} from 'vuex'
  export default {
    name : "vRouter",
    data () {
      return {
      	activeName:'',
        menuList: []
			}
    },
    computed : {
      ...mapState({
				tabsList: state => state.layout.tabsList,
				activeTabs: state => state.layout.activeTabs,
				vNavStyle: state => state.layout.navStyle
			}),
			getMenuList:{
				get(){
					return this.menuList
				}
			},
		},
    watch : {
			tabsList:{
				handler:'getData',
				deep:true,
				immediate:true
			},
			'activeTabs':'getTabs'
		},
    methods : {
    	...mapMutations([
    		'setMenuList',
				'setActiveMenu',
				'closeMenuList',
				'closeTabs'
			]),
			handleClick(evt){
				this.menuList.forEach((item)=>{
					if(item.path === evt.name){
						this.setActiveMenu({menu: `${item.parentId}-${item.path}`, tabs: item.path})
						this.$router.push({name:item.name,query:item.query})
						return false
					}
				})
			},
			handleRemove(evt){
				this.closeMenuList(evt)
				if(this.tabsList.toString() === ''){
					this.closeTabs()
					this.$router.push({name:'views'})
				}
			},
			getTabs(tabs){
				this.activeName = tabs
			},
			getData(tabs){
				this.menuList = tabs
			}
		}
  }
</script>