<template>
	<div class="setting-add">
		<h2 class="fz18">{{setTitle}}</h2>
		<Form v-if="isSubMenu" class="form"
					:model="ruleFormSub"
					:rules="rulesSub"
					ref="ruleFormSub"
					label-width="120px"
					label-position="left">
			<FormItem class="form-item" prop="label" label="展示名称：">
				<Input v-model="ruleFormSub.label" placeholder="请输入展示名称" class="form-item-inp" size="small"/>
				<Tooltip class="item" effect="dark" content="必填：菜单导航中展示的名字" placement="top-start">
					<i class="el-icon-question ml5"></i>
				</Tooltip>
			</FormItem>
			<FormItem class="form-item" label="展示图标：">
				<Input v-model="ruleFormSub.icon" placeholder="请输入展示图标" class="form-item-inp" size="small"/>
			</FormItem>
			<FormItem class="form-item" label="是否展示">
				<el-switch
					v-model="ruleFormSub.isShow"
					active-color="#13ce66"
					inactive-color="#ff4949"
					@change="handleIsShow">
				</el-switch>
			</FormItem>
			<FormItem class="form-item">
				<Button type="primary" size="small" class="submit" @click="handleSubmit('ruleFormSub')">提交</Button>
				<Button type="default" size="small" @click="handleReset('ruleFormSub')">重置</Button>
			</FormItem>
		</Form>
		<Form v-if="!isSubMenu" class="form"
					:model="ruleForm"
					:rules="rules"
					ref="ruleForm"
					label-width="120px"
					label-position="left">
			<FormItem class="form-item" prop="path" label="路由地址：">
				<Input v-model="ruleForm.path" placeholder="请输入路由地址" class="form-item-inp" size="small"/>
				<Tooltip class="item" effect="dark" content="必填：浏览器地址栏中展示的名称" placement="top-start">
					<i class="el-icon-question ml5"></i>
				</Tooltip>
			</FormItem>
			<FormItem class="form-item" prop="name" label="路由别名：">
				<Input v-model="ruleForm.name" placeholder="请输入路由别名" class="form-item-inp" size="small"/>
				<Tooltip class="item" effect="dark" content="必填：路由跳转的别名" placement="top-start">
					<i class="el-icon-question ml5"></i>
				</Tooltip>
			</FormItem>
			<FormItem class="form-item" prop="label" label="展示名称：">
				<Input v-model="ruleForm.label" placeholder="请输入展示名称" class="form-item-inp" size="small"/>
				<Tooltip class="item" effect="dark" content="必填：路由在导航中展示的名字" placement="top-start">
					<i class="el-icon-question ml5"></i>
				</Tooltip>
			</FormItem>
			<FormItem class="form-item" prop="location" label="页面所在路径：">
				<Input v-model="ruleForm.location" placeholder="请输入页面所在路径" class="form-item-inp" size="small"/>
				<Tooltip class="item" effect="dark" content="必填：路由对应文件的路径" placement="top-start">
					<i class="el-icon-question ml5"></i>
				</Tooltip>
			</FormItem>
			<FormItem class="form-item" prop="parentId" label="路由所属菜单：">
				<Select v-model="ruleForm.parentId" placeholder="请选择路由所属菜单" class="form-item-inp" size="small">
					<Option
						v-for="item in parentOption"
						:key="item.label"
						:label="item.label"
						:value="item.label">
					</Option>
				</Select>
				<Tooltip class="item" effect="dark" content="必填：导航中那个菜单下的路由" placement="top-start">
					<i class="el-icon-question ml5"></i>
				</Tooltip>
			</FormItem>
			<FormItem class="form-item" label="展示图标：">
				<Input v-model="ruleForm.icon" placeholder="请输入展示图标" class="form-item-inp" size="small"/>
			</FormItem>
			<FormItem class="form-item" label="是否展示">
				<el-switch
					v-model="ruleForm.isShow"
					active-color="#13ce66"
					inactive-color="#ff4949"
					@change="handleIsShow">
				</el-switch>
			</FormItem>
			<FormItem class="form-item">
				<Button type="primary" size="small" class="submit" @click="handleSubmit('ruleForm')">提交</Button>
				<Button type="default" size="small" @click="handleReset('ruleForm')">重置</Button>
			</FormItem>
		</Form>
	</div>
</template>
<style scoped lang="less">
	.setting-add {
		padding: 20px 10px 20px;
		height: auto;
		background-color: #f9f9f9;

		h2 {

		}

		.form {
			margin: auto;
			width: 500px;
		}

		.form-item {
			width: auto;
		}

		.form-item-inp {
			width: 280px;
		}

		.submit {
			width: 60%;
		}
	}
</style>
<script>
	import {isHanzi} from '../../utils'
	import { mapMutations } from 'vuex'
	export default {
		components: {},
		mixins: [],
		name: '',
		data () {
			const checkHanZi= (rule, value, callback) => {
				if (!value) {
					return callback(new Error('请输入展示名称'));
				}
				if(isHanzi(value)){
					return callback(new Error('请输入中文汉字'));
				}else {
					callback()
				}
			};
			return {
				loading: '',
				ruleFormSub: {
					label: '',
					icon: '',
					isShow: true
				},
				rulesSub: {
					label: [
						{ required: true, validator : checkHanZi, trigger: 'blur' }
					]
				},
				ruleForm: {
					parentId: '',
					path: '',
					name: '',
					label: '',
					icon: '',
					location: '',
					isShow: true
				},
				rules: {
					path: [
						{ required: true, message: '请输入路由地址', trigger: 'blur' }
					],
					name: [
						{ required: true, message: '请输入路由别名', trigger: 'blur' }
					],
					label: [
						{ required: true, validator : checkHanZi, trigger: 'blur' }
					],
					location: [
						{ required: true, message: '请输入页面所在路径', trigger: 'blur' }
					],
					parentId: [
						{ required: true, message: '请选择路由所属菜单', trigger: 'blur' }
					]
				},
				parentOption: []
			}
		},
		props: {},
		computed: {
			isSubMenu: {
				get () {
					return this.$route.query.status == 'sub-menu' ? true : false
				}
			},
			setTitle: {
				get () {
					return this.$route.query.status == 'sub-menu' ? '添加路由菜单' : '添加路由'
				}
			}
		},
		watch: {},
		created () {},
		mounted () {
			this.getData()
		},
		methods: {
			...mapMutations([
				'closeMenuList',
				'isAddMenu'
			]),
			getData () {
				let menuList = JSON.parse(localStorage.getItem('menu'))
				this.parentOption = menuList
			},
			handleSubmit (formname) {
				let params = {}
				if (formname == 'ruleFormSub') {
					params = this.ruleFormSub
				} else {
					params = this.ruleForm
				}
				this.$refs[ formname ].validate((valid) => {
					if (valid) {
						/*
						 * 路由菜单 --> 添加menu第一层
						 * 路由 --> 选择插入那一个菜单， 插入对应菜单下的children
						 * */
						this.loading = this.$loading()
						let menuList = JSON.parse(localStorage.getItem('menu'))
						if (formname == 'ruleFormSub') { //菜单添加
							let isExist = menuList.filter(item => item.label == params.label).length > 0
							if (isExist) {
								this.$message.warning('当前菜单已存在')
								return
							}
							params[ 'children' ] = [] //菜单必须有children
							menuList.push(params)
							this.successAdd(menuList)
							setTimeout(() => {
								this.loading.close()
							}, 1000)
						} else { //路由添加
							setTimeout(()=>{
								this.loading.close()
							},1000)
							let labelList = []
							function isExistRoute (routes) {
								for (let i = 0; i < routes.length; i++) {
									const listElement = routes[ i ]
									labelList.push(listElement.label)
									if (listElement.children) {
										isExistRoute(listElement.children)
									}
								}
								return labelList;
							}
							let isExist = isExistRoute(menuList)
							if (!isExist.includes(params.label)) {
								if (params.parentId != null
									&& params.parentId != ''
									&& params.parentId != undefined) {
									menuList.forEach((item)=>{//选择1级菜单
										if(item.label == params.parentId && item.children){
											item.children.push(params)
										}
									})
									this.successAdd(menuList)
								} else {
									menuList.push(params)
									this.successAdd(menuList)
								}
							} else {
								this.$message.warning('当前添加名称已存在')
							}
						}
					} else {
						this.$message.error('请请添加完整的路由信息')
						return false
					}
				})
			},
			handleReset (formname) {
				this.$refs[ formname ].resetFields()
			},
			handleIsShow () {},
			successAdd (menuList) {
				/*
				* 重新设置新的数据
				* */
				localStorage.setItem('menu', JSON.stringify(menuList))
				this.$message.success('添加成功')
				this.closeMenuList(this.$route.name)
				this.$router.push({ name: 'views' })
				this.isAddMenu(true)
			}
		},
		filters: {}
	}
</script>