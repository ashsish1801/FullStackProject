import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import OurProjectComponent from './components/OurProjectComponent'
import Footer from '../src/components/Footer'
import Navbar from './components/Navbar'
import Banner from './components/Banner'

function App() {

  return (
    <>
      <Navbar/>
      <OurProjectComponent/>
      <Footer/>
    </>
  )
}

export default App
