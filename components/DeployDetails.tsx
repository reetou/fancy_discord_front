import React, { useState } from 'react'

import { App, DeployJob } from '../interfaces'
import styled from "styled-components";
import useSWR from "swr";
import { fetcher } from "../api/fetcher";
import LogsContainer from "./LogsContainer";

type Props = {
  app: App
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
  background-color: aquamarine;
  border: 1px solid ${({theme}) => theme.colors.primary};
`

const getJobStatusMessage = (job: DeployJob) => {
  switch (job.status) {
    case "canceled":
      return `Last deploy canceled.`
    case "failed":
      return `Last deploy failed. Fix issues and deploy again.`
    case "pending":
      return `Deploy is in queue, waiting for worker to pick up...`
    case "running":
      return `Deploy in progress...`
    case "success":
      return `Last deploy finished successfully`
    default: return ''
  }
}

const DeployDetails = ({ app }: Props) => {
  const [job, setJob] = useState<DeployJob>()
  const { data, error } = useSWR(`/apps/${app.id}/deploys/last`, fetcher, {
    refreshInterval: 20000,
    onSuccess: (data) => {
      console.log(`Data success`, data)
      setJob(data.data.job)
    }
  })
  console.log(`Error`, error)
  if (!data || !job) {
    return (
      <Container>
        <BannerContainer>
          Loading...
        </BannerContainer>
      </Container>
    )
  }
  return (
    <Container>
      <BannerContainer>
        <div>{job.status}</div>
        {
          job.finished_at
            ? <div>{`Finished at ${job.finished_at}`}</div>
            : null
        }
        <div>{getJobStatusMessage(job)}</div>
      </BannerContainer>
      <LogsContainer app={app} />
    </Container>
  )
}

export default DeployDetails
