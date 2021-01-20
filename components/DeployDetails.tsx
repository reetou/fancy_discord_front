import React from 'react'

import { DeployJob } from '../interfaces'
import styled from "styled-components";

type Props = {
  data: DeployJob
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 12px;
  background-color: green;
  border: 1px solid ${({theme}) => theme.colors.primary};
`

const DeployDetails = ({ data }: Props) => {
  return (
    <Container>
      <BannerContainer>
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
          data.status === 'pending'
            ? <div>{`Deploy is in queue...`}</div>
            : null
        }
        {
          data.status === 'running'
            ? <div>{`Deploy is in progress...`}</div>
            : null
        }
        <div>CPU Limit: 200</div>
        <div>RAM Limit: 200</div>
      </BannerContainer>
    </Container>
  )
}

export default DeployDetails
