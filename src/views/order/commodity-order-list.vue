<template>
	<div class="main-container-warp">
		<Row>商品订单列表</Row>
		<Table
			:data="tableData"
			border>
			<TableColumn
				fixed
				prop="orderId"
				label="订单编号"
				min-width="150">
			</TableColumn>
			<TableColumn
				prop="commodityId"
				label="商品编号"
				min-width="150">
			</TableColumn>
			<TableColumn
				prop="commodityName"
				label="商品名称"
				min-width="200">
			</TableColumn>
			<TableColumn
				prop="price"
				label="商品价格"
				min-width="100">
			</TableColumn>
			<TableColumn
				prop="discounts"
				label="优惠金额"
				min-width="100">
			</TableColumn>
			<TableColumn
				prop="practicalPrice"
				label="实付金额"
				min-width="100">
			</TableColumn>
			<TableColumn
				prop="orderStatus"
				label="订单状态"
				min-width="100">
			</TableColumn>
			<TableColumn
				prop="shippingStatus"
				label="发货状态"
				min-width="100">
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
    components : {},
    mixins : [],
    name : "commodity-order",
    data () {
      const obj = {
        orderId : '100221',
        commodityId : '01005',
        commodityName : '测试商品',
        price : '6',
        discounts : '1',
        practicalPrice : '5',
        orderStatus : '配送中',
        shippingStatus : '已发货'
      }
      return {
        tableData : Array(20).fill(obj)
      }
    },
    props : {},
    computed : {},
    watch : {},
    methods : {
      handleClick (row) {
      }
    },
    mounted () {
    },
    created () {
    },
    filters : {},
    directives : {}
  }
</script>
<style scoped lang="scss">

</style>