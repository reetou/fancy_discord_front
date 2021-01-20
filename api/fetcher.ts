import axios from './axios'

export async function fetcher(url: string): Promise<any> {
  return axios.get(url)
}
