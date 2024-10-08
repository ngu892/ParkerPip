import React, {useState} from 'react'
import '../styles/LoginRegister.css'
import GreenTick from '../assets/greentick.png'

function Register() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phnumber, setPhnumber] = useState('');
  const [isSubmitted, setSubmitted] = useState(false);

  const handleIdChange = (event) => {
    setId(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlEmailChange = (event) => {
    setEmail(event.target.value);
  }
  
  const handlePhonenumberChange = (event) => {
    setPhnumber(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', { id, password, email, phnumber });
    setSubmitted(true)
  }

  return (
    <div className="register">
      {isSubmitted ? (
        <div className="submittedMsg">
          <h2>Thank you!</h2>
          <h3>Your registration has been submitted.</h3>
          <img src={GreenTick}/>
        </div>
      ) :
      (
        <div className='login-container'>
          <h2>Owner or Tenant Register Page</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="id">ID:</label>
              <input
                type="text"
                id="id"
                value={id}
                onChange={handleIdChange}
                required/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
                required/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handlEmailChange}
                required/>
            </div>
            <div className="form-group">
              <label htmlFor="phnumber">Phone Number:</label>
              <input
                type="int"
                id="phnumber"
                value={phnumber}
                onChange={handlePhonenumberChange}
                required/>
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      )}
    </div>
  )
}
export default Register