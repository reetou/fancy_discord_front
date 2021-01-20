import React from 'react'
import styled from "styled-components";

const Container = styled.footer`
  position: relative;
  z-index: 2;
  padding: 1rem;
  border-top: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({theme}) => theme.colors.bg};
`

export default function Footer() {
  return (
    <Container>
      <div>Have questions? Feel free to contact via discord: <a href="https://discord.gg/XReqA38eq7" target="_blank">invite link</a></div>
    </Container>
  )
}
