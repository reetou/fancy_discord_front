import React from 'react'
import Link from 'next/link'

import { App } from '../interfaces'

type Props = {
  data: App
}

const App = ({ data }: Props) => (
  <div>
    <Link href="/apps/[id]" as={`/apps/${data.id}`}>
      <a>
        {data.id}: {data.project_name}
      </a>
    </Link>
  </div>
)

export default App
