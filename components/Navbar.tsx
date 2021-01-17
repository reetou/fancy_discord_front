import React from 'react'
import styled from "styled-components";
import Link from "next/link";

interface Props {
  authenticated: boolean
}

const Container = styled.nav`
  display: flex;
  align-items: center;
  height: 60px;
  margin: 0.5rem;
  background-color: ${({ theme }) => theme.colors.bg};
`

const NavItem = styled.a`
  color: red;
  text-decoration: none;
  padding: 1rem;
  :visited {
    color: ${({ theme }) => theme.colors.primary};
  }
`

function NavLink({ href, name }) {
  // Must add passHref to Link
  return (
    <Link href={href} passHref>
      <NavItem>{name}</NavItem>
    </Link>
  )
}

export default function Navbar(props: Props) {
  return (
    <Container>
      <NavLink href="/" name="Home" />
      {props.authenticated ? <NavLink href="/apps" name="My apps" /> : null}
      {!props.authenticated ? <NavLink href="/login" name="Sign In" /> : null}
    </Container>
  )
}
