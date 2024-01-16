import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {

  return (
    <>
 <SpeedInsights/>
<Page1/>

    
    </>
  )
}

export default App
