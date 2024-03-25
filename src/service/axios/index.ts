import axios from 'axios'
import { vcs_service } from '../../constants/backend';
// import LocalStorageService from './services/storage/localstorageservice'
// import router from './router/router'

// LocalStorageService
// const localStorageService = LocalStorageService.getService()

console.log({ base: import.meta.env.BASE_URL })

const axiosInstance = axios.create({
    baseURL: vcs_service.DEFAULT_BASE_URL, // our API base URL
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
    config => {
        // const token = localStorageService.getAccessToken()
        const token = ''

        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token
        }
        // config.headers['Content-Type'] = 'application/json';
        return config
    },
    error => {
        Promise.reject(error)
    }
)


axiosInstance.interceptors.response.use(
    response => {
        return response
    },
    function (error) {
        const originalRequest = error.config

        if (
            error.response.status === 401 &&
            originalRequest.url === 'http://127.0.0.1:3000/v1/auth/token'
        ) {
            // router.push('/login')
            return Promise.reject(error)
        }

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true
            // const refreshToken = localStorageService.getRefreshToken()
            const refreshToken = ''

            return axios
                .post('/auth/token', {
                    refresh_token: refreshToken
                })
                .then(res => {
                    if (res.status === 201) {
                        //   localStorageService.setToken(res.data)
                        // const accesstoken = localStorageService.getAccessToken()
                        const accesstoken = ''

                        axios.defaults.headers.common['Authorization'] =
                            'Bearer ' + accesstoken
                        return axios(originalRequest)
                    }
                })
        }
        return Promise.reject(error)
    }
)


export { axiosInstance }