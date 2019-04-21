<template>
	<div class="v-router" :class="{'v-router-show' : getMenuList.length>0}">
		<Tag class="v-router-item"
				 :class="{'v-router-item-active': r.check}"
				 v-for="(r, i) in getMenuList" :key="i"
				 @click.native="handleCheck(r)"
				 closable>{{r.label}}</Tag>
		<Popover
			v-if="menuMoreList.length>0"
			class="v-router-more"
			placement="bottom"
			width="100"
			trigger="hover">
			<div class="v-router-more-list">
				<Tag class="v-router-item" @click.native="handleMoreItemClick(r,i)" v-for="(r, i) in menuMoreList" :key="i" closable>{{r.name}}</Tag>
			</div>
			<Button slot="reference" size="mini" icon="el-icon-more" circle></Button>
		</Popover>
	</div>
</template>
<style scoped lang="less">
	.v-router{
		position: relative;
		display: flex;
		flex-direction: row;
		align-items: center;
		width: 100%;
		height: 40px;
		transform: scale(0,0);
		transform-origin: 50%;
		transition: transform .3s ease-in;
		&-item{
			flex: none;
			margin-right: 3px;
			width:90px;
			text-align: center;
			text-overflow: ellipsis;
			overflow: hidden;
			cursor: pointer;
		}
		&-item-active.el-tag{
			background: #fff;
			color: #333;
			border-bottom: 1px solid #fff!important;
			border-radius: 4px 4px 0 0;
		}
		&-more{
			position: absolute;
			right: 0;
			&-list{
				max-height: 300px;
				overflow-x: hidden;
				overflow-y: auto;
			}
		}
	}
	.v-router-show {
		transform: scale(1,1);
	}
</style>
<script>
	import {mapState} from 'vuex'
  export default {
    name : "vRouter",
    data () {
      return {
        menuList: [],
				menuMoreList: []
			}
    },
    computed : {
      ...mapState({
				vMenuList: state => state.layout.menuList
			}),
			getMenuList:{
        get(){
          return this.menuList = this.vMenuList
				}
			}
		},
    watch : {},
    methods : {
      handleCheck(r){
        this.menuList.forEach(er=>{
          er.check = false
				})
        r.check = true
				this.$router.push({name:r.name})
			},
			//更多点击tag操作
      handleMoreItemClick(item,index){
        //展示中的数组最后一位进入更多
        let menuItem = this.menuList.pop()
        this.menuMoreList.push(menuItem)
        this.menuMoreList.splice(item,1)
				//当前点击数据进入展示最后一位
        this.menuList.push(item)
				this.handleCheck(item)
			}
		}
  }
</script>