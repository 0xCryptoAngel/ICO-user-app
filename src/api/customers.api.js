import api from "./api";

const customers = '/customers'

const register = async (payload) => await api.post(customers, payload)

export { register }