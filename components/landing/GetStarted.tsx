import React from 'react'

import styled from "styled-components";
import BlockTitle from "../BlockTitle";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`

const GetStarted = () => (
  <Container>
    <BlockTitle>GET STARTED IN THREE STEPS</BlockTitle>
    <div>Sign In with Discord</div>
    <div>Create app with your bot token and GitHub repository url (we only support public repositories at the moment)</div>
    <div>Press deploy!</div>
  </Container>
)

export default GetStarted
