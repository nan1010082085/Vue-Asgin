<template>
	<div class="control-fixed" :class="{'control-fixed-active': visible}">
		<div class="control-header"
				 :style="{
				 'background-color':vNavStyle.backgroundColor
				 }">
			<Button class="control-close"
							v-if="visible"
							:style="{
							 'color':vNavStyle.textColor
							}"
							type="text"
							size="large"
							icon="el-icon-circle-close"
							@click.native="close" circle>
			</Button>
		</div>
		<!---->
		<h2 class="title fz14">导航模式</h2>
		<Form class="form" label-width="100px" label-position="left">
			<FormItem label="侧边导航">
				<div class="form-item" @click="handlePattern('side')">
					<img :class="{'menu-active' : sideMenu}"
							 src="https://gw.alipayobjects.com/zos/rmsportal/JopDzEhOqwOjeNTXkoje.svg" alt="sidemenu">
				</div>
			</FormItem>
			<FormItem label="顶部导航">
				<div class="form-item" @click="handlePattern('top')">
					<img :class="{'menu-active' : topMenu}"
							 src="https://gw.alipayobjects.com/zos/rmsportal/KDNDBbriJhLwuqMoxcAr.svg" alt="topmenu">
				</div>

			</FormItem>
		</Form>
		<!---->
		<h2 class="title fz14">背景主题</h2>
		<Form class="form" label-width="100px" label-position="left">
			<Row class="theme">
				<Col :span="6" v-for="(em, ems) in theme" :key="ems"
						 @click.native="handleSelectTheme(em)">
					<Tooltip class="item" effect="dark" :content="em.name" placement="left">
						<span class="theme-item"
									:class="{'theme-item-active' : em.check}" :style="{'background-color':em.backgroundColor}"></span>
					</Tooltip>
					<span class="theme-name" :class="{'theme-name-active' : em.check}">{{em.name}}</span>
				</Col>
			</Row>
		</Form>
		<!---->
		<h2 class="title fz14">导航设置</h2>
		<Form class="form" label-width="100px" label-position="left">
			<FormItem label="固定导航">
				<div class="form-item">
					<el-switch
						:disabled="vPattern == 2"
						v-model="fixedNav"
						active-color="#13ce66"
						inactive-color="#ff4949"
						@change="handleFixedNav">
					</el-switch>
				</div>
			</FormItem>
			<FormItem label="顶部固定">
				<div class="form-item">
					<el-switch
						v-model="fixedHeader"
						active-color="#13ce66"
						inactive-color="#ff4949"
						@change="handleFixedHeader">
					</el-switch>
				</div>
			</FormItem>
		</Form>
		<!---->
		<h2 class="title fz14" v-if="false">其他</h2>
		<Form class="form" v-if="false" label-width="100px" label-position="left">
			<FormItem label="两侧留白">
				<div class="form-item">
					<el-switch
						v-model="mainJustify"
						active-color="#13ce66"
						inactive-color="#ff4949"
						@change="handleFixedNav">
					</el-switch>
				</div>
			</FormItem>
		</Form>
	</div>
</template>
<style scoped lang="less">
	.control-fixed {
		position: absolute;
		top: 60px;
		width: 300px;
		height: calc(100% - 60px);
		right: 0;
		background: #fff;
		color: #333;
		border-left: 1px solid #b3f8ff;
		transform: translate3d(100%, 0, 0);
		transition: all .3s linear;
	}

	.control-fixed-active {
		transform: translate3d(0px, 0, 0);
	}
	.control-header{
		position: absolute;
		top: 15%;
		left: -40px;
		border-radius: 5px 0 0 5px;
	}
	.control-close {
		height: 40px;
	}

	.title {
		margin-left: 5px;
		height: 40px;
		line-height: 40px;
		border-bottom: 1px solid #B3C0D1;
	}

	.form {
		padding: 10px 20px;
	}

	.form-item {
		width: 100%;
		text-align: right;

		img {
			width: 52px;
			height: 45px;
			cursor: pointer;
		}

		.menu-active {
			box-shadow: 0px 1px 5px 0 rgba(0, 186, 189, 1);
			transition: box-shadow .2s ease;
		}
	}

	.theme {
		padding-top: 20px;
		padding-bottom: 20px;
		text-align: center;
		cursor: pointer;

		.theme-item {
			display: block;
			margin: auto;
			width: 20px;
			height: 20px;
			border-radius: 5px;
			background-color: #00BABD;
			box-shadow: 0px 1px 5px 0 rgba(0, 0, 0, .45);
		}

		.theme-item-active {
			box-shadow: 0px 1px 5px 0 rgba(0, 186, 189, 1);
			transition: box-shadow .2s ease;
		}

		.theme-name {
			display: block;
			margin: 5px 0;
		}

		.theme-name-active {
			color: #00BABD;
			transition: color .2s ease;
		}
	}


	/*element*/
	.el-form-item {
		margin-bottom: 0;
	}
</style>
<script>
  import * as theme   from '../assets/theme'
  import { mapState } from 'vuex'

  export default {
    components : {},
    mixins : [],
    name : '',
    data () {
      return {
        sideMenu : false,
        topMenu : true,
        fixedNav : false,  //固定导航 只支持 pattern == 1 侧边导航模式
        fixedHeader : false,
        mainJustify : false,
        theme : [],
        layout : {
          pattern : '',
          fixedNav : false,
          fixedHeader : false,
          navStyle : {},
          mainJustify : false
        }
      }
    },
    props : {
      visible : Boolean
    },
    computed : {
      ...mapState({
        vPattern : state => state.layout.pattern,
        vFixedNav : state => state.layout.fixedNav,
        vFixedHeader : state => state.layout.fixedHeader,
        vMainJustify : state => state.layout.mainJustify,
        vNavStyle : state => state.layout.navStyle
      })
    },
    watch : {},
    created () {
    },
    mounted () {
      this.init()
    },
    methods : {
      init () {
        Object.keys(theme).forEach(em => {
          theme[ em ][ 'check' ] = false
          this.theme.push(theme[ em ])
        })
        this.sideMenu = this.vPattern == 1
        this.topMenu = this.vPattern == 2

				//顶部导航模式不支持固定导航开关
				if(this.vPattern == 1){
          this.fixedNav = this.vFixedNav
        }else {
          this.fixedNav = false
				}

        this.fixedHeader = this.vFixedHeader
        this.mainJustify = this.vMainJustify
				this.layout.pattern = this.vPattern
				this.theme.forEach(em=>{
				  if(em.id == this.vNavStyle.id){
				    em.check = true
					}
				})
      },
      close () {
        this.$emit('close')
      },
      //导航模式
      handlePattern ( pattern ) {
        switch ( pattern ) {
          case 'side':
            this.sideMenu = true;
            this.topMenu = false;
            this.layout.pattern = '1'
            this.$emit('layout', this.layout)
            ;
            break
          case 'top':
            this.sideMenu = false;
            this.topMenu = true;
            this.layout.pattern = '2'
            this.fixedNav = false
            this.$emit('layout', this.layout)
            ;
            break
        }
      },
      //固定导航
      handleFixedNav ( e ) {
        this.layout.fixedNav = e

        this.$emit('layout', this.layout)
      },
      //固定顶部
      handleFixedHeader ( e ) {
        this.layout.fixedHeader = e

        this.$emit('layout', this.layout)
      },
      //选择背景颜色
      handleSelectTheme ( em ) {
        this.theme.forEach(ems => {
          ems[ 'check' ] = false
        })
        em[ 'check' ] = true;
        this.layout.navStyle = em;

        this.$emit('layout', this.layout)
      }
    },
    filters : {}
  }
</script>