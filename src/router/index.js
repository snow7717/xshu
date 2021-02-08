import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import Login from '@/pages/user/login/index.vue'
import User from '@/pages/user/index/index.vue'
import Password from '@/pages/user/password/index.vue'
import Index from '@/pages/index/index.vue'
import Content from '@/pages/content/index.vue'

import Menu from '@/pages/setting/menu/index.vue'

Vue.use(Router)

const router = new Router({
  routes: [
		{
			path: '/login',
      name: 'login',
      component: Login,
			meta: {
				label: '登录',
				global: true
			}
		},
		{
			path: '/user',
			name: 'user',
			component: User,
			meta: {
				label: '个人信息',
				global: true
			}
		},
		{
			path: '/password',
			name: 'password',
			component: Password,
			meta: {
				label: '修改密码',
				global: true
			}
		}
  ]
})

let menus = store.state.menu.datas
for(let item of menus) {
	item.component = item.name == 'index' ? Index : Content
	if(item.children) {
		for(let child of item.children) {
			child.component = child.name == 'index' ? Index : Content
		}
	}
}
router.addRoutes(menus)
router.options.routes = router.options.routes.concat(menus)

export default router
