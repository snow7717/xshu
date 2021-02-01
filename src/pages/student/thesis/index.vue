<template>
  <div class='container'>
	  <cheader></cheader>
		<el-container>
		  <caside active='4-5'></caside>
			<el-main class='result-main'>
			  <csearch v-bind:summary='`${summary}(${total})`' v-bind:nameSearch='nameSearch' v-on:toggleName='toggleName' v-bind:search='search' v-on:search='index(1)' placeholder='请输入名称'>
					<el-aside width='102px' slot='aside'>
					  <el-button type="success" size='mini' v-bind:disabled='selects.length == 0' v-on:click='exporter'>导出Excel</el-button>
					</el-aside>
				</csearch>
				<el-table v-bind:data="thesis" stripe class='w-100' size='small' @selection-change="handlePapers" >
				  <el-table-column type="selection" fixed width="40"></el-table-column>
					<el-table-column type="index" label='序号'></el-table-column>
					<el-table-column prop='name' label='姓名' show-overflow-tooltip></el-table-column>
					<el-table-column prop='education' label='学历层次' show-overflow-tooltip></el-table-column>
					<el-table-column prop='grade' label='年级' show-overflow-tooltip></el-table-column>
					<el-table-column prop='profession' label="专业" show-overflow-tooltip></el-table-column>
					<el-table-column prop='school' label="学院" show-overflow-tooltip></el-table-column>
					<el-table-column prop='paper' label="论文名称" show-overflow-tooltip></el-table-column>
					<el-table-column prop='year' label="年度" show-overflow-tooltip></el-table-column>
					<el-table-column prop='awardlevel' label="获奖等级" show-overflow-tooltip></el-table-column>
					<el-table-column prop='teacher' label="指导教师" show-overflow-tooltip></el-table-column>
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
