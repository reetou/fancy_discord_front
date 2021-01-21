import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

import { App, AppStatus, DeployJob } from '../../interfaces'
import Layout from '../../components/Layout'
import Apps from "../../api/Apps";
import { toLogin } from "../../utils/responseUtils";
import AppDetails from "../../components/AppDetails";
import React, { useEffect, useState } from "react";
import DeployDetails from "../../components/DeployDetails";
import Deploy from "../../api/Deploy";
import styled from "styled-components";
import useSWR from "swr";
import { fetcher } from "../../api/fetcher";

type Props = {
  item: App
  errors?: string
}


const ErrorMessageContainer = styled.div`
  margin: 1rem;
  background-color: aquamarine;
  padding: 1rem;
  font-size: 1.2rem;
`

const getAppStatusMessage = (status: AppStatus) => {
  switch (status) {
    case "deploy_in_progress":
      return 'Deploy in progress...'
    case "destroy_in_progress":
      return 'App destroy in progress. Deploy is not possible. You can deploy again when destroy will complete'
    case "init_failed":
      return 'App initialization failed. Try again.'
    case "init_in_progress":
      return 'App initialization is in progress...'
    case "init_required":
      return 'App initialization required. Press Initialize app'
    case "init_success":
      return 'App was initialized successfully. You can deploy.'
    case "free":
    default:
      return null
  }
}

const AppPage = ({ item, errors }: Props) => {
  const [app, setApp] = useState<App>(item)
  const { data, error } = useSWR(`/apps/${app.id}`, fetcher, {
    initialData: {
      data: {
        app,
      }
    },
    refreshInterval: 20000,
  })
  useEffect(() => {
    if (!data) {
      return
    }
    setApp(data.data.app)
  }, [data])
  const [errorMessage, setErrorMessage] = useState<string>('')
  const onDeploy = async () => {
    try {
      await Deploy.createDeploy(app.id)
      setApp({
        ...app,
        status: 'deploy_in_progress',
      })
      setErrorMessage('')
    } catch (e) {
      console.error(`Cannot deploy`, e)
    }
  }
  const onDestroyDeploy = async () => {
    try {
      await Deploy.destroyDeploy(app.id)
      setApp({
        ...app,
        status: 'destroy_in_progress',
      })
    } catch (e) {
      console.error(`Cannot destroy deploy`, e)
    }
  }
  const onInitDeploy = async () => {
    try {
      const res = await Deploy.initDeploy(app.id)
      console.log(`Data`, res)
      setApp({
        ...app,
        status: 'init_in_progress',
      })
    } catch (e) {
      console.error(`Cannot init`, e)
    }
  }
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    )
  }

  const showDeployDetails = app.status && ['free', 'deploy_in_progress'].includes(app.status)

  return (
    <Layout title={app.project_name}>
      <AppDetails
        data={app}
        onDeploy={onDeploy}
        onDestroyDeploy={onDestroyDeploy}
        onInitDeploy={onInitDeploy}
      />
      {showDeployDetails ? <DeployDetails app={app} /> : null}
      {app.status && app.status !== 'free' ? <ErrorMessageContainer>{getAppStatusMessage(app.status)}</ErrorMessageContainer> : null}
      {errorMessage && app.deployed ? <ErrorMessageContainer>{errorMessage}</ErrorMessageContainer> : null}
    </Layout>
  )
}

export default AppPage

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export const getServerSideProps: GetServerSideProps = async ({ req, params }) => {
  try {
    const id = params?.id
    // By returning { props: item }, the StaticPropsDetail component
    // will receive `item` as a prop at build time
    if (!req.headers.cookie) {
      return toLogin()
    }
    if (!id) {
      return { notFound: true }
    }
    const data = await Apps.get(id as string, req.headers.cookie)
    return { props: { item: data.app } }
  } catch (err) {
    if (err.response && err.response.status === 401) {
      return toLogin()
    }
    return { props: { errors: err.message }, notFound: true }
  }
}
