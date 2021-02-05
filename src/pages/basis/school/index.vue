<template>
  <ccontent ref='ccontent' v-bind:pname='$options.name' v-bind:summary='`${summary}(${total})`' v-bind:url='url' v-bind:nameSearch='true' v-bind:search='search' v-bind:selects='selects' v-on:search='index(1)' placeholder='请输入学院名' v-bind:datas='datas' v-bind:page='page' v-bind:total='total' v-bind:formshow='formshow' v-bind:rules='rules' v-bind:form='form' v-on:index='index' v-on:handleDatas='handleDatas' v-on:create='create' v-on:edit='edit' v-on:cancel='cancel'>
		<div slot='table'>
			<el-table-column prop='number' label='学院编号' show-overflow-tooltip></el-table-column>
			<el-table-column prop='name' label='学院名称' show-overflow-tooltip></el-table-column>
			<el-table-column prop='campus' label='所在校区' show-overflow-tooltip></el-table-column>
		</div>
		<div slot='form'>
			<el-form-item label="学院编号" prop='number'>
				<el-input v-model="form.number" autocomplete="off"></el-input>
			</el-form-item>
			<el-form-item label="学院名称" prop='name'>
				<el-input v-model="form.name" autocomplete="off"></el-input>
			</el-form-item>
		  <el-form-item label='所在校区' prop='campus'>
				<el-select v-model="form.campus" filterable allow-create placeholder="请选择">
					<el-option label="燕山校区" value="燕山校区"></el-option>
					<el-option label="舜耕校区" value="舜耕校区"></el-option>
					<el-option label="圣井校区" value="圣井校区"></el-option>
			  </el-select>
			</el-form-item>
		</div>
	</ccontent>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>
