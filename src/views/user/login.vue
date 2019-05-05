<template>
	<div class="login">
		<vue-particles
			ref="particles"
			style="width: 100%;height: 100%;"
			color="#dedede"
			:particleOpacity="1"
			:particlesNumber="120"
			shapeType="circle"
			:particleSize="4"
			linesColor="#dedede"
			:linesWidth="1"
			:lineLinked="true"
			:lineOpacity="0.6"
			:linesDistance="150"
			:moveSpeed="3"
			:hoverEffect="true"
			hoverMode="grab"
			:clickEffect="true"
			clickMode="push"
		>
		</vue-particles>
		<div class="form-warp">
			<Form v-show="!rapid" class="form" ref="form" :model="loginForm" :rules="ruleForm" label-width="80px"
						label-position="left">
				<Row class="form-header">
					<Col :span="12"><h1>Vue Asgin</h1></Col>
					<Col :span="12" class="tar" v-if="false">
						<Button type="text" @click="handleTigger('form')">快捷登录</Button>
					</Col>
				</Row>
				<FormItem label="帐号" prop="phone">
					<Input class="form-login-inp" size="small" v-model="loginForm.phone" placeholder="登录帐号"/>
				</FormItem>
				<FormItem label="密码" prop="pass">
					<Input class="form-login-inp" size="small" v-model="loginForm.pass" placeholder="登录密码"/>
				</FormItem>
				<FormItem label="验证码" prop="code">
					<Input class="form-login-inp-code" size="small" v-model="loginForm.code" placeholder="验证码"/>
					<VIdentify class="code-btn-img"
										 :font-size-min="28"
										 :contentWidth="100"
										 :contentHeight="32"
										 :identifyCode="identifyCode" @click.native="resetCode"></VIdentify>
				</FormItem>
				<div class="form-item-func">
					<Checkbox v-model="userNameCheck">记住我</Checkbox>
				</div>
				<FormItem prop="">
					<Button class="form-submit" size="small" type="primary" @click="handleSubmit('form')">登录</Button>
				</FormItem>
			</Form>
			<!-- 快捷登录 -->
			<Form v-show="rapid" class="form" ref="formRap" :model="loginFormRap" :rules="ruleFormRap" label-width="80px"
						label-position="left">
				<Row class="form-header">
					<Col :span="12"><h1>Vue Asgin</h1></Col>
					<Col :span="12" class="tar">
						<Button type="text" @click="handleTigger('formRap')">普通登录</Button>
					</Col>
				</Row>
				<FormItem label="手机号" prop="phoneRap">
					<Input class="form-login-inp" v-model="loginFormRap.phoneRap" placeholder="请输入手机号"/>
				</FormItem>
				<FormItem label="验证码" prop="codeRap">
					<Input class="form-login-inp-code" v-model="loginFormRap.codeRap" placeholder="请输入手机验证码"/>
					<Button class="code-btn" type="text"
									:disabled="!/\D+/.test(codeNumber)"
									@click="getCodePost(60)"
					>{{codeNumber}}
					</Button>
				</FormItem>
				<FormItem prop="">
					<Button class="form-submit" type="primary" @click="handleSubmit('formRap')">登录</Button>
					<Button class="form-reset" type="text" @click="handleReset('formRap')">重置</Button>
				</FormItem>
			</Form>
		</div>
		<div class="footer">
			@yangdongnan
			<a href="https://blog.csdn.net/weixin_38644883" target="_blank">Csdn</a>
			<a href="https://blog.csdn.net/weixin_38644883" target="_blank">Github</a>
		</div>
	</div>
</template>
<style scoped lang="scss">
	@import "~@/assets/css/login";
</style>
<script>
	import { resize, sendCode } from '../../utils'
	import { login_hick }       from '../../api/login'
	import { mapMutations }     from 'vuex'
	import VIdentify            from '../../components/identify'

	export default {
		components: { 'VIdentify': VIdentify },
		mixins: [],
		name: 'login',
		data () {
			//表单自定义校验
			const validatePhone = (rule, value, callback) => {
				if (!/^1[0-9]{10}$/.test(value)) {
					callback(new Error('请输入手机号'))
				} else if (!/^1[0-9]{10}$/.test(value)) {
					callback(new Error('请输入正确的手机号'))
				} else {
					callback()
				}
			}
			const validateCode = (rule, value, callback) => {
				if (value == '') {
					callback(new Error('请输入图片验证码'))
				} else if (value != this.identifyCode) {
					callback(new Error('图片验证码错误'))
				} else {
					callback()
				}
			}
			return {
				str: '',
				loading: '',
				firstCode: true,
				codeNumber: '获取验证码',
				rapid: false, //是否是快捷登录 true 快捷 false
				loginForm: {
					phone: '',
					pass: '',
					code: ''
				},
				loginFormRap: {
					phoneRap: '',
					codeRap: ''
				},
				ruleForm: {
					phone: [
						{ required: true, message: '请输入登录帐号', trigger: 'blur' }
					],
					pass: [
						{ required: true, message: '请输入登录密码', trigger: 'blur' }
					],
					code: [
						{ required: true, validator: validateCode, trigger: 'blur' }
					]
				},
				ruleFormRap: {
					phoneRap: [
						{ validator: validatePhone, trigger: 'blur' }
					],
					codeRap: [
						{ required: true, message: '请输入手机验证码', trigger: 'blur' }
					]
				},

				userNameCheck: false,
				identifyCode: '5757'
			}
		},
		props: {},
		computed: {},
		watch: {
			userNameCheck: 'checkUsers',
			loginForm:{
				handler:'inputForm',
				deep:true,
				immediate:true
			}
		},
		created () {
			this.identifyCode = this.randomCode()
			if (localStorage.getItem('username')) {
				this.loginForm.phone = localStorage.getItem('username')
				this.loginForm.pass = localStorage.getItem('password')
				this.userNameCheck = true
			}
		},
		mounted () {
			this.clear()
			resize((r) => {
				try {
					this.$refs[ 'particles' ].$el.style = 'width:100vw;height:100vh;'
				} catch (e) {}
			})
		},
		methods: {
			...mapMutations([
				'clear'
			]),
			handleTigger (formName) {
				this.rapid = !this.rapid
				this.$refs[ formName ].resetFields()
			},
			//验证码发送倒计时
			getCodePost (code) {
				this.codeNumber = code
				sendCode(code, (r) => {
					this.firstCode = false
					if (r.numbers == 0) {
						clearInterval(r.timer)
						if (!this.firstCode) {
							this.codeNumber = '再次发送'
						}
						return
					}
					this.codeNumber = r.numbers
				})
			},
			//提交登录
			handleSubmit (formName) {
				// console.log(this.$refs[ formName ])
				localStorage.removeItem('register')
				let params = {}
				if (this.rapid) {
					params[ 'phone' ] = this.loginFormRap.phoneRap
					params[ 'code' ] = this.loginFormRap.codeRap
				} else {
					params[ 'phone' ] = this.loginForm.phone
					params[ 'pass' ] = this.loginForm.phone
					params[ 'code' ] = this.loginForm.code
				}
				console.log(params)
				this.$refs[ formName ].validate((valid) => {
					if (valid) {
						this.loading = this.$loading()
						localStorage.removeItem('register')
						this.submit(params)
					} else {
						console.log(valid)
						if (!params.code) {
							return this.$message.error('请填写图片验证码')
						}
						this.$message.error('请完善登录信息')
						return false
					}
				})
			},
			submit (params) {
				login_hick(params)
					.then(res => {
						console.log(res)
						setTimeout(() => {
							this.loading.close()
							localStorage.setItem('register', JSON.stringify(res))
							this.$message.success('登录成功')
							this.$router.push('/views')
						}, 1000)
					})
			},
			//重置表单
			handleReset (formName) {
				this.$refs[ formName ].resetFields()
			},
			//记住我
			checkUsers (iSCheck) {
				if (iSCheck) {
					localStorage.setItem('username', this.loginForm.phone)
					localStorage.setItem('password', this.loginForm.pass)
				} else {
					localStorage.removeItem('username')
					localStorage.removeItem('password')
				}
			},
			inputForm(row){
				if(this.userNameCheck){
					localStorage.setItem('username', row.phone)
					localStorage.setItem('password', row.pass)
				}
			},
			randomCode () {
				return Math.random().toFixed(4).substr(2)
			},
			resetCode () {
				this.identifyCode = ''
				this.identifyCode = this.randomCode()
			}
		},
		filters: {},
		directives: {},
		destroyed () {}
		//route leave
		//beforeRouteLeave ( to, from, next ) {
		//} 
	}
</script>