import axios from './axios'
import { GetServerSidePropsContext } from "next";

const getStats = async ({req: {headers: {cookie}}}: GetServerSidePropsContext): Promise<{available_machines: number}> => {
  const res = await axios({
    method: 'GET',
    url: `/public/stats`,
    headers: {
      cookie,
    }
  })
  return res.data
}

export default {
  getStats,
}
