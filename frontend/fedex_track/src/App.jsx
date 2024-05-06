import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import Orders from './components/Orders'


function App() {


  return (
    <>
      <Navbar />
      <Orders />
    </>
  )
}

export default App
