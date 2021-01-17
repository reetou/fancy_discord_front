import React, { useEffect } from 'react'

import { DeployJob } from '../interfaces'
import styled from "styled-components";

type Props = {
  data: DeployJob
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const DeployDetails = ({ data }: Props) => {
  return (
    <Container>
      <div>{data.status}</div>
      {
        data.finished_at
          ? <div>{`Finished at ${data.finished_at}`}</div>
          : null
      }
      {
        data.status === 'success'
          ? <div>Deploy successful</div>
          : null
      }
      {
        data.status === 'failed' || data.status === 'canceled'
          ? <div>{`Deploy was not successful. Feel free to deploy again`}</div>
          : null
      }
      {
        data.status === 'pending' || data.status === 'running'
          ? <div>{`Deploy is in progress...`}</div>
          : null
      }
      <div>CPU Limit: 200</div>
      <div>RAM Limit: 200</div>
    </Container>
  )
}

export default DeployDetails
