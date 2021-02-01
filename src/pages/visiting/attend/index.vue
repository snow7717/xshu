<template>
  <div class='container'>
	  <cheader></cheader>
		<el-container>
		  <caside active='5-3'></caside>
			<el-main class='result-main'>
			  <csearch v-bind:summary='`${summary}(${total})`' v-bind:nameSearch='nameSearch' v-on:toggleName='toggleName' v-bind:search='search' v-on:search='index(1)' placeholder='请输入姓名'>
					<el-aside width='102px' slot='aside'>
					  <el-button type="success" size='mini' v-bind:disabled='selects.length == 0' v-on:click='exporter'>导出Excel</el-button>
					</el-aside>
				</csearch>
				<el-table v-bind:data="attends" stripe class='w-100' size='small' @selection-change="handlePapers" >
				  <el-table-column type="selection" fixed width="40"></el-table-column>
					<el-table-column prop='number' label='工号' show-overflow-tooltip></el-table-column>
					<el-table-column prop='name' label='姓名' width='80px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='department' label='所在部系' width='120px'></el-table-column>
					<el-table-column prop='meetingname' label='会议名称' width='120px'></el-table-column>
					<el-table-column prop='address' label='参加地点' width='120px'></el-table-column>
					<el-table-column prop='unit' label='主办单位' width='120px'></el-table-column>
					<el-table-column prop='start_at' sortable v-bind:sort-method='startsort' label="参会起始时间" width='140px'></el-table-column>
					<el-table-column prop='back_at' sortable v-bind:sort-method='backsort' label="参会返回时间" width='140px'></el-table-column>
					<el-table-column prop='speak' label="是否发言" width='80px'></el-table-column>
					<el-table-column prop='topic' label="发言题目" width='140px' show-overflow-tooltip></el-table-column>
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
