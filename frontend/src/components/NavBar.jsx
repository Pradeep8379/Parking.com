import React from 'react';
import '../styles/NavStyle.css';
import '../App.css';
import { Link, useNavigate } from 'react-router-dom';
let isLoggedIn = window.localStorage.getItem('user')





const NavBar = () => {
  const navigate = useNavigate();
  const logout = () => {
    window.localStorage.clear();
    navigate("/");
  }
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary "
        style={{
          backgroundColor: 'rgb(202, 230, 165)',
          backgroundImage: 'linear-gradient(135deg, rgb(79, 126, 72), rgb(202, 230, 165) 75%)',
        }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand fs-1 fw-bolder" to="/">
            Parking.com
          </Link>
          <div className=" ">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <Link type="button" className="btn" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link type="button" className="btn" to="/about">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link type="button" className="btn" to="/price">
                    Price
                  </Link>
                </li>
                {!isLoggedIn ? (
                  <>
                    <li className="nav-item">
                      <Link type="button" className="btn" to="/login">
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link type="button" className="btn" to="/register">
                        SignUp
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link type="button" className="btn" to="/profile">
                        Profile
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link type="button"
                        onClick={logout} className="btn" to="/">
                        Logout
                      </Link>
                    </li>
                  </>
                )}
                <li className="nav-item">
                  <Link type="button" className="btn" to="/parking">
                    Book Parking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
