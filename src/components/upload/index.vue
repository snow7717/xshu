<template>
  <el-upload action="#" v-bind:file-list='srcs' v-bind:http-request='uploader' accept='image/png,image/jpeg,.pdf' v-bind:on-success='fileSuccess' v-bind:on-preview='handlePreview' v-bind:before-remove='beforeRemove'>
	  <el-button size="mini" type="primary">上传附件</el-button>
	</el-upload>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>
