<template>
	<div class="main-container-warp">
		<Row>

		</Row>
		<Table
			:data="tableData"
			border>
			<TableColumn
				fixed
				prop="userId"
				label="用户编号"
				min-width="150">
			</TableColumn>
			<TableColumn
				fixed
				prop="userName"
				label="用户名称"
				min-width="150">
			</TableColumn>
			<TableColumn
				prop="userPhone"
				label="手机号"
				min-width="200">
			</TableColumn>
			<TableColumn
				prop="userClass"
				label="用户等级"
				min-width="100">
			</TableColumn>
			<TableColumn
				prop="userIntegral"
				label="用户积分余额"
				min-width="100">
			</TableColumn>
			<TableColumn
				prop="userStatus"
				label="用户状态"
				min-width="150">
			</TableColumn>
			<TableColumn
				fixed="right"
				label="操作"
				width="180">
				<template slot-scope="scope">
					<Button @click="handleClick(scope.row)" size="mini">查看</Button>
					<Button type="primary" size="mini">编辑</Button>
				</template>
			</TableColumn>
		</Table>
	</div>
</template>
<script>
	export default {
		components: {},
		mixins: [],
		name: 'user-list',
		data () {
		  const obj = {
        userId:'1001',
        userName:'王强',
        userStatus:'良好',
        userClass:'5',
        userPhone:'1888888888',
        userIntegral:'15000',
			}
			return {
		    tableData : Array(20).fill(obj)
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
<style scoped lang="scss">

</style>