import React from 'react'
import styled from "styled-components";

const Container = styled.footer`
  padding: 1rem;
  border-top: 2px solid ${({ theme }) => theme.colors.primary}
`

export default function Footer() {
  return (
    <Container>
      <div>Have questions? Feel free to contact via discord: zae#6520</div>
    </Container>
  )
}
