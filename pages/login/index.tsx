import { GetServerSidePropsContext, GetStaticProps } from 'next'
import Layout from '../../components/Layout'
import Auth from "../../api/Auth";
import React from "react";
import Button from "../../components/Button";
import { SIGN_IN_URL } from "../../utils/constants";

type Props = {}

const WithStaticProps = (props: Props) => (
  <Layout title="Sign In">
    <h1>You can sign in with Discord</h1>
    <Button text="Sign In" onClick={() => location.href = SIGN_IN_URL} />
  </Layout>
)

export const getServerSideProps: GetServerSidePropsContext = async (ctx: GetServerSidePropsContext) => {
  try {
    await Auth.check(ctx)
    return {
      redirect: {
        permanent: false,
        destination: '/apps'
      }
    }
  } catch (e) {
    return {
      props: {}
    }
  }
}

export default WithStaticProps
