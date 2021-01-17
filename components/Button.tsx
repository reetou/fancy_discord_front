import React from 'react'
import styled from 'styled-components'

const Container = styled.button`
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  font-weight: bold;
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
