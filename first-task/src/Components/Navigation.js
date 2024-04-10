import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <header className='header'>
      <nav className='menu'>
          <NavLink to="/Information">First task</NavLink>
          <NavLink to="/City">Second task</NavLink>
          <NavLink to="/Book">Third task</NavLink>
      </nav>
    </header>
  )
}
