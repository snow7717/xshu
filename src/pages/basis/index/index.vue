<template>
  <div class='container'>
	  <cheader></cheader>
		<el-container>
		  <caside v-bind:active='active'></caside>
			<el-main class='result-main'>
			  <keep-alive>
			    <router-view></router-view>
				</keep-alive>
			</el-main>
		</el-container>
	</div>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>
