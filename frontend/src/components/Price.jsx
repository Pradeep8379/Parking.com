import React from "react";
import "../styles/Price.css";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { useNavigate} from "react-router-dom";
import axios from 'axios';
let isLoggedIn = window.localStorage.getItem('user')

const Price = () => {

  const navigate = useNavigate();

  const handleOpenRazorpay = (data) => {
    const options = {
      key: 'rzp_test_uR8CMipdmUVwl6',
      amount: data.amount,
      currency: data.currency,
      name: 'Parking.com',
      order_id:data.id,
      "handler": function (response){
        console.log(response.razorpay_payment_id);
        console.log(response.razorpay_order_id);
        console.log(response.razorpay_signature)
        axios.post("http://localhost:4000/verify",{response: response})
        .then(res => {
          console.log(res, '25');
         
        })
        .catch(err => {
          console.log(err)
        })
        navigate("/");
  

    },

    }
    const rzp = new window.Razorpay(options);
    rzp.open()
  }

  const handlePayment = (amount) => {
    const _data = { amount: amount };
    axios.post("http://localhost:4000/orders", _data)
      .then(res => {
        console.log(res.data, '45');
        handleOpenRazorpay(res.data.data);
      })
      .catch(err => {
        console.log(err)
      })

  }


  return (
    <div className="" style={{ backgroundColor: "rgb(202, 230, 165)", backgroundImage: "linear-gradient(135deg, rgb(79, 126, 72), rgb(202, 230, 165) 75%)" }}>
      <NavBar />
      <h1 className="text-center mt-5">Pricing</h1>
      <div className="price-container" >
        <div className="price-card mt-5 pt-3" style={{ backgroundColor: "rgb(202, 230, 165)", backgroundImage: "linear-gradient(135deg, rgb(79, 126, 72), rgb(202, 230, 165) 75%)" }}>
          <h3>Monthly Subscription</h3>
          <p className="text-dark">₹50/month</p>
          <button onClick={() => handlePayment(50)} className="btn btn-warning my-5" >Subscribe Now</button>
        </div>
        <div className="price-card mt-5 pt-3" style={{ backgroundColor: "rgb(202, 230, 165)", backgroundImage: "linear-gradient(135deg, rgb(79, 126, 72), rgb(202, 230, 165) 75%)" }}>
          <h3>6-Month Subscription</h3>
          <p className="text-dark">₹250/6 months</p>
          <button onClick={() => handlePayment(250)} className="btn btn-warning my-5" >Subscribe Now</button>
        </div>
        <div className="price-card mt-5 pt-3 " style={{ backgroundColor: "rgb(202, 230, 165)", backgroundImage: "linear-gradient(135deg, rgb(79, 126, 72), rgb(202, 230, 165) 75%)" }}>
          <h3>Yearly Subscription</h3>
          <p className="text-dark">₹400/year</p>
          <button onClick={() => handlePayment(400)} className="btn btn-warning my-5" >Subscribe Now</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Price;
