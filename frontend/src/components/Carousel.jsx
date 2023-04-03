import React from 'react'
import '../styles/Carousel.css'

export default function Carousel() {
  return (
    <div className='mt-5' style={{marginBottom:'5rem'}}>
    <div style={{ position: 'relative' }}>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: 'contain', height: '500px' }}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://source.unsplash.com/random/300×300?mercedes" className="d-block w-100" style={{ filter: 'brightness(60%)', height: '500px', objectFit: 'cover' }} alt="..." />
            <div className="carousel-caption d-none d-md-block " style={{  marginLeft:"11rem", marginTop:"10rem", position: 'absolute', top: 0, left: 0 }}>
              <h2 className='text-light'>Looking for a hassle-free parking experience in India?</h2>
              <h5 className='my-4'>Parking.com is the best way to park in INDIA. With our fast and easy-to-use app, you can quickly find and reserve parking spots in any city. Get real-time information and directions, pay easily, and even save money with discounts. Try Parking.com today and make your parking experience easier and stress-free!</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/300×300?buggati" className="d-block w-100" style={{ filter: 'brightness(60%)', height: '500px', objectFit: 'cover' }} alt="..." />
            <div className="carousel-caption d-none d-md-block " style={{marginLeft:"11rem", marginTop:"10rem",  position: 'absolute', top: 0, left: 0 }}>
            <h2>Looking for a hassle-free parking experience in India?</h2>
              <h5 className='my-4'>Parking.com is the best way to park in INDIA. With our fast and easy-to-use app, you can quickly find and reserve parking spots in any city. Get real-time information and directions, pay easily, and even save money with discounts. Try Parking.com today and make your parking experience easier and stress-free!  can you imporve this paragraph</h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src="https://source.unsplash.com/random/300×300?lamborghini" className="d-block w-100" style={{ filter: 'brightness(60%)', height: '500px', objectFit: 'cover' }} alt="..." />
            <div className="carousel-caption d-none d-md-block " style={{marginLeft:"11rem", marginTop:"10rem",position: 'absolute', top: 0, left: 0 }}>
            <h2>Looking for a hassle-free parking experience in India?</h2>
              <h5 className='my-4'>Parking.com is the best way to park in INDIA. With our fast and easy-to-use app, you can quickly find and reserve parking spots in any city. Get real-time information and directions, pay easily, and even save money with discounts. Try Parking.com today and make your parking experience easier and stress-free!  can you imporve this paragraph</h5>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </div>
  )
}
