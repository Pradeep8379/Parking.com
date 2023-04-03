import React, { useState } from 'react';
import '../styles/Profile.css'
import Footer from './Footer';
import NavBar from './NavBar';

const Profile = ({ user }) => {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phone);
  const [isEditing, setIsEditing] = useState(false);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save the user's profile information
  };

  return (
    <div className='' style={{backgroundColor: "rgb(202, 230, 165)", backgroundImage: "linear-gradient(135deg, rgb(79, 126, 72), rgb(202, 230, 165) 75%)"}}>
    <NavBar/>
    <div className="profile-container" >
      <div className="profile-header bg-dark" >
        <h2 className='text-light'>Profile</h2>
        {!isEditing && (
          <button type="button"  onClick={handleEdit}>Edit</button>
        )}
        {isEditing && (
          <button type="button"  onClick={handleSave}>Save</button>
        )}
      </div>
      <div className="profile-details">
        <div className="profile-photo">
          <img src="https://via.placeholder.com/150" alt="Profile" />
        </div>
        <div className="profile-form">
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            {!isEditing && (
              <p>{firstName}</p>
            )}
            {isEditing && (
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            )}
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            {!isEditing && (
              <p>{lastName}</p>
            )}
            {isEditing && (
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={handleLastNameChange}
              />
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            {!isEditing && (
              <p>{email}</p>
            )}
            {isEditing && (
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
              />
            )}
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber ">Phone Number:</label>
            {!isEditing && (
              <p>{phoneNumber}</p>
            )}
            {isEditing && (
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={handlePhoneNumberChange}
              />
            )}
          </div>
        </div>
      </div>
    </div>
      <Footer/>
    </div>
  );
};

export default Profile;