<template>
  <ccontent ref='ccontent' v-bind:url='url' v-bind:importshow='false' v-bind:exportshow='false' v-bind:datas='datas' v-bind:operawidth='operawidth' v-bind:selectable='false' v-on:index='index'>
		<template v-slot='data'>
			<i class='f-csp iconfont icon-repass' title='重置密码' v-on:click='repass(data.data.id)'></i>
		</template>
	</ccontent>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>
