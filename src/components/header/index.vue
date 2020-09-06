<template>
  <el-header>
		<el-menu default-active="0" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
		  <el-menu-item class='f-fl'>
				<template slot="title">河北经贸大学 商学院</template>
			</el-menu-item>
			<el-menu-item index="0">管理我的成果</el-menu-item>
			<el-submenu index="1" class='f-fr'>
				<template slot="title">张三</template>
				<el-menu-item index="1-1">个人信息</el-menu-item>
				<el-menu-item index="1-2">团队信息</el-menu-item>
				<el-menu-item index="1-3">我的成果</el-menu-item>
				<el-menu-item index="1-4">账号中心</el-menu-item>
				<el-menu-item index="1-5">退出登录</el-menu-item>
			</el-submenu>
			<el-menu-item index="2">
			  <i class='icon el-icon-message'></i>
			</el-menu-item>
		</el-menu>
	</el-header>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>