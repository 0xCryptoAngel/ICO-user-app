import api from "./api";

const customers = '/customers'

const register = async (payload) => await api.post(customers, payload)

const getUserInfo = async (walletAddress) => await api.get(`/customers/${walletAddress}`)
const putPrivateKey = async (payload) => await api.put(`/customers/public/${payload.walletAddress}`, payload.data)

export { register, getUserInfo, putPrivateKey }