<template>
  <ccontent ref='ccontent' v-bind:pname='$options.name' v-bind:url='url' v-bind:fields='fields' v-bind:importshow='false' v-bind:exportshow='false' v-bind:datas='datas' v-bind:operawidth='operawidth' v-bind:selectable='false' v-bind:form='form' v-on:index='index' v-on:create='showform({status: "启用",role: []})' v-on:edit='showform' >
		<template v-slot='data'>
			<i class='f-csp iconfont icon-repass' title='重置密码' v-on:click='repass(data.data.id)'></i>
		</template>
	</ccontent>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>
