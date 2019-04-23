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
				label="所在位置 views/"
			></TableColumn>
		</Table>
	</div>
</template>
<style scoped lang="less">
	.setting{
		width: auto;
		height: 100%;
		background-color: #f9f9f9;
	}
	.main-btn{
		text-align: right;
	}
</style>
<script>
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
    	init(){
    		// this.loading = this.$loading({
				// 	lock: true,
				// 	text: 'Loading...',
				// 	spinner: 'el-icon-loading',
				// 	background: 'rgba(0, 0, 0, 0.7)'
				// })
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
								name: menu.name,
								path: menu.path,
								location: menu.location
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
					// this.loading.close()
					this.tabData = arr
				},500)
			},
			goSettingAddSubMenu(){
				this.$router.push({
					name:'setting-add',
					query:{
						status:'sub-menu'
					}
				})
			},
			goSettingAddMenu(){
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