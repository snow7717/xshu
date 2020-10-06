<template>
  <div class='container'>
	  <cheader></cheader>
		<el-container>
		  <caside active='0'></caside>
			<el-main v-bind:style='"height:" + (windowH - 80) + "px"'>
			  <el-card class='card-data'>
					<header slot="header" class="clearfix f-db">
						<h4 class='f-ib f-fwn'>数据中心</h4>
						<el-button class='opera f-fr' type="text" v-on:click='toggleData'>
						  {{dataH == 'auto' ? '收起更多' : '展开更多'}}
							<i v-bind:class='dataH == "auto" ? "el-icon-arrow-up" : "el-icon-arrow-down"' class='f-fwb'></i>
					  </el-button>
					</header>
					<el-row :gutter="20" class='f-oh' v-bind:style='"height:" + dataH'>
					  <el-col :xl='3' :lg='4' :md="4" :sm='6' :xs='12' v-for='(item,index) in datas' v-bind:key='index'>
						  <el-card class='subcard' v-bind:class='"subcard" + index' shadow='hover'>
								<header slot="header" class="clearfix f-db">
									<h4 class='f-ib f-fwn f-fs1'>{{item.title}}</h4>
								</header>
								<b class='f-db f-tac'>{{item.total}}</b>
							</el-card>	
						</el-col>
					</el-row>
				</el-card>
				<el-card class='chart-card'>
				  <header slot="header" class="clearfix f-db">
						<h4 class='f-ib f-fwn'>成果趋势图</h4>
					</header>
					<v-chart class='chart' v-bind:options="option" autoresize theme="light"></v-chart>
				</el-card>
				<el-row :gutter='20'> 
				  <el-col :xl='6' :lg='6' :md="6" :sm='12' :xs='12'>
					  <el-card shadow='hover'>
						  <header slot="header" class="clearfix f-db">
							  <h4 class='top-title top-title0 f-tac'>成果TOP5</h4>
							</header>
							<el-row class='top-item f-tac f-fs2' v-for='(item,index) in top.result' v-bind:key='index'>
							  <el-col :span='4'>{{index + 1}}</el-col>
								<el-col :span='4'>
								  <el-avatar size="small" src="http://www.acagrid.com/static/application/src/images/invite_friend_male.jpg" class='avatar'></el-avatar>
								</el-col>
								<el-col :span='12'>{{item.name}}</el-col>
								<el-col :span='4'>{{item.counts}}</el-col>
							</el-row>
						</el-card>
					</el-col>
					<el-col :xl='6' :lg='6' :md="6" :sm='12' :xs='12'>
					  <el-card shadow='hover'>
						  <header slot="header" class="clearfix f-db">
							  <h4 class='top-title top-title1 f-tac'>论文TOP5</h4>
							</header>
							<el-row class='top-item f-tac f-fs2' v-for='(item,index) in top.paper' v-bind:key='index'>
							  <el-col :span='4'>{{index + 1}}</el-col>
								<el-col :span='4'>
								  <el-avatar size="small" src="http://www.acagrid.com/static/application/src/images/invite_friend_male.jpg" class='avatar'></el-avatar>
								</el-col>
								<el-col :span='12'>{{item.name}}</el-col>
								<el-col :span='4'>{{item.counts}}</el-col>
							</el-row>
						</el-card>
					</el-col>
					<el-col :xl='6' :lg='6' :md="6" :sm='12' :xs='12'>
					  <el-card shadow='hover'>
						  <header slot="header" class="clearfix f-db">
							  <h4 class='top-title top-title2 f-tac'>软件著作TOP5</h4>
							</header>
							<el-row class='top-item f-tac f-fs2' v-for='(item,index) in top.soft' v-bind:key='index'>
							  <el-col :span='4'>{{index + 1}}</el-col>
								<el-col :span='4'>
								  <el-avatar size="small" src="http://www.acagrid.com/static/application/src/images/invite_friend_male.jpg" class='avatar'></el-avatar>
								</el-col>
								<el-col :span='12'>{{item.name}}</el-col>
								<el-col :span='4'>{{item.counts}}</el-col>
							</el-row>
						</el-card>
					</el-col>
					<el-col :xl='6' :lg='6' :md="6" :sm='12' :xs='12'>
					  <el-card shadow='hover'>
						  <header slot="header" class="clearfix f-db">
							  <h4 class='top-title top-title3 f-tac'>专利TOP5</h4>
							</header>
							<el-row class='top-item f-tac f-fs2' v-for='(item,index) in top.patent' v-bind:key='index'>
							  <el-col :span='4'>{{index}}</el-col>
								<el-col :span='4'>
								  <el-avatar size="small" src="http://www.acagrid.com/static/application/src/images/invite_friend_male.jpg" class='avatar'></el-avatar>
								</el-col>
								<el-col :span='12'>{{item.name}}</el-col>
								<el-col :span='4'>{{item.counts}}</el-col>
							</el-row>
						</el-card>
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