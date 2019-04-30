<template>
	<div class="add-menu-form">
		<Tabs tab-position="left">
			<TabPane label="添加菜单">
				<vMenuForm></vMenuForm>
			</TabPane>
			<TabPane label="添加路由">
				<vMenuItemForm></vMenuItemForm>
			</TabPane>
		</Tabs>
	</div>
</template>
<script>
	import vMenuForm from './menu-form'
	import vMenuItemForm from './menu-item-form'
	export default {
		components: {vMenuForm,vMenuItemForm},
		mixins: [],
		name: 'add-menu-item',
		data () {
			return {
				active:'',
			}
		},
		props: {},
		computed: {},
		watch: {},
		created () {},
		mounted () {},
		methods: {},
		filters: {},
	}
</script>
<style scoped lang="less">
	.add-menu-form{
		width: 100%;
		height: 100%;
		padding: 20px 20px 0 20px;
		border-radius: 8px;
		box-sizing: border-box;
		background-color: #fff;
	}
</style>