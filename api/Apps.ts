import { App, AppForm } from '../interfaces'
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

const create = async (data: AppForm): Promise<{app: App}> => {
  const res = await axios({
    method: 'POST',
    url: `/apps`,
    data
  })
  return res.data
}

const update = async (id: string, data: AppForm): Promise<{app: App}> => {
  const res = await axios({
    method: 'PUT',
    url: `/apps/${id}`,
    data
  })
  return res.data
}

const get = async (id: string, cookie?: string): Promise<{app: App}> => {
  const res = await axios({
    method: 'GET',
    url: `/apps/${id}`,
    ...cookie ? {
      headers: {
        cookie,
      }
    } : {},
  })
  return res.data
}

export default {
  getApps,
  create,
  get,
  update,
}
