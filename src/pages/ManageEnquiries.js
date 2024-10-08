import React, { useState } from 'react'
import '../styles/ManageEnquiries.css'

function ManageEnquiries() {

  return (
    <div className="manageEnquiries">
      <h1 className="enquiriesTitle">Enquiries</h1>
      <div className="enquiryContainer">
          <p>No current enquiries.</p>
      </div>
    </div>
  );
}

export default ManageEnquiries;