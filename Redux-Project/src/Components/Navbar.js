import React from 'react'
import { Link } from "react-router-dom";
import "../Styles/Navbar.css"
const Navbar = () => {
  return (
 <nav>
    <h1>User Data</h1>
    <ul>
    <Link to="/">Home</Link>

    <Link to="/user">Users</Link>

    <Link to="/contact">Contacts</Link>
    </ul>
 </nav>
  )
}

export default Navbar