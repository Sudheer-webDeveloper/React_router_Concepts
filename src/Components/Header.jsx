import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
   <header>
    <NavLink to="." style={{marginRight:"10px", marginLeft:"10px"}}>Home</NavLink>
    <NavLink to="about"style={{marginRight:"10px", marginLeft:"10px"}}>About</NavLink>
    <NavLink to="container"style={{marginRight:"10px", marginLeft:"10px"}}>Container</NavLink>
    <NavLink to="host"style={{marginRight:"10px", marginLeft:"10px"}}>Host</NavLink>
      <br />
      <br />
      <br />
   </header>
  )
}

export default Header
