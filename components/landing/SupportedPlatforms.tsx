import React from 'react'

import styled from "styled-components";

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
    <h3>We support following languages out-of-the-box:</h3>
    {
      libs.map(l => (
        <Item>{`- ${l}`}</Item>
      ))
    }
  </Container>
)

export default SupportedPlatforms
