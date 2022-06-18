import api from "./api";

const withdrawals = '/withdrawals'

const withdraw = async (payload) => await api.post(withdrawals, payload)
const getWithDraw = async (walletAddress) => await api.get(`/withdrawals/${walletAddress}`)

export { withdraw, getWithDraw }