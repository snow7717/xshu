<template>
  <el-aside v-bind:width='isCollapse ? "70px" : "206px"' class='f-pr' v-bind:style='"height:" + (windowH-80) + "px"'> 
	  <el-menu v-bind:default-active="active" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" unique-opened v-bind:style='"min-height:" + (windowH-80) + "px"' :collapse="isCollapse" style='max-width: 200px' v-bind:collapse-transition='false' router>
		  <el-menu-item index='0' route='/'>
			  <i class='el-icon-s-home' v-bind:class='active == 0 ? "icon-active" : "icon-default"'></i>
				<span class='menu-text'>全局总览</span>
			</el-menu-item>
			<el-menu-item index='1' route='/member'>
			  <i class='el-icon-s-custom' v-bind:class='active == 1 ? "icon-active" : "icon-default"'></i>
				<span class='menu-text'>成员管理</span>
			</el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-s-data" v-bind:class='active == 2 ? "icon-active" : "icon-default"'></i>
          <span class='menu-text'>成果汇总</span>
        </template>
        <el-menu-item index="2-1" route='/result/wait'>待认领成果</el-menu-item>
        <el-menu-item index="2-2" route='/result/paper'>论文</el-menu-item>
				<el-menu-item index="2-3">纵向课题</el-menu-item>
				<el-menu-item index="2-4">软件著作权</el-menu-item>
				<el-menu-item index="2-5">专利</el-menu-item>
				<el-menu-item index="2-6">个人获奖</el-menu-item>
				<el-menu-item index="2-7">学生获奖</el-menu-item>
				<el-menu-item index="2-8">继续教育材料</el-menu-item>
				<el-menu-item index="2-9">著作</el-menu-item>
				<el-menu-item index="2-10">横向课题</el-menu-item>
				<el-menu-item index="2-11">新闻报道</el-menu-item>
				<el-menu-item index="2-12">档案资料</el-menu-item>
				<el-menu-item index="2-13">其他</el-menu-item>
				<el-menu-item index="2-14">新型成果</el-menu-item>
				<el-menu-item index="2-14">
				  <i class='el-icon-plus'></i>
				  <span class='menu-text'>添加自定义</span>
				</el-menu-item>
      </el-submenu>
			<el-submenu index='3'>
			  <template slot="title">
          <i class="el-icon-printer" v-bind:class='active == 3 ? "icon-active" : "icon-default"'></i>
          <span class='menu-text'>材料生成</span>
        </template>
				<el-menu-item index="3-1">新建材料</el-menu-item>
        <el-menu-item index="3-2">历史材料</el-menu-item>
			</el-submenu>
			<el-submenu index='4'>
			  <template slot="title">
          <i class="el-icon-setting" v-bind:class='active == 4 ? "icon-active" : "icon-default"'></i>
          <span class='menu-text'>系统设置</span>
        </template>
				<el-menu-item index="4-1">团队信息</el-menu-item>
        <el-menu-item index="4-2">团队设置</el-menu-item>
				<el-menu-item index="4-3">自定义模块</el-menu-item>
			</el-submenu>
			<el-submenu index='5'>
			  <template slot="title">
          <i class="el-icon-menu" v-bind:class='active == 5 ? "icon-active" : "icon-default"'></i>
          <span class='menu-text'>团队工具</span>
        </template>
				<el-menu-item index="5-1">成果移除箱</el-menu-item>
        <el-menu-item index="5-2">团队通讯录</el-menu-item>
				<el-menu-item index="5-3">团队资料夹</el-menu-item>
			</el-submenu>
			<el-submenu index='6'>
			  <template slot="title">
          <i class="el-icon-question" v-bind:class='active == 6 ? "icon-active" : "icon-default"'></i>
          <span class='menu-text'>使用帮助</span>
        </template>
				<el-menu-item index="5-1">常见问题</el-menu-item>
        <el-menu-item index="5-2">系统帮助</el-menu-item>
				<el-menu-item index="5-3">联系我们</el-menu-item>
			</el-submenu>
    </el-menu>
		<section class='toggle f-csp f-tac' v-on:click='isCollapse = !isCollapse' v-bind:style='{top: (windowH-60)/2 + "px",left: isCollapse ? "64px" : "200px"}'>
			<i v-bind:class='isCollapse ? "el-icon-caret-right" : "el-icon-caret-left"'></i>
	  </section>
	</el-aside>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>