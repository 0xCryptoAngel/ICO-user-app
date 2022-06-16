import axios from "axios";
  const api = axios.create({
  baseURL: "https://api-staking-backend.herokuapp.com",
  });
export default api;