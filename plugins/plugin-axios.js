import axios from 'axios'

export default function ({ app }, inject) {
    const newAxios = axios.create()

    newAxios.interceptors.request.use(
        (config) => {
            const sessionManager = app.$session
            if (sessionManager && sessionManager.isUserLoggedIn()) {
                config.headers['authorization'] = 'Bearer ' + sessionManager.getToken()
            }
            return config
        },
        (error) => {
            return Promise.reject(error)
        },
    )

    newAxios.interceptors.response.use(
        (response) => {
            return response.data
        },
        (error) => {
            return Promise.reject(error)
        },
    )

    inject('http', newAxios)
}
