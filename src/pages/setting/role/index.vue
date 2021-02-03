<template>
  <div>
	  <el-container class='search-bar'>
			<el-main class='bar-main'>
				<i class='bar-item0 f-fsn'>{{summary}}({{total}})</i>
				<el-form :inline="true" size='small' class='search-name f-ib f-pr'>
					<el-form-item>
						<el-input v-model="search.name" placeholder='请输入角色名' prefix-icon='el-icon-search'></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" v-on:click='index(1)'>查询</el-button>
					</el-form-item>
				</el-form>
			</el-main>
			<el-aside width='70px'>
				<el-button type='default' size='mini' class='f-ib' v-on:click='create'>添加</el-button>
			</el-aside>
	  </el-container>
		<el-table v-bind:data="datas">
			<el-table-column prop="name" label="角色名称" width='300' show-overflow-tooltip></el-table-column>
			<el-table-column fixed="right" label='操作'>
				<template slot-scope='scope'>
					<i class='edit f-csp el-icon-edit' title='编辑' v-on:click='edit(scope.row)'></i>
					<i class='delete f-csp el-icon-delete' title='删除' v-on:click='del(scope.row.id)'></i>
				</template>
			</el-table-column>
		</el-table>
		<el-dialog v-bind:visible.sync="formshow" v-bind:show-close='false' class='edit-basis'>
		  <el-form ref='form' v-model='form' size='mini' label-width='80px'>
			  <el-form-item label='角色名称'>
				  <el-input v-model='form.name'></el-input>
				</el-form-item>
				<el-form-item label='菜单权限'>
				  <el-input placeholder="输入菜单名进行过滤" v-model="menu" size='mini'></el-input>
					<el-tree class="filter-tree" check-on-click-node node-key='name' v-bind:data="menus" v-bind:props="props" v-bind:filter-node-method="filterNode" ref="tree" show-checkbox></el-tree>
				</el-form-item>
			</el-form> 
			<footer slot="footer" class="dialog-footer">
				<el-button size='mini' @click="formshow = false">取 消</el-button>
				<el-button size='mini' type="primary" @click="dialogVisible = false">确 定</el-button>
			</footer>
		</el-dialog>
	</div>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>
