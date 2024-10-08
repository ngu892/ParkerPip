import React, { useState } from 'react'

function AddPropertyForm({ onAddProperty }) {

  const [formData, setFormData] = useState({
    image: "",
    address: "",
    bedrooms: "",
    bathrooms: "",
    garage: "",
    price: "",
  })

  const [imagePreview, setImagePreview] = useState('')

  const handleChange = (e) => {
    const {name, value, type, checked} = e.target
    if (name === 'image'){
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImagePreview(reader.result)
                setFormData({...formData, image: reader.result})
            }
            reader.readAsDataURL(file)
        }
    }
    else {
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const propertyWithData = {
        ...formData,
        id: Date.now(),
        isActive: true,
    }
    onAddProperty(propertyWithData)
    setFormData({
        image: "",
        address: "",
        bedrooms: "",
        bathrooms: "",
        garage: "",
        price: "",
    })
    setImagePreview('')
  }

  return (
    <form onSubmit={handleSubmit} className="addPropertyForm">
      <input type="file" name="image" onChange={handleChange} accept="image/*" required/>
        {imagePreview && <img src={imagePreview} alt="Image Preview" 
            style={{width:'100px',height:'auto',marginBottom:'10px'}}/>}

      <input type="text" name="address" value={formData.address} 
        onChange={handleChange} placeholder="Address" required/>
      <input type="number" name="bedrooms" value={formData.bedrooms} 
        onChange={handleChange} placeholder="Bedrooms" required/>
      <input type="number" name="bathrooms" value={formData.bathrooms} 
        onChange={handleChange} placeholder="Bathrooms" required/>
      <input type="number" name="garage" value={formData.garage} 
        onChange={handleChange} placeholder="Garage" required/>
      <input type="number" name="price" value={formData.price} 
        onChange={handleChange} placeholder="Price" required/>
      <button type="submit">List Property</button>
    </form>
  )
}

export default AddPropertyForm