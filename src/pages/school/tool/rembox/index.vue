<template>
  <div class='container'>
	  <cheader></cheader>
		<el-container>
		  <caside active='5-1'></caside>
			<el-main v-bind:style='"height:" + (windowH - 80) + "px"'>
				<el-container class='top-opera'>
				  <el-main></el-main>
					<el-aside width='70px'>
						<el-button type='default' size='mini' v-bind:disabled='checkedResults.length == 0'>还原</el-button>
					</el-aside>
				</el-container>
			  <el-table v-bind:data="results" stripe class='w-100' size='small' @selection-change="handleResults">
				  <el-table-column type="selection" width="40"></el-table-column>
				  <el-table-column prop='uploader' label="上传者" width='60px'></el-table-column>
					<el-table-column prop='type' label="成果类型" width='80px'></el-table-column>
					<el-table-column prop='title' label="标题" show-overflow-tooltip></el-table-column>
					<el-table-column fixed="right" label='操作' width='50px'>
					  <template slot-scope='scope'>
							<i class='reduction el-icon-refresh-left f-csp' title='还原'></i>
						</template>
					</el-table-column>
				</el-table>	
				<el-row class='page'>
				  <el-col :span='24' class='f-tac'>
					  <el-pagination layout="prev, pager, next" v-bind:total="100"></el-pagination>
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
