<template>
	<div>
		<Aside width="200px" style="background-color: rgb(238, 241, 246)">
			<Menu :default-openeds="['1', '3']">
				<Submenu index="1">
					<template slot="title"><i class="el-icon-message"></i>导航一</template>
					<MenuItemGroup>
						<template slot="title">分组一</template>
						<MenuItem index="1-1">选项1</MenuItem>
						<MenuItem index="1-2">选项2</MenuItem>
					</MenuItemGroup>
					<MenuItemGroup title="分组2">
						<MenuItem index="1-3">选项3</MenuItem>
					</MenuItemGroup>
					<Submenu index="1-4">
						<template slot="title">选项4</template>
						<MenuItem index="1-4-1">选项4-1</MenuItem>
					</Submenu>
				</Submenu>
				<Submenu index="2">
					<template slot="title"><i class="el-icon-menu"></i>导航二</template>
					<MenuItemGroup>
						<template slot="title">分组一</template>
						<MenuItem index="2-1">选项1</MenuItem>
						<MenuItem index="2-2">选项2</MenuItem>
					</MenuItemGroup>
					<MenuItemGroup title="分组2">
						<MenuItem index="2-3">选项3</MenuItem>
					</MenuItemGroup>
					<Submenu index="2-4">
						<template slot="title">选项4</template>
						<MenuItem index="2-4-1">选项4-1</MenuItem>
					</Submenu>
				</Submenu>
				<Submenu index="3">
					<template slot="title"><i class="el-icon-setting"></i>导航三</template>
					<MenuItemGroup>
						<template slot="title">分组一</template>
						<MenuItem index="3-1">选项1</MenuItem>
						<MenuItem index="3-2">选项2</MenuItem>
					</MenuItemGroup>
					<MenuItemGroup title="分组2">
						<MenuItem index="3-3">选项3</MenuItem>
					</MenuItemGroup>
					<Submenu index="3-4">
						<template slot="title">选项4</template>
						<MenuItem index="3-4-1">选项4-1</MenuItem>
					</Submenu>
				</Submenu>
			</Menu>
		</Aside>
	</div>
</template>
<style scoped lang="less">

</style>
<script>
	export default {
		components: {},
		mixins: [],
		name: 'Lnav',
		data () {
			return {}
		},
		props: {},
		computed: {},
		watch: {},
		created () {},
		mounted () {},
		methods: {},
		filters: {},
		directives: {},
		//keep-alive
		activated () {
			//激活
		},
		deactivated () {
			//停用
		},
		beforeDestroy () {
			//实例被销毁前
		},
		destroyed () {}
		//route leave
		//beforeRouteLeave ( to, from, next ) {
		//} 
	}
</script>