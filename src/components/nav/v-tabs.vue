<template>
	<div class="v-router">
		<Tabs class="v-router-tabs"
					v-model="activeName"
					@tab-click="handleClick"
					@tab-remove="handleRemove"
					closable>
			<TabPane
							 v-for="(tbs, i) in tabsList" :key="tbs.path"
							 :label="tbs.meta.label"
							 :name="tbs.path"
			>
			</TabPane>
		</Tabs>
	</div>
</template>
<style scoped lang="scss">
	.v-router {
		width: 100%;
	}
</style>
<script>
	import { mapMutations, mapState } from 'vuex'

	export default {
		name: 'vTabs',
		data () {
			return {
				activeName: '',
				menuList: [],
				next: false
			}
		},
		computed: {
			...mapState({
				tabsList: state => state.layout.tabsList,
				activeTabs: state => state.layout.activeTabs,
				// vNavStyle: state => state.layout.navStyle
			})
		},
		watch: {
			tabsList: {
				handler: 'getData',
				deep: true,
				immediate: true
			},
			'activeTabs':{
				handler: 'getTabs',
				immediate:true
			}
		},
		methods: {
			...mapMutations([
				'setMenuList',
				'setActiveMenu',
				'closeMenuList',
				'closeTabs'
			]),
			handleClick (evt) {
				this.menuList.forEach((item) => {
					if (item.path === evt.name) {
						this.setActiveMenu({ menu: item.activeIndex, tabs: item.path })
						this.$router.push({ name: item.name, query: item.query })
						return false
					}
				})
			},
			handleRemove (evt) {
				this.closeMenuList(evt)
				if (this.tabsList.toString() === '') {
					this.closeTabs()
					this.$router.push({ name: 'home' })
				}
			},
			getTabs (tabs) {
				this.activeName = tabs
			},
			getData (tabs) {
				this.menuList = tabs
			}
		}
	}
</script>