import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <>
    <Link to='/'>Home</Link>
    <Link to='/login'>Login</Link>
 <Link to='/register'>Register</Link>
 <Link to='/empoloyees'>Empoloyees</Link>   
    </>
  )
}

export  {Navbar}