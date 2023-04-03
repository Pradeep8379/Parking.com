import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
function BookParking({showHeader=true,showFooter=true}) {
  return (
    <div className=''>
    <div className=''  style={{backgroundColor: "rgb(202, 230, 165)", backgroundImage: "linear-gradient(135deg, rgb(79, 126, 72), rgb(202, 230, 165) 75%)" }}>
        {showHeader&&<NavBar/>}
        <div className='card bg-dark my-5' style={{height: "30rem"}} >
    <div className="card-img card  d-flex flex-row " style={{width: "23rem",marginTop:"3rem",marginLeft:"10rem" }}>
  <img src="https://source.unsplash.com/random/300×300?parking" className="card-img-top" style={{ filter: 'brightness(60%)', objectFit: 'cover' }} alt="..."/>
  <div className='my-5' style={{marginLeft:"7rem"}}>
  <h2 className='text-light  fw-bolder'> Parking Reservation </h2>
    <p className='text-light  fw-bold'> Allows users to reserve a parking spot in advance.</p>
    <Link type="button" className="btn btn-outline-warning my-5" to="/bookspot">Book Spot</Link>
    </div>
</div>
</div>
{showFooter&&<Footer/>}
    </div>
    </div>
    
  )
}

export default BookParking