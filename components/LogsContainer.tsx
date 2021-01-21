import React, { useState } from 'react'
import { App } from "../interfaces";
import useSWR from "swr";
import { fetcher } from "../api/fetcher";
import styled from "styled-components";

interface Props {
  app: App
}

const Container = styled.div`
  padding: 0 1rem 1rem 1rem;
  background-color: aquamarine;
  border-radius: 16px;
  margin-bottom: 1rem;
`

export default function LogsContainer({ app }: Props) {
  const [logs, setLogs] = useState<string>('')
  useSWR(`/apps/${app.id}/deploys/last/logs`, fetcher, {
    refreshInterval: 30000,
    revalidateOnFocus: false,
    revalidateOnMount: true,
    revalidateOnReconnect: false,
    onSuccess: (data) => {
      console.log(`Logs success`, data)
      setLogs(data.data)
    }
  })
  return (
    <Container>
      <h3>Logs</h3>
      <code>
        {
          logs.split('\n').map(line => (
            <p>{line}</p>
          ))
        }
      </code>
    </Container>
  )
}
