import React, { useState } from "react";
import "../styles/Signup.css";
import Footer from "./Footer";
import NavBar from "./NavBar";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);

  const navigate = useNavigate();
  
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Send OTP to email and phone number
    // Here's some sample code to generate an OTP
    try {
      await axios.post("http://localhost:4000/signUp", {
        firstName, lastName, email, password, confirmPassword, phone
      });
      alert("Registration Completed! Now login.");
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
    const otp = Math.floor(100000 + Math.random() * 900000);
    setOtp(otp);
    setIsOtpSent(true);
  };

  const handleOtpChange = (event) => {
    setOtp(event.target.value);
  };

  const handleVerifyOtp = () => {
    // Verify OTP
    console.log(`OTP: ${otp}`);
  };

  return (
    <div
      className=""
      style={{
        backgroundColor: "rgb(202, 230, 165)",
        backgroundImage:
          "linear-gradient(135deg, rgb(79, 126, 72), rgb(202, 230, 165) 75%)",
      }}
    >
      <NavBar />
      <h2 className="text-center">Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group-1">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            className="form-control-1"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </div>
        <div className="form-group-2">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            className="form-control-2"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </div>
        <div className="form-group-3">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control-3"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group-4">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control-4"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="form-group-5">
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            className="form-control-5"
            id="confirmPassword"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        <div className="form-group-6">
          <label htmlFor="phone ">Phone Number:</label>
          <input
            type="tel"
            className="form-control-6"
            id="phone"
            value={phone}
            onChange={handlePhoneNumberChange}
            required
          />
        </div>
        <button type="submit" className="button-class-2 btn btn-outline-dark">
          Submit
        </button>
        <Link className='mt-2' to={'/login'}>Already a user</Link>
      </form>
      {isOtpSent && (
        <div>
          <h2>Verify OTP</h2>
          <p>
            An OTP has been sent to your email and phone number.
          </p>
          <form>
            <div className="form-group-7">
              <label htmlFor="otp">OTP:</label>
              <input
                type="number"
                className="form-control-7"
                id="otp"
                value={otp}
                onChange={handleOtpChange}
                required
              />
            </div>
            <button
              type="button"
              className=" button-class-3 btn btn-outline-dark"
              onClick={handleVerifyOtp}
            >
              Verify OTP
            </button>
          </form>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Signup;
