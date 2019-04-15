const _import = (file) => import(
	/* webpackChunkName: "[request]" */
	`../views/${file}`
	)

export default _import