import React, { useState, useEffect } from 'react'
import '../styles/EditProperty.css'

const EditProperty = ({ isOpen, close, property, save }) => {

  const [updatedProperties, setUpdatedProperties] = useState ({
    address: "",
    bedrooms: "",
    bathrooms: "",
    garage: "",
    price: "",
  })

  useEffect(() => {
    if (property) {
      setUpdatedProperties ({
        address: property.address || "",
        bedrooms: property.bedrooms || "",
        bathrooms: property.bathrooms || "",
        garage: property.garage || "",
        price: property.price || "",
      })
    }
  }, [property])

  if (!isOpen) {
    return null
  }

  const handleEditProperty = (e) => {
    const { name, value } = e.target
    setUpdatedProperties((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = () => {
    save(updatedProperties)
    close()
  }

  return (
    <div className="overlay">
      <div className="content">
        <h2>Edit Property</h2>
        <label>Address:
          <input type="text" name="address" value={updatedProperties.address} onChange={handleEditProperty}/>
        </label>
        <label>Bedrooms:
          <input type="number" name="bedrooms" value={updatedProperties.bedrooms} onChange={handleEditProperty}/>
        </label>
        <label>Bathrooms:
          <input type="number" name="bathrooms" value={updatedProperties.bathrooms} onChange={handleEditProperty}/>
        </label>
        <label>Garage:
          <input type="number" name="garage" value={updatedProperties.garage} onChange={handleEditProperty}/>
        </label>
        <label>Price:
          <input type="number" name="price" value={updatedProperties.price} onChange={handleEditProperty}/>
        </label>

        <div className="actions">
            <button onClick={handleSubmit}>Save</button>
            <button onClick={close}>Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default EditProperty