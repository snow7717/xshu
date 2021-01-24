<template>
  <div class='container'>
	  <cheader></cheader>
		<el-container>
		  <caside active='1-1'></caside>
			<el-main class='result-main'>
			  <csearch v-bind:summary='`${summary}(${total})`' v-bind:nameSearch='nameSearch' v-on:toggleName='toggleName' v-bind:search='search' v-on:search='index(1)' placeholder='请输入姓名'>
					<el-aside width='170px' slot='aside'>
					  <el-upload action="#" v-bind:show-file-list='false' list-type="text" v-bind:http-request='importer' accept=".xls,.xlsx" class='f-ib'>
					    <el-button slot='default' type="primary" size='mini'>导入</el-button>
						</el-upload>	
					  <el-button type="success" size='mini' class='f-ib' v-bind:disabled='selects.length == 0' v-on:click='exporter'>导出Excel</el-button>
					</el-aside>
				</csearch>
				<el-table v-bind:data="basis" stripe class='w-100' size='small' @selection-change="handlePapers">
				  <el-table-column type="selection" fixed width="40"></el-table-column>
					<el-table-column prop='name' width='60' label='姓名' show-overflow-tooltip></el-table-column>
					<el-table-column prop='number' width='80' label='职工号' show-overflow-tooltip></el-table-column>
					<el-table-column prop='gender' width='50' label='性别' show-overflow-tooltip></el-table-column>
					<el-table-column prop='political' width='80' label='政治面貌' show-overflow-tooltip></el-table-column>
					<el-table-column prop='jobtitle' width='80' label='职称' show-overflow-tooltip></el-table-column>
					<el-table-column prop='bachelor' width='60' label='学位' show-overflow-tooltip></el-table-column>
					<el-table-column prop='phone' label='移动电话' show-overflow-tooltip></el-table-column>
					<el-table-column prop='email' show-overflow-tooltip label='电子邮箱'></el-table-column>
					<el-table-column prop='unit' show-overflow-tooltip label='最新单位'></el-table-column>
					<el-table-column prop='post' show-overflow-tooltip label='职务'></el-table-column>
					<el-table-column fixed="right" label='操作' width='70px'>
					  <template slot-scope='scope'>
						  <i class='edit f-csp el-icon-edit' title='编辑' v-on:click='edit(scope.row.id)'></i>
							<i class='delete f-csp el-icon-delete' title='删除' v-on:click='del(scope.row.id)'></i>
						</template>
					</el-table-column>
				</el-table>
				<el-row class='page'>
				  <el-col :span='24' class='f-tac'>
					  <el-pagination layout="prev, pager, next" v-bind:current-page='page' v-bind:total="total" v-on:current-change='index'></el-pagination>
					</el-col>
				</el-row>
				<el-dialog title="" class='edit-basis' :visible.sync="editshow" v-bind:show-close='false'>
					<el-form :model="form" label-width='80px' size='mini' v-bind:rules="rules" ref="form">
						<el-form-item label="姓名" prop='name'>
							<el-input v-model="form.name" autocomplete="off"></el-input>
						</el-form-item>
						<el-form-item label="职工号" prop='number'>
							<el-input v-model="form.number" autocomplete="off"></el-input>
						</el-form-item>
						<el-form-item label='性别' prop='gender'>
						  <el-radio v-model="form.gender" label="男">男</el-radio>
              <el-radio v-model="form.gender" label="女">女</el-radio>
						</el-form-item>
						<el-form-item label='政治面貌' prop='political'>
						  <el-select v-model="form.political" filterable allow-create placeholder="请选择">
							  <el-option label="九三学社" value="九三学社"></el-option>
								<el-option label="民革" value="民革"></el-option>
								<el-option label="民建" value="民建"></el-option>
								<el-option label="中共党员" value="中国党员"></el-option>
								<el-option label="无党派" value="无党派"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label='职称' prop='jobtitle'>
						  <el-select v-model='form.jobtitle' filterable allow-create placeholder="请选择">
							  <el-option label="副教授" value="副教授"></el-option>
								<el-option label="副研究馆员" value="副研究馆员"></el-option>
								<el-option label="副研究员" value="副研究员"></el-option>
								<el-option label="馆员" value="馆员"></el-option>
								<el-option label="讲师" value="讲师"></el-option>
								<el-option label="教授" value="教授"></el-option>
								<el-option label="预聘制副教授" value="预聘制副教授"></el-option>
								<el-option label="助教" value="助教"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label='学位' prop='bachelor'>
						  <el-select v-model='form.bachelor' filterable allow-create placeholder="请选择">
							  <el-option label="博士" value="博士"></el-option>
								<el-option label="硕士" value="硕士"></el-option>
								<el-option label="学士" value="学士"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label='移动电话' prop='phone'>
						  <el-input v-model='form.phone' type='number'></el-input>
						</el-form-item>
						<el-form-item label='电子邮箱' prop='email'>
						  <el-input v-model='form.email' type='email'></el-input>
						</el-form-item>
						<el-form-item label='最新单位' prop='unit'>
						  <el-input v-model='form.unit'></el-input>
						</el-form-item>
						<el-form-item label='职务' prop='post'>
						  <el-input v-model='form.post'></el-input>
						</el-form-item>
					</el-form>
					<div slot="footer" class="dialog-footer">
						<el-button @click="editshow = false" size='mini'>取 消</el-button>
						<el-button type="primary" size='mini' v-on:click='submit("form")'>确 定</el-button>
					</div>
        </el-dialog>
			</el-main>
		</el-container>
	</div>	
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>
