import React from 'react'

import { App } from '../interfaces'
import Button from "./Button";
import styled from "styled-components";

type Props = {
  data: App
  onDeploy: () => void
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const FAKE_TOKEN = '********************************'

const AppDetails = ({ data, onDeploy }: Props) => {
  return (
    <Container>
      <div>{data.project_name}</div>
      {
        data.has_bot_token
          ? <div>{`Bot token: ${FAKE_TOKEN}`}</div>
          : (
            <div>No token. Bot would not work</div>
          )
      }
      <div>
        {`Repository URL: ${data.repo_url}`}
      </div>
      <div>CPU Limit: 200</div>
      <div>RAM Limit: 200</div>
      <Button
        style={{
          width: 220
        }}
        text="Deploy"
        onClick={onDeploy}
      />
    </Container>
  )
}

export default AppDetails
