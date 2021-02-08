<template>
  <ccontent ref='ccontent' v-bind:pname='$options.name' v-bind:summary='`${summary}(${total})`' v-bind:url='url' v-bind:nameSearch='true' v-bind:search='search' v-bind:selects='selects' v-on:search='index(1)' placeholder='请输入菜单名' v-bind:datas='datas' v-bind:page='page' v-bind:total='total' v-bind:formshow='formshow' v-bind:rules='rules' v-bind:form='form' v-bind:labelWidth='labelWidth' v-on:index='index' v-on:handleDatas='handleDatas' v-on:create='showform({permissions: []})' v-on:edit='showform' v-on:cancel='cancel'>
		<div slot='table'>
			<el-table-column prop='label' label='菜单名称' show-overflow-tooltip></el-table-column>
			<el-table-column prop='level' label='菜单级别' show-overflow-tooltip>
			  <template slot-scope='scope'>
				  {{levels.filter((item) => {
					  return item.value == scope.row.level
					})[0].label}}
				</template>
			</el-table-column>
			<el-table-column prop='parentname' label='父级菜单' show-overflow-tooltip></el-table-column>
			<el-table-column prop='permissions' label='菜单权限' show-overflow-tooltip>
			  <template slot-scope='scope'>
				  {{scope.row.permissionStr.map((item) => {
					  return item.text
					}).toString()}}
				</template>
			</el-table-column>
		</div>
		<div slot='form'>
		  <el-form-item label='菜单name值' prop='name'>
			  <el-input v-model='form.name'></el-input>
			</el-form-item>
			<el-form-item label='菜单名称' prop='label'>
			  <el-input v-model='form.label'></el-input>
			</el-form-item>
			<el-form-item label='菜单级别' prop='level'>
			  <el-select v-model='form.level' placeholder='请选择菜单级别'>
				  <el-option v-for='(item,index) in levels' v-bind:key='index' v-bind:value='item.value' v-bind:label='item.label'></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label='父级菜单' prop='parent' v-if='form.level == 2'>
			  <el-select v-model='form.parent' placeholder='请选择父级菜单'>
				  <el-option v-for='(item,index) in parents' v-bind:key='index'  v-bind:value='item.id' v-bind:label='item.label'></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label='菜单权限' prop='permissions'>
			  <el-checkbox-group v-model="form.permissions">
				  <el-checkbox v-for='(item,index) in permissions' v-bind:key='index' v-bind:label='item.label'>{{item.text}}</el-checkbox>
				</el-checkbox-group>
			</el-form-item>
		</div>
	</ccontent>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>
