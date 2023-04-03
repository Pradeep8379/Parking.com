import React from 'react'
import '../styles/Service.css'

function Services() {
  return (
    <div className='d-flex flex-column align-items-center' style={{marginBottom:'8rem',marginTop:"5rem"}}>
      <h2 className='text-center' style={{marginBottom:"5rem"}}>Our Services</h2>
      <div className='d-flex'>
        <div className='card card-1' style={{width: '18rem', marginRight: '20px'}}>
          <img src='https://source.unsplash.com/random/300x300?online-parking' className='card-img-top' alt='...' style={{height: '200px'}}/>
          <div className='card-body '  style={{backgroundColor: "rgb(202, 230, 165)", backgroundImage: "linear-gradient(135deg, rgb(79, 126, 72), rgb(202, 230, 165) 75%)"}}>
            <h3 className='fs-4'>Online Booking</h3>
            <p className='card-text text-dark '>Users can reserve parking spots in advance, which can be especially useful in busy areas or during events.</p>
          </div>
        </div>
        <div className='card card-1' style={{width: '18rem', marginRight: '20px'}}>
          <img src='https://source.unsplash.com/random/300x300?find-parking' className='card-img-top' alt='...' style={{height: '200px'}}/>
          <div className='card-body '  style={{backgroundColor: "rgb(202, 230, 165)", backgroundImage: "linear-gradient(135deg, rgb(79, 126, 72), rgb(202, 230, 165) 75%)"}}>
            <h3 className='fs-4'>Find parking spots</h3>
            <p className='card-text text-dark '>The app can help users find available parking spots in a specific location, including street parking and parking garages.</p>
          </div>
        </div>
        <div className='card card-1' style={{width: '18rem', marginRight: '20px'}}>
          <img src='https://source.unsplash.com/random/300x300?extend-time' className='card-img-top' alt='...' style={{height: '200px'}}/>
          <div className='card-body '  style={{backgroundColor: "rgb(202, 230, 165)", backgroundImage: "linear-gradient(135deg, rgb(79, 126, 72), rgb(202, 230, 165) 75%)"}}>
            <h3 className='fs-4'>Extend parking time</h3>
            <p className='card-text text-dark'>Users can extend their parking time remotely through the app, which can be especially useful if they are running late or need to stay longer than expected.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services