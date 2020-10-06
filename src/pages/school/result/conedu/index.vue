<template>
  <div class='container'>
	  <cheader></cheader>
		<el-container>
		  <caside active='2-8'></caside>
			<el-main class='result-main'>
			  <csearch v-bind:summary='summary' v-bind:nameSearch='nameSearch' v-on:toggleName='toggleName' v-bind:search='search' v-on:search='searcher'>
				  <div slot='fields' class='f-ib'>
					  <ctimesearch v-bind:search='search' v-if='!nameSearch'></ctimesearch>
						<cmemsearch v-bind:search='search' v-if='!nameSearch'></cmemsearch>
						<cfilter v-bind:labelW='labelW' v-if='!nameSearch' v-bind:search='search' v-bind:filters='filters' v-on:handleAll='handleAll' v-on:handleChange='handleChange' v-on:query='searcher'></cfilter>
					</div>
					<el-aside width='102px' slot='aside'>
					  <el-button type="success" size='mini'>导出Excel</el-button>
					</el-aside>
				</csearch>
				<el-table v-bind:data="patents" stripe class='w-100' size='small' @selection-change="handlePapers" >
				  <el-table-column type="selection" fixed width="40"></el-table-column>
				  <el-table-column prop='uploader' label="上传者" width='60px'></el-table-column>
					<el-table-column prop='title' label='材料标题' width='200px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='class' sortable label='课时' width='80px' show-overflow-tooltip></el-table-column>
					<el-table-column sortable label='重要程度' width='94px'>
					  <template slot-scope='scope'>
						  <el-input type='number' size='mini' v-model='scope.row.important' min='0'></el-input>
						</template>
					</el-table-column> 
					<el-table-column prop='level' label='评分/等级' width='100px' show-overflow-tooltip></el-table-column>
					<el-table-column sortable v-bind:sort-method='gotsort' prop='got_at' label='获得时间' width='110px'></el-table-column>
					<el-table-column prop='unit' label='培训单位' width='110px'></el-table-column>
					<el-table-column sortable prop='unitrank' label='单位排名' width='94px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='allauthor' label='全部作者姓名及单位' width='170px' show-overflow-tooltip></el-table-column>
					<el-table-column sortable v-bind:sort-method='uploadsort'  prop='upload_at' label='上传时间' width='94px' show-overflow-tooltip></el-table-column>
					<el-table-column sortable v-bind:sort-method='updatedsort' prop='updated_at' label='最后修改时间' width='120px' show-overflow-tooltip></el-table-column>
					<el-table-column fixed="rig
					ht" label='操作' width='100px'>
					  <template slot-scope='scope'>
						  <i class='download f-csp el-icon-download' title='下载'></i>
							<i class='return iconfont icon-return f-csp' title='退回' v-on:click='handleReturn'></i>
							<i class='delete f-csp el-icon-delete' title='删除' v-on:click='del'></i>
						</template>
					</el-table-column>
				</el-table>
				<el-row class='page'>
				  <el-col :span='24' class='f-tac'>
					  <el-pagination layout="prev, pager, next" v-bind:total="100"></el-pagination>
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
