import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

import { App } from '../../interfaces'
import Layout from '../../components/Layout'
import Apps from "../../api/Apps";
import { toLogin } from "../../utils/responseUtils";

type Props = {
  item: App
  errors?: string
}

const AppPage = ({ item, errors }: Props) => {
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
    return { props: { errors: err.message }, notFound: true }
  }
}
