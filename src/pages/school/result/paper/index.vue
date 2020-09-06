<template>
  <div class='container'>
	  <cheader></cheader>
		<el-container>
		  <caside active='2-2'></caside>
			<el-main>
			  <csearch v-bind:summary='summary' v-bind:nameSearch='nameSearch' v-on:toggleName='toggleName' v-bind:search='search' v-on:search='searcher'>
				  <div slot='fields' class='f-ib'>
					  <ctimesearch v-bind:search='search' v-if='!nameSearch'></ctimesearch>
						<cmemsearch v-bind:search='search' v-if='!nameSearch'></cmemsearch>
						<i class='bar-item f-fsn f-csp' v-if='!nameSearch' ref='langTriggle'>
							<font>语言：</font>
							<el-select v-model="search.lang" placeholder="请选择" size='mini' class='lang'>
								<el-option v-for="(item,index) in langs" v-bind:key="index" v-bind:label="item.label" v-bind:value="item.value"></el-option>
							</el-select>
						</i>
						<cfilter v-if='!nameSearch' v-bind:labelW='labelW' v-bind:search='search' v-bind:filters='filters' v-on:handleAll='handleAll' v-on:handleChange='handleChange' v-on:query='searcher'></cfilter>
					</div>
					<el-aside width='102px' slot='aside'>
					  <el-button type="success" size='mini'>导出Excel</el-button>
					</el-aside>
				</csearch>
				<el-table v-bind:data="papers" stripe class='w-100' size='small' @selection-change="handlePapers" >
				  <el-table-column type="selection" fixed width="40"></el-table-column>
				  <el-table-column prop='uploader' label="上传者" width='60px'></el-table-column>
					<el-table-column sortable prop='rank' label="本人排名" width='94px'></el-table-column>
					<el-table-column prop='title' label='论文名' width='200px' show-overflow-tooltip></el-table-column>
					<el-table-column sortable label='重要程度' width='94px'>
					  <template slot-scope='scope'>
						  <el-input type='number' size='mini' v-model='scope.row.important' min='0'></el-input>
						</template>
					</el-table-column> 
					<el-table-column prop='book' label='刊物名称' width='200px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='record' label='收录检索' width='100px' show-overflow-tooltip></el-table-column>
					<el-table-column sortable v-bind:sort-method='createdsort' prop='created_at' label='发表时间' width='100px'></el-table-column>
					<el-table-column sortable prop='number' label='卷号' width='70px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='page' label='起止页码' width='70px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='author' label='通讯作者' width='70px' show-overflow-tooltip></el-table-column>
					<el-table-column sortable prop='impact' label='影响因子' width='94px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='issn' label='issn号' width='94px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='jcr' label='国际jcr分区' width='94px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='cjcr' label='中科院jcr分区' width='100px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='wos' label='wos入藏号' width='100px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='cn' label='cn号' width='70px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='doi' label='doi号' width='70px' show-overflow-tooltip></el-table-column>
					<el-table-column sortable prop='quote' label='引用次数' width='94px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='type' label='论文类型' width='94px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='natural' label='自然杂志指数' width='94px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='keyword' label='关键词' width='94px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='together' label='共同一作' width='80px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='single' label='独著' width='60px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='esi' label='esi' width='60px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='abstract' label='摘要' width='60px' show-overflow-tooltip></el-table-column>
					<el-table-column sortable prop='issue' label='期号' width='80px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='field' label='论文领域' width='80px' show-overflow-tooltip></el-table-column>
					<el-table-column sortable prop='unitrank' label='单位排名' width='94px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='firstauthor' label='全国第一作者姓名及单位' width='170px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='comauthor' label='全部通讯录作者姓名及单位' width='170px' show-overflow-tooltip></el-table-column>
					<el-table-column prop='allauthor' label='全部作者姓名及单位' width='170px' show-overflow-tooltip></el-table-column>
					<el-table-column sortable v-bind:sort-method='uploadsort'  prop='upload_at' label='上传时间' width='94px' show-overflow-tooltip></el-table-column>
					<el-table-column sortable v-bind:sort-method='updatedsort' prop='updated_at' label='最后修改时间' width='120px' show-overflow-tooltip></el-table-column>
					<el-table-column fixed="right" label='操作' width='100px'>
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
