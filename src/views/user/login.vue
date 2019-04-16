<template>
	<div class="login">
		<vue-particles
			style="width: 100vw;height: 100vh;"
			color="#dedede"
			:particleOpacity="1"
			:particlesNumber="120"
			shapeType="circle"
			:particleSize="4"
			linesColor="#dedede"
			:linesWidth="1"
			:lineLinked="true"
			:lineOpacity="0.6"
			:linesDistance="150"
			:moveSpeed="3"
			:hoverEffect="true"
			hoverMode="grab"
			:clickEffect="true"
			clickMode="push"
		>
		</vue-particles>
		<div class="form">
			<div class="form-item"></div>
		</div>
		<div class="footer">
			@yangdongnan
			<a href="https://blog.csdn.net/weixin_38644883">Csdn</a>
			<a href="https://blog.csdn.net/weixin_38644883">Github</a>
		</div>
	</div>
</template>
<style scoped lang="less">
	@import "../../assets/css/login";
</style>
<script>
	export default {
		components: {},
		mixins: [],
		name: 'login',
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