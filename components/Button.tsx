import React from 'react'
import styled from 'styled-components'

const Container = styled.button`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  :hover {
    cursor: pointer;
  }
`

interface Props {
  text: string
  onClick: () => void
  style?: any
}

export default function Button(props: Props) {
  return (
    <Container onClick={props.onClick} style={props.style}>
      {props.text}
    </Container>
  )
}
