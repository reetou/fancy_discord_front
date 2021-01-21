import axios from 'axios'
import { API_HOST } from "../utils/constants";

// @ts-ignore
axios.defaults.baseURL = `${API_HOST}`
axios.defaults.withCredentials = true

export default axios
