<template>
	<div class="setting">
		<section class="main-btn ptb5">
			<Button type="primary" size="small" @click="goSettingAddSubMenu">添加菜单</Button>
			<Button type="primary" size="small" @click="goSettingAddMenu">添加路由</Button>
		</section>
		<Table :data="tabData" style="width: 100%;">
			<TableColumn
				prop="index"
				label="等级"
				width="50"
			></TableColumn>
			<TableColumn
				prop="show"
				label="显示"
				width="100"
			></TableColumn>
			<TableColumn
				prop="label"
				label="名称"
			></TableColumn>
			<TableColumn
				prop="path"
				label="地址"
			></TableColumn>
			<TableColumn
				prop="name"
				label="别名"
			></TableColumn>
			<TableColumn
				prop="location"
				label="所在位置"
			></TableColumn>
		</Table>
	</div>
</template>
<style scoped lang="less">
	.setting{
		padding: 10px;
		width: auto;
		height: 100%;
		background-color: #ffff;
		border-radius: 8px;
	}
	.main-btn{
		text-align: right;
	}
</style>
<script>
	import {mapMutations} from 'vuex'
  export default {
    components : {},
    mixins : [],
    name : "config",
    data () {
      return {
      	tabData:[],
				loading:'',
			}
    },
    props : {},
    computed : {},
    watch : {},
    methods : {
    	...mapMutations([
    		'setMenuList',
    		'setActiveTabs'
			]),
    	init(){
    		let menu = JSON.parse(localStorage.getItem('menu'));
    		let arr = [];
				function setIndex (list,index) {
					if(Object.prototype.toString.call(list) == '[object Object]'){
						setIndex([list], index+1)
					}else {
						list.forEach(menu => {
							let Obj = {
								index: index,
								label: menu.label,
								name: !menu.name ? '---' : menu.name,
								path: !menu.path ? '---' : menu.path,
								location: 'views/'+menu.location,
								show:menu.isShow ? '✔' : '---'
							}
							if (menu.children) {
								setIndex(menu.children, index+1)
								arr.push(Obj)
							}else {
								arr.push(Obj)
							}
						})
					}
				}setIndex(menu, 1)
				arr = arr.sort((a,b)=>{
					if(a.index > b.index){
						return 1
					}else if(a.index < b.index){
						return -1
					}else {
						return 0
					}
				})
				setTimeout(()=>{
					this.tabData = arr
				},500)
			},
			goSettingAddSubMenu(){
    		this.setMenuList({
					path:'setting-menu-add',
					name:'setting-add',
					label:'添加菜单',
					query:{
						status:'sub-menu'
					}
				})
    		this.setActiveTabs({tabs:'setting-menu-add'})
				this.$router.push({
					name:'setting-add',
					query:{
						status:'sub-menu'
					}
				})
			},
			goSettingAddMenu(){
				this.setMenuList({
					path:'setting-add',
					name:'setting-add',
					label:'添加路由',
					query:{
						status:'menu'
					}
				})
				this.setActiveTabs({tabs:'setting-add'})
    		this.$router.push({
					name:'setting-add',
					query:{
						status:'menu'
					}
    		})
			},
		},
    mounted () {
    },
    created () {
			this.init();
    },
    filters : {}
  }
</script>