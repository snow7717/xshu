<template>
  <div class='container'>
	  <cheader></cheader>
		<el-container>
			<el-main>
			  <csearch v-bind:summary='`${title}(${total})`' v-bind:nameSearch='true' v-bind:search='search' v-on:search='index(1)' placeholder='请输入姓名'>
					<el-aside width='200px' slot='aside'>
					  <router-link to="/create/12">
						  <el-button type="primary" size='mini'>上传</el-button>
					  </router-link>
					  <el-button type='success' size='mini' icon="el-icon-plus">导出Excel</el-button>
					</el-aside>
				</csearch>
				<el-table v-bind:data="awards" stripe class='w-100' size='small' @selection-change="handlePapers" >
				  <el-table-column type="selection" fixed width="40"></el-table-column>
				  <el-table-column prop='number' label='工号' show-overflow-tooltip></el-table-column>
					<el-table-column prop='name' label='姓名' show-overflow-tooltip></el-table-column>
					<el-table-column prop='type' label='奖励类型' show-overflow-tooltip></el-table-column>
					<el-table-column prop='level' label='获奖等级' show-overflow-tooltip></el-table-column>
					<el-table-column prop='result' label='获奖成果名称' show-overflow-tooltip></el-table-column>
					<el-table-column prop='year' label='获奖年度' show-overflow-tooltip></el-table-column>
					<el-table-column prop='certno' label='证书编号' show-overflow-tooltip></el-table-column>
					<el-table-column prop='unitsort' label='单位位次'></el-table-column>
					<el-table-column prop='personsort' label='本人位次'></el-table-column>
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
