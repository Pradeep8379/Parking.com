import React from 'react'
import BookParking from './BookParking'
import Carousel from './Carousel'
import Footer from './Footer'
import NavBar from './NavBar'
import Services from './Services'
import Review from './Review'

function Home() {
  return (
    <div className=''  style={{backgroundColor: "rgb(202, 230, 165)", backgroundImage: "linear-gradient(135deg, rgb(79, 126, 72), rgb(202, 230, 165) 75%)"}}>
        <NavBar/>
        <Carousel/>
        <BookParking showHeader={false} showFooter={false} />
        <Services/>
        <Review/>
        <Footer />
    </div>
  )
}

export default Home