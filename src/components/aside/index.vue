<template>
  <el-aside v-bind:width='isCollapse ? "70px" : "206px"' class='f-pr' v-bind:style='"height:" + (windowH-80) + "px"'> 
	  <el-menu v-bind:default-active="active" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" unique-opened v-bind:style='"min-height:" + (windowH-80) + "px"' :collapse="isCollapse" style='max-width: 200px' v-bind:collapse-transition='false' router>
		  <el-menu-item index='0' route='/' >
			  <i class='el-icon-s-home' v-bind:class='active == 0 ? "icon-active" : "icon-default"'></i>
				<span class='menu-text'>全局总览</span>
			</el-menu-item>
			<el-menu-item index='1' route='/member'>
			  <i class='el-icon-s-custom' v-bind:class='active == 1 ? "icon-active" : "icon-default"'></i>
				<span class='menu-text'>成员管理</span>
			</el-menu-item>
			<el-submenu index='2'>
			  <template slot="title">
          <i class="el-icon-s-data" v-bind:class='active == 2 ? "icon-active" : "icon-default"'></i>
          <span class='menu-text'>科研成果</span>
        </template>
				<el-menu-item index="2-1" route='/research/subjecty'>纵向科研项目</el-menu-item>
				<el-menu-item index="2-2" route='/research/subjectx'>横向科研项目</el-menu-item>
				<el-menu-item index="2-3" route='/research/award'>科研奖励</el-menu-item>
				<el-menu-item index="2-4" route='/research/paper'>论文</el-menu-item>
				<el-menu-item index="2-5" route='/research/book'>著作/教材</el-menu-item>
				<el-menu-item index="2-6" route='/research/patent'>专利</el-menu-item>
				<el-menu-item index="2-7" route='/research/soft'>软件著作权</el-menu-item>
			</el-submenu>
			<el-submenu index='3'>
			  <template slot="title">
          <i class="el-icon-s-platform" v-bind:class='active == 3 ? "icon-active" : "icon-default"'></i>
          <span class='menu-text'>教学成果</span>
        </template>
				<el-menu-item index="3-1" route='/teaching/research'>教研项目</el-menu-item>
				<el-menu-item index="3-2" route='/teaching/award'>教学奖励</el-menu-item>
				<el-menu-item index="3-3" route='/teaching/course'>课程</el-menu-item>
				<el-menu-item index="3-4" route='/teaching/graduate'>研究生课程</el-menu-item>
				<el-menu-item index="3-5" route='/teaching/colla'>协同育人项目</el-menu-item>
			</el-submenu>
			<el-submenu index='4'>
			  <template slot="title">
          <i class="el-icon-money" v-bind:class='active == 4 ? "icon-active" : "icon-default"'></i>
          <span class='menu-text'>学生成果</span>
        </template>
				<el-menu-item index="4-1" route='/student/competition'>学生竞赛获奖</el-menu-item>
				<el-menu-item index="4-2" route='/student/research'>研究成果获奖</el-menu-item>
				<el-menu-item index="4-3" route='/student/second'>第二课堂实践创新</el-menu-item>
				<el-menu-item index="4-4" route='/student/business'>实践创业成果</el-menu-item>
				<el-menu-item index="4-5" route='/student/thesis'>优秀学位论文</el-menu-item>
				<el-menu-item index="4-6" route='/student/honor'>学生荣誉表彰</el-menu-item>
				<el-menu-item index="4-7" route='/student/scholarship'>奖学金情况</el-menu-item>
			</el-submenu>
			<el-submenu index='5'>
			  <template slot="title">
          <i class="el-icon-s-flag" v-bind:class='active == 5 ? "icon-active" : "icon-default"'></i>
          <span class='menu-text'>交流访学</span>
        </template>
				<el-menu-item index="5-1" route='/visiting/teacher'>教师访学</el-menu-item>
				<el-menu-item index="5-2" route='/visiting/student'>学生访学</el-menu-item>
				<el-menu-item index="5-3" route='/visiting/attend'>教师参会</el-menu-item>
				<el-menu-item index="5-4" route='/visiting/sattend'>学生参会</el-menu-item>
				<el-menu-item index="5-5" route='/visiting/cooperation'>合作协议</el-menu-item>
				<el-menu-item index="5-6" route='/visiting/base'>实习实践基地</el-menu-item>
			</el-submenu>
			<!--<el-submenu index='6'>
			  <template slot="title">
          <i class="el-icon-setting" v-bind:class='active == 6 ? "icon-active" : "icon-default"'></i>
          <span class='menu-text'>系统设置</span>
        </template>
				<el-menu-item index="6-1" route='/setting/teaminfo'>团队信息</el-menu-item>
        <el-menu-item index="6-2" route='/setting/teamset'>团队设置</el-menu-item>
			</el-submenu>-->
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