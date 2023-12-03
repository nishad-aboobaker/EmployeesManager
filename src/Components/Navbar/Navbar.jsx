import React, { Component } from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navigationWrapper">
  <div className="logoWrapper">
    <span className="stylish">Employee</span>
    <span className="logo">Manager</span>
  </div>
  <ul className="navigation">
    <li className="parent"><Link className="link" to={'/'}>HOME</Link></li>
    <li className="parent"><Link className="link" to={'/Register'}>REGISTER</Link></li>
  </ul>
</nav>
    )
  }
}
