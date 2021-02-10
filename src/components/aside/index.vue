<template>
  <el-aside v-bind:width='isCollapse ? "70px" : "206px"' class='f-pr' v-bind:style='"height:" + (windowH-80) + "px"'> 
	  <el-menu v-bind:default-active="active" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" unique-opened v-bind:style='"min-height:" + (windowH-80) + "px"' v-bind:collapse="isCollapse" style='max-width: 200px' v-bind:collapse-transition='false' router>
		  <section v-for='(item,index) in menus' v-bind:key='index'>
			  <el-submenu v-bind:index='index + ""' v-if='item.children'>
					<template slot="title">
						<i v-bind:class='active == index ? item.meta.icon + " icon-active" : item.meta.icon + " icon-default"'></i>
					  <span class='menu-text'>{{item.meta.label}}</span>
					</template>
					<el-menu-item v-for='(subitem,i) in item.children' v-bind:key='i' v-bind:index="subitem.meta.active" v-bind:route='`${item.path}/${subitem.path}`'>{{subitem.meta.label}}</el-menu-item>
				</el-submenu>
				<el-menu-item v-else v-bind:index='index + ""' v-bind:route='item.path'> 
					<i v-bind:class='active == index ? item.meta.icon + " icon-active" : item.meta.icon + " icon-default"'></i>
					<span class='menu-text'>{{item.meta.label}}</span>
				</el-menu-item>
			</section>
    </el-menu>
		<section class='toggle f-csp f-tac' v-on:click='isCollapse = !isCollapse' v-bind:style='{top: (windowH-60)/2 + "px",left: isCollapse ? "64px" : "200px"}'>
			<i v-bind:class='isCollapse ? "el-icon-caret-right" : "el-icon-caret-left"'></i>
	  </section>
	</el-aside>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>