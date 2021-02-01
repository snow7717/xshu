<template>
	<div>
		<el-container class='search-bar'>
			<el-main class='bar-main'>
				<i class='bar-item0 f-fsn'>{{summary}}</i>
				<i class='bar-item el-icon-search f-fwb f-csp' v-if='!nameSearch' v-on:click='toggleName'></i>
				<slot name='fields'></slot>
				<el-form :inline="true" size='small' class='search-name f-ib f-pr' v-if='nameSearch'>
					<el-form-item>
						<el-input v-model="search.name" v-bind:placeholder="placeholder" prefix-icon='el-icon-search'></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" v-on:click='index(1)'>查询</el-button>
						<el-button v-if='closeShow' type="default" v-on:click='toggleName'>关闭</el-button>
					</el-form-item>
				</el-form>
			</el-main>
			<el-aside width='220px'>
				<el-button type='default' size='mini' class='f-ib' v-on:click='create'>添加</el-button>
				<el-upload action="#" v-bind:show-file-list='false' list-type="text" v-bind:http-request='importer' accept=".xls,.xlsx" class='f-ib'>
					<el-button slot='default' type="primary" size='mini'>导入</el-button>
				</el-upload>	
				<el-button type="success" size='mini' class='f-ib' v-bind:disabled='selects.length == 0' v-on:click='exporter'>导出Excel</el-button>
			</el-aside>
	  </el-container>
    <el-container>
			<el-row>
				<el-col :span='24'>
					<el-table v-bind:data="datas" stripe class='w-100' size='small' @selection-change="handleDatas">
						<el-table-column type="selection" fixed width="40"></el-table-column>
						<slot name='table'></slot>
						<el-table-column fixed="right" label='操作' width='70px'>
							<template slot-scope='scope'>
								<i class='edit f-csp el-icon-edit' title='编辑' v-on:click='edit(scope.row.id)'></i>
								<i class='delete f-csp el-icon-delete' title='删除' v-on:click='del(scope.row.id)'></i>
							</template>
						</el-table-column>
					</el-table>
				</el-col>
				<el-col :span='24' class='page f-tac'>
					<el-pagination layout="prev, pager, next" v-bind:current-page='page' v-bind:total="total" v-on:current-change='index'></el-pagination>
				</el-col>
			</el-row>
			<el-dialog title="" class='form' :visible.sync="formshow" v-bind:show-close='false' v-bind:close-on-click-modal='false'>
				<el-form :model="form" label-width='80px' size='mini' v-bind:rules="rules" ref="form">
					<slot name='form'></slot>	
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="cancel" size='mini'>取 消</el-button>
					<el-button type="primary" size='mini' v-on:click='submit("form")'>确 定</el-button>
				</div>
			</el-dialog>
		</el-container>
	</div>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>