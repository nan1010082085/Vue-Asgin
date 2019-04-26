# vue-asgisn

详细链接 http://note.youdao.com/noteshare?id=495b02a6414ad89aeacf5e498ce38f40&sub=EDC0E0D1C3C9491A941444047219EF49

> login
1. 图形验证码登录
2. 手机号登录

> views
1. 常规布局  左侧导航 
2. 流式布局  顶部导航 + 缩小视口出现导航按钮
3. 实现控制面板 --  l-hedaer-content.vue
    1. 两种布局切换
    3. 导航切换
    3. element 主题切换
4. 路由切换 l-menu.vue && v-tabs.vue
5. 路由query参数传递
> router
1. 动态路由 

###### 路由跳转规则

* 所有跳转根据 router.name 跳转路由，区分 path 和 name 两个字段
*  name: 路由跳转使用 
```
  this.$router.push({
      namme: router.name
  })
```
*  path: 导航选中， tabs 标签栏选中使用
*  导航选中状态 为 当前路由父级id **[parentId]** + 路由元 **[path]** 组成
*  tabs标签选中为 路由元 **[path]** 或是自定义 path
*  
*  注意： 路由[parentId] 与 此路由的菜单id 相同
*  tabs 选中 **[path]** 如是导航此 **[path]** 与导航相同
*  tabs 跳转同一个路由 通过 **[query]** 展示不同的内容时 需要设置不同 **[path]** 
```
goSettingAddSubMenu(){
    		this.setMenuList({
					path:'setting-menu-add',
					name:'setting-add',
					label:'添加菜单',
					query:{
						status:'sub-menu'
					}
				})
    		this.setActiveTabs({tabs:'setting-menu-add'})
				this.$router.push({
					name:'setting-add',
					query:{
						status:'sub-menu'
					}
				})
			},
			goSettingAddMenu(){
				this.setMenuList({
					path:'setting-add',
					name:'setting-add',
					label:'添加路由',
					query:{
						status:'menu'
					}
				})
				this.setActiveTabs({tabs:'setting-add'})
    		this.$router.push({
					name:'setting-add',
					query:{
						status:'menu'
					}
    		})
```