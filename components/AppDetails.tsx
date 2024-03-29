import React from 'react'

import { App } from '../interfaces'
import Button from "./Button";
import styled from "styled-components";
import Link from 'next/link';

type Props = {
  data: App
  onDeploy: () => void
  onDestroyDeploy: () => void
  onInitDeploy: () => void
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

const Field = styled.div`
  padding: 1rem 0;
  font-weight: bold;
`

const FAKE_TOKEN = '********************************'

const canInitializeApp = (app: App) => {
  if (app.deployed) {
    return false
  }
  switch (app.status) {
    case "init_success":
    case "init_in_progress":
    case "free":
    case "destroy_in_progress":
    case "deploy_in_progress":
      return false
    case "init_required":
    case "init_failed":
    default:
      return true
  }
}

const canDeployApp = (app: App) => {
  switch (app.status) {
    case "init_success":
    case "free":
      return true
    case "init_in_progress":
    case "destroy_in_progress":
    case "deploy_in_progress":
    case "init_required":
    case "init_failed":
    default:
      return false
  }
}

const AppDetails = ({ data, onDeploy, onDestroyDeploy, onInitDeploy }: Props) => {
  const canDeploy = data.status
  return (
    <Container>
      <Link href={`/apps/${data.id}/edit`}>
        <Button
          style={{width: 180}}
          text="Edit settings"
          onClick={() => {}}
        />
      </Link>
      <h1>{data.project_name}</h1>
      {
        data.has_bot_token
          ? <Field>{`Bot token: ${FAKE_TOKEN}`}</Field>
          : (
            <Field>No token. Bot would not work</Field>
          )
      }
      <Field>
        <span>Repository URL: </span>
        <Link href={data.repo_url!}>{data.repo_url}</Link>
      </Field>
      {
        data.default_branch
          ? (
            <Field>
              <span>Branch: </span>
              <Link href={`${data.repo_url!}/tree/${data.default_branch}`}>{data.default_branch}</Link>
            </Field>
          )
          : null
      }
      {
        data.type
          ? (
            <Field>
              <span>App Type </span>
              <b>{data.type.toUpperCase()}</b>
            </Field>
          )
          : null
      }
      {
        canDeployApp(data)
          ? (
            <Button
              style={{
                width: 220
              }}
              text="Deploy"
              onClick={onDeploy}
            />
          )
          : null
      }
      {
        canInitializeApp(data)
          ? (
            <Button
              style={{
                width: 220
              }}
              text="Initialize app"
              onClick={onInitDeploy}
            />
          )
          : null
      }
    </Container>
  )
}

export default AppDetails
