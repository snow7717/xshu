<template>
  <div class='container'>
	  <cheader></cheader>
		<el-container>
		  <caside active='5-1'></caside>
			<el-main class='result-main'>
			  <csearch v-bind:summary='`${summary}(${total})`' v-bind:nameSearch='nameSearch' v-on:toggleName='toggleName' v-bind:search='search' v-on:search='index(1)' placeholder='请输入姓名'>
					<el-aside width='102px' slot='aside'>
					  <el-button type="success" size='mini' v-bind:disabled='selects.length == 0' v-on:click='exporter'>导出Excel</el-button>
					</el-aside>
				</csearch>
				<el-table v-bind:data="visitings" stripe class='w-100' size='small' @selection-change="handlePapers" >
				  <el-table-column type="selection" fixed width="40"></el-table-column>
					<el-table-column prop='number' label='工号' show-overflow-tooltip></el-table-column>
					<el-table-column prop='name' label='姓名' width='80px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='school' label='所在学院' width='120px'></el-table-column>
					<el-table-column prop='start_at' sortable v-bind:sort-method='startsort' label="开始时间" width='100px'></el-table-column>
					<el-table-column prop='end_at' sortable v-bind:sort-method='endsort' label="结束时间" width='100px'></el-table-column>
					<el-table-column prop='timelimit' label="访学时限" width='80px'></el-table-column>
					<el-table-column prop='country' label="前往国家(地区)" width='120px'></el-table-column>
					<el-table-column prop='unit' label="访学单位" width='100px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='type' label="主要自助类型" width='120px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='funding' label="资助金额(万元)" width='120px'></el-table-column>
					<el-table-column prop='annex' label="附件证明" width='160px' show-overflow-tooltip></el-table-column>
					<el-table-column fixed="right" label='操作' width='100px'>
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
