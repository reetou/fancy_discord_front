import * as React from 'react'
import { App } from '../interfaces'
import styled from "styled-components";
import AppItem from "./AppItem";

type Props = {
  items: App[]
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

const AppsList = ({ items }: Props) => (
  <Container>
    {items.map((item) => (
      <AppItem key={item.id} data={item} />
    ))}
  </Container>
)

export default AppsList
