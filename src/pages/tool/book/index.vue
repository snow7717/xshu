<template>
  <div class='container'>
	  <cheader></cheader>
		<el-container>
		  <caside active='7-2'></caside>
			<el-main v-bind:style='"height:" + (windowH - 80) + "px"'>
			  <el-table v-bind:data="members" stripe class='w-100' size='small' @selection-change="handleResults">
				  <el-table-column prop='name' label="姓名"></el-table-column>
					<el-table-column prop='position' label="职位"></el-table-column>
					<el-table-column prop='phone' label="手机号" show-overflow-tooltip></el-table-column>
					<el-table-column prop='email' label='邮箱'></el-table-column>
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
