import { App } from '../interfaces'
import axios from './axios'
import { GetServerSidePropsContext } from "next";

const getApps = async ({req: {headers: {cookie}}}: GetServerSidePropsContext): Promise<{apps: App[]}> => {
  const res = await axios({
    method: 'GET',
    url: `/apps`,
    headers: {
      cookie,
    }
  })
  return res.data
}

export default {
  getApps,
}
