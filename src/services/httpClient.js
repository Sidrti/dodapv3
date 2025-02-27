import axios from 'axios'
import router from '../router'
// import { useUserStore } from '../stores/userStore'
import { useLoaderStore } from '../store/modules/loader'

let config = {
  baseURL: import.meta.env.VITE_BASE_URL,
}

/** Creating the instance for axios */
const httpClient = axios.create(config)

/** Auth token interceptors */
const authInterceptor = config => {
  // Get store outside of interceptor to access it when needed
  // const userStore = useUserStore()
  // const token = userStore.user?.token
  // const isLoggedIn = token ? true : false
  
  // if (isLoggedIn) {
  //   config.headers.Authorization = 'Bearer ' + token
  // }
  
  return config
}

/** loader interceptors */
const loaderInterceptors = config => {
  const loaderStore = useLoaderStore()
  loaderStore.pending()
  loaderStore.skeltonPending()
  
  return config
}

/** Adding the request interceptors */
httpClient.interceptors.request.use(loaderInterceptors)
httpClient.interceptors.request.use(authInterceptor)

/** Adding the response interceptors */
httpClient.interceptors.response.use(
  response => {
    const loaderStore = useLoaderStore()
    loaderStore.done()
    loaderStore.skeltonDone()
    
    return response
  },
  error => {
    const loaderStore = useLoaderStore()
    const userStore = useUserStore()
    
    loaderStore.done()
    loaderStore.skeltonDone()
    
    if (error.response?.status === 401) { 
      userStore.setUser({})
      router.push('/login')
    }
    
    return Promise.reject(error)
  },
)

export { httpClient }