import React, { useState } from 'react';
import '../styles/BookingSpot.css'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';

const BookingForm = () => {
  const [name, setName] = useState('');
  const [licensePlate, setLicensePlate] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation on form inputs
    if (name.trim() === '') {
      setErrorMessage('Please enter your name');
      return;
    }

    if (licensePlate.trim() === '') {
      setErrorMessage('Please enter your license plate number');
      return;
    }

    if (startDate === '') {
      setErrorMessage('Please select a start date');
      return;
    }

    if (endDate === '') {
      setErrorMessage('Please select an end date');
      return;
    }

    // If form inputs are valid, submit the form
    const bookingDetails = {
      name,
      licensePlate,
      startDate,
      endDate,
    };

    console.log('Booking details:', bookingDetails);

    // Reset form inputs and error message
    setName('');
    setLicensePlate('');
    setStartDate('');
    setEndDate('');
    setErrorMessage('');
  };

  return (
    <div style={{backgroundColor: "rgb(202, 230, 165)", backgroundImage: "linear-gradient(135deg, rgb(79, 126, 72), rgb(202, 230, 165) 75%)"}}>
        <NavBar/>
    <form onSubmit={handleSubmit} >
      <div className='m-3'>
        <h1 className='mt-4 mb-4 pt-3 pb-3'>Book Spot</h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="licensePlate">License Plate Number:</label>
        <input
          type="text"
          id="licensePlate"
          value={licensePlate}
          onChange={(e) => setLicensePlate(e.target.value)}
        />
      </div>
      <div className='m-3'>
        <label htmlFor="startDate" className='mx-2'>Start Date: </label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="endDate" className='mx-2'>End Date: </label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      <Link type="submit" class="btn btn-outline-dark my-5" to="/payment">Book Spot</Link>
    </form>
    <Footer/>
    </div>
  );
};

export default BookingForm;
