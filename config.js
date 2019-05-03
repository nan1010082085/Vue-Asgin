var shell =  require('shelljs')

console.log("environment variables is", process.env.VUE_APP_NODESHL)

shell.rm('-rf',['./dist','./dist.*']);

/*
* @PROD 生产
* router 开发时同步路由， 生产时动态路由
* config 开发时一些全局变量 如接口域名
* */
if (process.env.VUE_APP_NODESHL === 'PROD') {
	shell.cp('-R', './src/router/__import_prod.js', './src/router/index.js')
	shell.cp('-R', './src/config/prod.env.js', './src/config/index.js')
}
if (process.env.VUE_APP_NODESHL === 'DEV'){
	shell.cp('-R', './src/router/__import_dev.js', './src/router/index.js')
	shell.cp('-R', './src/config/dev.env.js', './src/config/index.js')
}
