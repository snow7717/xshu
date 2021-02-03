<template>
  <div>
		<el-table v-bind:data="datas">
			<el-table-column prop="name" label="角色名称" width='300' show-overflow-tooltip></el-table-column>
			<el-table-column fixed="right" label='操作'>
				<template slot-scope='scope'>
					<i class='edit f-csp el-icon-edit' title='编辑' v-on:click='edit(scope.row)'></i>
					<i class='delete f-csp el-icon-delete' title='删除' v-on:click='del(scope.row.id)'></i>
				</template>
			</el-table-column>
		</el-table>
		<el-dialog v-bind:visible.sync="editshow" v-bind:show-close='false' class='edit-basis'>
		  <el-input placeholder="输入菜单名进行过滤" v-model="menu" size='mini'></el-input>
			<el-tree class="filter-tree" node-key='name' v-bind:data="menus" v-bind:props="props" v-bind:filter-node-method="filterNode" ref="tree" show-checkbox v-on:check-change="handleMenus"></el-tree>
			<footer slot="footer" class="dialog-footer">
				<el-button size='mini' @click="editshow = false">取 消</el-button>
				<el-button size='mini' type="primary" @click="dialogVisible = false">确 定</el-button>
			</footer>
		</el-dialog>
	</div>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>
