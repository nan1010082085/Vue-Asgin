> #### 前文 
> 已经完成这个架子的搭建
> ###### 关于登录
>  - 本地实现图形码， 当然这个并不安全
> ###### 关于 router
>  - 路由实现到三级动态路由
>  - mock中存有路由数据

##### github 地址  https://github.com/nan1010082085/Vue-Asgin.git
##### coding 地址 https://git.dev.tencent.com/nan1010082085/vue-asgin.git
#####  先上几张图片 
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190506213557527.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODY0NDg4Mw==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190506213525356.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODY0NDg4Mw==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/2019050621333590.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODY0NDg4Mw==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190506213354889.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODY0NDg4Mw==,size_16,color_FFFFFF,t_70)
![在这里插入图片描述](https://img-blog.csdnimg.cn/20190506213431572.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zODY0NDg4Mw==,size_16,color_FFFFFF,t_70)

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
  vue.config.js vuecli的一些配置项1
```