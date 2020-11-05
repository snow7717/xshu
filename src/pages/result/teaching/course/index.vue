<template>
  <div class='container'>
	  <cheader></cheader>
		<el-container>
			<el-main>
			  <csearch v-bind:summary='`${title}(${total})`' v-bind:nameSearch='true' v-bind:search='search' v-on:search='index(1)' placeholder='请输入课程名称'>
					<el-aside width='200px' slot='aside'>
					  <router-link to="/create/16">
						  <el-button type="primary" size='mini'>上传</el-button>
					  </router-link>
					  <el-button type='success' size='mini' icon="el-icon-plus">导出Excel</el-button>
					</el-aside>
				</csearch>
				<el-table v-bind:data="course" stripe class='w-100' size='small' @selection-change="handlePapers" >
				  <el-table-column type="selection" fixed width="40"></el-table-column>
				  <el-table-column prop='title' label='名称' show-overflow-tooltip></el-table-column>
					<el-table-column prop='number' label='编号'></el-table-column>
					<el-table-column prop='type' label='类型'></el-table-column>
					<el-table-column prop='principal' label="负责人"></el-table-column>
					<el-table-column prop='member' label='团队成员' show-overflow-tooltip></el-table-column>
					<el-table-column prop='year' label='获奖年度' show-overflow-tooltip></el-table-column>
					<el-table-column prop='level' label='获奖级别' show-overflow-tooltip></el-table-column>
					<el-table-column fixed="right" label='操作' width='50px'>
					  <template slot-scope='scope'>
							<i class='delete f-csp el-icon-delete' title='删除' v-on:click='del(scope.row.id)'></i>
						</template>
					</el-table-column>
				</el-table>
				<el-row class='page'>
				  <el-col :span='24' class='f-tac'>
					  <el-pagination layout="prev, pager, next" v-bind:total="total" v-on:current-change='index'></el-pagination>
					</el-col>
				</el-row>
			</el-main>
		</el-container>
	</div>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>
