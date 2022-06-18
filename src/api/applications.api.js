import api from "./api";

const stakingApplications = '/staking-applications'
const stakingOptions = '/staking-options'
const postStake = async (payload) => await api.post(stakingApplications, payload)
const getStake = async () => await api.get(stakingOptions)
const getEarning = async (walletAddress) => await api.get(`/staking-applications/${walletAddress}`)

export { postStake, getStake, getEarning }