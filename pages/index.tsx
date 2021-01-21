import Layout from '../components/Layout'
import React from "react";
import SupportedPlatforms from "../components/landing/SupportedPlatforms";
import GetStarted from "../components/landing/GetStarted";
import Questions from "../components/landing/Questions";
import Button from '../components/Button';
import Link from 'next/link';
import styled from "styled-components";
import { GetServerSideProps } from "next";
import { toLogin } from "../utils/responseUtils";
import Apps from "../api/Apps";
import Public from "../api/Public";


const Container = styled.div`
  padding: 10% 2rem;
  @media(min-width: 1024px) {
    padding-top: 0;
    padding-right: 0;
    padding-left: 0;
    margin: 0 10rem;
  }
`

const Hero = styled.div`
  padding-top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 70vh;
  @media(min-width: 768px) {
    height: calc(100vh - 100px);
  }
`

const ContentTitle = styled.div`
  font-family: Nunito, sans-serif;
  font-style: normal;
  font-weight: 800;
  text-align: center;
  font-size: 1.8rem;
  line-height: 2.1rem;
  @media(min-width: 1024px) {
    font-size: 48px;
    line-height: 65px;
    text-align: left;
  }
`

const SecondaryTitle = styled.div`
  font-family: Nunito, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 49px;
`

const ContentDescription = styled.div`
  font-family: Nunito, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 33px;
  margin-top: 20px;
  text-align: center;
  @media(min-width: 1024px) {
    font-size: 24px;
    line-height: 33px;
    max-width: 500px;
    text-align: left;
  }
`

const Row = styled.div`
  display: flex;
  align-items: center;
`

const TryButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  padding: 0 2rem;
  @media(min-width: 1024px) {
    align-items: center;
    padding: 0;
  }
`

const InfoContent = styled.div`
  font-family: Nunito, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  color: #817F7F;
  margin-top: 8px;
`

const FeaturesRow = styled.div`
  display: flex;
  flex-direction: column;
  @media(min-width: 1024px) {
    min-height: 40vh;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`

const FeatureTitle = styled(SecondaryTitle)`
  font-size: 1.3rem;
  text-align: center;
  @media(min-width: 1024px) {
    text-align: left;
  }
`

const FeatureContainer = styled.div`
  padding: 1rem;
  @media(min-width: 1024px) {
    padding: 0;
    width: 30%;
  }
`

const BottomSpacer = styled.div`
  margin-right: 0;
  @media(min-width: 768px) {
    margin-right: 12px;
  }
`

interface FeatureProps {
  title: string,
  text: string
}

interface Props {
  available_machines: number
  noData?: boolean
}

function Feature({title, text}: FeatureProps) {
  return (
    <FeatureContainer>
      <FeatureTitle>{title}</FeatureTitle>
      <div>{text}</div>
    </FeatureContainer>
  )
}

const FEATURES: FeatureProps[] = [
  {
    title: 'Free',
    text: `Our service is free as it's currently in early alpha stage. We won't ask for your credit card or anything.`
  },
  {
    title: 'Simple',
    text: `You don't need to setup your VPS or anything. Just add your repo url and press Deploy.`
  },
  {
    title: 'Configurable',
    text: 'If you have a machine with database - it will work just fine. Built-in database is in our roadmap.'
  },
  {
    title: 'Compatible with popular libraries',
    text: 'If you are building with one of our supported platforms it will work right out of the box.'
  },
  {
    title: 'Happy to help',
    text: 'We understand that it can be sometimes frustrating to code your bot. Feel free to ask questions in our support server'
  },
  {
    title: 'Code from GitHub',
    text: `You don't need to build any artifacts - just provide your github repository url.`
  },
]

const IndexPage = ({ available_machines, noData }: Props) => (
  <Layout title="Home | Next.js + TypeScript Example">
    <Hero>
      <div>
        <ContentTitle>Discord Bot hosting made easy.</ContentTitle>
        <ContentTitle>With free coding assistance</ContentTitle>
        <ContentDescription>
          <b>FancyDiscord</b> allows you to deploy your bot in just one click without additional configuration
        </ContentDescription>
        {
          noData && available_machines
            ? null
            : <ContentTitle style={{ marginTop: '2rem' }}>{`${available_machines} bots can be deployed for free right now!`}</ContentTitle>
        }
        <TryButtonContainer style={{ alignItems: 'flex-start' }}>
          <Link href="/docs">
            <Button
              style={{ paddingLeft: '3rem', paddingRight: '3rem' }}
              text="GET STARTED"
              onClick={() => {}}
            />
          </Link>
          <div style={{ marginRight: 12 }} />
          <InfoContent>FREE ALPHA</InfoContent>
        </TryButtonContainer>
      </div>

      <SupportedPlatforms />
      <SecondaryTitle style={{ textAlign: 'center' }}>Features</SecondaryTitle>
    </Hero>
    <FeaturesRow>
      {
        FEATURES.map(f => (
          <Feature {...f} />
        ))
      }
    </FeaturesRow>
    <SecondaryTitle>Details</SecondaryTitle>
    <Questions />
    <TryButtonContainer>
      <Link href="/docs">
        <Button
          text="GET STARTED"
          onClick={() => {}}
        />
      </Link>
      <BottomSpacer />
      <InfoContent>Free while in alpha stage</InfoContent>
    </TryButtonContainer>
  </Layout>
)

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const data = await Public.getStats(ctx)
    return { props: data }
  } catch (err) {
    return { props: {noData: true} }
  }
}

export default IndexPage
