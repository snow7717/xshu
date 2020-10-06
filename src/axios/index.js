import axios from "axios"
import router from '../router'
import store from '../store'

const service = axios.create({
	baseURL: process.env.BASE_URL,
  timeout: 10000
})

service.interceptors.request.use(
  config => {
    config.headers = {
		  'Access-token': store.state.user.token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
		if(response.data.status == 9) {
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