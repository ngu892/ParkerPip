import React, { useState } from 'react'
import { PropertyList } from '../assets/PropertyList'
import PropertyItem from '../components/PropertyItem'
import AddPropertyForm from '../components/AddPropertyForm'
import EditProperty from '../components/EditProperty'
import '../styles/ManageListings.css'

function ManageListings() {

  const [toggleState, setToggleState] = useState(1)
  const [properties, setProperties] = useState(PropertyList)
  const [showForm, setShowForm] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [editingProperty, setEditingProperty] = useState(null)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  const activeProperties = properties.filter(item => item.isActive)
  const pastProperties = properties.filter(item => !item.isActive)

  const handleAddProperty = (newProperty) => {
    const propertyWithId = {
      ...newProperty,
      id: properties.length + 1, //assign id
      isActive: true,
    }
    setProperties([...properties, propertyWithId])
    setShowForm(false) //close form after submit
  }

  const handleEditProperty = (updatedProperty) => {
    const updatedProperties = properties.map((property) =>
      property.id === updatedProperty.id ? updatedProperty : property
    )
    setProperties(updatedProperties)
  }

  const openEdit = (property) => {
    if (property) {
      setEditingProperty(property)
      setIsEditOpen(true)
    }
  }

  const closeEdit = () => {
    setIsEditOpen(false)
    setEditingProperty(null)
  }

  const handleDeleteProperty = (propertyId) => {
    const deletedProperties = properties.filter(property => property.id !== propertyId)
    setProperties(deletedProperties)
  }

  const handleMarkAsComplete = (propertyId) => {
    const completedProperties = properties.map(property => 
      property.id === propertyId ? { ...property, isActive: false } : property
    )
    setProperties(completedProperties)
  }

  return (
    <div className="manageListings">
      <h1 className="listingsTitle">My Properties</h1>

      <button className="addPropertyBtn" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Cancel" : "+ List Property"}
      </button>
      {showForm && <AddPropertyForm onAddProperty={handleAddProperty}/>}

      <div className="manageListingsContainer">

        <div className="propertyTabContainer">
          <div className={toggleState === 1 ? "activeInactiveTabs activeTab" : "activeInactiveTabs"} 
            onClick={() => toggleTab(1)}>Active Listings</div>
          <div className={toggleState === 2 ? "activeInactiveTabs activeTab" : "activeInactiveTabs"} 
            onClick={() => toggleTab(2)}>Past Listings</div>
        </div>

        <div className="propertyContentTabs">
          <div className={toggleState === 1 ? "propertyContent activeContent" : "propertyContent"}>
            {activeProperties.length === 0 ? (
              <div className="noProperties">No Properties Found.</div>
            ) : (
              activeProperties.map((propertyItem, key) => (
                <PropertyItem 
                  key={key}
                  image={propertyItem.image} 
                  address={propertyItem.address} 
                  bedrooms={propertyItem.bedrooms} 
                  bathrooms={propertyItem.bathrooms} 
                  garage={propertyItem.garage} 
                  price={propertyItem.price}
                  showEditDeleteBtns={true}
                  showCompleteBtn={true}
                  editClick={() => openEdit(propertyItem)}
                  deleteClick={() => handleDeleteProperty(propertyItem.id)}
                  completeClick={() => handleMarkAsComplete(propertyItem.id)}/>
              ))
            )}
          </div>
          <div className={toggleState === 2 ? "propertyContent activeContent" : "propertyContent"}>
            {pastProperties.length === 0 ? (
              <div className="noProperties">No Properties Found.</div>
            ) : (
              pastProperties.map((propertyItem, key) => (
                <PropertyItem 
                  key={key}
                  image={propertyItem.image} 
                  address={propertyItem.address} 
                  bedrooms={propertyItem.bedrooms} 
                  bathrooms={propertyItem.bathrooms} 
                  garage={propertyItem.garage} 
                  price={propertyItem.price}
                  showRemoveBtn={true}
                  deleteClick={() => handleDeleteProperty(propertyItem.id)}/>
              ))
            )}
          </div>
        </div>
      </div>

      <EditProperty
        isOpen={isEditOpen}
        close={closeEdit}
        property={editingProperty}
        save={handleEditProperty}
      />
    </div>
  )
}

export default ManageListings