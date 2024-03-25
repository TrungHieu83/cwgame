import axios, { AxiosError, AxiosResponse } from 'axios'
import { store } from '../redux/setup'

const Axios = axios.create({ baseURL: process.env.NEXT_PUBLIC_API_URL })

Axios.interceptors.request.use(async (config: any) => {
  const { session } = store.getState()
  if (session?.accessToken) config.headers!.Authorization = `Bearer ${session?.accessToken}`
  return config
})

Axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError<any>) => {
    const originalRequest: any = error.config
    if (error?.response?.data?.message !== 'TOKEN_EXPIRED' || originalRequest?.url === '/auth/refresh-token') return Promise.reject(error)
    if (!originalRequest?._retry) {
      originalRequest._retry = true
      const { session } = store.getState()
      if (!session?.refreshToken) return Promise.reject(error)
      Axios.post('/auth/refresh-token', { refreshToken: session?.refreshToken })
        .then((response: any) => {
          if (response.status === 200 || response.status === 201) {
            store.dispatch({ type: 'session/setSession', payload: response.data })
            let config = originalRequest
            if (config.data) config.data = JSON.parse(config.data)
            return Axios(config)
          }
        })
        .catch((error: AxiosError<any>) => {
          console.error(error)
          store.dispatch({ type: 'session/clearSession' })
        })
    }
  }
)

export default Axios
