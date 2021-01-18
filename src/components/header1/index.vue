<template>
  <el-header>
		<el-menu default-active="0" mode="horizontal" @select="handleSelect" text-color="#333" router>
		  <el-menu-item class='f-fl'>
				<template slot="title">
				  <el-image src='https://img.okay.do/acagrid/static/images/default/default_badge.png' class='logo'></el-image>山东财经大学 管科学院
				</template>
			</el-menu-item>
			<el-submenu index="1">
        <template slot="title">科研成果</template>
				<el-menu-item index="1-1" route='/result/research/subjecty'>纵向科研项目</el-menu-item>
        <el-menu-item index="1-2" route='/result/research/subjectx'>横向科研项目</el-menu-item>
				<el-menu-item index="1-3" route='/result/research/award'>科研奖励</el-menu-item>
        <el-menu-item index="1-4" route='/result/research/paper'>论文</el-menu-item>
				<el-menu-item index="1-5" route='/result/research/book'>著作/材料</el-menu-item>
				<el-menu-item index="1-6" route='/result/research/patent'>专利</el-menu-item>
        <el-menu-item index="1-2" route='/result/research/soft'>软件著作权</el-menu-item>
      </el-submenu>
			<el-submenu index="2">
			  <template slot="title">教学成果</template>
			  <el-menu-item index="2-1" route='/result/teaching/research'>教研项目</el-menu-item>
				<el-menu-item index="2-2" route='/result/teaching/award'>教学奖励</el-menu-item>
				<el-menu-item index="2-3" route='/result/teaching/course'>课程</el-menu-item>
				<el-menu-item index="2-4" route='/result/teaching/graduate'>研究生课程</el-menu-item>
				<el-menu-item index="2-5" route='/result/teaching/colla'>协同育人项目</el-menu-item>
			</el-submenu>
			<el-submenu index="3">
			  <template slot="title">学生成果</template>
				<el-menu-item index="3-1" route='/result/student/competition'>学生竞赛获奖</el-menu-item>
				<el-menu-item index="3-1" route='/result/student/research'>研究成果获奖</el-menu-item>
			</el-submenu>	
			<el-submenu index="4">
			  <template slot="title">交流访学</template>
				<el-menu-item index="4-1" route='/result/visiting/teacher'>教师访学</el-menu-item>
				<el-menu-item index="4-2" route='/result/visiting/student'>学生访学</el-menu-item>
				<el-menu-item index="4-3" route='/result/visiting/attend'>教师参会</el-menu-item>
				<el-menu-item index="4-4" route='/result/visiting/sattend'>学生参会</el-menu-item>
				<el-menu-item index="4-5" route='/result/visiting/cooperation'>合作协议</el-menu-item>
				<el-menu-item index="4-6" route='/result/visiting/base'>实习实践基地</el-menu-item>
			</el-submenu>	
			<el-submenu index="0" class='f-fr'>
				<template slot="title">{{user.userinfo.name}}</template>
				<el-menu-item index="0-1" route='/'>管理团队</el-menu-item>
				<el-menu-item v-on:click='logout'>退出登录</el-menu-item>
			</el-submenu>
		</el-menu>
	</el-header>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>