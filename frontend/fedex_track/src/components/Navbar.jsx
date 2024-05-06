import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='bg-gray-800 text-white py-4 px-6'>
        <Link to="/" className='text-2x1 font-senibold'>YesKart</Link>
        
    </header>
  )
}

export default Navbar
