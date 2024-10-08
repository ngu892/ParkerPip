import React, { useState} from 'react'
import '../styles/LoginRegister.css'

function Login() {

  const [formData, setFormData] = useState({
    userId: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', formData);
  };
  
  return (
    <div className="login-container">
    <h2>Owner or Tenant Login</h2>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="userId">ID:</label>
        <input
          type="text"
          id="userId"
          name="userId"
          value={formData.userId}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="button">Login</button>
    </form>
  </div>
);
}

export default Login