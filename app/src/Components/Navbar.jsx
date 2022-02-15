import React, { Component, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext'
const Navbar = () => {

  let { user, logoutUser } = useContext(AuthContext)

  return <div>
    <nav id="navbar" className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark " >

      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src="https://www.svgrepo.com/show/131627/birthday-cake.svg" alt="" width="30" height="24" className="d-inline-block align-text-top" />

        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link " aria-current="page" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link id='addbdaynav' className="nav-link" to="/addbirthday">Add bithday</Link>
            </li>

          </ul>
          {!user ? <Link to='/login'><button className="btn btn-outline-light text-light" type="button">Login</button></Link> : <button onClick={logoutUser} className="btn btn-outline-light text-light" type="button">Logout</button>}
          {/* <Link to='/login'><button className="btn btn-outline-light text-light" type="button">Login</button></Link> */}

        </div>
      </div>
    </nav>

  </div >;

}
export default Navbar
