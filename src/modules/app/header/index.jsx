import React from 'react'
import styled from 'emotion/react'
import { Link } from 'react-router-dom'

import * as r from '../constants/routes'

const Header = styled('header')`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const NavItem = styled(Link)`
  padding-left: 20px;
  color: #000;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const H2 = styled('h2')`
  display: inline-block;
`

const links = [
  { href: '/app', label: 'main' },
  { href: r.todoList, label: 'todos' },
  { href: '/app/dashboard', label: 'dashboard' }
]

export default () => (
  <Header>
    <H2>header</H2>
    <nav>
      {
        links.map(({ href, label }) => (
          <NavItem key={href} to={href}>{label}</NavItem>
        ))
      }
    </nav>
  </Header>
)