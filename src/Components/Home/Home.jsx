import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div>
      <h1>Home</h1>
    </div>
    <Link to='/Register'>Register</Link>
    </>
  )
}

export default Home
