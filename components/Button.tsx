import React from 'react'
import styled from 'styled-components'

const Container = styled.button`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
`

interface Props {
  text: string
  onClick: () => void
}

export default function Button(props: Props) {
  return (
    <Container onClick={props.onClick}>
      {props.text}
    </Container>
  )
}
