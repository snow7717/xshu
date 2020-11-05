<template>
  <div class='container'>
	  <cheader></cheader>
		<el-container>
		  <caside active='2-2'></caside>
			<el-main class='result-main'>
			  <csearch v-bind:summary='`${summary}(${total})`' v-bind:nameSearch='nameSearch' v-on:toggleName='toggleName' v-bind:search='search' v-on:search='index(1)' placeholder='请输入项目名称'>
					<el-aside width='102px' slot='aside'>
					  <el-button type="success" size='mini' v-on:click='exporter'>导出Excel</el-button>
					</el-aside>
				</csearch>
				<el-table v-bind:data="subjects" stripe class='w-100' size='small' @selection-change="handlePapers" >
				  <el-table-column type="selection" fixed width="40"></el-table-column>
					<el-table-column prop='cate' label='项目类别' width='80px'></el-table-column>
					<el-table-column prop='title' label='项目名称' width='200px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='source' label='项目来源' width='100px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='level' label='项目级别' width='80px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='principal' label="负责人" width='94px'></el-table-column>
					<el-table-column prop='school' label="所在学院" width='120px' show-overflow-tooltip></el-table-column>
					<el-table-column sortable prop='funding' label='合同经费' width='94px' show-overflow-tooltip></el-table-column>
					<el-table-column sortable prop='receivefund' label='到账经费' width='94px' show-overflow-tooltip></el-table-column>
					<el-table-column sortable v-bind:sort-method='createdsort' prop='created_at' label='开始时间' width='100px'></el-table-column>
					<el-table-column sortable v-bind:sort-method='untilsort' prop='until_at' label='截止时间' width='100px'></el-table-column>
					<el-table-column prop='status' label='状态' width='80px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='member' label='团队成员' width='100px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='year' label='立项年度' width='100px' show-overflow-tooltip></el-table-column>
					<el-table-column fixed="right" label='操作' width='100px'>
					  <template slot-scope='scope'>
						  <i class='download f-csp el-icon-download' title='下载'></i>
							<i class='return iconfont icon-return f-csp' title='退回' v-on:click='handleReturn'></i>
							<i class='delete f-csp el-icon-delete' title='删除' v-on:click='del(scope.row.id)'></i>
						</template>
					</el-table-column>
				</el-table>
				<el-row class='page'>
				  <el-col :span='24' class='f-tac'>
					  <el-pagination layout="prev, pager, next" v-bind:total="total" v-on:current-change='index'></el-pagination>
					</el-col>
				</el-row>
				<el-dialog title="确定退回所选成果？" v-bind:visible.sync="returnShow" width='500px' class='dialog-return'>
				  <el-form class='form-return' size='small'>
					  <el-form-item>
						  将这份成果退回后，除非老师对其重新修改，否则将不会在学院的列表中显示，并不会删除教师端中老师的文件。
						</el-form-item>
						<el-form-item>
						  <el-radio-group v-model="reason.type">
								<el-radio label="数据不全">数据不全</el-radio>
								<el-radio label="时间有误">时间有误</el-radio>
								<el-radio label="其他">其他</el-radio>
							</el-radio-group>
						</el-form-item>
						<el-form-item>
						  <el-input v-model='reason.description' type="textarea" autosize placeholder='请在此输入退回成果的问题描述'></el-input>
						</el-form-item>
						<el-form-item class='f-tar'>
						  <el-button type='danger' size='mini'>退回</el-button>
						</el-form-item>
						<el-form-item></el-form-item>
					</el-form>
				</el-dialog>
			</el-main>
		</el-container>
	</div>	
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>
