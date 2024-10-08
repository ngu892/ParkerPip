import React from 'react'
import { Link } from 'react-router-dom'
import ListingsIcon from '../assets/listingsicon.jpg'
import EnquiriesIcon from '../assets/enquiriesicon.jpg'
import '../styles/BuildingOwner.css'

function BuildingOwner() {
  return (
    <div className="buildingowner">
      <div className="welcomeMsg">
        <h2>Welcome Back, [name]!</h2>
      </div>
      <div className="manageContainer">
        <div className="manageItem">
          <img src={ListingsIcon} className="manageImage"/>
          <Link to="/manage-listings">
            <button className="manageBtn"> Manage Listings </button>
          </Link>
        </div>
        <div className="manageItem">
          <img src={EnquiriesIcon} className="manageImage"/>
          <Link to="/manage-enquiries">
            <button className="manageBtn"> Manage Enquiries </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BuildingOwner