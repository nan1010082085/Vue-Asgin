<template>
	<div class="main-container-warp">
		<section class="main-btn ptb5">
			<Button type="primary" size="small" @click="goSettingAddMenu">添加导航</Button>
		</section>
		<Table :data="tabData" style="width: 100%;" border>
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
			<TableColumn
				label="操作"
				width="180"
			>
				<template slot-scope="scope">
					<Button type="primary" size="mini" @click="handleEdit(scope.row)">编辑</Button>
					<Button type="danger" size="mini">删除</Button>
				</template>
			</TableColumn>
		</Table>
	</div>
</template>
<style scoped lang="scss">
	.main-btn{
		text-align: right;
	}
</style>
<script>
	import {getRouteItem,goTabsRoute} from '../../utils'
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
    		let menu = JSON.parse(sessionStorage.getItem('menu'));
    		let arr = [];
				function setIndex (list,index) {
					if(Object.prototype.toString.call(list) == '[object Object]'){
						setIndex([list], index+1)
					}else {
						list.forEach(menu => {
							let Obj = {
								id:menu._id,
								index: index,
								label: menu.meta.label,
								name: menu.name == '' ? '---' : menu.name,
								path: menu.path == '' ? '---' : menu.path,
								icon: menu.meta.icon == '' ? '---' : menu.path,
								location: 'views/'+menu.meta.location,
								show:menu.meta.isShow ? '✔' : '---'
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
			goSettingAddMenu(){
				goTabsRoute(this.$router, 'add-menu-item', {}, (menu, route)=>{
					this.setMenuList(menu)
					this.setActiveTabs({tabs: route.path})
				})
			},
			handleEdit(row){
				// goTabsRoute(this.$router, 'add-menu-item', {id:row.id, status:'edit'}, (menu, route)=>{
				// 	console.log(menu)
				// 	this.setMenuList(menu)
				// 	this.setActiveTabs({tabs: route.path})
				// })
			}
		},
    mounted () {
    },
    created () {
			this.init();
    },
    filters : {}
  }
</script>