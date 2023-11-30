import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Register from './Components/Register/Register'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/Register' Component={Register}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
