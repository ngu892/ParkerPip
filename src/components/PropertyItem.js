import React from 'react'
import { useNavigate } from 'react-router-dom'

function PropertyItem({ image, address, bedrooms, bathrooms, garage, price, showEnquireBtn, showEditDeleteBtns, showRemoveBtn, showCompleteBtn, completeClick, deleteClick, editClick}) {
  
  const navigate = useNavigate()
  
  const enquiryBtnClick = () => {
    navigate('/enquiry')
  }

  return (
    <div className="propertyItem">
        <div className="propertyImage" style={{ backgroundImage: `url(${image})` }}></div>
        <div className="propertyDetails">
          <h3> {`$${price.toLocaleString()}`} </h3>
          <p> {address} </p>
          <p>Bedroom(s): {bedrooms}</p>
          <p>Bathroom(s): {bathrooms}</p>
          <p>Garage(s): {garage}</p>

          <div className="buttonContainer">
            {/* conditional statements */}

            {showEnquireBtn && (
              <button className="enquireBtn" onClick={enquiryBtnClick}>Enquire Now!</button>
            )}
            {showEditDeleteBtns && (
              <>
                <button className="editBtn" onClick={editClick}>Edit</button>
                <button className="deleteBtn" onClick={deleteClick}>Delete</button>
              </>
            )}
            {showRemoveBtn && (
              <button className="removeBtn" onClick={deleteClick}>Remove</button>
            )}
            {showCompleteBtn && (
              <button className="completeBtn" onClick={completeClick}>Mark as Complete</button>
            )}
          </div>
        </div>
    </div>
  )
}

export default PropertyItem