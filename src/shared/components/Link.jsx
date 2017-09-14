import React from 'react'
import PropTypes from 'prop-types'

const Link = ({ active, children, onClick }) => (
  active ?
  <span>{ children }</span> :
  <a 
  onClick={onClick} 
  href='#'>
    { children }
  </a>
)

export default Link