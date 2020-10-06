<template>
  <el-container class='search-bar f-fs2'>
		<el-main class='bar-main'>
			<i class='bar-item0 f-fsn'>{{summary}}</i>
			<i class='bar-item el-icon-search f-fwb f-csp' v-if='!nameSearch' v-on:click='toggleName'></i>
			<slot name='fields'></slot>
			<el-form :inline="true" size='small' class='search-name f-ib f-pr' v-if='nameSearch'>
				<el-form-item>
					<el-input v-model="search.name" placeholder="请输入成员名称" prefix-icon='el-icon-search'></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" v-on:click='searcher'>查询</el-button>
					<el-button type="default" v-on:click='toggleName'>关闭</el-button>
				</el-form-item>
			</el-form>
		</el-main>
		<slot name='aside'></slot>
  </el-container>
</template>

<style lang='stylus'>
  @import './index.styl'
</style>

<script src='./index'></script>
