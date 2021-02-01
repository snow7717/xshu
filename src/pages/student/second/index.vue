<template>
  <div class='container'>
	  <cheader></cheader>
		<el-container>
		  <caside active='4-3'></caside>
			<el-main class='result-main'>
			  <csearch v-bind:summary='`${summary}(${total})`' v-bind:nameSearch='nameSearch' v-on:toggleName='toggleName' v-bind:search='search' v-on:search='index(1)' placeholder='请输入名称'>
					<el-aside width='102px' slot='aside'>
					  <el-button type="success" size='mini' v-bind:disabled='selects.length == 0' v-on:click='exporter'>导出Excel</el-button>
					</el-aside>
				</csearch>
				<el-table v-bind:data="seconds" stripe class='w-100' size='small' @selection-change="handlePapers" >
				  <el-table-column type="selection" fixed width="40"></el-table-column>
					<el-table-column prop='number' label='教工号' width='100' show-overflow-tooltip></el-table-column>
					<el-table-column prop='teacher' label='教师姓名' width='80' show-overflow-tooltip></el-table-column>
					<el-table-column prop='school' label='校区' width='160'></el-table-column>
					<el-table-column prop='faculty' label="院系" width='140px'></el-table-column>
					<el-table-column prop='type' label="工作量类型" width='120px'></el-table-column>
					<el-table-column prop='works' label="工作量" width='140px'></el-table-column>
					<el-table-column prop='assist' width='80px' label="是否辅修"></el-table-column>
					<el-table-column prop='remark' label="备注" show-overflow-tooltip></el-table-column>
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
