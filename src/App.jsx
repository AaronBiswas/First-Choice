import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Card from './Components/Card'
import Mens from './Components/Mens/Mens'
function App() {
  

  return (
    <>
     <Navbar/>
     <Mens/>
    </>
  )
}

export default App
