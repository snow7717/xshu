<template>
  <el-header v-loading='loading' element-loading-text="角色切换中"
    element-loading-spinner="el-icon-loading" element-loading-background="rgba(0, 0, 0, 0.6)">
		<el-menu class='header-menu' default-active="0" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
		  <el-menu-item class='f-fl'>
				<template slot="title">山东财经大学 管理科学与工程学院</template>
			</el-menu-item>
			<el-submenu index="0" class='f-fr'>
				<template slot="title">{{user.userinfo.name}}</template>
				<el-menu-item index="0-1" route='/user'>个人信息</el-menu-item>
				<el-menu-item index="0-2" route='/password'>修改密码</el-menu-item>
				<el-menu-item v-on:click='logout'>退出登录</el-menu-item>
			</el-submenu>
			<el-menu-item index="">
			  <i class='icon el-icon-message'></i>
			</el-menu-item>
			<el-menu-item index=''>
			  <el-form inline size='mini'>
				  <el-form-item class='role-change' label='切换角色'>
					  <el-select class='role-select' v-model="user.role" placeholder="请选择" v-on:change='handleRole' value-key='roleid'>
							<el-option v-for="(item,index) in user.roles" v-bind:key="index" v-bind:label="item.title" v-bind:value="item" v-bind:disabled='!item.useYn'></el-option>
						</el-select>
					</el-form-item>
				</el-form>
			</el-menu-item>
		</el-menu>
	</el-header>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>