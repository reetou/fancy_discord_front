import React from 'react'

import styled from "styled-components";
import BlockTitle from "../BlockTitle";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const libs = ['JavaScript (Discord.js, Eris.js)']

const Item = styled.div`
  padding: 0.5rem;
  font-weight: bold;
`

const SupportedPlatforms = () => (
  <Container>
    <BlockTitle>SUPPORTED PLATFORMS:</BlockTitle>
    {
      libs.map(l => (
        <Item>{`- ${l}`}</Item>
      ))
    }
  </Container>
)

export default SupportedPlatforms
