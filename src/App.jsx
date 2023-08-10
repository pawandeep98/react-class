import { useState } from 'react'
import HeaderComponent from './HeaderComponent.jsx'
import Search from './Search.jsx'
import Greenband from './Greenband.jsx'
import Card from './Card.jsx'

import './App.css'

function App() {
  

  return (
    <>
   <HeaderComponent/>
    <Greenband/>
    <Search/>
    <Card/>
    </>
  )
}

export default App
