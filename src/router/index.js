const _import = (file) => import(
	/* webpackChunkName: "all-i18n-data" */
	/* webpackMode: "lazy-once" */
	`../views/${file}.vue`
)

export default _import