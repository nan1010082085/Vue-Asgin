    # vue-asgisn

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
2. menu 与 tabs联动
3. 三级动态路由展示

###### 路由跳转规则

* 所有跳转根据 router.name 跳转路由，区分 path 和 name 两个字段
*  name: 路由跳转使用 
```
  this.$router.push({
      namme: router.name
  })
```
*  path: 导航选中， tabs 标签栏选中使用
*  导航选中状态 为 当前路由父级id **[_id]** + 路由元 **[path]** 组成
*  tabs标签选中为 路由元 **[path]** 或是自定义 path
*  
*  注意： 路由[_id] 与 此路由的菜单id 相同
*  tabs 选中 **[path]** 如是导航此 **[path]** 与导航相同
*  tabs 跳转同一个路由 通过 **[query]** 展示不同的内容时 需要设置不同 **[path]** 
*  
---

#### 目录结构
```
  src --- 
        | api ---   //接口管理
                | htttp   //axios请求封装
                | index.js  //没有对应views 页面文件的接口
                | sys  对应 views sys文件所调用的接口 以此类推
        | assets ---  //样式管理
                   | css --- //样式文件
                           | public.scss //全局样式
                           | variables.scss //全局样式变量
                           | theme.scss //element 主题样式覆盖
                   | theme //头部背景与导航背景样式
        | components ---  //组件管理
                       | element  //element-ui组件引入
        | config ---  //全局变量
                   | dev.env   //开发环境变量
                   | prod.env  //生产环境变量
                   | index.js  //最后暴露文件
        | mock  --- //模拟数据
        | router ---  //路由管理
                   | dev 同步模式
                   | prod 异步模式
        | store ---  //全局状态管理
                  | layout //路由跳转状态管理 页面布局管理
        | utils --- //管理工具函数 
        | views --- //页面管理
                  | home //首页
                  | order //订单
                  | user-classify //用户列表
                  | utils //其他页面 404等
                  | sys //系统设置，  开发中显示
                  | user //登录页面等
                  | views.vue 住入口 包含导航 头部等
  .env.development --- 开发环境静态变量
  .env.production --- 生产环境静态变量
  config.js   //通过shelljs 来配置不同环境下采用的变量【config】和模式【router】
  vue.config.js vuecli的一些配置项
```
