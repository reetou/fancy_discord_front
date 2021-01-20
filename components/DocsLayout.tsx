import React, { ReactNode, useEffect, useState } from 'react'
import Head from 'next/head'
import Navbar from "./Navbar";
import styled from "styled-components";
import Footer from "./Footer";
import useSWR from 'swr';
import { fetcher } from "../api/fetcher";
import DocsSidebar from "./DocsSidebar";

type Props = {
  children?: ReactNode
  title?: string
}

const BodyContainer = styled.div`
  min-height: calc(100vh - 60px);
  padding: 0 12px;
  @media(min-width: 768px) {
    padding: 0 25%;
  }
`

const DocsLayout = ({ children, title = 'FancyDiscord Documentation' }: Props) => {
  const [authenticated, setAuthenticated] = useState<boolean>(false)
  const { data, error } = useSWR('/auth/check', fetcher)
  useEffect(() => {
    if (error) {
      setAuthenticated(false)
    }
    if (data) {
      setAuthenticated(true)
    }
  }, [data, error])
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Navbar authenticated={authenticated} />
      </header>
      <BodyContainer>
        <DocsSidebar />
        {children}
      </BodyContainer>
      <Footer />
    </div>
  )
}

export default DocsLayout
