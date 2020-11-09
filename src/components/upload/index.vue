<template>
  <el-card class="carder">
		<header slot="header" class="clearfix">
		  <h2 class='upload-title f-ib'>{{title}}</h2>
			<i class='upload-intro f-fsn f-fs1'>{{intro}}</i>
		</header>
		<el-container>
			<el-aside width='160px' class='aside f-oa'>
				<el-upload action="#" v-bind:file-list='srcs' list-type="picture-card" v-bind:http-request='uploader' accept='image/png,image/jpeg,.pdf' v-bind:on-success='fileSuccess' v-bind:on-preview='handlePreview' v-bind:before-remove='beforeRemove'>
				  <i slot="default" class="el-icon-plus"></i>
				</el-upload>
			</el-aside>
			<el-main>
			  <el-image v-bind:src='src'></el-image>
			</el-main>
		</el-container>
	</el-card>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>
