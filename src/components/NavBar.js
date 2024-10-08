import React, { useState } from 'react'
import Logo from '../assets/icon.png'
import { Link } from 'react-router-dom'
import '../styles/NavBar.css'

function NavBar() {

  return (
    <div className="navbar">
      <div className="leftBar">
        <img src={Logo}/>
      </div>
      <div className="rightBar">
        <Link to="/"> Home </Link>
        <Link to="/listings"> Listings </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/BuldingManager">  BuildingManager</Link>

    <div className="starta">
          <button> Starta </button>
          <div className="dropdown">
            <Link to="/Propertyfee"> Propertyfee </Link>
            <Link to="/MaintenanceRepair"> MaintenanceRepair </Link>
            <Link to="/MaintenanceRequest"> MaintenanceRequest </Link>
            <Link to="/Parking"> Parking </Link>
            <Link to="/Renovation"> Renovation </Link>

          </div>
        </div>
    
      <div className="resident">
          <button> Resident </button>
          <div className="dropdown">
            <Link to="/communication"> Communication </Link>
            <Link to="/Feedback"> Feedback </Link>
          </div>
        </div>
        <div className="account">
          <button> Account </button>
          <div className="dropdown">
            <Link to="/login"> Owner or Tenant Login </Link>
            <Link to="/register"> Owner or Tenant Register </Link>
            <Link to="/PropertyLogin"> Property Manager Login </Link>

            <Link to="/PropertyRegister">Property Manager Register</Link>
          </div>
        </div>


      </div>
    </div>
  )
}

export default NavBar
