<template>
  <ccontent ref='ccontent' v-bind:summary='`${summary}(${total})`' v-bind:url='url' v-bind:nameSearch='true' v-bind:search='search' v-on:search='index(1)' placeholder='请输入用户名' v-bind:importshow='false' v-bind:exportshow='false' v-bind:datas='datas' v-bind:operawidth='operawidth' v-bind:selectable='false' v-bind:page='page' v-bind:total='total' v-bind:formshow='formshow' v-bind:rules='rules' v-bind:form='form' v-on:index='index' v-on:create='showform({status: "启用",role: []})' v-on:edit='showform' v-on:cancel='cancel'>
	  <div slot='table' class='f-tal'>
		  <el-table-column label='账号状态' prop='status_zh' show-overflow-tooltip></el-table-column>
	    <el-table-column prop="name" label="用户名称" show-overflow-tooltip></el-table-column>
			<el-table-column prop="account" label="用户账号" show-overflow-tooltip></el-table-column>
			<el-table-column prop='school' label='所属学院' show-overflow-tooltip></el-table-column>
			<el-table-column prop="roles" label="所属角色" show-overflow-tooltip></el-table-column>
			<el-table-column prop="created_at" label="创建时间" show-overflow-tooltip></el-table-column>
		</div>
		<template v-slot='data'>
			<i class='f-csp iconfont icon-repass' title='重置密码' v-on:click='repass(data.data.id)'></i>
		</template>
		<div slot='form'>
		  <el-form-item label='所属学院' prop='school'>
			  <el-select v-model='form.school'>
					<el-option value='管理科学与工程学院' label='管理科学与工程学院'></el-option>
				</el-select>
			</el-form-item>
		  <el-form-item label='用户名称' prop='name'>
				<el-input v-model='form.name'></el-input>
			</el-form-item>
			<el-form-item label='用户账号' prop='account'>
			  <el-input v-model='form.account'></el-input>
			</el-form-item>
			<el-form-item label='所属角色' prop='role'>
			  <el-select v-model='form.role' multiple collapse-tags>
				  <el-option v-for='(item,index) in roles' v-bind:key='index' v-bind:value='item.roleid' v-bind:label='item.title' v-bind:disabled='!item.useYn || item.roleid == "1"'></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label='账号状态' prop='status'>
			  <el-radio v-model="form.status" v-bind:label="1">启用</el-radio>
        <el-radio v-model="form.status" v-bind:label="0">关闭</el-radio>
			</el-form-item>
		</div>
	</ccontent>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>
