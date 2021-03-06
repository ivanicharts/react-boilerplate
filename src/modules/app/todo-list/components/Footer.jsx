import React from 'react'

import FilterLink from './FilterLink'

const Footer = () => (
  <footer>
    <FilterLink filter='SHOW_ALL'>All</FilterLink>
    <FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>
    <FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>
  </footer>
)

export default Footer