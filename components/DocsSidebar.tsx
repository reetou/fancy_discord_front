import React from 'react'
import styled from "styled-components";
import docsList from "../lib/docsList";

const Container = styled.div`
  display: none;
  flex-direction: column;
  position: fixed;
  width: 20%;
  padding-right: 3%;
  padding-top: 80px;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
  border-right: 2px solid ${({theme}) => theme.colors.primary};
  @media(min-width: 768px) {
    display: flex;
  }
`

const DocItem = styled.a`
  margin-top: 1rem;
  color: ${({theme}) => theme.colors.primary};
  padding: 1rem;
  width: 100%;
  font-weight: bold;
  transition: 0.2s;
  :hover {
    text-decoration: underline;
  }
`

const docs = docsList

export default function DocsSidebar() {
  return (
    <Container>
      {
        docs.map(x => (
          <DocItem href={`/docs/${x.slug}`}>{x.title}</DocItem>
        ))
      }
    </Container>
  )
}
