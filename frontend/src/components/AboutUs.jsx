import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import '../styles/AboutUs.css';

function AboutUs() {
  return (
    <div className=''  style={{backgroundColor: "rgb(202, 230, 165)", backgroundImage: "linear-gradient(135deg, rgb(79, 126, 72), rgb(202, 230, 165) 75%)"}}>
      <NavBar />
      <div className="container my-5 ">
        <h1>About Us</h1>
        <p className='text-dark'>Our parking app was created with the goal of making parking easier and more convenient for everyone. We understand that finding a parking spot can be a frustrating experience, so we created an app that allows you to reserve your spot in advance and avoid the hassle of circling around the block.</p>
        <p className='text-dark'>We believe that everyone should have access to affordable and convenient parking, and our app is designed to make that a reality. With our user-friendly interface, you can easily find and book a parking spot in just a few clicks.</p>
        <h2>Our Team</h2>
        <p className='text-dark'>We are a team of passionate developers who are dedicated to creating innovative solutions for everyday problems. Our team includes experts in user experience design, software engineering, and data analytics.</p>
        <p className='text-dark'>Our goal is to create a seamless and enjoyable parking experience for our users, and we are constantly working to improve our app and add new features.</p>
        <h2>Contact Us</h2>
        <p className='text-dark'>If you have any questions or feedback about our app, we would love to hear from you. You can reach us by email at support@parkingapp.com, or by phone at 555-555-5555.</p>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
