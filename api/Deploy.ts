import { DeployJob } from '../interfaces'
import axios from './axios'

const lastDetails = async (id: string, cookie?: string): Promise<{job: DeployJob}> => {
  const res = await axios({
    method: 'GET',
    url: `/apps/${id}/deploys/last`,
    ...cookie ? {
      headers: {
        cookie,
      }
    } : {}
  })
  return res.data
}

const lastJobLogs = async (id: string, cookie?: string): Promise<string> => {
  const res = await axios({
    method: 'GET',
    url: `/apps/${id}/deploys/last/logs`,
    ...cookie ? {
      headers: {
        cookie,
      }
    } : {}
  })
  return res.data
}

const createDeploy = async (id: string): Promise<{job: DeployJob}> => {
  const res = await axios({
    method: 'POST',
    url: `/apps/${id}/deploys`,
  })
  return res.data
}

const initDeploy = async (id: string): Promise<{job: DeployJob}> => {
  const res = await axios({
    method: 'POST',
    url: `/apps/${id}/deploys/init`,
  })
  return res.data
}

const destroyDeploy = async (id: string): Promise<{}> => {
  const res = await axios({
    method: 'POST',
    url: `/apps/${id}/deploys/destroy`,
  })
  return res.data
}

export default {
  lastDetails,
  createDeploy,
  destroyDeploy,
  initDeploy,
  lastJobLogs,
}
