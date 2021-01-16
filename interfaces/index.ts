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

export type App = {
  id: string
  project_name: string
  type: AppType
  repo_url: string | null
  default_branch: string
  has_bot_token: boolean
}
