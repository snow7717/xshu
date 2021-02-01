<template>
  <div class='container'>
	  <cheader></cheader>
		<el-container>
		  <caside active='5-5'></caside>
			<el-main class='result-main'>
			  <csearch v-bind:summary='`${summary}(${total})`' v-bind:nameSearch='nameSearch' v-on:toggleName='toggleName' v-bind:search='search' v-on:search='index(1)' placeholder='请输入姓名'>
					<el-aside width='102px' slot='aside'>
					  <el-button type="success" size='mini' v-bind:disabled='selects.length == 0' v-on:click='exporter'>导出Excel</el-button>
					</el-aside>
				</csearch>
				<el-table v-bind:data="cooperations" stripe class='w-100' size='small' @selection-change="handlePapers" >
				  <el-table-column type="selection" fixed width="40"></el-table-column>
					<el-table-column prop='unit' label='合作单位' show-overflow-tooltip></el-table-column>
					<el-table-column prop='type' label='类型' show-overflow-tooltip></el-table-column>
					<el-table-column prop='profession' label='专业名称' show-overflow-tooltip></el-table-column>
					<el-table-column prop='sign_at' sortable v-bind:sort-method='signsort' label="签约时间" show-overflow-tooltip></el-table-column>
					<el-table-column prop='cycle' label='合作周期' show-overflow-tooltip></el-table-column>
					<el-table-column prop='focus' label='合作重点' show-overflow-tooltip></el-table-column>
					<el-table-column prop='effect' label='合作成效' show-overflow-tooltip></el-table-column>
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
