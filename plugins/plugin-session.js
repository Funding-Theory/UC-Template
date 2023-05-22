class SessionManager {
    setUser(user) {
        localStorage.setItem('user', JSON.stringify(user))
    }

    getUser() {
        return JSON.parse(localStorage.getItem('user'))
    }

    setToken(token) {
        localStorage.setItem('token', token)
    }

    getToken() {
        return localStorage.getItem('token')
    }

    isUserLoggedIn() {
        return localStorage.getItem('token') !== null
    }

    logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }
}

export default function ({ app }, inject) {
    const sessionManager = new SessionManager()
    inject('session', sessionManager)
}
