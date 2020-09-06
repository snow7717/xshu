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
						<el-col :xl='3' :lg='4' :md="4" :sm='6' :xs='12'>
						  <el-card class='subcard subcard0' shadow='hover'>
								<header slot="header" class="clearfix f-db">
									<h4 class='f-ib f-fwn f-fs1'>所有成员</h4>
								</header>
								<b class='f-db f-tac'>7</b>
							</el-card>	
					  </el-col>
						<el-col :xl='3' :lg='4' :md="4" :sm='6' :xs='12'>
						  <el-card class='subcard subcard1' shadow='hover'>
								<header slot="header" class="clearfix f-db">
									<h4 class='f-ib f-fwn f-fs1'>所有成果</h4>
								</header>
								<b class='f-db f-tac'>7</b>
							</el-card>	
					  </el-col>
						<el-col :xl='3' :lg='4' :md="4" :sm='6' :xs='12'>
						  <el-card class='subcard subcard2' shadow='hover'>
								<header slot="header" class="clearfix f-db">
									<h4 class='f-ib f-fwn f-fs1'>论文</h4>
								</header>
								<b class='f-db f-tac'>7</b>
							</el-card>	
					  </el-col>
						<el-col :xl='3' :lg='4' :md="4" :sm='6' :xs='12'>
						  <el-card class='subcard subcard3' shadow='hover'>
								<header slot="header" class="clearfix f-db">
									<h4 class='f-ib f-fwn f-fs1'>纵向课题</h4>
								</header>
								<b class='f-db f-tac'>7</b>
							</el-card>	
					  </el-col>
						<el-col :xl='3' :lg='4' :md="4" :sm='6' :xs='12'>
						  <el-card class='subcard subcard4' shadow='hover'>
								<header slot="header" class="clearfix f-db">
									<h4 class='f-ib f-fwn f-fs1'>专利</h4>
								</header>
								<b class='f-db f-tac'>7</b>
							</el-card>	
					  </el-col>
						<el-col :xl='3' :lg='4' :md="4" :sm='6' :xs='12'>
						  <el-card class='subcard subcard5' shadow='hover'>
								<header slot="header" class="clearfix f-db">
									<h4 class='f-ib f-fwn f-fs1'>著作</h4>
								</header>
								<b class='f-db f-tac'>7</b>
							</el-card>	
					  </el-col>
						<el-col :xl='3' :lg='4' :md="4" :sm='6' :xs='12'>
						  <el-card class='subcard subcard6' shadow='hover'>
								<header slot="header" class="clearfix f-db">
									<h4 class='f-ib f-fwn f-fs1'>软件著作权</h4>
								</header>
								<b class='f-db f-tac'>7</b>
							</el-card>	
					  </el-col>
						<el-col :xl='3' :lg='4' :md="4" :sm='6' :xs='12'>
						  <el-card class='subcard subcard7' shadow='hover'>
								<header slot="header" class="clearfix f-db">
									<h4 class='f-ib f-fwn f-fs1'>个人获奖</h4>
								</header>
								<b class='f-db f-tac'>7</b>
							</el-card>	
					  </el-col>
						<el-col :xl='3' :lg='4' :md="4" :sm='6' :xs='12'>
						  <el-card class='subcard subcard8' shadow='hover'>
								<header slot="header" class="clearfix f-db">
									<h4 class='f-ib f-fwn f-fs1'>学生获奖</h4>
								</header>
								<b class='f-db f-tac'>7</b>
							</el-card>	
					  </el-col>
						<el-col :xl='3' :lg='4' :md="4" :sm='6' :xs='12'>
						  <el-card class='subcard subcard9' shadow='hover'>
								<header slot="header" class="clearfix f-db">
									<h4 class='f-ib f-fwn f-fs1'>横向课题</h4>
								</header>
								<b class='f-db f-tac'>7</b>
							</el-card>	
					  </el-col>
						<el-col :xl='3' :lg='4' :md="4" :sm='6' :xs='12'>
						  <el-card class='subcard subcard10' shadow='hover'>
								<header slot="header" class="clearfix f-db">
									<h4 class='f-ib f-fwn f-fs1'>新闻报道</h4>
								</header>
								<b class='f-db f-tac'>7</b>
							</el-card>	
					  </el-col>
						<el-col :xl='3' :lg='4' :md="4" :sm='6' :xs='12'>
						  <el-card class='subcard subcard11' shadow='hover'>
								<header slot="header" class="clearfix f-db">
									<h4 class='f-ib f-fwn f-fs1'>档案资料</h4>
								</header>
								<b class='f-db f-tac'>7</b>
							</el-card>	
					  </el-col>
						<el-col :xl='3' :lg='4' :md="4" :sm='6' :xs='12'>
						  <el-card class='subcard subcard12' shadow='hover'>
								<header slot="header" class="clearfix f-db">
									<h4 class='f-ib f-fwn f-fs1'>继续教育材料</h4>
								</header>
								<b class='f-db f-tac'>7</b>
							</el-card>	
					  </el-col>
						<el-col :xl='3' :lg='4' :md="4" :sm='6' :xs='12'>
						  <el-card class='subcard subcard13' shadow='hover'>
								<header slot="header" class="clearfix f-db">
									<h4 class='f-ib f-fwn f-fs1'>新型成果</h4>
								</header>
								<b class='f-db f-tac'>7</b>
							</el-card>	
					  </el-col>
						<el-col :xl='3' :lg='4' :md="4" :sm='6' :xs='12'>
						  <el-card class='subcard subcard14 f-tac' shadow='hover'>
							  <i class='add el-icon-plus f-fwb f-csp'></i>
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
							<el-row class='top-item f-tac f-fs2'>
							  <el-col :span='4'>1</el-col>
								<el-col :span='4'>
								  <el-avatar size="small" src="http://www.acagrid.com/static/application/src/images/invite_friend_male.jpg" class='avatar'></el-avatar>
								</el-col>
								<el-col :span='12'>王老师</el-col>
								<el-col :span='4'>12</el-col>
							</el-row>
							<el-row class='top-item f-tac f-fs2'>
							  <el-col :span='4'>2</el-col>
								<el-col :span='4'>
								  <el-avatar size="small" src="http://www.acagrid.com/static/application/src/images/invite_friend_male.jpg" class='avatar'></el-avatar>
								</el-col>
								<el-col :span='12'>王老师</el-col>
								<el-col :span='4'>12</el-col>
							</el-row>
							<el-row class='top-item f-tac f-fs2'>
							  <el-col :span='4'>3</el-col>
								<el-col :span='4'>
								  <el-avatar size="small" src="http://www.acagrid.com/static/application/src/images/invite_friend_male.jpg" class='avatar'></el-avatar>
								</el-col>
								<el-col :span='12'>王老师</el-col>
								<el-col :span='4'>12</el-col>
							</el-row>
							<el-row class='top-item f-tac f-fs2'>
							  <el-col :span='4'>4</el-col>
								<el-col :span='4'>
								  <el-avatar size="small" src="http://www.acagrid.com/static/application/src/images/invite_friend_male.jpg" class='avatar'></el-avatar>
								</el-col>
								<el-col :span='12'>王老师</el-col>
								<el-col :span='4'>12</el-col>
							</el-row>
							<el-row class='top-item f-tac f-fs2'>
							  <el-col :span='4'>5</el-col>
								<el-col :span='4'>
								  <el-avatar size="small" src="http://www.acagrid.com/static/application/src/images/invite_friend_male.jpg" class='avatar'></el-avatar>
								</el-col>
								<el-col :span='12'>王老师</el-col>
								<el-col :span='4'>12</el-col>
							</el-row>
						</el-card>
					</el-col>
					<el-col :xl='6' :lg='6' :md="6" :sm='12' :xs='12'>
					  <el-card shadow='hover'>
						  <header slot="header" class="clearfix f-db">
							  <h4 class='top-title top-title1 f-tac'>论文TOP5</h4>
							</header>
							<el-row class='top-item f-tac f-fs2'>
							  <el-col :span='4'>1</el-col>
								<el-col :span='4'>
								  <el-avatar size="small" src="http://www.acagrid.com/static/application/src/images/invite_friend_male.jpg" class='avatar'></el-avatar>
								</el-col>
								<el-col :span='12'>王老师</el-col>
								<el-col :span='4'>12</el-col>
							</el-row>
							<el-row class='top-item f-tac f-fs2'>
							  <el-col :span='4'>2</el-col>
								<el-col :span='4'>
								  <el-avatar size="small" src="http://www.acagrid.com/static/application/src/images/invite_friend_male.jpg" class='avatar'></el-avatar>
								</el-col>
								<el-col :span='12'>王老师</el-col>
								<el-col :span='4'>12</el-col>
							</el-row>
							<el-row class='top-item f-tac f-fs2'>
							  <el-col :span='4'>3</el-col>
								<el-col :span='4'>
								  <el-avatar size="small" src="http://www.acagrid.com/static/application/src/images/invite_friend_male.jpg" class='avatar'></el-avatar>
								</el-col>
								<el-col :span='12'>王老师</el-col>
								<el-col :span='4'>12</el-col>
							</el-row>
							<el-row class='top-item f-tac f-fs2'>
							  <el-col :span='4'>4</el-col>
								<el-col :span='4'>
								  <el-avatar size="small" src="http://www.acagrid.com/static/application/src/images/invite_friend_male.jpg" class='avatar'></el-avatar>
								</el-col>
								<el-col :span='12'>王老师</el-col>
								<el-col :span='4'>12</el-col>
							</el-row>
							<el-row class='top-item f-tac f-fs2'>
							  <el-col :span='4'>5</el-col>
								<el-col :span='4'>
								  <el-avatar size="small" src="http://www.acagrid.com/static/application/src/images/invite_friend_male.jpg" class='avatar'></el-avatar>
								</el-col>
								<el-col :span='12'>王老师</el-col>
								<el-col :span='4'>12</el-col>
							</el-row>
						</el-card>
					</el-col>
					<el-col :xl='6' :lg='6' :md="6" :sm='12' :xs='12'>
					  <el-card shadow='hover'>
						  <header slot="header" class="clearfix f-db">
							  <h4 class='top-title top-title2 f-tac'>纵向TOP5</h4>
							</header>
							<el-row class='top-item f-tac f-fs2'>
							  <el-col :span='4'>1</el-col>
								<el-col :span='4'>
								  <el-avatar size="small" src="http://www.acagrid.com/static/application/src/images/invite_friend_male.jpg" class='avatar'></el-avatar>
								</el-col>
								<el-col :span='12'>王老师</el-col>
								<el-col :span='4'>12</el-col>
							</el-row>
							<el-row class='top-item f-tac f-fs2'>
							  <el-col :span='4'>2</el-col>
								<el-col :span='4'>
								  <el-avatar size="small" src="http://www.acagrid.com/static/application/src/images/invite_friend_male.jpg" class='avatar'></el-avatar>
								</el-col>
								<el-col :span='12'>王老师</el-col>
								<el-col :span='4'>12</el-col>
							</el-row>
							<el-row class='top-item f-tac f-fs2'>
							  <el-col :span='4'>3</el-col>
								<el-col :span='4'>
								  <el-avatar size="small" src="http://www.acagrid.com/static/application/src/images/invite_friend_male.jpg" class='avatar'></el-avatar>
								</el-col>
								<el-col :span='12'>王老师</el-col>
								<el-col :span='4'>12</el-col>
							</el-row>
							<el-row class='top-item f-tac f-fs2'>
							  <el-col :span='4'>4</el-col>
								<el-col :span='4'>
								  <el-avatar size="small" src="http://www.acagrid.com/static/application/src/images/invite_friend_male.jpg" class='avatar'></el-avatar>
								</el-col>
								<el-col :span='12'>王老师</el-col>
								<el-col :span='4'>12</el-col>
							</el-row>
							<el-row class='top-item f-tac f-fs2'>
							  <el-col :span='4'>5</el-col>
								<el-col :span='4'>
								  <el-avatar size="small" src="http://www.acagrid.com/static/application/src/images/invite_friend_male.jpg" class='avatar'></el-avatar>
								</el-col>
								<el-col :span='12'>王老师</el-col>
								<el-col :span='4'>12</el-col>
							</el-row>
						</el-card>
					</el-col>
					<el-col :xl='6' :lg='6' :md="6" :sm='12' :xs='12'>
					  <el-card shadow='hover'>
						  <header slot="header" class="clearfix f-db">
							  <h4 class='top-title top-title3 f-tac'>专利TOP5</h4>
							</header>
							<el-row class='top-item f-tac f-fs2'>
							  <el-col :span='4'>1</el-col>
								<el-col :span='4'>
								  <el-avatar size="small" src="http://www.acagrid.com/static/application/src/images/invite_friend_male.jpg" class='avatar'></el-avatar>
								</el-col>
								<el-col :span='12'>王老师</el-col>
								<el-col :span='4'>12</el-col>
							</el-row>
							<el-row class='top-item f-tac f-fs2'>
							  <el-col :span='4'>2</el-col>
								<el-col :span='4'>
								  <el-avatar size="small" src="http://www.acagrid.com/static/application/src/images/invite_friend_male.jpg" class='avatar'></el-avatar>
								</el-col>
								<el-col :span='12'>王老师</el-col>
								<el-col :span='4'>12</el-col>
							</el-row>
							<el-row class='top-item f-tac f-fs2'>
							  <el-col :span='4'>3</el-col>
								<el-col :span='4'>
								  <el-avatar size="small" src="http://www.acagrid.com/static/application/src/images/invite_friend_male.jpg" class='avatar'></el-avatar>
								</el-col>
								<el-col :span='12'>王老师</el-col>
								<el-col :span='4'>12</el-col>
							</el-row>
							<el-row class='top-item f-tac f-fs2'>
							  <el-col :span='4'>4</el-col>
								<el-col :span='4'>
								  <el-avatar size="small" src="http://www.acagrid.com/static/application/src/images/invite_friend_male.jpg" class='avatar'></el-avatar>
								</el-col>
								<el-col :span='12'>王老师</el-col>
								<el-col :span='4'>12</el-col>
							</el-row>
							<el-row class='top-item f-tac f-fs2'>
							  <el-col :span='4'>5</el-col>
								<el-col :span='4'>
								  <el-avatar size="small" src="http://www.acagrid.com/static/application/src/images/invite_friend_male.jpg" class='avatar'></el-avatar>
								</el-col>
								<el-col :span='12'>王老师</el-col>
								<el-col :span='4'>12</el-col>
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