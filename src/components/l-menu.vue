<template>
	<div class="l-menu">
		<div v-if="isShowMenu">
			<Menu :text-color="navStyle.textColor"
						:active-text-color="navStyle.activeTextColor"
						:background-color="navStyle.backgroundColor"
						:style="{'background-color' : navStyle.backgroundColor}"
						:mode="pattern == 2 ? 'horizontal' : 'vertical'">
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
		</div>
		<div class="sidebar-menu"></div>
	</div>
</template>
<style scoped lang="less">
	.l-menu{
		width: 100%;
	}
	.sidebar-menu{
		width: 200px;
		/*transform: translate3d(-100%, 0, 0);*/
		transition: transform .4s ease;
	}
	.sidebar-menu-show{
		transform: translate3d(100%, 0, 0);
	}
</style>
<script>
	export default {
		components: {},
		mixins: [],
		name: '',
		data () {
			return {}
		},
		props: {
			pattern:String,
			visible:Boolean,
			isShowMenu:{
				type:Boolean,
				default:true,
			},
			navStyle: Object
		},
		computed: {},
		watch: {},
		created () {},
		mounted () {},
		methods: {},
		filters: {}
	}
</script>