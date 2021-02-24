<template>
  <ccontent ref='ccontent' v-bind:pname='$options.name' v-bind:url='url' v-bind:fields='fields' v-bind:importshow='false' v-bind:exportshow='false' v-bind:datas='datas'  v-bind:selectable='false' v-bind:form='form' v-bind:labelWidth='labelW' v-on:index='index' v-on:create='showform({permissions: []})' v-on:edit='showform'>
	</ccontent>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>
