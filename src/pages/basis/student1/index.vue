<template>
  <ccontent ref='ccontent' v-bind:url='url' v-bind:fields='fields' v-bind:datas='datas' v-bind:form='form' v-bind:labelWidth='labelW' v-on:index='index' v-on:create='showform({})' v-on:edit='showform'></ccontent>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>
