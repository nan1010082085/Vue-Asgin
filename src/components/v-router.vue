<template>
	<div class="v-router">
		<Tabs class="v-router-tabs"
					v-model="activeName"
					@tab-click="handleClick"
					@tab-remove="handleRemove"
					closable>
			<TabPane 	 v-for="(r, i) in getMenuList" :key="i"
								 :label="r.label"
								 :value="r.name"
								 :name="r.name"
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
				vMenuList: state => state.layout.menuList,
				vNavStyle: state => state.layout.navStyle
			}),
			getMenuList:{
				get(){
					return this.menuList
				}
			},
		},
    watch : {
			vMenuList:{
				handler(){
					this.getData()
				},
				deep:true,
				immediate:true
			}
		},
    methods : {
    	...mapMutations([
    		'setMenuList',
				'setActiveMenu',
				'closeMenuList'
			]),
			handleClick(evt){
				console.log(evt)
			},
			handleRemove(evt){
				console.log(evt)
				this.closeMenuList(evt)
			},
			getData(){
				this.menuList = this.vMenuList
			}
		}
  }
</script>