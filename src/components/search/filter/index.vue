<template>
  <el-popover width="400" trigger="click" class='bar-item' placement='bottom'>
		<i class='f-fsn f-csp' slot="reference" ref='filterTriggle'>
			<font>筛选</font>
			<i class='el-icon-caret-bottom'></i>
	  </i>
		<el-form v-bind:label-width='labelW' class='filter-form'>
		  <el-form-item v-for='(item,i) in filters' v-bind:key='i' v-bind:label='item.label'>
			  <el-checkbox v-bind:indeterminate="item.isIndeterminate" v-model="item.checkAll" @change="handleAll($event,item.field)" class='check-all'>全选</el-checkbox>
				<el-checkbox-group v-model="search[item.field]" @change="handleChange($event,item.field)">
				  <el-checkbox v-for="(itemer,index) in item.data" v-bind:label="itemer" v-bind:key="index" class='check-item'>{{itemer}}</el-checkbox>
				</el-checkbox-group>
			</el-form-item>
		</el-form>
	</el-popover>	
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>