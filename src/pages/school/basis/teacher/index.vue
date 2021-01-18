<template>
  <div class='container'>
	  <cheader></cheader>
		<el-container>
		  <caside active='1-1'></caside>
			<el-main class='result-main'>
			  <csearch v-bind:summary='`${summary}(${total})`' v-bind:nameSearch='nameSearch' v-on:toggleName='toggleName' v-bind:search='search' v-on:search='index(1)' placeholder='请输入姓名'>
					<el-aside width='102px' slot='aside'>
					  <!--<el-button type="success" size='mini' v-bind:disabled='selects.length == 0' v-on:click='exporter'>导出Excel</el-button>-->
					</el-aside>
				</csearch>
				<el-table v-bind:data="basis" stripe class='w-100' size='small' @selection-change="handlePapers" >
				  <el-table-column type="selection" fixed width="40"></el-table-column>
					<el-table-column prop='name' label='姓名' show-overflow-tooltip></el-table-column>
					<el-table-column prop='number' label='职工号' show-overflow-tooltip></el-table-column>
					<el-table-column prop='gender' label='性别' show-overflow-tooltip></el-table-column>
					<el-table-column prop='political' label='政治面貌' show-overflow-tooltip></el-table-column>
					<el-table-column prop='jobtitle' label='职称' show-overflow-tooltip></el-table-column>
					<el-table-column prop='bachelor' label='学位' show-overflow-tooltip></el-table-column>
					<el-table-column prop='phone' label='移动电话' show-overflow-tooltip></el-table-column>
					<el-table-column prop='email' label='电子邮箱'></el-table-column>
					<el-table-column prop='unit' label='最新单位'></el-table-column>
					<el-table-column prop='job' label='职务'></el-table-column>
					<el-table-column fixed="right" label='操作' width='60px'>
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
