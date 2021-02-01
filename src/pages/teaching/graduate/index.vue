<template>
  <div class='container'>
	  <cheader></cheader>
		<el-container>
		  <caside active='3-4'></caside>
			<el-main class='result-main'>
			  <csearch v-bind:summary='`${summary}(${total})`' v-bind:nameSearch='nameSearch' v-on:toggleName='toggleName' v-bind:search='search' v-on:search='index(1)' placeholder='请输入名称'>
					<el-aside width='102px' slot='aside'>
					  <el-button type="success" size='mini' v-bind:disabled='selects.length == 0' v-on:click='exporter'>导出Excel</el-button>
					</el-aside>
				</csearch>
				<el-table v-bind:data="graduates" stripe class='w-100' size='small' @selection-change="handlePapers" >
				  <el-table-column type="selection" fixed width="40"></el-table-column>
					<el-table-column prop='type' label='成果类型' show-overflow-tooltip></el-table-column>
					<el-table-column prop='name' label='课程/案例库名称'></el-table-column>
					<el-table-column prop='coursetype' label='课程/案例库类型'></el-table-column>
					<el-table-column prop='principal' label="负责人"></el-table-column>
					<el-table-column prop='approval' label='批准文号' show-overflow-tooltip></el-table-column>
					<el-table-column prop='approval_at' sortable v-bind:sort-method='approvalsort' label='批准时间' show-overflow-tooltip></el-table-column>
					<el-table-column prop='school' label='所在学院' show-overflow-tooltip></el-table-column>
					<el-table-column prop='profession' label='所在专业' show-overflow-tooltip></el-table-column>
					<el-table-column fixed="right" label='操作' width='100px'>
					  <template slot-scope='scope'>
							<i class='delete f-csp el-icon-delete' title='删除' v-on:click='del(scope.row.id)'></i>
						</template>
					</el-table-column>
				</el-table>
				<el-row class='page'>
				  <el-col :span='24' class='f-tac'>
					  <el-pagination layout="prev, pager, next" v-bind:total="total" v-on:current-change='index'</el-pagination>
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
