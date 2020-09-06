<template>
  <i class='bar-item f-fsn f-csp' ref='timeTriggle'>
		<font>时间：</font>
		<el-select v-model="search.time" placeholder="请选择" size='mini' class='time'>
			<el-option v-for="(item,index) in times" v-bind:key="index" v-bind:label="item.label" v-bind:value="item.value"></el-option>
		</el-select>
	</i>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>