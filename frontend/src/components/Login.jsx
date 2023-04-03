import React, { useState } from 'react';
import '../styles/Login.css';
import Footer from './Footer';
import NavBar from './NavBar';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      // console.log('hiiiiiiiiiiiiiiiiiiiiiiiiii');
      let user=await axios.post("http://localhost:4000/login", {
        email,
        password,
      });
      window.localStorage.setItem("user", user.data.status);
       navigate('/');
       
      // console.log(user);
    } catch (error) {
      console.error(error);
    }
    // console.log(`Email: ${email}, Password: ${password}`);
  }

  return (
    <div className=''  style={{backgroundColor: "rgb(202, 230, 165)", backgroundImage: "linear-gradient(135deg, rgb(79, 126, 72), rgb(202, 230, 165) 75%)"}}>
        <NavBar/>
    <div className="login-container" >
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-outline-dark">Login</button>
        <Link className='mt-2' to={'/register'}>New user</Link>
      </form>
    </div>
    <Footer/>
    </div>
  );
};



export default Login;
