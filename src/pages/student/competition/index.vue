<template>
  <div class='container'>
	  <cheader></cheader>
		<el-container>
		  <caside active='4-1'></caside>
			<el-main class='result-main'>
			  <csearch v-bind:summary='`${summary}(${total})`' v-bind:nameSearch='nameSearch' v-on:toggleName='toggleName' v-bind:search='search' v-on:search='index(1)' placeholder='请输入名称'>
					<el-aside width='102px' slot='aside'>
					  <el-button type="success" size='mini' v-bind:disabled='selects.length == 0' v-on:click='exporter'>导出Excel</el-button>
					</el-aside>
				</csearch>
				<el-table v-bind:data="competitions" stripe class='w-100' size='small' @selection-change="handlePapers" >
				  <el-table-column type="selection" fixed width="40"></el-table-column>
					<el-table-column type="index" width="50" label='序号'></el-table-column>
					<el-table-column prop='name' label='姓名' width='60' show-overflow-tooltip></el-table-column>
					<el-table-column prop='level' label='层次' width='60' show-overflow-tooltip></el-table-column>
					<el-table-column prop='class' label='班级' width='60'></el-table-column>
					<el-table-column prop='grade' label="年级" width='70px'></el-table-column>
					<el-table-column prop='profession' label="专业" width='120px'></el-table-column>
					<el-table-column prop='competition' label="竞赛名称" width='140px'></el-table-column>
					<el-table-column prop='project' width='140px' label="作品名称"></el-table-column>
					<el-table-column prop='awardgrade' width='80' label="获奖等级"></el-table-column>
					<el-table-column prop='awarded_at' label="获奖时间" width='90px'></el-table-column>
					<el-table-column prop='year' width='80' label="获奖年度" show-overflow-tooltip></el-table-column>
					<el-table-column prop='slevel' label="学生位次" width='80' show-overflow-tooltip></el-table-column>
					<el-table-column prop='teacher' width='80' label="指导教师" show-overflow-tooltip></el-table-column>
					<el-table-column prop='tschool' label="指导教师所在学院" show-overflow-tooltip width='140'></el-table-column>
					<el-table-column prop='ecert' width='140' label="是否有电子证书" show-overflow-tooltip></el-table-column>
					<el-table-column prop='certno' width='100' label="证书编号" show-overflow-tooltip></el-table-column>
					<el-table-column prop='remark' width='100' label="备注" show-overflow-tooltip></el-table-column>
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
