<template>
  <div class='container'>
	  <cheader></cheader>
		<el-container>
		  <caside active='4-2'></caside>
			<el-main class='result-main'>
			  <csearch v-bind:summary='`${summary}(${total})`' v-bind:nameSearch='nameSearch' v-on:toggleName='toggleName' v-bind:search='search' v-on:search='index(1)' placeholder='请输入名称'>
					<el-aside width='102px' slot='aside'>
					  <el-button type="success" size='mini' v-bind:disabled='selects.length == 0' v-on:click='exporter'>导出Excel</el-button>
					</el-aside>
				</csearch>
				<el-table v-bind:data="researches" stripe class='w-100' size='small' @selection-change="handlePapers" >
				  <el-table-column type="selection" fixed width="40"></el-table-column>
					<el-table-column prop='result' label='成果名称' show-overflow-tooltip></el-table-column>
					<el-table-column prop='type' label='获奖类型' width='120px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='level' label='获奖等级'></el-table-column>
					<el-table-column prop='awarded_at' sortable label="获奖时间" width='100px'></el-table-column>
					<el-table-column prop='finisher' label="第一完成人" width='100px'></el-table-column>
					<el-table-column prop='grade' label="第一完成人所在年级" width='140px'></el-table-column>
					<el-table-column prop='teacher' label="导师" width='60px'></el-table-column>
					<el-table-column prop='education' label="学历层次"></el-table-column>
					<el-table-column prop='rank' label="本人位次"></el-table-column>
					<el-table-column prop='department' label="第一完成人所在系部/专业" width='160px'></el-table-column>
					<el-table-column prop='member' label="团队成员" show-overflow-tooltip></el-table-column>
					<el-table-column prop='degreetype' label='学位类型' show-overflow-tooltip></el-table-column>
					<el-table-column prop='degreerank' label="学位层次" show-overflow-tooltip></el-table-column>
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
