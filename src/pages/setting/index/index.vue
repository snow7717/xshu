<template>
  <div class='container'>
	  <cheader></cheader>
		<el-container>
		  <caside v-bind:active='active'></caside>
			<el-main class='result-main'>
			  <router-view></router-view>
			</el-main>
		</el-container>
	</div>
</template>

<style lang='stylus'>
  @import './index.styl'
</style>

<script src='./index'></script>
