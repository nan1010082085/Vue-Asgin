const _import = (file) => import(
	/* webpackChunkName: "[request]" */
	`../views/${file}.vue`
	)

export default _import