<template>
	<div>
		<ul>
			<li v-for="(item,index) in list" :key="index">
				<p>{{item.name}}</p>
				<treeList @row="handleConsole" :child="item.child" v-if="item.child"></treeList>
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
		name: 'tree',
		data () {
			return {
				list: [
					{
						name: 'name1',
						child:[
							{
								name:'name12',
								child:[
									{
										name:'name123',
										child:[
											{
												name:'name1234'
											},
											{
												name:'name12345'
											}
										]
									},
									{
										name:'name223'
									}
								]
							},
							{
								name:'name321',
								child:[
									{
										name:'name322'
									},
									{
										name:'name3233'
									}
								]
							}
						]
					},
					{
						name: 'name2',
						child:[
							{
								name:'name12',
								child:[
									{
										name:'name123'
									},
									{
										name:'name123'
									}
								]
							},
							{
								name:'name123',
								child:[
									{
										name:'name1233'
									},
									{
										name:'name1233'
									}
								]
							}
						]
					}
				]
			}
		},
		props: {},
		computed: {},
		watch: {},
		created () {},
		mounted () {},
		methods: {
			handleConsole(item){
				console.log(item.name, 'tree')
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