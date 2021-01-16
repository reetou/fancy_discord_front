import * as React from 'react'
import ListItem from './ListItem'
import { App } from '../interfaces'

type Props = {
  items: App[]
}

const AppsList = ({ items }: Props) => (
  <ul>
    {items.map((item) => (
      <li key={item.id}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

export default AppsList
