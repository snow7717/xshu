<template>
  <ccontent ref='ccontent' v-bind:url='url' v-bind:importshow='false' v-bind:exportshow='false' v-bind:fields='fields' v-bind:datas='datas' v-bind:selectable='false' v-bind:operawidth='operawidth' v-bind:form='form' v-on:index='index' v-on:create='showform({permissions: [],delyn: true})' v-on:edit='showform'>
	  <el-col slot='special'>
		  <el-form-item label='菜单权限'>
				<el-input placeholder="输入菜单名进行过滤" v-model="menu" size='mini'></el-input>
				<el-tree class="filter-tree" check-on-click-node node-key='name' v-bind:data="menus" v-bind:props="props" v-bind:filter-node-method="filterNode" ref="tree" v-bind:show-checkbox='form.delyn' v-on:check='handleChecked'></el-tree>
			</el-form-item>
		</el-col>
	</ccontent>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>
