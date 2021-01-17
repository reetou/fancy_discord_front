// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

export type User = {
  id: number
  name: string
}

export type AppType = 'js'
export type DeployJobStatus = 'success' | 'failed' | 'canceled' | 'running' | 'pending'

export type App = {
  id: string
  project_name: string
  type: AppType
  repo_url: string | null
  default_branch: string
  has_bot_token: boolean
  deployed: boolean
}

export type AppForm = {
  project_name: string
  type: AppType
  repo_url: string | null
  default_branch: string
  bot_token: string
}

export type DeployJob = {
  id: string
  status: DeployJobStatus
  created_at: string
  finished_at: string
}
