import React from 'react'

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`

const Title = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`

const GetStarted = () => (
  <Container>
    <Title>Get started in 3 steps</Title>
    <div>Sign In with Discord</div>
    <div>Create app with your bot token and GitHub repository url (we only support public repositories at the moment)</div>
    <div>Press deploy!</div>
  </Container>
)

export default GetStarted
