<template>
	<Form class="menu-form" ref="form" :model="form" label-width="100px" label-position="left">
		<FormItem>
			<h2>导航路由</h2>
		</FormItem>
		<FormItem label="菜单url" required>
			<Input v-model="form.path"></Input>
		</FormItem>
		<FormItem label="菜单别名" required>
			<Input v-model="form.name"></Input>
		</FormItem>
		<FormItem label="菜单图标" required>
			<Input v-model="form.meta.icon"></Input>
		</FormItem>
		<FormItem label="展示名称" required>
			<Input v-model="form.meta.label"></Input>
		</FormItem>
		<FormItem label="菜单地址" required>
			<Input v-model="form.meta.location"></Input>
		</FormItem>
		<FormItem label="是否显示">
			<el-switch
				v-model="form.meta.isShow"
				active-color="#13ce66"
				inactive-color="#ff4949">
			</el-switch>
		</FormItem>
		<FormItem label="所在菜单" required>
			<Select class="menu-item-form-select" v-model="form.parentId">
				<Option v-for="item in options"
								:key="item._id"
								:label="item.meta.label"
								:value="item._id"></Option>
			</Select>
		</FormItem>
		<FormItem>
			<Button class="menu-submit-button" type="primary" @click="setMenuItem">添加</Button>
		</FormItem>
	</Form>
</template>
<script>
	import {add_route_menu_item} from '../../api'
	export default {
		components: {},
		mixins: [],
		name: 'menu-item-form',
		data () {
			return {
				form: {
					path: '',
					name: '',
					meta: {
						icon: '',
						location: '',
						label: '',
						isShow: true
					},
					parentId:'',
				},
				options:[],
			}
		},
		props: {},
		computed: {},
		watch: {},
		created () {},
		mounted () {
			this.getMenuOption()
		},
		methods: {
			getMenuOption(){
				this.options = JSON.parse(localStorage.getItem('menu'))
			},
			setMenuItem(){
				let params = this.form
				add_route_menu_item(params)
					.then(res=>{
						console.log(res)
						if(res.code != 200) return this.$message.error(res.msg)
						this.$message.success(res.msg)
						this.$refs['form'].resetFields();
					})
			},
		},
		filters: {},
		directives: {},
		beforeDestroy () {
			//实例被销毁前
		}
	}
</script>
<style scoped lang="less">
	@import "../../assets/css/menu-form";
</style>