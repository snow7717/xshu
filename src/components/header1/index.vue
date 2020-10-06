<template>
  <el-header>
		<el-menu default-active="0" mode="horizontal" @select="handleSelect" text-color="#333" router>
		  <el-menu-item class='f-fl'>
				<template slot="title">
				  <el-image src='https://img.okay.do/acagrid/static/images/default/default_badge.png' class='logo'></el-image>山东财经大学 管科学院
				</template>
			</el-menu-item>
			<el-submenu index="1">
        <template slot="title">成果管理</template>
        <el-menu-item index="1-1" route='/paper'>
				  <font>论文</font>
					<i class='f-fr'>3份</i>
				</el-menu-item>
        <el-menu-item index="1-2" route='/result/paper'>
				  <font>软件著作权</font>
					<i class='f-fr'>3份</i>
				</el-menu-item>
				<el-menu-item index="1-3" route='/result/subjecty'>
				  <font>专利</font>
					<i class='f-fr'>3份</i>
				</el-menu-item>
				<el-menu-item index="1-4" route='/result/soft'>
				  <font>个人获奖</font>
					<i class='f-fr'>3份</i>
				</el-menu-item>
				<el-menu-item index="1-5" route='/result/patent'>
				  <font>学生获奖</font>
					<i class='f-fr'>3份</i>
				</el-menu-item>
				<el-menu-item index="1-6" route='/result/award'>
				  <font>继续教育材料</font>
					<i class='f-fr'>3份</i>
				</el-menu-item>
				<el-menu-item index="1-7" route='/result/saward'>
				  <font>著作</font>
					<i class='f-fr'>3份</i>
				</el-menu-item>
				<el-menu-item index="1-8" route='/result/conedu'>
				  <font>新闻报道</font>
					<i class='f-fr'>3份</i>
				</el-menu-item>
				<el-menu-item index="1-9" route='/result/book'>
				  <font>档案资料</font>
					<i class='f-fr'>3份</i>
				</el-menu-item>
				<el-menu-item index="1-10" route='/result/subjectx'>
				  <font>其他</font>
					<i class='f-fr'>3份</i>
				</el-menu-item>
				<el-menu-item index="1-11" route='/result/news'>
				  <font>新型成果</font>
					<i class='f-fr'>3份</i>
				</el-menu-item>
      </el-submenu>
			<el-submenu index="2">
        <template slot="title">课题管理</template>
        <el-menu-item index="2-1" route='/result/wait'>
				  <font>纵向课题</font>
					<i class='f-fr'>3份</i>
				</el-menu-item>
        <el-menu-item index="2-2" route='/result/paper'>
				  <font>横向课题</font>
					<i class='f-fr'>3份</i>
				</el-menu-item>
			</el-submenu>	
			<el-submenu index="3">
        <template slot="title">团队工具</template>
        <el-menu-item index="3-1" route='/result/wait'>
				  <font>团队资料夹</font>
					<i class='f-fr'>3份</i>
				</el-menu-item>
        <el-menu-item index="3-2" route='/result/paper'>
				  <font>团队通讯录</font>
					<i class='f-fr'>3份</i>
				</el-menu-item>
			</el-submenu>	
			<el-menu-item index='4'>回收站</el-menu-item>
			<el-submenu index="0" class='f-fr'>
				<template slot="title">张三</template>
				<el-menu-item index="0-1" route='/member'>管理团队</el-menu-item>
				<el-menu-item v-on:click='logout'>退出登录</el-menu-item>
			</el-submenu>
		</el-menu>
	</el-header>
</template>

<style lang='stylus' scoped>
  @import './index.styl'
</style>

<script src='./index'></script>