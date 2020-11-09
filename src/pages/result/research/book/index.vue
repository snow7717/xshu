<template>
  <div class='container'>
	  <cheader></cheader>
		<el-container>
			<el-main>
			  <csearch v-bind:summary='`${title}(${total})`' v-bind:nameSearch='true' v-bind:search='search' v-on:search='index(1)' placeholder='请输入姓名'>
					<el-aside width='200px' slot='aside'>
					  <router-link to="/create/7">
						  <el-button type="primary" size='mini'>上传</el-button>
					  </router-link>
					  <el-button type='success' size='mini' icon="el-icon-plus" v-bind:disabled='selects.length == 0' v-on:click='exporter'>导出Excel</el-button>
					</el-aside>
				</csearch>
				<el-table v-bind:data="books" stripe class='w-100' size='small' @selection-change="handlePapers" >
				  <el-table-column type="selection" fixed width="40"></el-table-column>
				  <el-table-column prop='name' label='名称' width='200px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='editor' label='主编' width='60px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='secondeditor' label='副主编' width='60px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='isbn' label='ISBN' width='80px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='type' label='类别' width='100px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='house' label='出版社' width='120px' show-overflow-tooltip></el-table-column>
					<el-table-column sortable v-bind:sort-method='pubsort' prop='pub_at' label='出版时间' width='110px'></el-table-column>
					<el-table-column prop='planning' label='是否规划教材' width='120px'></el-table-column>
					<el-table-column prop='planame' label='规划名称' width='160px' show-overflow-tooltip></el-table-column>
					<el-table-column fixed="right" label='操作' width='100px'>
					  <template slot-scope='scope'>
						  <router-link v-bind:to='`/edit/7/${scope.row.id}`'>
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
