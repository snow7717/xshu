<template>
  <div class='container'>
	  <cheader></cheader>
		<el-container>
		  <caside active='2-4'></caside>
			<el-main class='result-main'>
			  <csearch v-bind:summary='`${summary}(${total})`' v-bind:nameSearch='nameSearch' v-on:toggleName='toggleName' v-bind:search='search' v-on:search='index(1)' placeholder='请输入论文名'>
					<el-aside width='102px' slot='aside'>
					  <el-button type="success" size='mini' v-bind:disabled='selects.length == 0' v-on:click='exporter'>导出Excel</el-button>
					</el-aside>
				</csearch>
				<el-table v-bind:data="papers" stripe class='w-100' size='small' @selection-change="handlePapers" >
				  <el-table-column type="selection" fixed width="40"></el-table-column>
				  <el-table-column prop='title' label="论文名称" width='140px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='firstauthor' label="第一作者" width='80px'></el-table-column>
					<el-table-column prop='title' label='工号' width='100px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='authortype' label='作者类别' width='100px'></el-table-column> 
					<el-table-column prop='source' label='论文来源' width='100px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='field' label='论文领域' width='100px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='record' label='收录检索' width='100px'></el-table-column>
					<el-table-column prop='book' label='刊物名称' width='70px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='bookyear' label='刊物年期' width='70px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='created_at' sortable v-bind:sort-method='createdsort' label='发表时间' width='100px' show-overflow-tooltip></el-table-column>
					<el-table-column sortable prop='studytype' label='研究类别' width='94px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='publicarea' label='发表范围' width='94px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='authors' label='作者信息' width='94px' show-overflow-tooltip></el-table-column>
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
