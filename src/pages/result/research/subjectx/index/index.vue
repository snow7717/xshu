<template>
  <div class='container'>
	  <cheader></cheader>
		<el-container>
			<el-main>
			  <csearch v-bind:summary='`${title}(${total})`' v-bind:nameSearch='true' v-bind:search='search' v-on:search='index(1)' placeholder='请输入项目名称'>
					<el-aside width='200px' slot='aside'>
					  <router-link to="/subjectx/create">
						  <el-button type="primary" size='mini'>上传</el-button>
					  </router-link>
					  <el-button type='success' size='mini' icon="el-icon-plus" v-bind:disabled='selects.length == 0' v-on:click='exporter'>导出Excel</el-button>
					</el-aside>
				</csearch>
				<el-table v-bind:data="subjects" stripe class='w-100' size='small' @selection-change="handlePapers" >
				  <el-table-column type="selection" fixed width="40"></el-table-column>
					<el-table-column prop='cate_zh' label='项目类别' width='80px'></el-table-column>
					<el-table-column prop='title' label='项目名称' width='200px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='source' label='项目来源' width='100px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='level_zh' label='项目级别' width='80px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='principal' label="负责人" width='94px'></el-table-column>
					<el-table-column prop='school' label="所在学院" width='120px' show-overflow-tooltip></el-table-column>
					<el-table-column sortable prop='funding' label='合同经费' width='94px' show-overflow-tooltip></el-table-column>
					<el-table-column sortable prop='receivefund' label='到账经费' width='94px' show-overflow-tooltip></el-table-column>
					<el-table-column sortable v-bind:sort-method='createdsort' prop='created_at' label='开始时间' width='100px'></el-table-column>
					<el-table-column sortable v-bind:sort-method='untilsort' prop='until_at' label='截止时间' width='100px'></el-table-column>
					<el-table-column prop='status_zh' label='状态' width='80px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='member' label='团队成员' width='100px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='year' label='立项年度' width='100px' show-overflow-tooltip></el-table-column>
					<el-table-column fixed="right" label='操作' width='100px'>
					  <template slot-scope='scope'>
						  <router-link v-bind:to='`/subjectx/edit/${scope.row.id}`'>
						    <i class='delete f-csp el-icon-edit' title='编辑'></i>
							</router-link>
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
