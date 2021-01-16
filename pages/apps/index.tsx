import { App, User } from '../../interfaces'
import Layout from '../../components/Layout'
import React from "react";
import AppsList from "../../components/AppsList";
import { GetServerSidePropsContext } from "next";
import { toLogin } from "../../utils/responseUtils";
import Apps from "../../api/Apps";

type Props = {
  apps: App[]
}

const WithStaticProps = ({ apps }: Props) => (
  <Layout title="My apps">
    <h1>My Apps</h1>
    <AppsList items={apps} />
  </Layout>
)

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  try {
    if (!ctx.req.headers.cookie) {
      return toLogin()
    }
    const data = await Apps.getApps(ctx)
    return { props: { apps: data.apps } }
  } catch (e) {
    return toLogin()
  }
}

export default WithStaticProps
