<template>
	<div>
		<ul>
			<li v-for="(item,index) in child" :key="index">
				<p @click="handleClick(item)">{{item.name}}</p>
				<treeList @row="handleConsole" v-if="item.child" :child="item.child"></treeList>
			</li>
		</ul>
	</div>
</template>
<style scoped lang="less">

</style>
<script>
	import treeList from './tree-list'
	export default {
		components: {treeList},
		mixins: [],
		name: 'treeList',
		data () {
			return {}
		},
		props: {
			child:Array
		},
		computed: {},
		watch: {

		},
		created () {},
		mounted () {},
		methods: {
			handleClick(item){
				this.$emit('row', item)
			},
			handleConsole(item){
				this.$emit('row', item)
			},
		},
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