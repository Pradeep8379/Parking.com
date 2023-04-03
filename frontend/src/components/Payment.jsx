import React, { useState } from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle payment submission
  }

  return (
    <div className='' style={{backgroundColor: "rgb(202, 230, 165)", backgroundImage: "linear-gradient(135deg, rgb(79, 126, 72), rgb(202, 230, 165) 75%)"}}>
        <NavBar/>
        <h2 className='text-center mt-5 pt-3 text-dark '>Payment Page</h2>
    <form  className='mt-5' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="cardNumber" className=''>Card Number</label>
        <input
          type="text"
          id="cardNumber"
          className='mb-2'
          value={cardNumber}
          onChange={(event) => setCardNumber(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="cardName" className=''>Name on Card</label>
        <input
          type="text"
          id="cardName"
          className='mb-2'
          value={cardName}
          onChange={(event) => setCardName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="expiryDate">Expiry Date</label>
        <input
          type="text"
          id="expiryDate"
          className='mb-2'
          value={expiryDate}
          onChange={(event) => setExpiryDate(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="cvv">CVV</label>
        <input
          type="text"
          id="cvv"
          className='mb-2'
          value={cvv}
          onChange={(event) => setCvv(event.target.value)}
        />
      </div>
      <button type="submit" class="btn btn-outline-dark">Pay</button>
    </form>
    <Footer/>
    </div>
  );
};

export default PaymentForm;
