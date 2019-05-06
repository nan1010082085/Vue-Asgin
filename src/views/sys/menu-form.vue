<template>
	<Form class="menu-form" label-width="100px" label-position="left">
		<FormItem>
			<h2>导航菜单</h2>
		</FormItem>
		<!--<FormItem label="菜单url">-->
			<!--<Input v-model="form.path"></Input>-->
		<!--</FormItem>-->
		<!--<FormItem label="菜单别名">-->
			<!--<Input v-model="form.name"></Input>-->
		<!--</FormItem>-->
		<FormItem label="菜单图标">
			<Input v-model="form.meta.icon"></Input>
		</FormItem>
		<FormItem label="展示名称" required>
			<Input v-model="form.meta.label"></Input>
		</FormItem>
		<!--<FormItem label="菜单地址">-->
			<!--<Input v-model="form.meta.location"></Input>-->
		<!--</FormItem>-->
		<FormItem label="是否显示">
			<el-switch
				v-model="form.meta.isShow"
				active-color="#13ce66"
				inactive-color="#ff4949">
			</el-switch>
		</FormItem>
		<FormItem label="所在菜单">
			<Select class="menu-item-form-select" v-model="form.parentId">
				<Option v-for="item in options"
								:key="item._id"
								:label="item.meta.label"
								:value="item._id"></Option>
			</Select>
			<Tooltip class="item" effect="dark" content="选择所在菜单添加的路由为2级路由，不选择则为1级路由" placement="top">
				<Button type="text" icon="el-icon-question"></Button>
			</Tooltip>
		</FormItem>
		<FormItem>
			<Button class="menu-submit-button" type="primary">添加</Button>
		</FormItem>
	</Form>
</template>
<script>
	export default {
		components: {},
		mixins: [],
		name: 'menu-form',
		data () {
			return {
				form:{
					path:'',
					name:'',
					meta:{
						icon:'',
						location:'',
						label:'',
						isShow:true,
					},
					parentId:'',
				}
			}
		},
		props: {},
		computed: {},
		watch: {},
		created () {
			this.getMenuOption()
		},
		mounted () {},
		methods: {
			getMenuOption () {
				this.setOptions(JSON.parse(sessionStorage.getItem('menu')))
			},
			setOptions(menu){
				for (let i = 0; i < menu.length; i++) {
					const menu1 = menu[ i ]
					if(menu1.meta.isShow){
						this.options.push(menu1)
						if(menu1.children){
							this.setOptions(menu1.children)
						}
					}
				}
			},
		},
		filters: {},
		directives: {},
		beforeDestroy () {
			//实例被销毁前
		},
	}
</script>
<style scoped lang="scss">
	@import "../../assets/css/menu-form";
</style>