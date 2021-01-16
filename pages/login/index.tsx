import { GetStaticProps } from 'next'
import Layout from '../../components/Layout'
import Auth from "../../api/Auth";
import React from "react";

type Props = {
  signInUrl: string;
}

const WithStaticProps = (props: Props) => (
  <Layout title="Sign In">
    <h1>You can sign in with Discord</h1>
    <button onClick={() => location.href = props.signInUrl}>Sign In</button>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  try {
    await Auth.check()
    return {
      redirect: {
        permanent: false,
        destination: '/apps'
      }
    }
  } catch (e) {
    return {
      props: {
        signInUrl: process.env.NODE_ENV === 'production' ? 'https://fancydiscord.com/auth' : 'http://localhost:4000/auth/discord/new'
      }
    }
  }
}

export default WithStaticProps
