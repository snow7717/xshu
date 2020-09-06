<template>
  <el-popover width="300" trigger="click" class='bar-item' placement='bottom-start'>
		<i class='f-fsn f-csp' slot="reference" ref='memberTriggle'>
			<font>成员：{{search.member.all ? "全部" : "已选择"}}</font>
		  <i class='el-icon-caret-bottom'></i>
		</i>
		<el-tabs v-model="member.active">
			<el-tab-pane label="教学系部" name="first">
			  <el-input size='small' placeholder="输入姓名进行过滤" v-model="department.keyword" class='filter'></el-input>
				<el-tree :data="department.data" show-checkbox node-key='key' v-bind:default-checked-keys='department.checkeds' :filter-node-method="filterTree" ref='departree'></el-tree>
				<el-button size='mini' type='primary' class='popover-btn' v-on:click='memberQuery("departree")'>确定</el-button>
			</el-tab-pane>
			<el-tab-pane label="科研团队" name="second">
				<el-input size='small' placeholder="输入姓名进行过滤" v-model="team.keyword" class='filter'></el-input>
				<el-tree :data="team.data" show-checkbox node-key='key' v-bind:default-checked-keys='team.checkeds' :filter-node-method="filterTree" ref='teamtree'></el-tree>
				<el-button size='mini' type='primary' class='popover-btn' v-on:click='memberQuery("teamtree")'>确定</el-button>
			</el-tab-pane>
			<el-tab-pane label="科研标签" name="third">
				<el-input size='small' placeholder="输入姓名进行过滤" v-model="tag.keyword" class='filter'></el-input>
				<el-tree :data="tag.data" show-checkbox node-key='key' v-bind:default-checked-keys='tag.checkeds' :filter-node-method="filterTree" ref='tagtree'></el-tree>
			  <el-button size='mini' type='primary' class='popover-btn' v-on:click='memberQuery("tagtree")'>确定</el-button>
			</el-tab-pane>
		</el-tabs>
  </el-popover>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>
