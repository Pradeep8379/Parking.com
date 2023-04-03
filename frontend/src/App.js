import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BookParking from './components/BookParking';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import AboutUs from './components/AboutUs';
import Price from './components/Price';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import BookSpot from './components/BookSpot';
import Payment from './components/Payment';


function App() {
  const user = {
    firstName: 'John',
    lastName: 'doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
    photo: 'https://example.com/photo.jpg'
  };
  return (
    <>
     
        <Router>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/parking' element={<BookParking />}></Route>
            <Route path='/about' element={<AboutUs />}></Route>
            <Route path='/price' element={<Price />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Signup />}></Route>
            <Route path='/profile' element={<Profile user={user} />}></Route>
            <Route path='/bookspot' element={<BookSpot />}></Route>
            <Route path='/payment' element={<Payment />}></Route>

          </Routes>
        </Router>
      
    </>
  );
}

export default App;
