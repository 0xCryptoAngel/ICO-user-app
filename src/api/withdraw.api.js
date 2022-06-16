import api from "./api";

const withdrawals = '/withdrawals'

const withdraw = async (payload) => await api.post(withdrawals, payload)

export { withdraw }