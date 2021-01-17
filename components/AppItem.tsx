import React from 'react'
import Link from 'next/link'

import { App } from '../interfaces'
import Button from "./Button";
import styled from "styled-components";
import Input from "./Input";

type Props = {
  data: App
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid grey;
`

const AppItem = ({ data }: Props) => (
  <Container>
    <div>
      <div>{data.project_name}</div>
      {
        data.has_bot_token
          ? null
          : (
            <div>No token. Bot would not work</div>
          )
      }
      <div>{data.repo_url}</div>
    </div>
    <div>
      <Link href="/apps/[id]" as={`/apps/${data.id}`}>
        <Button text="Open" onClick={() => {}} />
      </Link>
    </div>
  </Container>
)

export default AppItem
