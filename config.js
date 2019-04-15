var shell =  require('shelljs')

console.log("environment variables is", process.env.VUE_APP_NODESHL)

shell.rm('-rf',['./dist','./dist.*']);
//路由引入路径
if (process.env.VUE_APP_NODESHL === 'PROD') {
	shell.cp('-R', './src/router/__import_prod.js', './src/router/index.js')
}else {
	shell.cp('-R', './src/router/__import_dev.js', './src/router/index.js')
}
