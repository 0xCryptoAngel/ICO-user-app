import Cookies from 'js-cookie'

const TokenKey = 'vitetws-token'

export function getToken() {
    return Cookies.get(TokenKey)
}

export function setToken(token) {
    return Cookies.set(TokenKey, token)
}

export function removeToken() {
    Cookies.remove(TokenKey)
    removeUser()
    return history.go(0)
}


const user = 'vitetws-user'

export function getUser() {
    return JSON.parse(localStorage.getItem(user));
}

export function setUser(value) {
    localStorage.setItem(user, JSON.stringify(value));
}

export function removeUser() {
    localStorage.removeItem(user)
}