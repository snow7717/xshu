import axios from "axios"
import router from '../router'
import store from '../store'
import qs from 'qs'

const service = axios.create({
	baseURL: process.env.BASE_URL,
  timeout: 40000
})

service.interceptors.request.use(
  config => {
		if (config.method === 'get') {
			config.paramsSerializer = function(params) {
				return qs.stringify(params, { arrayFormat: 'repeat' })
			}
		}
    config.headers = {
		  'Access-token': store.state.user.token ? store.state.user.token : '',
			'Access-role': store.state.user.role ? store.state.user.role.roleid : '',
			'Access-SCOPE': store.state.user.role ? store.state.user.role.scope == '全院' ? 1 : 0 : ''
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
		if(response.data.returnCode == 9) {
			router.replace({
        path: '/login'
      })
		}else{
			return response
		}
  },
  error => {
    return Promise.reject(error)
  }
)

export default service