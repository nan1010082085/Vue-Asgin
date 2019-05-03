// const _import = (file) => import(
// 	/* webpackChunkName: "all-i18n-data" */
// 	/* webpackMode: "lazy-once" */
// 	`../views/${file}.vue`
// )
const _import = (file) => require(`../views/${file}.vue`).default
export default _import