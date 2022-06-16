import api from "./api";

const customers = '/customers'

const register = async (payload) => await api.post(customers, payload)

const getUserInfo = async (walletAddress) => await api.get(`/customers/${walletAddress}`)

export { register, getUserInfo }