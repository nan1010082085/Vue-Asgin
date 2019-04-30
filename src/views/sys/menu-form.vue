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
					}
				}
			}
		},
		props: {},
		computed: {},
		watch: {},
		created () {},
		mounted () {},
		methods: {},
		filters: {},
		directives: {},
		beforeDestroy () {
			//实例被销毁前
		},
	}
</script>
<style scoped lang="less">
	@import "../../assets/css/menu-form";
</style>