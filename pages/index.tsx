import Layout from '../components/Layout'
import React from "react";
import SupportedPlatforms from "../components/landing/SupportedPlatforms";
import GetStarted from "../components/landing/GetStarted";
import Questions from "../components/landing/Questions";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Discord Bot hosting made easy - FREE ALPHA</h1>
    <h2>With free coding assistance</h2>

    <SupportedPlatforms />
    <GetStarted />
    <Questions />
  </Layout>
)

export default IndexPage
