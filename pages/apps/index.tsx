import { App } from '../../interfaces'
import Layout from '../../components/Layout'
import React from "react";
import AppsList from "../../components/AppsList";
import { GetServerSidePropsContext } from "next";
import { toLogin } from "../../utils/responseUtils";
import Apps from "../../api/Apps";
import Link from "next/link";
import Button from "../../components/Button";
import BlockTitle from "../../components/BlockTitle";

type Props = {
  apps: App[]
}

const WithStaticProps = ({ apps }: Props) => (
  <Layout title="My apps">
    <BlockTitle style={{ alignItems: 'center', display: 'flex' }}>
      <span style={{ marginRight: 12 }}>My Apps</span>

      <Link href="/apps/create">
        <Button text="Create App" onClick={() => {}} />
      </Link>
    </BlockTitle>
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
