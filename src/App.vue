<template>
  <div id="app">
    <el-container style="height: 100%; border: 1px solid #eee;">
      <el-aside width="200px" style="background-color: #022050;">
        <div class="logoTxt">智能投放系统</div>
        <el-menu default-active="/home" :default-openeds="['1','3']" router>
          <el-menu-item index="/createAdvert">新建广告</el-menu-item>
          <el-menu-item index="/home">首页概览</el-menu-item>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>广告管理</template>
            <el-menu-item-group>
              <el-menu-item index="/plan">广告计划</el-menu-item>
              <el-menu-item index="/unit">广告单元</el-menu-item>
              <el-menu-item index="/origin">广告创意</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/data">数据中心</el-menu-item>
          <el-menu-item index="/hold">工具箱</el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>
          <el-row type="flex" :gutter="20" justify="space-between" style="margin-right:0;">
            <el-col :span="12" style="padding:0;margin-top:15px;">
              <div>
              <span class="iconfont icon-liebiaoshouqi" style="color:#E8E8E8;margin-left:10px;padding:2px;border:1px solid #E8E8E8;"></span>
              </div>
            </el-col>
            <el-col :span="12" style="padding:0;text-align:right;">
              <div class="header-item">
                <i class="iconfont icon-qian" v-popover:popover1></i>
                <el-popover
                ref="popover1"
                placement="top-start"
                title="现金余额"
                width="200"
                trigger="hover"
                content="126，560.00。">
                </el-popover>
                <i class="iconfont icon-Prompt" v-popover:popover2></i>
                <el-popover
                ref="popover2"
                placement="top-start"
                title="如有问题，请邮件至"
                width="200"
                trigger="hover"
                content="zhoukun@zhoyebang.com。">
                </el-popover>
              </div>
              <div class="header-item">
                <el-dropdown>
                  <span class="el-dropdown-link">
                  <div class="username" style="display:inline-block;line-height:25px;">
                      <h3>wangxiaohu</h3>
                      <span>{{username}}</span>
                  </div>
                  <i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  </el-dropdown-menu>
              </el-dropdown>
              </div>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState(['username'])
  }
}
</script>

<style>
html,body,#app{
  width: 100%;
  height: 100%;
}
 *{
   margin: 0;
   padding: 0;
 }
 .logoTxt{
   width: 100%;
   height: 60px;
   color:#fff;
   font-size: 20px;
   text-align: center;
   line-height: 60px;
 }
 .el-menu-item.is-active{
   color:#fff;
   background-image: linear-gradient(-90deg, #095DE1 0%, #081A6C 94%);
 }
 .el-row {
    margin-bottom: 20px;
  }
  .header-item .iconfont{
    float: left;
    width: 50px;
    height:100%;
    font-size: 26px;
    text-align: center;
}
.header-item .iconfont:nth-child(1){
  background: #F0F8FF;
}
.header-item{
  display: inline-block;
  padding-right:20px;
}
.el-header{
  background: #FFFFFF;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.08);
  padding:0;
  margin:0;
}
.el-menu-item{
  background: #1C2941;
  color:#eee;
  text-align: center;
}
.el-menu-item:hover{
  color:#fff;
   background-image: linear-gradient(-90deg, #095DE1 0%, #081A6C 94%);
}
.el-menu-item-group__title{
  padding: 0;
}
.el-submenu__title{
  background: #1C2941;
  color:#eee;
}
.el-main{
  width: 100%;
  height: 100%;
  background: #eee;
}
</style>
