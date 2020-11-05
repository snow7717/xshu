<template>
  <div class='container'>
	  <cheader></cheader>
		<el-container>
			<el-main>
			  <csearch v-bind:summary='`${title}(${total})`' v-bind:nameSearch='true' v-bind:search='search' v-on:search='index(1)' placeholder='请输入姓名'>
					<el-aside width='200px' slot='aside'>
					  <router-link to="/create/23">
						  <el-button type="primary" size='mini'>上传</el-button>
					  </router-link>
					  <el-button type='success' size='mini' icon="el-icon-plus">导出Excel</el-button>
					</el-aside>
				</csearch>
				<el-table v-bind:data="attends" stripe class='w-100' size='small' @selection-change="handlePapers" >
				  <el-table-column type="selection" fixed width="40"></el-table-column>
					<el-table-column prop='name' label='学生姓名' width='80px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='school' label='所在学院' width='120px'></el-table-column>
					<el-table-column prop='profession' label='所在专业' width='120px'></el-table-column>
					<el-table-column prop='type' label='学生类型' width='120px'></el-table-column>
					<el-table-column prop='grade' label='年级' width='120px'></el-table-column>
					<el-table-column prop='meetingname' label='会议名称' width='120px'></el-table-column>
					<el-table-column prop='address' label='参加地点' width='120px'></el-table-column>
					<el-table-column prop='unit' label='主办单位' width='120px'></el-table-column>
					<el-table-column prop='start_at' sortable v-bind:sort-method='startsort' label="参会起始时间" width='140px'></el-table-column>
					<el-table-column prop='back_at' sortable v-bind:sort-method='backsort' label="参会返回时间" width='140px'></el-table-column>
					<el-table-column prop='speak' label="是否发言" width='80px'></el-table-column>
					<el-table-column prop='topic' label="发言题目" width='140px' show-overflow-tooltip></el-table-column>
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
