import * as React from 'react'
import { App } from '../interfaces'
import styled from "styled-components";
import AppItem from "./AppItem";
import Button from "./Button";
import Link from 'next/link'

type Props = {
  items: App[]
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`

const CreateAppContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const AppsList = ({ items }: Props) => (
  <Container>
    <CreateAppContainer>
      <Link href="/apps/create">
        <Button text="Create App" onClick={() => {}} />
      </Link>
    </CreateAppContainer>
    {items.map((item) => (
      <AppItem key={item.id} data={item} />
    ))}
  </Container>
)

export default AppsList
