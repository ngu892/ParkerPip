import React from 'react'
import { PropertyList } from '../assets/PropertyList'
import PropertyItem from '../components/PropertyItem'
import '../styles/Listings.css'

function Listings() {
  return (
    <div className="listings">
        <h1 className="listingsTitle">Available Properties</h1>
        <div className="propertyList">
            {PropertyList.map((propertyItem, key) => {
                return (
                  <PropertyItem 
                  image={propertyItem.image} 
                  address={propertyItem.address} 
                  bedrooms={propertyItem.bedrooms} 
                  bathrooms={propertyItem.bathrooms} 
                  garage={propertyItem.garage} 
                  price={propertyItem.price}
                  showEnquireBtn={true}/>
                )
            })}
        </div>
    </div>
  )
}

export default Listings