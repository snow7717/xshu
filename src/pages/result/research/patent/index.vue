<template>
  <div class='container'>
	  <cheader></cheader>
		<el-container>
			<el-main>
			  <csearch v-bind:summary='`${title}(${total})`' v-bind:nameSearch='true' v-bind:search='search' v-on:search='index(1)' placeholder='请输入专利名'>
					<el-aside width='200px' slot='aside'>
					  <router-link to="/create/3">
						  <el-button type="primary" size='mini'>上传</el-button>
					  </router-link>
					  <el-button type='success' size='mini' icon="el-icon-plus" v-bind:disabled='selects.length == 0' v-on:click='exporter'>导出Excel</el-button>
					</el-aside>
				</csearch>
				<el-table v-bind:data="patents" stripe class='w-100' size='small' @selection-change="handlePapers" >
				  <el-table-column type="selection" fixed width="40"></el-table-column>
				  <el-table-column prop='name' label='专利名称' show-overflow-tooltip></el-table-column>
					<el-table-column prop='type_zh' label='专利类型' show-overflow-tooltip></el-table-column>
					<el-table-column prop='status' label='专利状态' show-overflow-tooltip></el-table-column>
					<el-table-column prop='finisher' label='完成人' show-overflow-tooltip></el-table-column>
					<el-table-column prop='member' label='团队成员' show-overflow-tooltip></el-table-column>
					<el-table-column prop='rank' label='位次'></el-table-column>
					<el-table-column prop='certno' label='证书编号' show-overflow-tooltip></el-table-column>
					<el-table-column fixed="right" label='操作' width='100px'>
					  <template slot-scope='scope'>
						  <router-link v-bind:to='`/edit/3/${scope.row.id}`'>
						    <i class='delete f-csp el-icon-edit' title='编辑'></i>
							</router-link>
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
