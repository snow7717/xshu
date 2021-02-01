<template>
  <div class='container'>
	  <cheader></cheader>
		<el-container>
		  <caside active='7-3'></caside>
			<el-main v-bind:style='"height:" + (windowH - 80) + "px"'>
			  <el-card>
				  <el-container slot='header'>
					  <el-main class='card-main'>
						  <h2 class='folder-title'>单位发票抬头</h2>
						</el-main>
						<el-aside width='200px'>
						  <el-button type='primary' size='mini'>编辑</el-button>
							<el-button type='default' size='mini'>隐藏</el-button>
							<el-button type='danger' size='mini'>删除</el-button>
						</el-aside>
					</el-container>
				</el-card>
			</el-main>
		</el-container>
	</div>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>
