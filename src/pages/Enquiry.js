import React, { useState } from 'react'
import GreenTick from '../assets/greentick.png'
import '../styles/Enquiry.css'

function Enquiry() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleEnquirySubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", { firstName, lastName, phone, email, message })
    setIsSubmitted(true)
  }

  return (
    <div className="enquiry">
      {isSubmitted ? (
        <div className="submittedMsg">
          <h2>Thank you!</h2>
          <h3>Your enquiry has been submitted.</h3>
          <img src={GreenTick}/>
        </div>
      ) : 
      (
        <div>
          <h1>Make an Enquiry</h1>
          <form onSubmit={handleEnquirySubmit}>
            <div className="formItem">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required/>
            </div>
            <div className="formItem">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required/>
            </div>
            <div className="formItem">
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}/>
            </div>
            <div className="formItem">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required/>
            </div>
            <div className="formItem">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required/>
            </div>
            <button type="submit" className="submitBtn">Submit</button>
          </form>
        </div>
      )}
    </div>
  )
}

export default Enquiry