import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Register from './Components/Register/Register'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Components/Home/Home'
import Details from './Components/Details/Details'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/Register' Component={Register}/>
        <Route path='/Details' Component={Details}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
