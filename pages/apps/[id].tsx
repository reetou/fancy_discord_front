import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

import { App, DeployJob } from '../../interfaces'
import Layout from '../../components/Layout'
import Apps from "../../api/Apps";
import { toLogin } from "../../utils/responseUtils";
import AppDetails from "../../components/AppDetails";
import { useEffect, useState } from "react";
import DeployDetails from "../../components/DeployDetails";
import Deploy from "../../api/Deploy";
import styled from "styled-components";
import Button from "../../components/Button";

type Props = {
  item: App
  errors?: string
}


const ErrorMessageContainer = styled.div`
  margin: 2rem;
  background-color: crimson;
  padding: 1rem;
  font-size: 1.2rem;
`

const AppPage = ({ item, errors }: Props) => {
  const [deployDetails, setDeployDetails] = useState<DeployJob>()
  const [errorMessage, setErrorMessage] = useState<string>('')
  const getDeployDetails = async () => {
    try {
      setErrorMessage('')
      console.log(`Getting deploy details`)
      const data = await Deploy.lastDetails(item.id)
      setDeployDetails(data.job)
    } catch (e) {
      if (e.response && e.response.data && e.response.data.errors) {
        setErrorMessage(e.response.data.errors.data)
      } else {
        setErrorMessage('Cannot get last deploy')
      }
      console.error(`Cannot get deploy`, e)
    }
  }
  const onDeploy = async () => {
    try {
      const data = await Deploy.createDeploy(item.id)
      setErrorMessage('')
      setDeployDetails(data.job)
    } catch (e) {
      console.error(`Cannot deploy`, e)
    }
  }
  const onDestroyDeploy = async () => {
    try {
      const data = await Deploy.destroyDeploy(item.id)
    } catch (e) {
      console.error(`Cannot destroy deploy`, e)
    }
  }
  useEffect(() => {
    getDeployDetails()
  }, [])
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    )
  }

  return (
    <Layout title={item.project_name}>
      <h1>{item.project_name}</h1>
      <Button text="Destroy deploy" onClick={onDestroyDeploy} />
      <AppDetails data={item} onDeploy={onDeploy} />
      {deployDetails ? <DeployDetails data={deployDetails} /> : null}
      {errorMessage ? <ErrorMessageContainer>{errorMessage}</ErrorMessageContainer> : null}
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
